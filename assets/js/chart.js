function chart(mean_senti_path,
    eco_class_path,
    rnag_path,
    emo_freq_path,
    nounphrase_path) {
    // set the dimensions and margins of the graph
    var margin = {
            top: 10,
            right: 30,
            bottom: 30,
            left: 60
        },
        width = 1200 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("#my_dataviz")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    //Read the data
    d3.csv(mean_senti_path,

        // When reading the csv, I must format variables:
        function (d) {
            return {
                date: d3.timeParse("%Y-%m-%d")(d.created_at),
                value: d.mean_senti
            }
        },

        function (data) {

            // Add X axis --> it is a date format
            var x = d3.scaleTime()
                .domain(d3.extent(data, function (d) {
                    return d.date;
                }))
                .range([0, width]);
            xAxis = svg.append("g")
                .style("stroke", "white")
                .style("font-size", "16px")
                .style("font-family", "'M PLUS Rounded 1c', sans-serif")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x));

            // Add Y axis
            var y = d3.scaleLinear()
                .domain([-5, d3.max(data, function (d) {
                    return +d.value;
                })])
                .range([height, 0]);
            yAxis = svg.append("g")
                .style("stroke", "white")
                .style("font-family", "'M PLUS Rounded 1c', sans-serif")
                .style("font-size", "16px")
                .call(d3.axisLeft(y));

            // Add a clipPath: everything out of this area won't be drawn.
            var clip = svg.append("defs").append("svg:clipPath")
                .attr("id", "clip")
                .append("svg:rect")
                .attr("width", width)
                .attr("height", height)
                .attr("x", 0)
                .attr("y", 0);

            // Add brushing
            var brush = d3.brushX() // Add the brush feature using the d3.brush function
                .extent([
                    [0, 0],
                    [width, height]
                ]) // initialise the brush area: start at 0,0 and finishes at width,height: it means I select the whole graph area
                .on("end",
                    updateChart) // Each time the brush selection changes, trigger the 'updateChart' function

            // Create the line variable: where both the line and the brush take place
            var line = svg.append('g')
                .attr("clip-path", "url(#clip)")

            // Add the line
            line.append("path")
                .datum(data)
                .attr("class", "line") // I add the class line to be able to modify this line later on.
                .attr("fill", "none")
                .attr("stroke", "steelblue")
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
            svg.on("dblclick", function () {
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

        })




    // set the dimensions and margins of the graph
    var margin1 = {
            top: 20,
            right: 20,
            bottom: 40,
            left: 185
        },
        width1 = 550 - margin.left - margin.right,
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
            .style("stroke", "white")
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
            .style("stroke", "white")
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
            .attr("fill", "white")

    })



    // set the dimensions and margins of the graph
    var margin5 = {
            top: 20,
            right: 45,
            bottom: 20,
            left: 20
        },
        width3 = 800 - margin.left - margin.right,
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
            .words(data.map(function (d) {
                return {
                    text: d.text
                };
            }))
            .padding(5) //space between words
            .rotate(0) // rotation angle in degrees
            .fontSize(32) // font size of words
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
                .style("font-size", "2em")
                .style("fill", "white")
                .attr("text-anchor", "middle")
                .style("font-family", "'M PLUS Rounded 1c', sans-serif")
                .attr("transform", function (d) {
                    return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                })
                .text(function (d) {
                    return d.text;
                })
        };

    });

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

        //create a cell in each row for each column
        var cells = rows.selectAll("td")
            .data(function (row) {
                return columns.map(function (column) {
                    return row[column];
                });
            })
            .enter()
            .append("td")
            .text(function (d) {
                return d;
            });

        return table;
    }

    var tabulate_2 = function (data, columns) {
        var table = d3.select('#rnag').append('table')
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

        //create a cell in each row for each column
        var cells = rows.selectAll("td")
            .data(function (row) {
                return columns.map(function (column) {
                    return row[column];
                });
            })
            .enter()
            .append("td")
            .text(function (d) {
                return d;
            });

        return table;
    }

    d3.csv(eco_class_path, function (data) {
        var columns = ['2013', '2014', '2015', '2016', '2019']
        tabulate(data, columns)

        var allTableCells = document.getElementsByTagName("td");

        for (var i = 0, max = allTableCells.length; i < max; i++) {
            var node = allTableCells[i];

            //get the text from the first child node - which should be a text node
            var currentText = node.childNodes[0].nodeValue;

            //check for 'one' and assign this table cell's background color accordingly 
            if (currentText === "Poor") {
                node.style.backgroundColor = "red";
            }
            if (currentText === "Moderate") {
                node.style.backgroundColor = "#d0d062";
            }

        }
    })

    d3.csv(rnag_path, function (data) {
        var columns = ['Swmi', 'Category', 'Business.Sector', 'Activity', 'Swmi.Certainty']
        tabulate_2(data, columns)


    })

}