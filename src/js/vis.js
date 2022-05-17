/**
 * 
 * @returns D3 Sankey SVG
 */
 d3.sankey = function() {
    var sankey = {},
        nodeWidth = 24,
        nodePadding = 8,
        size = [1, 1],
        nodes = [],
        links = [];
  
    sankey.nodeWidth = function(_) {
      if (!arguments.length) return nodeWidth;
      nodeWidth = +_;
      return sankey;
    };
  
    sankey.nodePadding = function(_) {
      if (!arguments.length) return nodePadding;
      nodePadding = +_;
      return sankey;
    };
  
    sankey.nodes = function(_) {
      if (!arguments.length) return nodes;
      nodes = _;
      return sankey;
    };
  
    sankey.links = function(_) {
      if (!arguments.length) return links;
      links = _;
      return sankey;
    };
  
    sankey.size = function(_) {
      if (!arguments.length) return size;
      size = _;
      return sankey;
    };
  
    sankey.layout = function(iterations) {
      computeNodeLinks();
      computeNodeValues();
      computeNodeBreadths();
      computeNodeDepths(iterations);
      computeLinkDepths();
      return sankey;
    };
  
    sankey.relayout = function() {
      computeLinkDepths();
      return sankey;
    };
  
    sankey.link = function() {
      var curvature = .5;
  
      function link(d) {
        var x0 = d.source.x + d.source.dx,
            x1 = d.target.x,
            xi = d3.interpolateNumber(x0, x1),
            x2 = xi(curvature),
            x3 = xi(1 - curvature),
            y0 = d.source.y + d.sy + d.dy / 2,
            y1 = d.target.y + d.ty + d.dy / 2;
        return "M" + x0 + "," + y0
             + "C" + x2 + "," + y0
             + " " + x3 + "," + y1
             + " " + x1 + "," + y1;
      }
  
      link.curvature = function(_) {
        if (!arguments.length) return curvature;
        curvature = +_;
        return link;
      };
  
      return link;
    };
  
    // Populate the sourceLinks and targetLinks for each node.
    // Also, if the source and target are not objects, assume they are indices.
    function computeNodeLinks() {
      nodes.forEach(function(node) {
        node.sourceLinks = [];
        node.targetLinks = [];
      });
      links.forEach(function(link) {
        var source = link.source,
            target = link.target;
        if (typeof source === "number") source = link.source = nodes[link.source];
        if (typeof target === "number") target = link.target = nodes[link.target];
        source.sourceLinks.push(link);
        target.targetLinks.push(link);
      });
    }
  
    // Compute the value (size) of each node by summing the associated links.
    function computeNodeValues() {
      nodes.forEach(function(node) {
        node.value = Math.max(
          d3.sum(node.sourceLinks, value),
          d3.sum(node.targetLinks, value)
        );
      });
    }
  
    // Iteratively assign the breadth (x-position) for each node.
    // Nodes are assigned the maximum breadth of incoming neighbors plus one;
    // nodes with no incoming links are assigned breadth zero, while
    // nodes with no outgoing links are assigned the maximum breadth.
    function computeNodeBreadths() {
      var remainingNodes = nodes,
          nextNodes,
          x = 0;
  
      while (remainingNodes.length) {
        nextNodes = [];
        remainingNodes.forEach(function(node) {
          node.x = x;
          node.dx = nodeWidth;
          node.sourceLinks.forEach(function(link) {
            if (nextNodes.indexOf(link.target) < 0) {
              nextNodes.push(link.target);
            }
          });
        });
        remainingNodes = nextNodes;
        ++x;
      }
  
      //
      moveSinksRight(x);
      scaleNodeBreadths((size[0] - nodeWidth) / (x - 1));
    }
  
    function moveSourcesRight() {
      nodes.forEach(function(node) {
        if (!node.targetLinks.length) {
          node.x = d3.min(node.sourceLinks, function(d) { return d.target.x; }) - 1;
        }
      });
    }
  
    function moveSinksRight(x) {
      nodes.forEach(function(node) {
        if (!node.sourceLinks.length) {
          node.x = x - 1;
        }
      });
    }
  
    function scaleNodeBreadths(kx) {
      nodes.forEach(function(node) {
        node.x *= kx;
      });
    }
  
    function computeNodeDepths(iterations) {
      var nodesByBreadth = d3.nest()
          .key(function(d) { return d.x; })
          .sortKeys(d3.ascending)
          .entries(nodes)
          .map(function(d) { return d.values; });
  
      //
      initializeNodeDepth();
      resolveCollisions();
      for (var alpha = 1; iterations > 0; --iterations) {
        relaxRightToLeft(alpha *= .99);
        resolveCollisions();
        relaxLeftToRight(alpha);
        resolveCollisions();
      }
  
      function initializeNodeDepth() {
        var ky = d3.min(nodesByBreadth, function(nodes) {
          return (size[1] - (nodes.length - 1) * nodePadding) / d3.sum(nodes, value);
        });
  
        nodesByBreadth.forEach(function(nodes) {
          nodes.forEach(function(node, i) {
            node.y = i;
            node.dy = node.value * ky;
          });
        });
  
        links.forEach(function(link) {
          link.dy = link.value * ky;
        });
      }
  
      function relaxLeftToRight(alpha) {
        nodesByBreadth.forEach(function(nodes, breadth) {
          nodes.forEach(function(node) {
            if (node.targetLinks.length) {
              var y = d3.sum(node.targetLinks, weightedSource) / d3.sum(node.targetLinks, value);
              node.y += (y - center(node)) * alpha;
            }
          });
        });
  
        function weightedSource(link) {
          return center(link.source) * link.value;
        }
      }
  
      function relaxRightToLeft(alpha) {
        nodesByBreadth.slice().reverse().forEach(function(nodes) {
          nodes.forEach(function(node) {
            if (node.sourceLinks.length) {
              var y = d3.sum(node.sourceLinks, weightedTarget) / d3.sum(node.sourceLinks, value);
              node.y += (y - center(node)) * alpha;
            }
          });
        });
  
        function weightedTarget(link) {
          return center(link.target) * link.value;
        }
      }
  
      function resolveCollisions() {
        nodesByBreadth.forEach(function(nodes) {
          var node,
              dy,
              y0 = 0,
              n = nodes.length,
              i;
  
          // Push any overlapping nodes down.
          nodes.sort(ascendingDepth);
          for (i = 0; i < n; ++i) {
            node = nodes[i];
            dy = y0 - node.y;
            if (dy > 0) node.y += dy;
            y0 = node.y + node.dy + nodePadding;
          }
  
          // If the bottommost node goes outside the bounds, push it back up.
          dy = y0 - nodePadding - size[1];
          if (dy > 0) {
            y0 = node.y -= dy;
  
            // Push any overlapping nodes back up.
            for (i = n - 2; i >= 0; --i) {
              node = nodes[i];
              dy = node.y + node.dy + nodePadding - y0;
              if (dy > 0) node.y -= dy;
              y0 = node.y;
            }
          }
        });
      }
  
      function ascendingDepth(a, b) {
        return a.y - b.y;
      }
    }
  
    function computeLinkDepths() {
      nodes.forEach(function(node) {
        node.sourceLinks.sort(ascendingTargetDepth);
        node.targetLinks.sort(ascendingSourceDepth);
      });
      nodes.forEach(function(node) {
        var sy = 0, ty = 0;
        node.sourceLinks.forEach(function(link) {
          link.sy = sy;
          sy += link.dy;
        });
        node.targetLinks.forEach(function(link) {
          link.ty = ty;
          ty += link.dy;
        });
      });
  
      function ascendingSourceDepth(a, b) {
        return a.source.y - b.source.y;
      }
  
      function ascendingTargetDepth(a, b) {
        return a.target.y - b.target.y;
      }
    }
  
    function center(node) {
      return node.y + node.dy / 2;
    }
  
    function value(link) {
      return link.value;
    }
  
    return sankey;
  };

/**
 * Generate charts based on github open data
 * @param {string} mean_senti_path 
 * @param {string} eco 
 * @param {string} emo_freq_path 
 * @param {string} nounphrase_path 
 * @param {string} rnag_path 
 */

function chart(mean_senti_path, eco, emo_freq_path, nounphrase_path,rnag_path) {


    /**
     * 
     * Ecological status csv
     * 
     */
    var tabulate = function (data, columns) {
        var table = d3.select('#csv').append('table')
        var thead = table.append('thead')
        var tbody = table.append('tbody')

        thead.append('tr')
            .selectAll('th')
            .data(columns)
            .enter()
            .append('th')
            .text(function (d) {
                return d
            })

        var rows = tbody.selectAll('tr')
            .data(data)
            .enter()
            .append('tr')

        var cells = rows.selectAll('td')
            .data(function (row) {
                return columns.map(function (column) {
                    return {
                        column: column,
                        value: row[column]
                    }
                })
            })
            .enter()
            .append('td')
            .text(function (d) {
                return d.value
            })
            .style('background-color', function (d) {
                if (d.value == "Poor") {
                    return 'orange';
                } else if (d.value == "Moderate") {
                    return 'yellow';
                } else if (d.value == "Good") {
                    return 'green';
                } else {
                    return 'red';
                }
            });

        return table;
    }

    d3.csv(eco, function (data) {
        var columns = ['2013', '2014', '2015', '2016', '2019']
        tabulate(data, columns)
    })

    /**
     * 
     * Sentiment Polarity Score
     * 
     */

    // set the dimensions and margins of the graph
    var margin0 = {
            top: 10,
            right: 30,
            bottom: 30,
            left: 60
        },
        width0 = 1200 - margin0.left - margin0.right,
        height0 = 400 - margin0.top - margin0.bottom;

    // append the svg object to the body of the page
    var svg0 = d3.select("#my_dataviz")
        .append("svg")
        .attr("width", width0 + margin0.left + margin0.right)
        .attr("height", height0 + margin0.top + margin0.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin0.left + "," + margin0.top + ")");

    //Read the data for graph
    d3.csv(mean_senti_path,
        // When reading the csv, I must format variables:
        function (d) {
            return {
                date: d3.timeParse("%Y-%m-%d")(d.Date),
                value: d.mean_senti
            }
        },

        function (data) {

            // Add X axis --> it is a date format
            var x = d3.scaleTime()
                .domain(d3.extent(data, function (d) {
                    return d.date;
                }))
                .range([0, width0]);
            xAxis = svg0.append("g")
                .style("stroke", "black")
                .style("font-size", "16px")
                .style("font-family", "'M PLUS Rounded 1c', sans-serif")
                .attr("transform", "translate(0," + height0 + ")")
                .call(d3.axisBottom(x));

            // Add Y axis
            var y = d3.scaleLinear()
                .domain([-5, 5])
                .range([height0, 0]);
            yAxis = svg0.append("g")
                .style("stroke", "black")
                .style("font-family", "'M PLUS Rounded 1c', sans-serif")
                .style("font-size", "16px")
                .call(d3.axisLeft(y));

            // Add a clipPath: everything out of this area won't be drawn.
            var clip = svg0.append("defs").append("svg:clipPath")
                .attr("id", "clip")
                .append("svg:rect")
                .attr("width", width0)
                .attr("height", height0)
                .attr("x", 0)
                .attr("y", 0);

            // Add brushing
            var brush = d3.brushX() // Add the brush feature using the d3.brush function
                .extent([
                    [0, 0],
                    [width0, height0]
                ]) // initialise the brush area: start at 0,0 and finishes at width,height: it means I select the whole graph area
                .on("end",
                    updateChart) // Each time the brush selection changes, trigger the 'updateChart' function

            // Create the line variable: where both the line and the brush take place
            var line = svg0.append('g')
                .attr("clip-path", "url(#clip)")

            // Add the line
            line.append("path")
                .datum(data)
                .attr("class", "line") // I add the class line to be able to modify this line later on.
                .attr("fill", "none")
                .attr("stroke", "black")
                .attr("stroke-width", 1.5)
                .attr("d", d3.line()
                    .x(function (d) {
                        return x(d.date)
                    })
                    .y(function (d) {
                        return y(d.value)
                    })
                )

            // Add the brushing
            line
                .append("g")
                .attr("class", "brush")
                .call(brush);

            // A function that set idleTimeOut to null
            var idleTimeout

            function idled() {
                idleTimeout = null;
            }

            // A function that update the chart for given boundaries
            function updateChart() {

                // What are the selected boundaries?
                extent = d3.event.selection

                // If no selection, back to initial coordinate. Otherwise, update X axis domain
                if (!extent) {
                    if (!idleTimeout) return idleTimeout = setTimeout(idled,
                        350); // This allows to wait a little bit
                    x.domain([4, 8])
                } else {
                    x.domain([x.invert(extent[0]), x.invert(extent[1])])
                    line.select(".brush").call(brush.move,
                        null) // This remove the grey brush area as soon as the selection has been done
                }

                // Update axis and line position
                xAxis.transition().duration(1000).call(d3.axisBottom(x))
                line
                    .select('.line')
                    .transition()
                    .duration(1000)
                    .attr("d", d3.line()
                        .x(function (d) {
                            return x(d.date)
                        })
                        .y(function (d) {
                            return y(d.value)
                        })
                    )
            }

            // If user double click, reinitialize the chart
            svg0.on("dblclick", function () {
                x.domain(d3.extent(data, function (d) {
                    return d.date;
                }))
                xAxis.transition().call(d3.axisBottom(x))
                line
                    .select('.line')
                    .transition()
                    .attr("d", d3.line()
                        .x(function (d) {
                            return x(d.date)
                        })
                        .y(function (d) {
                            return y(d.value)
                        })
                    )
            });

            /**
             * 
             * Reasons for not achieving good
             * 
             */
             var units = "Counts";

             // set the dimensions and margins of the graph
             var margin = {top: 10, right: 10, bottom: 10, left: 10},
                 width = 700 - margin.left - margin.right,
                 height = 300 - margin.top - margin.bottom;
             
             // format variables
             var formatNumber = d3.format(",.0f"),    // zero decimal places
                 format = function(d) { return formatNumber(d) + " " + units; },
                 color = d3.scaleOrdinal(d3.schemeCategory10);
             
             // append the svg object to the body of the page
             var svg = d3.select("#chart").append("svg")
                 .attr("width", width + margin.left + margin.right)
                 .attr("height", height + margin.top + margin.bottom)
               .append("g")
                 .attr("transform", 
                       "translate(" + margin.left + "," + margin.top + ")");
             
             // Set the sankey diagram properties
             var sankey = d3.sankey()
                 .nodeWidth(36)
                 .nodePadding(40)
                 .size([width, height]);
             
             var path = sankey.link();
             
             // load the data
             d3.csv(rnag_path, function(error, data) {
              
               //set up graph in same style as original example but empty
               graph = {"nodes" : [], "links" : []};
             
               data.forEach(function (d) {
                 graph.nodes.push({ "name": d.source });
                 graph.nodes.push({ "name": d.target });
                 graph.links.push({ "source": d.source,
                                    "target": d.target,
                                    "value": +d.value });
                });
             
               // return only the distinct / unique nodes
               graph.nodes = d3.keys(d3.nest()
                 .key(function (d) { return d.name; })
                 .object(graph.nodes));
             
               // loop through each link replacing the text with its index from node
               graph.links.forEach(function (d, i) {
                 graph.links[i].source = graph.nodes.indexOf(graph.links[i].source);
                 graph.links[i].target = graph.nodes.indexOf(graph.links[i].target);
               });
             
               // now loop through each nodes to make nodes an array of objects
               // rather than an array of strings
               graph.nodes.forEach(function (d, i) {
                 graph.nodes[i] = { "name": d };
               });
             
               sankey
                   .nodes(graph.nodes)
                   .links(graph.links)
                   .layout(32);
             
               // add in the links
               var link = svg.append("g").selectAll(".link")
                   .data(graph.links)
                 .enter().append("path")
                   .attr("class", "link")
                   .attr("d", path)
                   .style("stroke-width", function(d) { return Math.max(1, d.dy); })
                   .sort(function(a, b) { return b.dy - a.dy; });
             
               // add the link titles
               link.append("title")
                     .text(function(d) {
                         return d.source.name + " → " + 
                             d.target.name + "\n" + format(d.value); });
             
               // add in the nodes
               var node = svg.append("g").selectAll(".node")
                   .data(graph.nodes)
                 .enter().append("g")
                   .attr("class", "node")
                   .attr("transform", function(d) { 
                       return "translate(" + d.x + "," + d.y + ")"; })
                   .call(d3.drag()
                     .subject(function(d) {
                       return d;
                     })
                     .on("start", function() {
                       this.parentNode.appendChild(this);
                     })
                     .on("drag", dragmove));
             
               // add the rectangles for the nodes
               node.append("rect")
                   .attr("height", function(d) { return d.dy; })
                   .attr("width", sankey.nodeWidth())
                   .style("fill", function(d) { 
                       return d.color = color(d.name.replace(/ .*/, "")); })
                   .style("stroke", function(d) { 
                       return d3.rgb(d.color).darker(2); })
                 .append("title")
                   .text(function(d) { 
                       return d.name + "\n" + format(d.value); });
             
               // add in the title for the nodes
               node.append("text")
                   .attr("x", -6)
                   .attr("y", function(d) { return d.dy / 2; })
                   .attr("dy", ".35em")
                   .attr("text-anchor", "end")
                   .attr("transform", null)
                   .text(function(d) { return d.name; })
                 .filter(function(d) { return d.x < width / 2; })
                   .attr("x", 6 + sankey.nodeWidth())
                   .attr("text-anchor", "start");
             
               // the function for moving the nodes
               function dragmove(d) {
                 d3.select(this)
                   .attr("transform", 
                         "translate(" 
                            + d.x + "," 
                            + (d.y = Math.max(
                               0, Math.min(height - d.dy, d3.event.y))
                              ) + ")");
                 sankey.relayout();
                 link.attr("d", path);
               }
             });

            /**
             * 
             * Emmotional Classifcation Frequency
             * 
             */
            // set the dimensions and margins of the graph
            var margin1 = {
                    top: 20,
                    right: 20,
                    bottom: 40,
                    left: 185
                },
                width1 = 500 - margin.left - margin.right,
                height2 = 400 - margin.top - margin.bottom;

            // append the svg object to the body of the page
            var svg1 = d3.select("#my_dataviz1")
                .append("svg")
                .attr("width", width1 + margin1.left + margin1.right)
                .attr("height", height2 + margin1.top + margin1.bottom)
                .append("g")
                .attr("transform",
                    "translate(" + margin1.left + "," + margin1.top + ")");

            // Parse the Data
            d3.csv(emo_freq_path, function (data) {

                // Add X axis
                var x = d3.scaleLinear()
                    .domain([0, 50])
                    .range([0, width]);
                svg1.append("g")
                    .attr("transform", "translate(0," + height + ")")
                    .style("stroke", "black")
                    .style("font-family", "'M PLUS Rounded 1c', sans-serif")
                    .style("font-size", "16px")
                    .call(d3.axisBottom(x))
                    .selectAll("text")
                    .attr("transform", "translate(-10,0)rotate(-45)")
                    .style("text-anchor", "end");

                // Y axis
                var y = d3.scaleBand()
                    .range([0, height])
                    .domain(data.map(function (d) {
                        return d.sentiment;
                    }))
                    .padding(.1);
                svg1.append("g")
                    .style("stroke", "black")
                    .style("font-size", "16px")
                    .style("font-family", "'M PLUS Rounded 1c', sans-serif")
                    .call(d3.axisLeft(y))

                //Bars
                svg1.selectAll("myRect")
                    .data(data)
                    .enter()
                    .append("rect")
                    .attr("x", x(0))
                    .attr("y", function (d) {
                        return y(d.sentiment);
                    })
                    .attr("width", function (d) {
                        return x(d.percent);
                    })
                    .attr("height", y.bandwidth())
                    .attr("fill", "black")

            })

            /**
             * 
             * Common nounphrases word cloud
             * 
             */

            // set the dimensions and margins of the graph
            var margin5 = {
                    top: 20,
                    right: 45,
                    bottom: 20,
                    left: 20
                },
                width3 = 500 - margin.left - margin.right,
                height3 = 400 - margin.top - margin.bottom;

            // append the svg object to the body of the page
            var svg4 = d3.select("#my_dataviz4").append("svg")
                .attr("width", width3 + margin5.left + margin5.right)
                .attr("height", height3 + margin5.top + margin5.bottom)
                .append("g");

            d3.csv(nounphrase_path, function (data) {


                // Constructs a new cloud layout instance. It run an algorithm to find the position of words that suits your requirements
                // Wordcloud features that are different from one word to the other must be here
                var layout = d3.layout.cloud()
                .size([width3, height3])
                .words(data.map(function(d) { return {text: d.text, size:d.n}; }))
                .padding(5)        //space between words
                .rotate(function() { return ~~(Math.random() * 2) * 90; })
                .fontSize(function(d) { return d.size*1.2; })      // font size of words
                .on("end", draw);
              layout.start();
              
              // This function takes the output of 'layout' above and draw the words
              // Wordcloud features that are THE SAME from one word to the other can be here
              function draw(words) {
                svg4
                  .append("g")
                    .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
                    .selectAll("text")
                      .data(words)
                    .enter().append("text")
                      .style("fill", "black")
                      .attr("text-anchor", "middle")
                      .style("font-family", "Impact")
                      .style("font-size", function(d) {return d.size + "px"; })
                      .attr("transform", function(d) {
                        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                      })
                      .text(function(d) { return d.text; });
              }

            });

        })
}