
  
/**
 * 
 * @returns MAPBOX MAP
 */
window.onload = function () {
/**
 * 
 * Search centroids for map
 * 
 */
 var centroids = {
  "type": "FeatureCollection",
  "name": "wb_lines_centroids",
  "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
  "features": [
  { "type": "Feature", "properties": { "name": "Loddon (Swallowfield to River Thames confluence)", "WBID": "GB106039023160" }, "geometry": { "type": "Point", "coordinates": [ -0.8988475400314, 51.440265465936712 ] } },
  { "type": "Feature", "properties": { "name": "Cove Brook", "WBID": "GB106039017130" }, "geometry": { "type": "Point", "coordinates": [ -0.7763749169644, 51.296211694501217 ] } },
  { "type": "Feature", "properties": { "name": "Heath Lake", "WBID": "GB30642945" }, "geometry": { "type": "Point", "coordinates": [ -0.810130360838951, 51.380133981344329 ] } },
  { "type": "Feature", "properties": { "name": "Blackwater (Aldershot to Cove Brook confluence at Hawley)", "WBID": "GB106039017180" }, "geometry": { "type": "Point", "coordinates": [ -0.74556139540058, 51.267303698481541 ] } },
  { "type": "Feature", "properties": { "name": "Vyne Stream", "WBID": "GB106039017110" }, "geometry": { "type": "Point", "coordinates": [ -1.093036129007315, 51.304268679053706 ] } },
  { "type": "Feature", "properties": { "name": "Whitewater", "WBID": "GB106039017240" }, "geometry": { "type": "Point", "coordinates": [ -0.946856243846264, 51.305736714916293 ] } },
  { "type": "Feature", "properties": { "name": "Barkham Brook", "WBID": "GB106039017400" }, "geometry": { "type": "Point", "coordinates": [ -0.884988732162786, 51.399885416628209 ] } },
  { "type": "Feature", "properties": { "name": "Loddon (Sherfield on Loddon to Swallowfield)", "WBID": "GB106039017330" }, "geometry": { "type": "Point", "coordinates": [ -1.000913383792096, 51.350164335568955 ] } },
  { "type": "Feature", "properties": { "name": "Hart (Crondall to Elvetham)", "WBID": "GB106039017090" }, "geometry": { "type": "Point", "coordinates": [ -0.872780079723326, 51.274686739198906 ] } },
  { "type": "Feature", "properties": { "name": "Loddon (Basingstoke to River Lyde confluence at Hartley Wespall)", "WBID": "GB106039017080" }, "geometry": { "type": "Point", "coordinates": [ -1.047787944721065, 51.281280454386724 ] } },
  { "type": "Feature", "properties": { "name": "Fleet Brook", "WBID": "GB106039017120" }, "geometry": { "type": "Point", "coordinates": [ -0.834572341325025, 51.297538605563588 ] } },
  { "type": "Feature", "properties": { "name": "Blackwater (Bramshill to River Loddon confluence at Swallowfield)", "WBID": "GB106039017320" }, "geometry": { "type": "Point", "coordinates": [ -0.947936444476478, 51.375153388411725 ] } },
  { "type": "Feature", "properties": { "name": "Hart (Elvetham to Hartley Wintney)", "WBID": "GB106039017170" }, "geometry": { "type": "Point", "coordinates": [ -0.908125037043424, 51.323543499033626 ] } },
  { "type": "Feature", "properties": { "name": "Bow Brook (Pamber End to Bramley)", "WBID": "GB106039017160" }, "geometry": { "type": "Point", "coordinates": [ -1.121076895725566, 51.317047225078511 ] } },
  { "type": "Feature", "properties": { "name": "Emm Brook", "WBID": "GB106039023130" }, "geometry": { "type": "Point", "coordinates": [ -0.843852579385096, 51.418216238187412 ] } },
  { "type": "Feature", "properties": { "name": "Mytchett Lake", "WBID": "GB30643339" }, "geometry": { "type": "Point", "coordinates": [ -0.720037988195974, 51.280862190172734 ] } },
  { "type": "Feature", "properties": { "name": "Fleet Pond", "WBID": "GB30643315" }, "geometry": { "type": "Point", "coordinates": [ -0.82449069408724, 51.288410790497011 ] } },
  { "type": "Feature", "properties": { "name": "Blackwater (Hawley to Whitewater confluence at Bramshill)", "WBID": "GB106039017290" }, "geometry": { "type": "Point", "coordinates": [ -0.849557135431548, 51.350707005674643 ] } },
  { "type": "Feature", "properties": { "name": "Twyford Brook", "WBID": "GB106039023190" }, "geometry": { "type": "Point", "coordinates": [ -0.84709637989786, 51.471131964658987 ] } },
  { "type": "Feature", "properties": { "name": "Loddon (Hartley Wespall to Sherfield on Loddon)", "WBID": "GB106039017150" }, "geometry": { "type": "Point", "coordinates": [ -1.015693659525553, 51.316341442055553 ] } },
  { "type": "Feature", "properties": { "name": "Addlestone Bourne (West End to Hale/Mill Bourne confluence at Mimbridge)", "WBID": "GB106039017920" }, "geometry": { "type": "Point", "coordinates": [ -0.629141894568079, 51.334665020500353 ] } },
  { "type": "Feature", "properties": { "name": "Addlestone Bourne (West End to Hale/Mill Bourne confluence at Mim", "WBID": "GB106039017920" }, "geometry": { "type": "Point", "coordinates": [ -0.620346317881071, 51.336663287547253 ] } },
  { "type": "Feature", "properties": { "name": "East Clandon Stream", "WBID": "GB106039017860" }, "geometry": { "type": "Point", "coordinates": [ -0.50222023709634, 51.287488777785974 ] } },
  { "type": "Feature", "properties": { "name": "Manor, Fleet, Abbey, St Ann's Lakes atThorpe Park", "WBID": "GB30642753" }, "geometry": { "type": "Point", "coordinates": [ -0.517208463544674, 51.40428914306203 ] } },
  { "type": "Feature", "properties": { "name": "Whitmoor Common Pond", "WBID": "GB30643359" }, "geometry": { "type": "Point", "coordinates": [ -0.592225916534806, 51.275646874495514 ] } },
  { "type": "Feature", "properties": { "name": "Frensham Great Pond", "WBID": "GB30644031" }, "geometry": { "type": "Point", "coordinates": [ -0.791742679688517, 51.154743036712695 ] } },
  { "type": "Feature", "properties": { "name": "Frensham Little Pond", "WBID": "GB30643943" }, "geometry": { "type": "Point", "coordinates": [ -0.772442530552368, 51.165846037272324 ] } },
  { "type": "Feature", "properties": { "name": "North Wey at Alton", "WBID": "GB106039017800" }, "geometry": { "type": "Point", "coordinates": [ -0.972548729695295, 51.150665514524434 ] } },
  { "type": "Feature", "properties": { "name": "Hollywater and Deadwater at Bordon", "WBID": "GB106039017690" }, "geometry": { "type": "Point", "coordinates": [ -0.850557095151855, 51.102669171776661 ] } },
  { "type": "Feature", "properties": { "name": "Clasford Brook and Wood Street Brook", "WBID": "GB106039017850" }, "geometry": { "type": "Point", "coordinates": [ -0.645419569631807, 51.266787050752157 ] } },
  { "type": "Feature", "properties": { "name": "South Wey (River Slea confluence to Tilford)", "WBID": "GB106039017780" }, "geometry": { "type": "Point", "coordinates": [ -0.792934713677968, 51.163390431367205 ] } },
  { "type": "Feature", "properties": { "name": "Tillingbourne", "WBID": "GB106039017840" }, "geometry": { "type": "Point", "coordinates": [ -0.462275083301016, 51.21363102961174 ] } },
  { "type": "Feature", "properties": { "name": "Chertsey Bourne (Virginia Water to Chertsey)", "WBID": "GB106039017070" }, "geometry": { "type": "Point", "coordinates": [ -0.566010496389897, 51.402719468909076 ] } },
  { "type": "Feature", "properties": { "name": "Royal Brook", "WBID": "GB106039017760" }, "geometry": { "type": "Point", "coordinates": [ -0.675242157457927, 51.171658227340281 ] } },
  { "type": "Feature", "properties": { "name": "Chertsey Bourne (Chertsey to River Thames confluence)", "WBID": "GB106039017030" }, "geometry": { "type": "Point", "coordinates": [ -0.495835561611885, 51.38620055464169 ] } },
  { "type": "Feature", "properties": { "name": "Slea (Kingsley to Sleaford)", "WBID": "GB106039017750" }, "geometry": { "type": "Point", "coordinates": [ -0.854226054867556, 51.138855764033771 ] } },
  { "type": "Feature", "properties": { "name": "North Wey (Alton to Tilford)", "WBID": "GB106039017830" }, "geometry": { "type": "Point", "coordinates": [ -0.832339212831787, 51.19532532350734 ] } },
  { "type": "Feature", "properties": { "name": "Hale/Mill Bourne (Bagshot to Addlestone Bourne confluence near Chobham)", "WBID": "GB106039017930" }, "geometry": { "type": "Point", "coordinates": [ -0.642920356733761, 51.355900536883993 ] } },
  { "type": "Feature", "properties": { "name": "Hale/Mill Bourne (Bagshot to Addlestone Bourne confluence near Ch", "WBID": "GB106039017930" }, "geometry": { "type": "Point", "coordinates": [ -0.646174177031368, 51.356507014392484 ] } },
  { "type": "Feature", "properties": { "name": "South Wey (Haslemere to Bordon)", "WBID": "GB106039017700" }, "geometry": { "type": "Point", "coordinates": [ -0.777381500138229, 51.088157482102666 ] } },
  { "type": "Feature", "properties": { "name": "Chertsey Bourne (Sunningdale to Virginia Water)", "WBID": "GB106039017040" }, "geometry": { "type": "Point", "coordinates": [ -0.653691901778151, 51.391641979260463 ] } },
  { "type": "Feature", "properties": { "name": "Hoe Stream (Pirbright to River Wey confluence at Woking)", "WBID": "GB106039017900" }, "geometry": { "type": "Point", "coordinates": [ -0.567358791768928, 51.297929971413936 ] } },
  { "type": "Feature", "properties": { "name": "Wey (Shalford to River Thames confluence at Weybridge)", "WBID": "GB106039017630" }, "geometry": { "type": "Point", "coordinates": [ -0.521754486303818, 51.291370172203948 ] } },
  { "type": "Feature", "properties": { "name": "Wey Navigation (Pyrford reach)", "WBID": "GB106039017910" }, "geometry": { "type": "Point", "coordinates": [ -0.484388050883451, 51.340402083257025 ] } },
  { "type": "Feature", "properties": { "name": "Boldermere", "WBID": "GB30643218" }, "geometry": { "type": "Point", "coordinates": [ -0.456321470422845, 51.314531069957276 ] } },
  { "type": "Feature", "properties": { "name": "Hoe Stream (Normandy to Pirbright)", "WBID": "GB106039017870" }, "geometry": { "type": "Point", "coordinates": [ -0.657081473511767, 51.274573213882903 ] } },
  { "type": "Feature", "properties": { "name": "The Tarn", "WBID": "GB30643758" }, "geometry": { "type": "Point", "coordinates": [ -0.698834734468546, 51.203336203091681 ] } },
  { "type": "Feature", "properties": { "name": "Caker Stream", "WBID": "GB106039017730" }, "geometry": { "type": "Point", "coordinates": [ -0.962341438542475, 51.133333080752244 ] } },
  { "type": "Feature", "properties": { "name": "Forest Mere", "WBID": "GB30644576" }, "geometry": { "type": "Point", "coordinates": [ -0.831924823723615, 51.062729252750103 ] } },
  { "type": "Feature", "properties": { "name": "Chertsey Bourne (Ascot to Virginia Water)", "WBID": "GB106039017050" }, "geometry": { "type": "Point", "coordinates": [ -0.629557494586475, 51.413950157934998 ] } },
  { "type": "Feature", "properties": { "name": "The Moat at Egham", "WBID": "GB106039017060" }, "geometry": { "type": "Point", "coordinates": [ -0.536149661791821, 51.404818618094119 ] } },
  { "type": "Feature", "properties": { "name": "Addlestone Bourne (Mill/Hale to Chertsey Bourne)", "WBID": "GB106039017020" }, "geometry": { "type": "Point", "coordinates": [ -0.513018018385474, 51.356288335184772 ] } },
  { "type": "Feature", "properties": { "name": "Wey (Tilford to Shalford)", "WBID": "GB106039017820" }, "geometry": { "type": "Point", "coordinates": [ -0.657375985420204, 51.189548134598873 ] } },
  { "type": "Feature", "properties": { "name": "South Wey (Bordon to River Slea confluence)", "WBID": "GB106039017720" }, "geometry": { "type": "Point", "coordinates": [ -0.839353970631294, 51.12805556037474 ] } },
  { "type": "Feature", "properties": { "name": "Virginia Water", "WBID": "GB30642691" }, "geometry": { "type": "Point", "coordinates": [ -0.604554899372119, 51.411886048010857 ] } },
  { "type": "Feature", "properties": { "name": "Cranleigh Waters", "WBID": "GB106039017810" }, "geometry": { "type": "Point", "coordinates": [ -0.4939033258454, 51.144249524976779 ] } },
  { "type": "Feature", "properties": { "name": "Cranmer Pond", "WBID": "GB30644464" }, "geometry": { "type": "Point", "coordinates": [ -0.868831774982172, 51.085306321258919 ] } },
  { "type": "Feature", "properties": { "name": "Stratford Brook", "WBID": "GB106039017890" }, "geometry": { "type": "Point", "coordinates": [ -0.470347476161397, 51.305393635502419 ] } },
  { "type": "Feature", "properties": { "name": "Oakhanger Stream", "WBID": "GB106039017710" }, "geometry": { "type": "Point", "coordinates": [ -0.919851364055526, 51.108762662001318 ] } },
  { "type": "Feature", "properties": { "name": "Woolmer Pond", "WBID": "GB30644482" }, "geometry": { "type": "Point", "coordinates": [ -0.876340675063345, 51.082287738233539 ] } },
  { "type": "Feature", "properties": { "name": "Lesser Teise", "WBID": "GB106040018260" }, "geometry": { "type": "Point", "coordinates": [ 0.465805977292711, 51.147382767567066 ] } },
  { "type": "Feature", "properties": { "name": "Teise and Lesser Teise", "WBID": "GB106040018260" }, "geometry": { "type": "Point", "coordinates": [ 0.465934991581066, 51.147565534499044 ] } },
  { "type": "Feature", "properties": { "name": "Bartley Mill Stream", "WBID": "GB106040018240" }, "geometry": { "type": "Point", "coordinates": [ 0.337364977230807, 51.094438493173513 ] } },
  { "type": "Feature", "properties": { "name": "Teise at Bewl", "WBID": "GB106040018500" }, "geometry": { "type": "Point", "coordinates": [ 0.405510366499606, 51.081837011097015 ] } },
  { "type": "Feature", "properties": { "name": "Bewl", "WBID": "GB106040018500" }, "geometry": { "type": "Point", "coordinates": [ 0.405320789779126, 51.081952153489553 ] } },
  { "type": "Feature", "properties": { "name": "Tributary of Teise", "WBID": "GB106040018510" }, "geometry": { "type": "Point", "coordinates": [ 0.442975080970326, 51.097921239032949 ] } },
  { "type": "Feature", "properties": { "name": "Tributary of Teise at Bedgebury", "WBID": "GB106040018510" }, "geometry": { "type": "Point", "coordinates": [ 0.443029548907614, 51.098118174389299 ] } },
  { "type": "Feature", "properties": { "name": "Bewl Water", "WBID": "GB30644398" }, "geometry": { "type": "Point", "coordinates": [ 0.393759256588175, 51.068416303261451 ] } },
  { "type": "Feature", "properties": { "name": "Medway at Maidstone", "WBID": "GB106040018440" }, "geometry": { "type": "Point", "coordinates": [ 0.469221162000348, 51.258214119794097 ] } },
  { "type": "Feature", "properties": { "name": "Bourne", "WBID": "GB106040018210" }, "geometry": { "type": "Point", "coordinates": [ 0.32268538877717, 51.248464710385399 ] } },
  { "type": "Feature", "properties": { "name": "Bourne (Medway)", "WBID": "GB106040018210" }, "geometry": { "type": "Point", "coordinates": [ 0.322167182770592, 51.249450423225177 ] } },
  { "type": "Feature", "properties": { "name": "Hilden Brook", "WBID": "GB106040018170" }, "geometry": { "type": "Point", "coordinates": [ 0.249055039646846, 51.219173345739321 ] } },
  { "type": "Feature", "properties": { "name": "Loose Stream", "WBID": "GB106040018420" }, "geometry": { "type": "Point", "coordinates": [ 0.538633302984949, 51.241209182452295 ] } },
  { "type": "Feature", "properties": { "name": "Ditton Stream", "WBID": "GB106040018200" }, "geometry": { "type": "Point", "coordinates": [ 0.444648393699863, 51.296249151378873 ] } },
  { "type": "Feature", "properties": { "name": "Leybourne Stream", "WBID": "GB106040018450" }, "geometry": { "type": "Point", "coordinates": [ 0.399599599147371, 51.307472964722194 ] } },
  { "type": "Feature", "properties": { "name": "Somerhill Stream", "WBID": "GB106040018410" }, "geometry": { "type": "Point", "coordinates": [ 0.287548802461916, 51.176622425397618 ] } },
  { "type": "Feature", "properties": { "name": "Tudeley Brook", "WBID": "GB106040018120" }, "geometry": { "type": "Point", "coordinates": [ 0.373874318152111, 51.182906235955066 ] } },
  { "type": "Feature", "properties": { "name": "Len", "WBID": "GB106040018430" }, "geometry": { "type": "Point", "coordinates": [ 0.613561107935791, 51.251778130711976 ] } },
  { "type": "Feature", "properties": { "name": "Mereworth Stream", "WBID": "GB106040018190" }, "geometry": { "type": "Point", "coordinates": [ 0.391401409102949, 51.255022410528461 ] } },
  { "type": "Feature", "properties": { "name": "Wateringbury Stream", "WBID": "GB106040018190" }, "geometry": { "type": "Point", "coordinates": [ 0.391542058790527, 51.255205772497767 ] } },
  { "type": "Feature", "properties": { "name": "Mid Medway from Eden Confluence to Yalding", "WBID": "GB106040018182" }, "geometry": { "type": "Point", "coordinates": [ 0.29294399954744, 51.196888602811626 ] } },
  { "type": "Feature", "properties": { "name": "Alder Stream & Hammer Dyke", "WBID": "GB106040018110" }, "geometry": { "type": "Point", "coordinates": [ 0.352610857466026, 51.195458722022558 ] } },
  { "type": "Feature", "properties": { "name": "Alder Stream and Hammer Dyke", "WBID": "GB106040018110" }, "geometry": { "type": "Point", "coordinates": [ 0.352938104720701, 51.195642772672258 ] } },
  { "type": "Feature", "properties": { "name": "Sherway", "WBID": "GB106040018320" }, "geometry": { "type": "Point", "coordinates": [ 0.650133929062648, 51.168537222137182 ] } },
  { "type": "Feature", "properties": { "name": "Hammer Stream", "WBID": "GB106040018290" }, "geometry": { "type": "Point", "coordinates": [ 0.589201987910618, 51.116434579609901 ] } },
  { "type": "Feature", "properties": { "name": "Upper Beult", "WBID": "GB106040018280" }, "geometry": { "type": "Point", "coordinates": [ 0.747454127696354, 51.123339000293967 ] } },
  { "type": "Feature", "properties": { "name": "Upper Beult - High Halden and Bethersden Streams", "WBID": "GB106040018280" }, "geometry": { "type": "Point", "coordinates": [ 0.747953457336611, 51.123884318397813 ] } },
  { "type": "Feature", "properties": { "name": "Tributary of Beult at Sutton Valance", "WBID": "GB106040018040" }, "geometry": { "type": "Point", "coordinates": [ 0.58355706043786, 51.1951467051544 ] } },
  { "type": "Feature", "properties": { "name": "Tributary of Beult at Sutton Valence", "WBID": "GB106040018040" }, "geometry": { "type": "Point", "coordinates": [ 0.583569415766467, 51.195305788784758 ] } },
  { "type": "Feature", "properties": { "name": "Beult at Yalding", "WBID": "GB106040018140" }, "geometry": { "type": "Point", "coordinates": [ 0.441674216218733, 51.216451437479321 ] } },
  { "type": "Feature", "properties": { "name": "Marden Meadow Ponds", "WBID": "GB30647024" }, "geometry": { "type": "Point", "coordinates": [ 0.518700016889495, 51.173399622993472 ] } },
  { "type": "Feature", "properties": { "name": "Tributary of Eden Brook", "WBID": "GB106040018340" }, "geometry": { "type": "Point", "coordinates": [ -0.035770975940525, 51.187690919267368 ] } },
  { "type": "Feature", "properties": { "name": "Ray Brook", "WBID": "GB106040018340" }, "geometry": { "type": "Point", "coordinates": [ -0.026116887689792, 51.187929893870042 ] } },
  { "type": "Feature", "properties": { "name": "Eden Brook", "WBID": "GB106040018660" }, "geometry": { "type": "Point", "coordinates": [ -0.01877186762376, 51.165180526173557 ] } },
  { "type": "Feature", "properties": { "name": "Tributary of Eden at Four Elms", "WBID": "GB106040018060" }, "geometry": { "type": "Point", "coordinates": [ 0.095829793703671, 51.202268431683052 ] } },
  { "type": "Feature", "properties": { "name": "Bough Beech Reservoir", "WBID": "GB30643602" }, "geometry": { "type": "Point", "coordinates": [ 0.137287923554022, 51.213043552988168 ] } },
  { "type": "Feature", "properties": { "name": "Gibbs Brook", "WBID": "GB106040018640" }, "geometry": { "type": "Point", "coordinates": [ -0.032937994458855, 51.229462251212986 ] } },
  { "type": "Feature", "properties": { "name": "Bay Pond", "WBID": "GB30643485" }, "geometry": { "type": "Point", "coordinates": [ -0.062775665886031, 51.247861876471383 ] } },
  { "type": "Feature", "properties": { "name": "Middle Eden", "WBID": "GB106040018350" }, "geometry": { "type": "Point", "coordinates": [ 0.015295778737525, 51.20228239222034 ] } },
  { "type": "Feature", "properties": { "name": "Hedgecourt Lake", "WBID": "GB30644023" }, "geometry": { "type": "Point", "coordinates": [ -0.063576116743334, 51.146374904819339 ] } },
  { "type": "Feature", "properties": { "name": "Friars Gate Stream", "WBID": "GB106040018370" }, "geometry": { "type": "Point", "coordinates": [ 0.137354718713514, 51.088229816210657 ] } },
  { "type": "Feature", "properties": { "name": "Medway at Weir Wood", "WBID": "GB106040018070" }, "geometry": { "type": "Point", "coordinates": [ 0.007900009670107, 51.102017763232496 ] } },
  { "type": "Feature", "properties": { "name": "Tributary of upper Medway at Crowborough", "WBID": "GB106040013360" }, "geometry": { "type": "Point", "coordinates": [ 0.203734900356828, 51.056412507819303 ] } },
  { "type": "Feature", "properties": { "name": "Jarvis Brook", "WBID": "GB106040013360" }, "geometry": { "type": "Point", "coordinates": [ 0.203994090417332, 51.056615181824583 ] } },
  { "type": "Feature", "properties": { "name": "Kent Water", "WBID": "GB106040018090" }, "geometry": { "type": "Point", "coordinates": [ 0.124129905659113, 51.143957132240843 ] } },
  { "type": "Feature", "properties": { "name": "Tributary of upper Medway at Town Row", "WBID": "GB106040013370" }, "geometry": { "type": "Point", "coordinates": [ 0.228379509779124, 51.053441928787272 ] } },
  { "type": "Feature", "properties": { "name": "Upper Eridge Stream", "WBID": "GB106040013370" }, "geometry": { "type": "Point", "coordinates": [ 0.228490103682773, 51.053816184375449 ] } },
  { "type": "Feature", "properties": { "name": "Mid Medway from Hartfield to Eden Confluence", "WBID": "GB106040018181" }, "geometry": { "type": "Point", "coordinates": [ 0.161384554431032, 51.134258711504344 ] } },
  { "type": "Feature", "properties": { "name": "Pippingford Brook", "WBID": "GB106040018360" }, "geometry": { "type": "Point", "coordinates": [ 0.083482553745603, 51.071401309381187 ] } },
  { "type": "Feature", "properties": { "name": "Weir Wood Reservoir", "WBID": "GB30644310" }, "geometry": { "type": "Point", "coordinates": [ -0.008300170377332, 51.095804751669391 ] } },
  { "type": "Feature", "properties": { "name": "Grom", "WBID": "GB106040018400" }, "geometry": { "type": "Point", "coordinates": [ 0.193643153124589, 51.118114254221972 ] } },
  { "type": "Feature", "properties": { "name": "Shovelstrode Stream", "WBID": "GB106040018080" }, "geometry": { "type": "Point", "coordinates": [ 0.062952361446759, 51.122499669381448 ] } },
  { "type": "Feature", "properties": { "name": "Evenlode (Compton Bk to Bledington Bk) & 4 Shires", "WBID": "GB106039037410" }, "geometry": { "type": "Point", "coordinates": [ -1.662823453416792, 51.940065751563566 ] } },
  { "type": "Feature", "properties": { "name": "Evenlode (Compton Bk to Bledington Bk) and 4 Shires", "WBID": "GB106039037410" }, "geometry": { "type": "Point", "coordinates": [ -1.662559863294566, 51.938696720910386 ] } },
  { "type": "Feature", "properties": { "name": "Glyme (Enstone to Dorn)", "WBID": "GB106039030010" }, "geometry": { "type": "Point", "coordinates": [ -1.396515240774263, 51.894318576488551 ] } },
  { "type": "Feature", "properties": { "name": "Evenlode (Glyme to Thames)", "WBID": "GB106039029880" }, "geometry": { "type": "Point", "coordinates": [ -1.363821176254524, 51.799624422558374 ] } },
  { "type": "Feature", "properties": { "name": "Dorn (Source to Glyme)", "WBID": "GB106039037380" }, "geometry": { "type": "Point", "coordinates": [ -1.369953824199475, 51.917752836543535 ] } },
  { "type": "Feature", "properties": { "name": "Littlestock Stream to tributary of Evenlode at Shipton", "WBID": "GB106039029910" }, "geometry": { "type": "Point", "coordinates": [ -1.621171378139924, 51.866558082995233 ] } },
  { "type": "Feature", "properties": { "name": "Bledington Brook (Source to Evenlode)", "WBID": "GB106039030000" }, "geometry": { "type": "Point", "coordinates": [ -1.671397620673535, 51.914495376050603 ] } },
  { "type": "Feature", "properties": { "name": "Coldron and Taston Brooks", "WBID": "GB106039029970" }, "geometry": { "type": "Point", "coordinates": [ -1.502529075788243, 51.888030333158582 ] } },
  { "type": "Feature", "properties": { "name": "Evenlode (Source to Four Shires S) and Longborough Stream", "WBID": "GB106039037420" }, "geometry": { "type": "Point", "coordinates": [ -1.693125170759512, 51.983066938888022 ] } },
  { "type": "Feature", "properties": { "name": "Westcote Brook (source to Evenlode at Bledington)", "WBID": "GB106039029950" }, "geometry": { "type": "Point", "coordinates": [ -1.644769261940119, 51.896568478643651 ] } },
  { "type": "Feature", "properties": { "name": "Glyme (Dorn confluence to Evenlode)", "WBID": "GB106039029940" }, "geometry": { "type": "Point", "coordinates": [ -1.358207227554633, 51.848115537285594 ] } },
  { "type": "Feature", "properties": { "name": "Sars Brook (source to Evenlode downstream Bledington)", "WBID": "GB106039029980" }, "geometry": { "type": "Point", "coordinates": [ -1.602171909664413, 51.899512981780404 ] } },
  { "type": "Feature", "properties": { "name": "Cornwell Brook and tributaries (Source to Evenlode)", "WBID": "GB106039037400" }, "geometry": { "type": "Point", "coordinates": [ -1.57365165801654, 51.942858328639304 ] } },
  { "type": "Feature", "properties": { "name": "Glyme (Source to Enstone)", "WBID": "GB106039030020" }, "geometry": { "type": "Point", "coordinates": [ -1.479427458578572, 51.922130409217345 ] } },
  { "type": "Feature", "properties": { "name": "Cornbury Park Lakes", "WBID": "GB30640488" }, "geometry": { "type": "Point", "coordinates": [ -1.486378181155984, 51.857013327896269 ] } },
  { "type": "Feature", "properties": { "name": "Little Compton Brook and tributaries (Source to Evenlode)", "WBID": "GB106039037390" }, "geometry": { "type": "Point", "coordinates": [ -1.645432212237394, 51.973562148548268 ] } },
  { "type": "Feature", "properties": { "name": "Evenlode (Bledington to Glyme confluence)", "WBID": "GB106039029960" }, "geometry": { "type": "Point", "coordinates": [ -1.507538708180321, 51.863555674984326 ] } },
  { "type": "Feature", "properties": { "name": "Windrush and tributaries (Little Rissington to Thames)", "WBID": "GB106039030440" }, "geometry": { "type": "Point", "coordinates": [ -1.558223952129358, 51.791560676986499 ] } },
  { "type": "Feature", "properties": { "name": "Highmoor Brook at Brize Norton", "WBID": "GB106039030260" }, "geometry": { "type": "Point", "coordinates": [ -1.558722770796067, 51.754366008851044 ] } },
  { "type": "Feature", "properties": { "name": "Leach (Source to Thames)", "WBID": "GB106039030040" }, "geometry": { "type": "Point", "coordinates": [ -1.744091374001995, 51.761263515933273 ] } },
  { "type": "Feature", "properties": { "name": "Shill Brook and Kencot Brook at Carterton", "WBID": "GB106039030280" }, "geometry": { "type": "Point", "coordinates": [ -1.608801546280479, 51.756998611042789 ] } },
  { "type": "Feature", "properties": { "name": "Shill Brook and Tributaries", "WBID": "GB106039030280" }, "geometry": { "type": "Point", "coordinates": [ -1.589063176428473, 51.748409707408364 ] } },
  { "type": "Feature", "properties": { "name": "Dikler (Wyck Rissington to Windrush) and Lower Eye", "WBID": "GB106039030470" }, "geometry": { "type": "Point", "coordinates": [ -1.739525238326627, 51.876041762869136 ] } },
  { "type": "Feature", "properties": { "name": "Taynton Stream (source to Windrush)", "WBID": "GB106039030450" }, "geometry": { "type": "Point", "coordinates": [ -1.669556804940329, 51.853633746281027 ] } },
  { "type": "Feature", "properties": { "name": "Hazelford and Coombe Brook", "WBID": "GB106039030450" }, "geometry": { "type": "Point", "coordinates": [ -1.669722630487946, 51.853672238728329 ] } },
  { "type": "Feature", "properties": { "name": "Broadwell Brook", "WBID": "GB106039030232" }, "geometry": { "type": "Point", "coordinates": [ -1.634617060664284, 51.726128598649098 ] } },
  { "type": "Feature", "properties": { "name": "Eye (Source to Dikler)", "WBID": "GB106039037450" }, "geometry": { "type": "Point", "coordinates": [ -1.774173573790289, 51.913445597762561 ] } },
  { "type": "Feature", "properties": { "name": "Wadley Stream (Source to Thames at Duxford)", "WBID": "GB106039023770" }, "geometry": { "type": "Point", "coordinates": [ -1.514384374470136, 51.694268070952461 ] } },
  { "type": "Feature", "properties": { "name": "Sherbourne Brook", "WBID": "GB106039030460" }, "geometry": { "type": "Point", "coordinates": [ -1.814929538433939, 51.853484425491153 ] } },
  { "type": "Feature", "properties": { "name": "Radcot Cut", "WBID": "GB106039030231" }, "geometry": { "type": "Point", "coordinates": [ -1.570007283950375, 51.699557259161423 ] } },
  { "type": "Feature", "properties": { "name": "Farmoor Reservoir", "WBID": "GB30641011" }, "geometry": { "type": "Point", "coordinates": [ -1.356039592390997, 51.752355030017881 ] } },
  { "type": "Feature", "properties": { "name": "Filchhampstead Brook at Farmoor", "WBID": "GB106039030210" }, "geometry": { "type": "Point", "coordinates": [ -1.342302866003633, 51.754598834156752 ] } },
  { "type": "Feature", "properties": { "name": "Chil and Limb Brooks (source to B4044)", "WBID": "GB106039030310" }, "geometry": { "type": "Point", "coordinates": [ -1.398146015712529, 51.766282593110276 ] } },
  { "type": "Feature", "properties": { "name": "Dikler (Source to Wyck Rissington)", "WBID": "GB106039037470" }, "geometry": { "type": "Point", "coordinates": [ -1.743849718024168, 51.921578456975702 ] } },
  { "type": "Feature", "properties": { "name": "Windrush (Slade Barn Stream to Dikler)", "WBID": "GB106039030480" }, "geometry": { "type": "Point", "coordinates": [ -1.799421869025301, 51.896273532521946 ] } },
  { "type": "Feature", "properties": { "name": "Chalvey Ditches at Slough", "WBID": "GB106039023550" }, "geometry": { "type": "Point", "coordinates": [ -0.632184512579364, 51.514761676247709 ] } },
  { "type": "Feature", "properties": { "name": "Chalvey Ditches", "WBID": "GB106039023550" }, "geometry": { "type": "Point", "coordinates": [ -0.626203036649176, 51.509055561507992 ] } },
  { "type": "Feature", "properties": { "name": "Thames (Cookham to Egham)", "WBID": "GB106039023231" }, "geometry": { "type": "Point", "coordinates": [ -0.616614342433359, 51.482400020139551 ] } },
  { "type": "Feature", "properties": { "name": "Thames (Egham to Teddington)", "WBID": "GB106039023232" }, "geometry": { "type": "Point", "coordinates": [ -0.411487910953671, 51.40068488155309 ] } },
  { "type": "Feature", "properties": { "name": "Wraysbury No1 Gravel Pit", "WBID": "GB30642430" }, "geometry": { "type": "Point", "coordinates": [ -0.556078270492302, 51.463049488212022 ] } },
  { "type": "Feature", "properties": { "name": "Bull Brook", "WBID": "GB106039017670" }, "geometry": { "type": "Point", "coordinates": [ -0.730766041604227, 51.420851567945697 ] } },
  { "type": "Feature", "properties": { "name": "Roundmoor Ditch and Boveney Ditch", "WBID": "GB106039023540" }, "geometry": { "type": "Point", "coordinates": [ -0.646498331259201, 51.501331727072184 ] } },
  { "type": "Feature", "properties": { "name": "Cut at west Bracknell", "WBID": "GB106039017660" }, "geometry": { "type": "Point", "coordinates": [ -0.760536857230998, 51.404508526835528 ] } },
  { "type": "Feature", "properties": { "name": "Cut (Warfield to north Bracknell)", "WBID": "GB106039017680" }, "geometry": { "type": "Point", "coordinates": [ -0.75329422492099, 51.432100132266527 ] } },
  { "type": "Feature", "properties": { "name": "Knight Reservoir", "WBID": "GB30642791" }, "geometry": { "type": "Point", "coordinates": [ -0.395449749800512, 51.399038600305687 ] } },
  { "type": "Feature", "properties": { "name": "Salthill Stream", "WBID": "GB106039023530" }, "geometry": { "type": "Point", "coordinates": [ -0.596682836952424, 51.528613379330423 ] } },
  { "type": "Feature", "properties": { "name": "Maidenhead Ditch", "WBID": "GB106039023511" }, "geometry": { "type": "Point", "coordinates": [ -0.715571417576751, 51.528015488086794 ] } },
  { "type": "Feature", "properties": { "name": "Cut (Binfield to River Thames confluence) and Maidenhead Ditch", "WBID": "GB106039023510" }, "geometry": { "type": "Point", "coordinates": [ -0.739978142409253, 51.482487864455614 ] } },
  { "type": "Feature", "properties": { "name": "Bessborough Reservoir", "WBID": "GB30642779" }, "geometry": { "type": "Point", "coordinates": [ -0.388696901588907, 51.401456944255834 ] } },
  { "type": "Feature", "properties": { "name": "Englemere Pond", "WBID": "GB30642757" }, "geometry": { "type": "Point", "coordinates": [ -0.698048898561739, 51.409949755645847 ] } },
  { "type": "Feature", "properties": { "name": "Littleworth Ponds", "WBID": "GB30647022" }, "geometry": { "type": "Point", "coordinates": [ -0.650441629785385, 51.568472454767431 ] } },
  { "type": "Feature", "properties": { "name": "Quin", "WBID": "GB106038040120" }, "geometry": { "type": "Point", "coordinates": [ 0.028575128935704, 51.957683512649815 ] } },
  { "type": "Feature", "properties": { "name": "Mimram (from Welwyn to confluence with Lee)", "WBID": "GB106038033270" }, "geometry": { "type": "Point", "coordinates": [ -0.177537630052395, 51.816483575298221 ] } },
  { "type": "Feature", "properties": { "name": "Mimram (Codicote Bottom to Lee)", "WBID": "GB106038033270" }, "geometry": { "type": "Point", "coordinates": [ -0.180051848406239, 51.817716419808875 ] } },
  { "type": "Feature", "properties": { "name": "Mimram (St Pauls Walden to Welwyn)", "WBID": "GB106038033460" }, "geometry": { "type": "Point", "coordinates": [ -0.281076788345333, 51.874063074163061 ] } },
  { "type": "Feature", "properties": { "name": "Mimram (Whitwell to Codicote Bottom)", "WBID": "GB106038033460" }, "geometry": { "type": "Point", "coordinates": [ -0.281100720910534, 51.874244373105036 ] } },
  { "type": "Feature", "properties": { "name": "Pincey Brook", "WBID": "GB106038033380" }, "geometry": { "type": "Point", "coordinates": [ 0.216358005800909, 51.823818246291992 ] } },
  { "type": "Feature", "properties": { "name": "Lee (from Luton Hoo Lakes to Hertford)", "WBID": "GB106038033392" }, "geometry": { "type": "Point", "coordinates": [ -0.230305581602084, 51.797497133708774 ] } },
  { "type": "Feature", "properties": { "name": "Stort and Navigation, B Stortford to Harlow", "WBID": "GB106038033281" }, "geometry": { "type": "Point", "coordinates": [ 0.160394861819623, 51.830550857758482 ] } },
  { "type": "Feature", "properties": { "name": "Stort and Navigation, Harlow to Lee", "WBID": "GB106038033282" }, "geometry": { "type": "Point", "coordinates": [ 0.068669617212408, 51.780503302425828 ] } },
  { "type": "Feature", "properties": { "name": "Lee Navigation (Hertford and Ware)", "WBID": "GB106038033240" }, "geometry": { "type": "Point", "coordinates": [ -0.025264471072194, 51.798327899821899 ] } },
  { "type": "Feature", "properties": { "name": "Lee Navigation (Hertford to Fieldes Weir)", "WBID": "GB106038033240" }, "geometry": { "type": "Point", "coordinates": [ -0.024918823852698, 51.79716194571499 ] } },
  { "type": "Feature", "properties": { "name": "Fiddlers Brook", "WBID": "GB106038033260" }, "geometry": { "type": "Point", "coordinates": [ 0.095273216443075, 51.802421240927472 ] } },
  { "type": "Feature", "properties": { "name": "Stort (Stanstead Brook to Farnham Brook)", "WBID": "GB106038033340" }, "geometry": { "type": "Point", "coordinates": [ 0.175565368606385, 51.886911138798347 ] } },
  { "type": "Feature", "properties": { "name": "Stort and Bourne Brook", "WBID": "GB106038033340" }, "geometry": { "type": "Point", "coordinates": [ 0.170075069405385, 51.886156563334005 ] } },
  { "type": "Feature", "properties": { "name": "Rib (from confluence with Quin to Lee Navigation)", "WBID": "GB106038033360" }, "geometry": { "type": "Point", "coordinates": [ -0.011286302084855, 51.851196824726166 ] } },
  { "type": "Feature", "properties": { "name": "Ash (from Meesden to confluence with Bury Green Brook)", "WBID": "GB106038040100" }, "geometry": { "type": "Point", "coordinates": [ 0.085760299403933, 51.913910955337329 ] } },
  { "type": "Feature", "properties": { "name": "Stevenage Brook", "WBID": "GB106038033410" }, "geometry": { "type": "Point", "coordinates": [ -0.169800716803445, 51.879700657377732 ] } },
  { "type": "Feature", "properties": { "name": "Stort (at Clavering)", "WBID": "GB106038040130" }, "geometry": { "type": "Point", "coordinates": [ 0.143637535661446, 51.945379052428109 ] } },
  { "type": "Feature", "properties": { "name": "Lee (from Luton to Luton Hoo Lakes)", "WBID": "GB106038033391" }, "geometry": { "type": "Point", "coordinates": [ -0.410835774464851, 51.882658198654426 ] } },
  { "type": "Feature", "properties": { "name": "Ash (from confluence with Bury Green Brook to Lee)", "WBID": "GB106038033290" }, "geometry": { "type": "Point", "coordinates": [ 0.033418128815115, 51.820959621814673 ] } },
  { "type": "Feature", "properties": { "name": "Cannons Brook", "WBID": "GB106038033220" }, "geometry": { "type": "Point", "coordinates": [ 0.065758431767226, 51.774909073221103 ] } },
  { "type": "Feature", "properties": { "name": "Beane (from confluence with Stevenage Brook to Lee)", "WBID": "GB106038033310" }, "geometry": { "type": "Point", "coordinates": [ -0.098123759211189, 51.829598714126988 ] } },
  { "type": "Feature", "properties": { "name": "Farthinghoe Stream (Source to Cherwell) and tributaries", "WBID": "GB106039037290" }, "geometry": { "type": "Point", "coordinates": [ -1.254236305101205, 52.055186950211464 ] } },
  { "type": "Feature", "properties": { "name": "Hanwell Brook", "WBID": "GB106039037340" }, "geometry": { "type": "Point", "coordinates": [ -1.374235088991483, 52.120335562178667 ] } },
  { "type": "Feature", "properties": { "name": "Bloxham Brook (Source to Sor Brook)", "WBID": "GB106039037240" }, "geometry": { "type": "Point", "coordinates": [ -1.371923652761119, 52.01575093631336 ] } },
  { "type": "Feature", "properties": { "name": "Cherwell (Source to Trafford Bridge)", "WBID": "GB106039042650" }, "geometry": { "type": "Point", "coordinates": [ -1.226914623093889, 52.174576806565646 ] } },
  { "type": "Feature", "properties": { "name": "Bayswater Brook", "WBID": "GB106039029780" }, "geometry": { "type": "Point", "coordinates": [ -1.23591575546551, 51.785346318915884 ] } },
  { "type": "Feature", "properties": { "name": "Sor Brook (Source to Broughton)", "WBID": "GB106039037320" }, "geometry": { "type": "Point", "coordinates": [ -1.404167792359197, 52.091426091416722 ] } },
  { "type": "Feature", "properties": { "name": "Upper Swere (Source to Wigginton)", "WBID": "GB106039037200" }, "geometry": { "type": "Point", "coordinates": [ -1.476824786331771, 51.977243284957481 ] } },
  { "type": "Feature", "properties": { "name": "Cherwell (Cropredy to Nell Bridge)", "WBID": "GB106039037310" }, "geometry": { "type": "Point", "coordinates": [ -1.299760988526928, 52.051875026000637 ] } },
  { "type": "Feature", "properties": { "name": "Sor Brook  (Broughton to Adderbury)", "WBID": "GB106039037260" }, "geometry": { "type": "Point", "coordinates": [ -1.352517153081095, 52.031722389632954 ] } },
  { "type": "Feature", "properties": { "name": "Sor Brook  (Broughton to Cherwell)", "WBID": "GB106039037260" }, "geometry": { "type": "Point", "coordinates": [ -1.336631431370648, 52.023648963468169 ] } },
  { "type": "Feature", "properties": { "name": "Ashby Brook (Source to Cherwell)", "WBID": "GB106039037360" }, "geometry": { "type": "Point", "coordinates": [ -1.203218554678346, 52.140238388181473 ] } },
  { "type": "Feature", "properties": { "name": "Clayton and Wormleighton Brook, Source to Highfurlong Brook", "WBID": "GB106039037370" }, "geometry": { "type": "Point", "coordinates": [ -1.317518033768941, 52.142417864248792 ] } },
  { "type": "Feature", "properties": { "name": "Cherwell (Ray to Thames) and Woodeaton Brook", "WBID": "GB106039029800" }, "geometry": { "type": "Point", "coordinates": [ -1.247589335514707, 51.778511062903206 ] } },
  { "type": "Feature", "properties": { "name": "Tadmarton Stream (Source to Sor Brook)", "WBID": "GB106039037270" }, "geometry": { "type": "Point", "coordinates": [ -1.402588984301228, 52.035089167383525 ] } },
  { "type": "Feature", "properties": { "name": "Swere (Wigginton to Cherwell)", "WBID": "GB106039037220" }, "geometry": { "type": "Point", "coordinates": [ -1.361229522233215, 51.996484169619727 ] } },
  { "type": "Feature", "properties": { "name": "Cherwell (Ashby Brook to Cropredy)", "WBID": "GB106039037350" }, "geometry": { "type": "Point", "coordinates": [ -1.255287096173057, 52.122695947416688 ] } },
  { "type": "Feature", "properties": { "name": "Grimsbury Reservoir", "WBID": "GB30639472" }, "geometry": { "type": "Point", "coordinates": [ -1.331225826279046, 52.075741120975245 ] } },
  { "type": "Feature", "properties": { "name": "Ockley Brook and Croughton Brook (Source to Cherwell)", "WBID": "GB106039037230" }, "geometry": { "type": "Point", "coordinates": [ -1.224048770417081, 51.986801178504855 ] } },
  { "type": "Feature", "properties": { "name": "Cherwell (Nell Bridge to Bletchingdon)", "WBID": "GB106039037431" }, "geometry": { "type": "Point", "coordinates": [ -1.292669593450085, 51.922205066141352 ] } },
  { "type": "Feature", "properties": { "name": "Cherwell (Bletchingdon to Ray)", "WBID": "GB106039037432" }, "geometry": { "type": "Point", "coordinates": [ -1.27825892663196, 51.832674215089277 ] } },
  { "type": "Feature", "properties": { "name": "Gubbinshole and Broadmoor ditch to Ray (Oxon)", "WBID": "GB106039030110" }, "geometry": { "type": "Point", "coordinates": [ -1.038458553640411, 51.89385302332964 ] } },
  { "type": "Feature", "properties": { "name": "Town Brook at Bicester", "WBID": "GB106039030150" }, "geometry": { "type": "Point", "coordinates": [ -1.157572972956017, 51.903959724522743 ] } },
  { "type": "Feature", "properties": { "name": "Ray and tributaries NorthEast of Grendon Underwood", "WBID": "GB106039030100" }, "geometry": { "type": "Point", "coordinates": [ -0.985232079555665, 51.885473186561157 ] } },
  { "type": "Feature", "properties": { "name": "Oxon Ray (upstream A41 to Cherwell) including Otmoor", "WBID": "GB106039030090" }, "geometry": { "type": "Point", "coordinates": [ -1.156097845821624, 51.845615435372387 ] } },
  { "type": "Feature", "properties": { "name": "Summerstown Ditch and Launton and Cutters Brook", "WBID": "GB106039030120" }, "geometry": { "type": "Point", "coordinates": [ -1.085751486436738, 51.896671509643383 ] } },
  { "type": "Feature", "properties": { "name": "Gallos Brook (Source to Bletchingdon Stream)", "WBID": "GB106039030130" }, "geometry": { "type": "Point", "coordinates": [ -1.244041747092532, 51.888211058507643 ] } },
  { "type": "Feature", "properties": { "name": "Gallos Brook", "WBID": "GB106039030130" }, "geometry": { "type": "Point", "coordinates": [ -1.24186880170733, 51.881670286726184 ] } },
  { "type": "Feature", "properties": { "name": "Langford Brook (Bicester to Ray inc Gagle Brook)", "WBID": "GB106039030140" }, "geometry": { "type": "Point", "coordinates": [ -1.167373722742345, 51.868787491742381 ] } },
  { "type": "Feature", "properties": { "name": "Langford Brook (source to downstream A41)", "WBID": "GB106039030160" }, "geometry": { "type": "Point", "coordinates": [ -1.116364542452327, 51.913810972329905 ] } },
  { "type": "Feature", "properties": { "name": "Bletchingdon Stream", "WBID": "GB106039030080" }, "geometry": { "type": "Point", "coordinates": [ -1.250241642138141, 51.845267724130792 ] } },
  { "type": "Feature", "properties": { "name": "Ludgershall Brook and Muswellhill Brook", "WBID": "GB106039030060" }, "geometry": { "type": "Point", "coordinates": [ -1.049593265265834, 51.869684336653378 ] } },
  { "type": "Feature", "properties": { "name": "Northfield Brook (Source to Thames) at Sandford", "WBID": "GB106039030180" }, "geometry": { "type": "Point", "coordinates": [ -1.22513394434663, 51.714444506764366 ] } },
  { "type": "Feature", "properties": { "name": "Moor Ditch and Ladygrove Ditch", "WBID": "GB106039023630" }, "geometry": { "type": "Point", "coordinates": [ -1.265792332105984, 51.621952489067091 ] } },
  { "type": "Feature", "properties": { "name": "Letcombe Brook", "WBID": "GB106039023350" }, "geometry": { "type": "Point", "coordinates": [ -1.423380147412818, 51.606132177510403 ] } },
  { "type": "Feature", "properties": { "name": "Thames (Evenlode to Thame)", "WBID": "GB106039030334" }, "geometry": { "type": "Point", "coordinates": [ -1.256074683753438, 51.704589781718873 ] } },
  { "type": "Feature", "properties": { "name": "Stutfield Brook (source to Ock)", "WBID": "GB106039023340" }, "geometry": { "type": "Point", "coordinates": [ -1.485588917531015, 51.631278062191129 ] } },
  { "type": "Feature", "properties": { "name": "Sandford Brook (source to Ock)", "WBID": "GB106039023410" }, "geometry": { "type": "Point", "coordinates": [ -1.322862065249678, 51.683449162911479 ] } },
  { "type": "Feature", "properties": { "name": "Frilford and Marcham Brook", "WBID": "GB106039023420" }, "geometry": { "type": "Point", "coordinates": [ -1.359440308147057, 51.691846643225851 ] } },
  { "type": "Feature", "properties": { "name": "Ginge Brook and Mill Brook", "WBID": "GB106039023660" }, "geometry": { "type": "Point", "coordinates": [ -1.324885584941966, 51.611564604023521 ] } },
  { "type": "Feature", "properties": { "name": "Cow Common Brook and Portobello Ditch", "WBID": "GB106039023360" }, "geometry": { "type": "Point", "coordinates": [ -1.354268465739393, 51.644141920711412 ] } },
  { "type": "Feature", "properties": { "name": "Childrey Brook and Norbrook at Common Barn", "WBID": "GB106039023380" }, "geometry": { "type": "Point", "coordinates": [ -1.370409878761346, 51.652412472028104 ] } },
  { "type": "Feature", "properties": { "name": "Childrey Brook and tributaries", "WBID": "GB106039023370" }, "geometry": { "type": "Point", "coordinates": [ -1.43976888971885, 51.62093627656045 ] } },
  { "type": "Feature", "properties": { "name": "Childrey and Woodhill Brooks", "WBID": "GB106039023370" }, "geometry": { "type": "Point", "coordinates": [ -1.43999554532242, 51.621200415197457 ] } },
  { "type": "Feature", "properties": { "name": "Ock (Source to Stutfield Brook) and tributaries", "WBID": "GB106039023400" }, "geometry": { "type": "Point", "coordinates": [ -1.557217140941164, 51.619244882982521 ] } },
  { "type": "Feature", "properties": { "name": "Ock (to Cherbury Brook)", "WBID": "GB106039023400" }, "geometry": { "type": "Point", "coordinates": [ -1.541899230404986, 51.623108433470712 ] } },
  { "type": "Feature", "properties": { "name": "Liden Brook, Swindon", "WBID": "GB106039022860" }, "geometry": { "type": "Point", "coordinates": [ -1.710504508893585, 51.551428473900749 ] } },
  { "type": "Feature", "properties": { "name": "Ampney and Poulton Brooks (Source to Thames)", "WBID": "GB106039030300" }, "geometry": { "type": "Point", "coordinates": [ -1.884182738083159, 51.707123365325877 ] } },
  { "type": "Feature", "properties": { "name": "Cole (Bower Bridge to Thames) including Coleshill", "WBID": "GB106039023730" }, "geometry": { "type": "Point", "coordinates": [ -1.681824889772085, 51.653441219200687 ] } },
  { "type": "Feature", "properties": { "name": "Waterloo Ditch (East of Coleshill)", "WBID": "GB106039022950" }, "geometry": { "type": "Point", "coordinates": [ -1.631292431974237, 51.632073965293429 ] } },
  { "type": "Feature", "properties": { "name": "Thames (Waterhaybridge to Cricklade) and Chelworth Brook", "WBID": "GB106039022960" }, "geometry": { "type": "Point", "coordinates": [ -1.888850553602736, 51.644712241837126 ] } },
  { "type": "Feature", "properties": { "name": "Key (Source to Thames)", "WBID": "GB106039023650" }, "geometry": { "type": "Point", "coordinates": [ -1.880322741521589, 51.612790629142481 ] } },
  { "type": "Feature", "properties": { "name": "Cerney Wick Brook (source to Thames)", "WBID": "GB106039023800" }, "geometry": { "type": "Point", "coordinates": [ -1.917833637436087, 51.658743753201875 ] } },
  { "type": "Feature", "properties": { "name": "Churn  (Baunton to Cricklade)", "WBID": "GB106039029750" }, "geometry": { "type": "Point", "coordinates": [ -1.93400106200901, 51.695357984109897 ] } },
  { "type": "Feature", "properties": { "name": "Coate Water", "WBID": "GB30642155" }, "geometry": { "type": "Point", "coordinates": [ -1.746297370466153, 51.537095889368508 ] } },
  { "type": "Feature", "properties": { "name": "Ray (Wiltshire) source to Lydiard Brook", "WBID": "GB106039023320" }, "geometry": { "type": "Point", "coordinates": [ -1.80426533703559, 51.545080969681329 ] } },
  { "type": "Feature", "properties": { "name": "Churn (source to Perrots Brook)", "WBID": "GB106039029810" }, "geometry": { "type": "Point", "coordinates": [ -2.004387903482386, 51.805745421492162 ] } },
  { "type": "Feature", "properties": { "name": "Thornhill Ditch and tributaries at Cotswolds Water Park", "WBID": "GB106039029760" }, "geometry": { "type": "Point", "coordinates": [ -1.723641531032532, 51.700859411122934 ] } },
  { "type": "Feature", "properties": { "name": "Lenta Brook, East of Swindon", "WBID": "GB106039022870" }, "geometry": { "type": "Point", "coordinates": [ -1.669454051841763, 51.564794662818102 ] } },
  { "type": "Feature", "properties": { "name": "Share ditch", "WBID": "GB106039023680" }, "geometry": { "type": "Point", "coordinates": [ -1.776054037362973, 51.640688836380924 ] } },
  { "type": "Feature", "properties": { "name": "Swill Brook (source to Ashton Keynes)", "WBID": "GB106039023700" }, "geometry": { "type": "Point", "coordinates": [ -1.991526408280219, 51.634703169441856 ] } },
  { "type": "Feature", "properties": { "name": "Elkstone Brook", "WBID": "GB106039029790" }, "geometry": { "type": "Point", "coordinates": [ -1.993932278694277, 51.763780238439153 ] } },
  { "type": "Feature", "properties": { "name": "Coln (Source to Coln Rogers)", "WBID": "GB106039029991" }, "geometry": { "type": "Point", "coordinates": [ -1.930269994862266, 51.839246407161028 ] } },
  { "type": "Feature", "properties": { "name": "Cotswold Water Park Lake 12", "WBID": "GB30641559" }, "geometry": { "type": "Point", "coordinates": [ -1.909331418944468, 51.670225268090498 ] } },
  { "type": "Feature", "properties": { "name": "Cole and Dorcan Brook (Source to Liden Brook confluence)", "WBID": "GB106039022890" }, "geometry": { "type": "Point", "coordinates": [ -1.731260009757382, 51.571908945993393 ] } },
  { "type": "Feature", "properties": { "name": "Cole (source to Lenta Brook)", "WBID": "GB106039022890" }, "geometry": { "type": "Point", "coordinates": [ -1.726320221496841, 51.573355661480157 ] } },
  { "type": "Feature", "properties": { "name": "Derry Brook and Leighfield Brook", "WBID": "GB106039023620" }, "geometry": { "type": "Point", "coordinates": [ -1.947069633900919, 51.612574393558063 ] } },
  { "type": "Feature", "properties": { "name": "Derry Brook", "WBID": "GB106039023620" }, "geometry": { "type": "Point", "coordinates": [ -1.946951916636367, 51.612722705257397 ] } },
  { "type": "Feature", "properties": { "name": "Daglingworth Stream (Source to Churn)", "WBID": "GB106039029770" }, "geometry": { "type": "Point", "coordinates": [ -1.998332238442112, 51.738920383709399 ] } },
  { "type": "Feature", "properties": { "name": "Bydemill Brook (Source to Thames)", "WBID": "GB106039023710" }, "geometry": { "type": "Point", "coordinates": [ -1.731541833323189, 51.639014397479066 ] } },
  { "type": "Feature", "properties": { "name": "Haydon Wick Brook", "WBID": "GB106039023331" }, "geometry": { "type": "Point", "coordinates": [ -1.806677978066212, 51.594114348679724 ] } },
  { "type": "Feature", "properties": { "name": "Thames (Kemble to Waterhay Bridge)", "WBID": "GB106039023760" }, "geometry": { "type": "Point", "coordinates": [ -1.982687873199678, 51.662258195741067 ] } },
  { "type": "Feature", "properties": { "name": "Thames (Churn to Coln)", "WBID": "GB106039022990" }, "geometry": { "type": "Point", "coordinates": [ -1.790793648473903, 51.653691448127056 ] } },
  { "type": "Feature", "properties": { "name": "Lydiard and Shaw Brooks at Swindon", "WBID": "GB106039023310" }, "geometry": { "type": "Point", "coordinates": [ -1.854241192449968, 51.570704753676068 ] } },
  { "type": "Feature", "properties": { "name": "Lydiard Brook", "WBID": "GB106039023310" }, "geometry": { "type": "Point", "coordinates": [ -1.854206887380394, 51.57087558797474 ] } },
  { "type": "Feature", "properties": { "name": "Ver", "WBID": "GB106039029920" }, "geometry": { "type": "Point", "coordinates": [ -0.383220591475863, 51.777810023541193 ] } },
  { "type": "Feature", "properties": { "name": "Pinn", "WBID": "GB106039023070" }, "geometry": { "type": "Point", "coordinates": [ -0.42440920780501, 51.572550543852174 ] } },
  { "type": "Feature", "properties": { "name": "Misbourne", "WBID": "GB106039029830" }, "geometry": { "type": "Point", "coordinates": [ -0.59333221956008, 51.637874028740164 ] } },
  { "type": "Feature", "properties": { "name": "Bulbourne", "WBID": "GB106039029890" }, "geometry": { "type": "Point", "coordinates": [ -0.531045957028616, 51.752657060871698 ] } },
  { "type": "Feature", "properties": { "name": "Queen Mary Reservoir", "WBID": "GB30642639" }, "geometry": { "type": "Point", "coordinates": [ -0.459385182470724, 51.415842400006319 ] } },
  { "type": "Feature", "properties": { "name": "Gade (from confluence with Bulbourne to Chess)", "WBID": "GB106039029860" }, "geometry": { "type": "Point", "coordinates": [ -0.439221358521635, 51.664172011797909 ] } },
  { "type": "Feature", "properties": { "name": "King George VI Reservoir", "WBID": "GB30642488" }, "geometry": { "type": "Point", "coordinates": [ -0.502867483198257, 51.449277717244279 ] } },
  { "type": "Feature", "properties": { "name": "Colne (upper stretch, Hatfield to confluence with Ver)", "WBID": "GB106039029820" }, "geometry": { "type": "Point", "coordinates": [ -0.304799171176036, 51.714858167034386 ] } },
  { "type": "Feature", "properties": { "name": "Upper Colne and Ellen Brook", "WBID": "GB106039029820" }, "geometry": { "type": "Point", "coordinates": [ -0.293581540141868, 51.722444101827961 ] } },
  { "type": "Feature", "properties": { "name": "Horton Brook", "WBID": "GB106039023040" }, "geometry": { "type": "Point", "coordinates": [ -0.540313380192236, 51.495249944139864 ] } },
  { "type": "Feature", "properties": { "name": "Mid Colne Valley", "WBID": "GB30641907" }, "geometry": { "type": "Point", "coordinates": [ -0.494520890205257, 51.593677911324882 ] } },
  { "type": "Feature", "properties": { "name": "Colne (from Confluence with Ver to Gade)", "WBID": "GB106039029840" }, "geometry": { "type": "Point", "coordinates": [ -0.390950882289803, 51.651437173520272 ] } },
  { "type": "Feature", "properties": { "name": "Alderbourne", "WBID": "GB106039023080" }, "geometry": { "type": "Point", "coordinates": [ -0.527218396412188, 51.554491332761728 ] } },
  { "type": "Feature", "properties": { "name": "Heron Lake", "WBID": "GB30642538" }, "geometry": { "type": "Point", "coordinates": [ -0.53211389269461, 51.444583992622817 ] } },
  { "type": "Feature", "properties": { "name": "Colne Brook (from confluence with Alderbourne to confluence with Horton Brook)", "WBID": "GB106039023010" }, "geometry": { "type": "Point", "coordinates": [ -0.514809620233757, 51.487430442724445 ] } },
  { "type": "Feature", "properties": { "name": "Colne Brook", "WBID": "GB106039023010" }, "geometry": { "type": "Point", "coordinates": [ -0.514846768486257, 51.488892960214507 ] } },
  { "type": "Feature", "properties": { "name": "Queensmead", "WBID": "GB30642569" }, "geometry": { "type": "Point", "coordinates": [ -0.529526981401303, 51.438454470475648 ] } },
  { "type": "Feature", "properties": { "name": "Gade (Upper stretch Great Gaddesden to confluence with Bulbourne / GUC)", "WBID": "GB106039029900" }, "geometry": { "type": "Point", "coordinates": [ -0.497072789131855, 51.780510528242253 ] } },
  { "type": "Feature", "properties": { "name": "Gade (Upper stretch Great Gaddesden to confluence with Bulbourne", "WBID": "GB106039029900" }, "geometry": { "type": "Point", "coordinates": [ -0.496669096423887, 51.779951780492716 ] } },
  { "type": "Feature", "properties": { "name": "Chess", "WBID": "GB106039029870" }, "geometry": { "type": "Point", "coordinates": [ -0.54038203977773, 51.676540223149317 ] } },
  { "type": "Feature", "properties": { "name": "Wraysbury Reservoir", "WBID": "GB30642417" }, "geometry": { "type": "Point", "coordinates": [ -0.526085824830169, 51.461240299900332 ] } },
  { "type": "Feature", "properties": { "name": "The Queen Mother Reservoir", "WBID": "GB30642334" }, "geometry": { "type": "Point", "coordinates": [ -0.550391312366823, 51.482180235160456 ] } },
  { "type": "Feature", "properties": { "name": "Wraysbury II Gravel Pit/ Wellapool Lake", "WBID": "GB30642489" }, "geometry": { "type": "Point", "coordinates": [ -0.548668000401874, 51.453062109669325 ] } },
  { "type": "Feature", "properties": { "name": "Mole (Hersham to R. Thames conf at East Molesey)", "WBID": "GB106039017622" }, "geometry": { "type": "Point", "coordinates": [ -0.36085914104489, 51.389348174841061 ] } },
  { "type": "Feature", "properties": { "name": "Rythe", "WBID": "GB106039017650" }, "geometry": { "type": "Point", "coordinates": [ -0.341384050866548, 51.376806041161764 ] } },
  { "type": "Feature", "properties": { "name": "Mole (Horley to Hersham)", "WBID": "GB106039017621" }, "geometry": { "type": "Point", "coordinates": [ -0.322798976106457, 51.273824028925929 ] } },
  { "type": "Feature", "properties": { "name": "Black Pond", "WBID": "GB30643054" }, "geometry": { "type": "Point", "coordinates": [ -0.380874414204428, 51.347997366996331 ] } },
  { "type": "Feature", "properties": { "name": "Pipp Brook", "WBID": "GB106039017580" }, "geometry": { "type": "Point", "coordinates": [ -0.354232552398886, 51.22139150781539 ] } },
  { "type": "Feature", "properties": { "name": "Downside Ditches and Bookham Brook", "WBID": "GB106039017600" }, "geometry": { "type": "Point", "coordinates": [ -0.397376230096127, 51.295565026569165 ] } },
  { "type": "Feature", "properties": { "name": "Island Barn Reservoir", "WBID": "GB30642841" }, "geometry": { "type": "Point", "coordinates": [ -0.364684407567663, 51.390839672561675 ] } },
  { "type": "Feature", "properties": { "name": "Tanners Brook (Holmewood to River Mole confluence at Brockham)", "WBID": "GB106039017570" }, "geometry": { "type": "Point", "coordinates": [ -0.293510716673084, 51.22378392922348 ] } },
  { "type": "Feature", "properties": { "name": "The Rye at Ashtead", "WBID": "GB106039017610" }, "geometry": { "type": "Point", "coordinates": [ -0.343772110690815, 51.30812941896756 ] } },
  { "type": "Feature", "properties": { "name": "Rye Brook at Ashtead", "WBID": "GB106039017610" }, "geometry": { "type": "Point", "coordinates": [ -0.344062887990588, 51.307877385504931 ] } },
  { "type": "Feature", "properties": { "name": "Tilgate Brook, Gatwick Stream and Crawters Brook at Crawley", "WBID": "GB106039017500" }, "geometry": { "type": "Point", "coordinates": [ -0.161501848587853, 51.140933340598984 ] } },
  { "type": "Feature", "properties": { "name": "Tilgate Brook and Gatwick Stream at Crawley", "WBID": "GB106039017500" }, "geometry": { "type": "Point", "coordinates": [ -0.16125796970661, 51.141478997472795 ] } },
  { "type": "Feature", "properties": { "name": "Burstow Stream", "WBID": "GB106039017520" }, "geometry": { "type": "Point", "coordinates": [ -0.134648101441991, 51.154831635017757 ] } },
  { "type": "Feature", "properties": { "name": "Ifield Brook", "WBID": "GB106039017460" }, "geometry": { "type": "Point", "coordinates": [ -0.222077003842967, 51.119370118504975 ] } },
  { "type": "Feature", "properties": { "name": "Stanford Brook", "WBID": "GB106039017450" }, "geometry": { "type": "Point", "coordinates": [ -0.169399282768865, 51.087735148216495 ] } },
  { "type": "Feature", "properties": { "name": "Douster Pond", "WBID": "GB30644358" }, "geometry": { "type": "Point", "coordinates": [ -0.223922691994713, 51.094614634753142 ] } },
  { "type": "Feature", "properties": { "name": "Redhill Brook", "WBID": "GB106039017590" }, "geometry": { "type": "Point", "coordinates": [ -0.143659453817687, 51.237611442487662 ] } },
  { "type": "Feature", "properties": { "name": "Mole upstream of Horley", "WBID": "GB106039017481" }, "geometry": { "type": "Point", "coordinates": [ -0.194394374063025, 51.145392153942268 ] } },
  { "type": "Feature", "properties": { "name": "Salfords Stream (Redhill Brook confluence upstream)", "WBID": "GB106039017560" }, "geometry": { "type": "Point", "coordinates": [ -0.104487544132102, 51.214563796817799 ] } },
  { "type": "Feature", "properties": { "name": "Inkpen Stream (source to Kennet)", "WBID": "GB106039017360" }, "geometry": { "type": "Point", "coordinates": [ -1.478561693256977, 51.403549461146987 ] } },
  { "type": "Feature", "properties": { "name": "West End Brook (tributary of Foudry Brook)", "WBID": "GB106039017300" }, "geometry": { "type": "Point", "coordinates": [ -1.06453141370864, 51.365488630017602 ] } },
  { "type": "Feature", "properties": { "name": "Foudry Brook (West End Brook to M4)", "WBID": "GB106039017380" }, "geometry": { "type": "Point", "coordinates": [ -1.012106209020365, 51.38531411270764 ] } },
  { "type": "Feature", "properties": { "name": "Kennet and Foudry Brook and Clayhill Brook in Reading", "WBID": "GB106039023120" }, "geometry": { "type": "Point", "coordinates": [ -1.029030826774823, 51.419866586121707 ] } },
  { "type": "Feature", "properties": { "name": "Clayhill Brook", "WBID": "GB106039023120" }, "geometry": { "type": "Point", "coordinates": [ -1.050329551534871, 51.416105181969371 ] } },
  { "type": "Feature", "properties": { "name": "Middle Kennet (Marlborough to Hungerford)", "WBID": "GB106039023173" }, "geometry": { "type": "Point", "coordinates": [ -1.603598660326378, 51.430705477345676 ] } },
  { "type": "Feature", "properties": { "name": "Burghfield Brook", "WBID": "GB106039017410" }, "geometry": { "type": "Point", "coordinates": [ -1.024730370546349, 51.403806615937512 ] } },
  { "type": "Feature", "properties": { "name": "Shalbourne  (source to Kennet at Hungerford)", "WBID": "GB106039017370" }, "geometry": { "type": "Point", "coordinates": [ -1.537548146774224, 51.387591256212325 ] } },
  { "type": "Feature", "properties": { "name": "Farnham Flint or Englefield Lagoon", "WBID": "GB30642611" }, "geometry": { "type": "Point", "coordinates": [ -1.012566688685601, 51.428139204933629 ] } },
  { "type": "Feature", "properties": { "name": "Hollingtonstand Milford Lake (source to Enborne)", "WBID": "GB106039017210" }, "geometry": { "type": "Point", "coordinates": [ -1.364300250775146, 51.360262155110767 ] } },
  { "type": "Feature", "properties": { "name": "Penwood Stream", "WBID": "GB106039017210" }, "geometry": { "type": "Point", "coordinates": [ -1.364442141349644, 51.36036032089099 ] } },
  { "type": "Feature", "properties": { "name": "Ameys Lake or Theale Lakes", "WBID": "GB30642622" }, "geometry": { "type": "Point", "coordinates": [ -1.057387623011477, 51.428089883550349 ] } },
  { "type": "Feature", "properties": { "name": "Aldbourne", "WBID": "GB106039023200" }, "geometry": { "type": "Point", "coordinates": [ -1.589595360256177, 51.452309216836767 ] } },
  { "type": "Feature", "properties": { "name": "Milford Lake", "WBID": "GB30643126" }, "geometry": { "type": "Point", "coordinates": [ -1.353212602180584, 51.344406541766958 ] } },
  { "type": "Feature", "properties": { "name": "Foudry Brook (Source to WestEnd Brook)", "WBID": "GB106039017190" }, "geometry": { "type": "Point", "coordinates": [ -1.106195721287535, 51.348725471238922 ] } },
  { "type": "Feature", "properties": { "name": "Silchester Brook", "WBID": "GB106039017190" }, "geometry": { "type": "Point", "coordinates": [ -1.105202984236311, 51.348721909915042 ] } },
  { "type": "Feature", "properties": { "name": "Kennet and Holy Brook", "WBID": "GB106039023140" }, "geometry": { "type": "Point", "coordinates": [ -1.075356498846212, 51.416926811219376 ] } },
  { "type": "Feature", "properties": { "name": "Lower Kennet (Sheffield Bottom to Reading)", "WBID": "GB106039023140" }, "geometry": { "type": "Point", "coordinates": [ -1.075744657045116, 51.415703302394803 ] } },
  { "type": "Feature", "properties": { "name": "Og", "WBID": "GB106039023180" }, "geometry": { "type": "Point", "coordinates": [ -1.727749804688293, 51.433545492788276 ] } },
  { "type": "Feature", "properties": { "name": "Kennet and Avon Canal and Dun above Hungerford", "WBID": "GB106039017390" }, "geometry": { "type": "Point", "coordinates": [ -1.539938655344172, 51.413250174792559 ] } },
  { "type": "Feature", "properties": { "name": "Lambourn (Source to Newbury)", "WBID": "GB106039023220" }, "geometry": { "type": "Point", "coordinates": [ -1.409394461830563, 51.451924820646994 ] } },
  { "type": "Feature", "properties": { "name": "Kingsclere Brook (Source to Enborne)", "WBID": "GB106039017220" }, "geometry": { "type": "Point", "coordinates": [ -1.242837118811218, 51.343357202909949 ] } },
  { "type": "Feature", "properties": { "name": "Winterbourne", "WBID": "GB106039023210" }, "geometry": { "type": "Point", "coordinates": [ -1.344093394928822, 51.442667997842413 ] } },
  { "type": "Feature", "properties": { "name": "Lower Enborne", "WBID": "GB106039017340" }, "geometry": { "type": "Point", "coordinates": [ -1.194378597564739, 51.376264440699472 ] } },
  { "type": "Feature", "properties": { "name": "Middle Kennet (Hungerford to Newbury)", "WBID": "GB106039023174" }, "geometry": { "type": "Point", "coordinates": [ -1.405143869760932, 51.404360188170955 ] } },
  { "type": "Feature", "properties": { "name": "Kennet (Lambourn confluence to Enborne confluence)", "WBID": "GB106039017420" }, "geometry": { "type": "Point", "coordinates": [ -1.221449174602983, 51.391518893616947 ] } },
  { "type": "Feature", "properties": { "name": "Holy Brook", "WBID": "GB106039023141" }, "geometry": { "type": "Point", "coordinates": [ -1.010164018960819, 51.440435422270738 ] } },
  { "type": "Feature", "properties": { "name": "Upper Dun", "WBID": "GB106039017350" }, "geometry": { "type": "Point", "coordinates": [ -1.612286115730789, 51.365046872597297 ] } },
  { "type": "Feature", "properties": { "name": "Earlstone Stream and  Burghclere Brook (source to Enborne)", "WBID": "GB106039017230" }, "geometry": { "type": "Point", "coordinates": [ -1.293520353917814, 51.356682979969456 ] } },
  { "type": "Feature", "properties": { "name": "Froxfield Stream", "WBID": "GB106039017430" }, "geometry": { "type": "Point", "coordinates": [ -1.578646895761224, 51.410050369221317 ] } },
  { "type": "Feature", "properties": { "name": "Berrick Stream and Lady Brook", "WBID": "GB106039023670" }, "geometry": { "type": "Point", "coordinates": [ -1.104751674024545, 51.634708571254158 ] } },
  { "type": "Feature", "properties": { "name": "Ewelme Stream (Source to Thames)", "WBID": "GB106039023610" }, "geometry": { "type": "Point", "coordinates": [ -1.093097626510611, 51.622077149371734 ] } },
  { "type": "Feature", "properties": { "name": "Hamble Brook and Hambleden Stream", "WBID": "GB106039023720" }, "geometry": { "type": "Point", "coordinates": [ -0.870401837504433, 51.572719318514665 ] } },
  { "type": "Feature", "properties": { "name": "Hamble Brook", "WBID": "GB106039023720" }, "geometry": { "type": "Point", "coordinates": [ -0.873454100040016, 51.581802803637302 ] } },
  { "type": "Feature", "properties": { "name": "Wye (Source to High Wycombe fire station)", "WBID": "GB106039023890" }, "geometry": { "type": "Point", "coordinates": [ -0.787644747839216, 51.640026464771339 ] } },
  { "type": "Feature", "properties": { "name": "Wye (High Wycombe fire station to Thames)", "WBID": "GB106039023880" }, "geometry": { "type": "Point", "coordinates": [ -0.707676709446063, 51.603036369529853 ] } },
  { "type": "Feature", "properties": { "name": "Pang", "WBID": "GB106039023300" }, "geometry": { "type": "Point", "coordinates": [ -1.177423336341783, 51.459641312973702 ] } },
  { "type": "Feature", "properties": { "name": "Thames (Reading to Cookham)", "WBID": "GB106039023233" }, "geometry": { "type": "Point", "coordinates": [ -0.832467176858544, 51.535489661486835 ] } },
  { "type": "Feature", "properties": { "name": "Sulham Brook", "WBID": "GB106039023280" }, "geometry": { "type": "Point", "coordinates": [ -1.076211966800634, 51.466300527508402 ] } },
  { "type": "Feature", "properties": { "name": "Thames Wallingford to Caversham", "WBID": "GB106039030331" }, "geometry": { "type": "Point", "coordinates": [ -1.088983442266553, 51.531116693110654 ] } },
  { "type": "Feature", "properties": { "name": "Hughenden Stream", "WBID": "GB106039023900" }, "geometry": { "type": "Point", "coordinates": [ -0.752004190333305, 51.645688278018781 ] } },
  { "type": "Feature", "properties": { "name": "Cholsey Brook and tributaries", "WBID": "GB106039023570" }, "geometry": { "type": "Point", "coordinates": [ -1.15990068082666, 51.578986947551833 ] } },
  { "type": "Feature", "properties": { "name": "Mill Brook and Bradfords Brook system,  Wallingford", "WBID": "GB106039023600" }, "geometry": { "type": "Point", "coordinates": [ -1.190595956182584, 51.588604621311298 ] } },
  { "type": "Feature", "properties": { "name": "Dorton, Chearsley and Waddesdon Brooks", "WBID": "GB106039030400" }, "geometry": { "type": "Point", "coordinates": [ -0.993259016711277, 51.802976255575338 ] } },
  { "type": "Feature", "properties": { "name": "Scotsgrove Brook (upstream Kingsey Cuttle Brook)", "WBID": "GB106039030270" }, "geometry": { "type": "Point", "coordinates": [ -0.872892819601231, 51.772267203885455 ] } },
  { "type": "Feature", "properties": { "name": "Thame (Scotsgrove Brook to Thames)", "WBID": "GB106039030240" }, "geometry": { "type": "Point", "coordinates": [ -1.089064407855646, 51.720660245493285 ] } },
  { "type": "Feature", "properties": { "name": "Baldon Brook (South of Oxford)", "WBID": "GB106039023820" }, "geometry": { "type": "Point", "coordinates": [ -1.163878841580602, 51.69510720327046 ] } },
  { "type": "Feature", "properties": { "name": "Chinnor Brook and Upper Cuttle Brook", "WBID": "GB106039023850" }, "geometry": { "type": "Point", "coordinates": [ -0.951700120201492, 51.729395035510343 ] } },
  { "type": "Feature", "properties": { "name": "Chinor Brook and Sydenham Brook", "WBID": "GB106039023850" }, "geometry": { "type": "Point", "coordinates": [ -0.941148129989747, 51.718608976599839 ] } },
  { "type": "Feature", "properties": { "name": "Peppershill and Shabbington Brooks", "WBID": "GB106039030290" }, "geometry": { "type": "Point", "coordinates": [ -1.032718982044347, 51.772069913391945 ] } },
  { "type": "Feature", "properties": { "name": "Bear Brook and Wendover Brook", "WBID": "GB106039030380" }, "geometry": { "type": "Point", "coordinates": [ -0.772648339236079, 51.806504442798001 ] } },
  { "type": "Feature", "properties": { "name": "Haseley Brook (Latchford Brook to Thame)", "WBID": "GB106039023780" }, "geometry": { "type": "Point", "coordinates": [ -1.088372585824014, 51.69283618183831 ] } },
  { "type": "Feature", "properties": { "name": "Haseley Brook", "WBID": "GB106039023780" }, "geometry": { "type": "Point", "coordinates": [ -1.070838869426909, 51.695428946008271 ] } },
  { "type": "Feature", "properties": { "name": "Stoke Brook Aylesbury", "WBID": "GB106039030320" }, "geometry": { "type": "Point", "coordinates": [ -0.807360921191686, 51.79244788686448 ] } },
  { "type": "Feature", "properties": { "name": "Thame (Aylesbury to Scotsgrove Brook)", "WBID": "GB106039030370" }, "geometry": { "type": "Point", "coordinates": [ -0.919253669140503, 51.798973400554779 ] } },
  { "type": "Feature", "properties": { "name": "Latchford Brook at Tetsworth", "WBID": "GB106039023830" }, "geometry": { "type": "Point", "coordinates": [ -1.033308326630554, 51.713799978465865 ] } },
  { "type": "Feature", "properties": { "name": "Holton Brook and tributaries", "WBID": "GB106039030360" }, "geometry": { "type": "Point", "coordinates": [ -1.130918912952884, 51.779250712750255 ] } },
  { "type": "Feature", "properties": { "name": "Upper Cuttle Brook and tributaries", "WBID": "GB106039023840" }, "geometry": { "type": "Point", "coordinates": [ -0.967980150130571, 51.721668186098874 ] } },
  { "type": "Feature", "properties": { "name": "Cuttle Brook", "WBID": "GB106039023840" }, "geometry": { "type": "Point", "coordinates": [ -0.976153238763875, 51.733443477381989 ] } },
  { "type": "Feature", "properties": { "name": "Hardwick Brook (Source to Thame)", "WBID": "GB106039030430" }, "geometry": { "type": "Point", "coordinates": [ -0.808625753898531, 51.878553220293746 ] } },
  { "type": "Feature", "properties": { "name": "Lewknor Brook", "WBID": "GB106039023750" }, "geometry": { "type": "Point", "coordinates": [ -1.009127294666674, 51.672170445124806 ] } },
  { "type": "Feature", "properties": { "name": "Fleet Marston Brook, Denham Brook,  Pitchcott Brook west", "WBID": "GB106039030420" }, "geometry": { "type": "Point", "coordinates": [ -0.880798977291877, 51.848226257617334 ] } },
  { "type": "Feature", "properties": { "name": "Chalgrove Brook (Watlington to Thame)", "WBID": "GB106039023740" }, "geometry": { "type": "Point", "coordinates": [ -1.094205486454786, 51.670790863789477 ] } },
  { "type": "Feature", "properties": { "name": "Chalgrove Brook", "WBID": "GB106039023740" }, "geometry": { "type": "Point", "coordinates": [ -1.081171977414541, 51.666431742019384 ] } },
  { "type": "Feature", "properties": { "name": "Lower Cray", "WBID": "GB106040024150" }, "geometry": { "type": "Point", "coordinates": [ 0.179180438080281, 51.451169841121946 ] } },
  { "type": "Feature", "properties": { "name": "Shuttle", "WBID": "GB106040024210" }, "geometry": { "type": "Point", "coordinates": [ 0.115964292773086, 51.444131240394405 ] } },
  { "type": "Feature", "properties": { "name": "Upper Cray", "WBID": "GB106040023990" }, "geometry": { "type": "Point", "coordinates": [ 0.129931676282835, 51.419377058221379 ] } },
  { "type": "Feature", "properties": { "name": "Mid Darent", "WBID": "GB106040024222" }, "geometry": { "type": "Point", "coordinates": [ 0.208228605694517, 51.370356476517088 ] } },
  { "type": "Feature", "properties": { "name": "Middle and Lower Darent", "WBID": "GB106040024222" }, "geometry": { "type": "Point", "coordinates": [ 0.20960649008751, 51.371680721757286 ] } },
  { "type": "Feature", "properties": { "name": "Upper Darent", "WBID": "GB106040024221" }, "geometry": { "type": "Point", "coordinates": [ 0.124996160497304, 51.279129415027342 ] } },
  { "type": "Feature", "properties": { "name": "Wandle (Carshalton Branch at Carshalton)", "WBID": "GB106039017640" }, "geometry": { "type": "Point", "coordinates": [ -0.160154288405229, 51.368257779367703 ] } },
  { "type": "Feature", "properties": { "name": "Wandle (Croydon to Wandsworth) and the R. Gravney", "WBID": "GB106039023460" }, "geometry": { "type": "Point", "coordinates": [ -0.167107175680817, 51.401242940958355 ] } },
  { "type": "Feature", "properties": { "name": "Wandle (Croydon to Wandsworth) and the Graveney", "WBID": "GB106039023460" }, "geometry": { "type": "Point", "coordinates": [ -0.156482164278012, 51.405657713180446 ] } },
  { "type": "Feature", "properties": { "name": "Kempton Park Reservoir(E) Dis used ?", "WBID": "GB30642614" }, "geometry": { "type": "Point", "coordinates": [ -0.391670398914348, 51.425157371237702 ] } },
  { "type": "Feature", "properties": { "name": "Crane (including part of the Yeading Brook)", "WBID": "GB106039023030" }, "geometry": { "type": "Point", "coordinates": [ -0.375433136101642, 51.472546261896468 ] } },
  { "type": "Feature", "properties": { "name": "Crane", "WBID": "GB106039023030" }, "geometry": { "type": "Point", "coordinates": [ -0.381080843151523, 51.460437023685891 ] } },
  { "type": "Feature", "properties": { "name": "Yeading Brook", "WBID": "GB106039023051" }, "geometry": { "type": "Point", "coordinates": [ -0.398403827415747, 51.552768772611394 ] } },
  { "type": "Feature", "properties": { "name": "Portlane Brook", "WBID": "GB106039023451" }, "geometry": { "type": "Point", "coordinates": [ -0.404328662720643, 51.42556108242502 ] } },
  { "type": "Feature", "properties": { "name": "Beverley Brook (Motspur Park to Thames) and Pyl Brook at West Barnes", "WBID": "GB106039022850" }, "geometry": { "type": "Point", "coordinates": [ -0.239192718094255, 51.419782953308655 ] } },
  { "type": "Feature", "properties": { "name": "Beverley Brook (Motspur Park to Thames) and Pyl Brook at West Bar", "WBID": "GB106039022850" }, "geometry": { "type": "Point", "coordinates": [ -0.235750173681909, 51.417195626278492 ] } },
  { "type": "Feature", "properties": { "name": "Marsh Dykes (Woolwich)", "WBID": "GB106039023500" }, "geometry": { "type": "Point", "coordinates": [ 0.117768732966228, 51.506763441535618 ] } },
  { "type": "Feature", "properties": { "name": "Quaggy", "WBID": "GB106039023290" }, "geometry": { "type": "Point", "coordinates": [ 0.013172078991573, 51.45607058951019 ] } },
  { "type": "Feature", "properties": { "name": "Ravensbourne (Catford to Deptford)", "WBID": "GB106039023270" }, "geometry": { "type": "Point", "coordinates": [ -0.019877262629293, 51.459044702990937 ] } },
  { "type": "Feature", "properties": { "name": "Ravensbourne (Keston to Catford)", "WBID": "GB106039023260" }, "geometry": { "type": "Point", "coordinates": [ 0.009552087581228, 51.40198002901419 ] } },
  { "type": "Feature", "properties": { "name": "Wealdstone Brook", "WBID": "GB106039022940" }, "geometry": { "type": "Point", "coordinates": [ -0.282068172179144, 51.565822386752124 ] } },
  { "type": "Feature", "properties": { "name": "Silk Stream and Edgware Brook", "WBID": "GB106039022970" }, "geometry": { "type": "Point", "coordinates": [ -0.252475501883027, 51.591739022938619 ] } },
  { "type": "Feature", "properties": { "name": "Brent  (below Silk stream down to the Thames)", "WBID": "GB106039023590" }, "geometry": { "type": "Point", "coordinates": [ -0.304829966262821, 51.536734333857815 ] } },
  { "type": "Feature", "properties": { "name": "Lower Brent", "WBID": "GB106039023590" }, "geometry": { "type": "Point", "coordinates": [ -0.309590024655267, 51.526042175076476 ] } },
  { "type": "Feature", "properties": { "name": "Dollis Brook", "WBID": "GB106039022980" }, "geometry": { "type": "Point", "coordinates": [ -0.208059746728438, 51.614773836901854 ] } },
  { "type": "Feature", "properties": { "name": "Dollis Brook and Upper Brent", "WBID": "GB106039022980" }, "geometry": { "type": "Point", "coordinates": [ -0.206149627267226, 51.615203190555079 ] } },
  { "type": "Feature", "properties": { "name": "Bentley Priory", "WBID": "GB30641796" }, "geometry": { "type": "Point", "coordinates": [ -0.331992457548117, 51.621148734324493 ] } },
  { "type": "Feature", "properties": { "name": "Lee (from Tottenham Locks to the Tideway)", "WBID": "GB106038077852" }, "geometry": { "type": "Point", "coordinates": [ -0.054358989942165, 51.573020757568905 ] } },
  { "type": "Feature", "properties": { "name": "Lee (Tottenham Locks to Bow Locks/Three Mills Locks)", "WBID": "GB106038077852" }, "geometry": { "type": "Point", "coordinates": [ -0.02930302042608, 51.552626552924927 ] } },
  { "type": "Feature", "properties": { "name": "King Georges Reservoir", "WBID": "GB30641523" }, "geometry": { "type": "Point", "coordinates": [ -0.017777718460024, 51.649651868948141 ] } },
  { "type": "Feature", "properties": { "name": "North Metropolitan pit", "WBID": "GB30641198" }, "geometry": { "type": "Point", "coordinates": [ -0.019097966236507, 51.712518502650482 ] } },
  { "type": "Feature", "properties": { "name": "Lee (from Woolens Brook down to Tottenham Locks)", "WBID": "GB106038077851" }, "geometry": { "type": "Point", "coordinates": [ -0.015403164066123, 51.683906926190723 ] } },
  { "type": "Feature", "properties": { "name": "Lea Navigation (Fieldes Weir to Enfield Lock)", "WBID": "GB106038077851" }, "geometry": { "type": "Point", "coordinates": [ -0.007597012510767, 51.717820696192646 ] } },
  { "type": "Feature", "properties": { "name": "Pymmes Brook (upper channel with Muswell St & Bounds Grn Brk)", "WBID": "GB106038027940" }, "geometry": { "type": "Point", "coordinates": [ -0.114351534727119, 51.624546151491032 ] } },
  { "type": "Feature", "properties": { "name": "Pymmes Brook upstream Salmon Brook confluence", "WBID": "GB106038027940" }, "geometry": { "type": "Point", "coordinates": [ -0.114473386090914, 51.624396693684467 ] } },
  { "type": "Feature", "properties": { "name": "Seventy Acres", "WBID": "GB30641193" }, "geometry": { "type": "Point", "coordinates": [ -0.014062710690498, 51.708952230072271 ] } },
  { "type": "Feature", "properties": { "name": "Pymmes Brook (Salmons Brook to Lee, includes Part of Lee Navigation B)", "WBID": "GB106038027910" }, "geometry": { "type": "Point", "coordinates": [ -0.048049381226723, 51.602357060270414 ] } },
  { "type": "Feature", "properties": { "name": "Pymmes and Salmon Brooks - Deephams STW to Tottenham Locks", "WBID": "GB106038027910" }, "geometry": { "type": "Point", "coordinates": [ -0.047928361866335, 51.603579222586667 ] } },
  { "type": "Feature", "properties": { "name": "Bowyers Water", "WBID": "GB30641313" }, "geometry": { "type": "Point", "coordinates": [ -0.022978880696792, 51.695792937164533 ] } },
  { "type": "Feature", "properties": { "name": "William Girling Reservoir", "WBID": "GB30641659" }, "geometry": { "type": "Point", "coordinates": [ -0.026168262227128, 51.630581789477155 ] } },
  { "type": "Feature", "properties": { "name": "Stoke Newington East Reservoir", "WBID": "GB30641975" }, "geometry": { "type": "Point", "coordinates": [ -0.085061686484786, 51.57136910442059 ] } },
  { "type": "Feature", "properties": { "name": "Banbury Reservoir", "WBID": "GB30647003" }, "geometry": { "type": "Point", "coordinates": [ -0.035431219334602, 51.603779129792329 ] } },
  { "type": "Feature", "properties": { "name": "Salmons Brook", "WBID": "GB106038027960" }, "geometry": { "type": "Point", "coordinates": [ -0.073551352393044, 51.640015067008292 ] } },
  { "type": "Feature", "properties": { "name": "Salmon Brook upstream Deephams STW", "WBID": "GB106038027960" }, "geometry": { "type": "Point", "coordinates": [ -0.106088183532988, 51.651895233934823 ] } },
  { "type": "Feature", "properties": { "name": "Warwick Reservoir", "WBID": "GB30641939" }, "geometry": { "type": "Point", "coordinates": [ -0.055396978860415, 51.579815742169636 ] } },
  { "type": "Feature", "properties": { "name": "Nazeing Brook", "WBID": "GB106038033210" }, "geometry": { "type": "Point", "coordinates": [ 0.017843513363204, 51.731236864044327 ] } },
  { "type": "Feature", "properties": { "name": "Cobbins Brook", "WBID": "GB106038033190" }, "geometry": { "type": "Point", "coordinates": [ 0.053949247124165, 51.704272752316932 ] } },
  { "type": "Feature", "properties": { "name": "Cheshunt Lake", "WBID": "GB30641274" }, "geometry": { "type": "Point", "coordinates": [ -0.017599598044091, 51.704419450366949 ] } },
  { "type": "Feature", "properties": { "name": "Moselle Brook", "WBID": "GB106038027920" }, "geometry": { "type": "Point", "coordinates": [ -0.066300086074356, 51.600662106394545 ] } },
  { "type": "Feature", "properties": { "name": "Lockwood Reservoir", "WBID": "GB30641865" }, "geometry": { "type": "Point", "coordinates": [ -0.048526129919838, 51.59494292199804 ] } },
  { "type": "Feature", "properties": { "name": "Small River Lee (and tributaries)", "WBID": "GB106038033200" }, "geometry": { "type": "Point", "coordinates": [ -0.017594097514981, 51.690805951821183 ] } },
  { "type": "Feature", "properties": { "name": "Ching Brook", "WBID": "GB106038027930" }, "geometry": { "type": "Point", "coordinates": [ -0.014827813550392, 51.602905020960549 ] } },
  { "type": "Feature", "properties": { "name": "Lee Navigation Subsiduary A", "WBID": "GB106038027950" }, "geometry": { "type": "Point", "coordinates": [ -0.017104050392088, 51.664051901608801 ] } },
  { "type": "Feature", "properties": { "name": "Lea Navigation Enfield Lock to Tottenham Locks", "WBID": "GB106038027950" }, "geometry": { "type": "Point", "coordinates": [ -0.031541813432815, 51.624788537050186 ] } },
  { "type": "Feature", "properties": { "name": "Cuffley Brook and Turkey Brook", "WBID": "GB106038033180" }, "geometry": { "type": "Point", "coordinates": [ -0.104799999023001, 51.690369681838149 ] } },
  { "type": "Feature", "properties": { "name": "Turkey Brook and Cuffley Brook", "WBID": "GB106038033180" }, "geometry": { "type": "Point", "coordinates": [ -0.103882933235013, 51.689873838107353 ] } },
  { "type": "Feature", "properties": { "name": "Walthamstow Reservoirs", "WBID": "GB30641900" }, "geometry": { "type": "Point", "coordinates": [ -0.049590171877988, 51.589377299214547 ] } },
  { "type": "Feature", "properties": { "name": "Reservoir No 4", "WBID": "GB30641922" }, "geometry": { "type": "Point", "coordinates": [ -0.047558820613447, 51.582133595864981 ] } },
  { "type": "Feature", "properties": { "name": "Reservoir no 1", "WBID": "GB30641924" }, "geometry": { "type": "Point", "coordinates": [ -0.051881308614746, 51.582728930782324 ] } },
  { "type": "Feature", "properties": { "name": "Hogsmill", "WBID": "GB106039017440" }, "geometry": { "type": "Point", "coordinates": [ -0.276349164795584, 51.385798166730936 ] } },
  { "type": "Feature", "properties": { "name": "Epsom Stew Pond", "WBID": "GB30643125" }, "geometry": { "type": "Point", "coordinates": [ -0.30229638540357, 51.335198041419922 ] } },
  { "type": "Feature", "properties": { "name": "Mayes Brook East/Gores Brook", "WBID": "GB106037028140" }, "geometry": { "type": "Point", "coordinates": [ 0.132956310406809, 51.522900632295098 ] } },
  { "type": "Feature", "properties": { "name": "Gores Brook", "WBID": "GB106037028140" }, "geometry": { "type": "Point", "coordinates": [ 0.139420583960932, 51.529457559915265 ] } },
  { "type": "Feature", "properties": { "name": "Southall Sewer and Runningwater Brook (Ingrebourne)", "WBID": "GB106037028090" }, "geometry": { "type": "Point", "coordinates": [ 0.196524443182407, 51.499380281668557 ] } },
  { "type": "Feature", "properties": { "name": "Southall Sewer and Runningwater Brook", "WBID": "GB106037028090" }, "geometry": { "type": "Point", "coordinates": [ 0.196214832379594, 51.499111428977031 ] } },
  { "type": "Feature", "properties": { "name": "Cripsey Brook", "WBID": "GB106037033481" }, "geometry": { "type": "Point", "coordinates": [ 0.20453561205311, 51.72685986746724 ] } },
  { "type": "Feature", "properties": { "name": "Ingrebourne", "WBID": "GB106037028130" }, "geometry": { "type": "Point", "coordinates": [ 0.23510184347149, 51.566784826845613 ] } },
  { "type": "Feature", "properties": { "name": "Lower Roding (Loughton to Thames)", "WBID": "GB106037028181" }, "geometry": { "type": "Point", "coordinates": [ 0.05367026361342, 51.602500799293985 ] } },
  { "type": "Feature", "properties": { "name": "Brookhouse Brook", "WBID": "GB106037028150" }, "geometry": { "type": "Point", "coordinates": [ 0.125007428574003, 51.680478118395087 ] } },
  { "type": "Feature", "properties": { "name": "Rom / Beam (Including Bourne Brook, from Watton's Green to confluence with Ravensbourne)", "WBID": "GB106037028120" }, "geometry": { "type": "Point", "coordinates": [ 0.177222009818822, 51.607470307293013 ] } },
  { "type": "Feature", "properties": { "name": "Rom (Bourne Brook to Ravensbourne)", "WBID": "GB106037028120" }, "geometry": { "type": "Point", "coordinates": [ 0.174734134363868, 51.604416974786226 ] } },
  { "type": "Feature", "properties": { "name": "Lower Roding (Cripsey Bk to Loughton)", "WBID": "GB106037028182" }, "geometry": { "type": "Point", "coordinates": [ 0.179774412925973, 51.664089379674209 ] } },
  { "type": "Feature", "properties": { "name": "Rom / Beam (from Ravensbourne confluence to Thames)", "WBID": "GB106037028100" }, "geometry": { "type": "Point", "coordinates": [ 0.172743618642113, 51.533895569328507 ] } },
  { "type": "Feature", "properties": { "name": "Beam and Ravensbourne", "WBID": "GB106037028100" }, "geometry": { "type": "Point", "coordinates": [ 0.185166022115879, 51.544283244325044 ] } },
  { "type": "Feature", "properties": { "name": "Roding (upper, Roding to Norton Ditch)", "WBID": "GB106037033500" }, "geometry": { "type": "Point", "coordinates": [ 0.292591688263888, 51.7999928188786 ] } },
  { "type": "Feature", "properties": { "name": "Upper Roding (to Cripsey Brook)", "WBID": "GB106037033500" }, "geometry": { "type": "Point", "coordinates": [ 0.291827924369303, 51.782401286220221 ] } },
  { "type": "Feature", "properties": { "name": "Seven Kings Water", "WBID": "GB106037028170" }, "geometry": { "type": "Point", "coordinates": [ 0.100936455334714, 51.557403294214993 ] } },
  { "type": "Feature", "properties": { "name": "Mayes Brook", "WBID": "GB106037028171" }, "geometry": { "type": "Point", "coordinates": [ 0.102569228705945, 51.537453077603757 ] } },
  { "type": "Feature", "properties": { "name": "Brent Feeder Canal", "WBID": "GB806100092" }, "geometry": { "type": "Point", "coordinates": [ -0.260652507137904, 51.550726911426111 ] } },
  { "type": "Feature", "properties": { "name": "unknown", "WBID": "GB806100092" }, "geometry": { "type": "Point", "coordinates": [ -0.261236776849477, 51.544762963344205 ] } },
  { "type": "Feature", "properties": { "name": "Grand Union Canal, Uxbridge to Hanwell Locks, Slough Arm, Padding", "WBID": "GB70610078" }, "geometry": { "type": "Point", "coordinates": [ -0.364463671829224, 51.520620122991332 ] } },
  { "type": "Feature", "properties": { "name": "Grand Union Canal, Uxbridge to Hanwell Locks, Slough Arm, Paddington Arm, Regents Canal up", "WBID": "GB70610078" }, "geometry": { "type": "Point", "coordinates": [ -0.364249597874003, 51.52061298537091 ] } },
  { "type": "Feature", "properties": { "name": "Grand Union Canal, Wendover Arm (disused)", "WBID": "GB70610183" }, "geometry": { "type": "Point", "coordinates": [ -0.726791619224399, 51.78555483525728 ] } },
  { "type": "Feature", "properties": { "name": "Grand Union Canal, Wendover Arm feeder (not a canal)", "WBID": "GB70610183" }, "geometry": { "type": "Point", "coordinates": [ -0.712231083904215, 51.791629163831466 ] } },
  { "type": "Feature", "properties": { "name": "Regents Canal, lower section", "WBID": "GB70610510" }, "geometry": { "type": "Point", "coordinates": [ -0.075504788685988, 51.533152961156233 ] } },
  { "type": "Feature", "properties": { "name": "Oxford Canal, summit to Aynho", "WBID": "GB70610197" }, "geometry": { "type": "Point", "coordinates": [ -1.312405151625423, 52.072334002368393 ] } },
  { "type": "Feature", "properties": { "name": "Oxford Canal, Thrupp to Thames", "WBID": "GB70610542" }, "geometry": { "type": "Point", "coordinates": [ -1.289309053970206, 51.803803041800258 ] } },
  { "type": "Feature", "properties": { "name": "Oxford Canal, Aynho to Thrupp", "WBID": "GB70610198" }, "geometry": { "type": "Point", "coordinates": [ -1.288945623452572, 51.924173672982995 ] } },
  { "type": "Feature", "properties": { "name": "Boddington Feeder (Oxford Canal)", "WBID": "GB806100002" }, "geometry": { "type": "Point", "coordinates": [ -1.305101580186292, 52.163627243364822 ] } },
  { "type": "Feature", "properties": { "name": "Kennet and Avon Canal, Copse Lock to Reading", "WBID": "GB70610180" }, "geometry": { "type": "Point", "coordinates": [ -1.229251714827707, 51.400363375211022 ] } },
  { "type": "Feature", "properties": { "name": "Kennet & Avon Canal, Copse Lock to Reading (River Kennet and canal sections)", "WBID": "GB70610180" }, "geometry": { "type": "Point", "coordinates": [ -1.175282065160052, 51.410135155058953 ] } },
  { "type": "Feature", "properties": { "name": "Kennet and Avon Canal, summit to Copse Lock", "WBID": "GB70610181" }, "geometry": { "type": "Point", "coordinates": [ -1.527577708551645, 51.39692792005205 ] } },
  { "type": "Feature", "properties": { "name": "Kennet & Avon Canal, summit to Copse Lock", "WBID": "GB70610181" }, "geometry": { "type": "Point", "coordinates": [ -1.527627965288601, 51.397005379931052 ] } },
  { "type": "Feature", "properties": { "name": "Lower Duke of Northumberland's River", "WBID": "GB806100095" }, "geometry": { "type": "Point", "coordinates": [ -0.338182371830384, 51.463475225439488 ] } },
  { "type": "Feature", "properties": { "name": "Longford River", "WBID": "GB806100109" }, "geometry": { "type": "Point", "coordinates": [ -0.42176286680304, 51.447071011497385 ] } },
  { "type": "Feature", "properties": { "name": "Basingstoke Canal", "WBID": "GB70610019" }, "geometry": { "type": "Point", "coordinates": [ -0.751449478518799, 51.285795828349748 ] } },
  { "type": "Feature", "properties": { "name": "Basingstoke canal", "WBID": "GB70610019" }, "geometry": { "type": "Point", "coordinates": [ -0.725698379663216, 51.293334568470755 ] } },
  { "type": "Feature", "properties": { "name": "Jubilee River", "WBID": "GB806100325" }, "geometry": { "type": "Point", "coordinates": [ -0.648614458115148, 51.508459060295181 ] } },
  { "type": "Feature", "properties": { "name": "King George VI Reservoir water transfer", "WBID": "GB806100096" }, "geometry": { "type": "Point", "coordinates": [ -0.441927329660862, 51.423654480915118 ] } },
  { "type": "Feature", "properties": { "name": "From King George's Reservoir", "WBID": "GB806100096" }, "geometry": { "type": "Point", "coordinates": [ -0.442295042453157, 51.423659736838992 ] } },
  { "type": "Feature", "properties": { "name": "Mardyke (West Tributary)", "WBID": "GB106037028080" }, "geometry": { "type": "Point", "coordinates": [ 0.324389422569343, 51.578918601997088 ] } }
  ]
  }
  
    
  /**
   * Set mapbox access
   */
  mapboxgl.accessToken =
      'pk.eyJ1IjoibmF0aGFuYWVsaXNhbWFwcGVyIiwiYSI6ImNrODNiZzdoZTA4Y2gzZ281YmJiMHNwOWIifQ.d2ntY86sJ7DR7011dUJ2cw';
  /**
   * Set mapbox map
   */
  const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/outdoors-v10?optimize=true',
      center: [-0.118092, 51.509865],
      minZoom: 3,
      bearing: 15,
      zoom: 7
  });

  /**
   *  Trigger functions when the map is loaded
   */
  map.on('load', () => {

      /**
       * Add layer for waterbodies
       */
      map.addSource('wb', {
          'type': 'geojson',
          'data': 'lines.geojson'
      });

      /**
       * Style waterbody values by sentiment score
       */
      map.addLayer({
          'id': 'wb_value',
          'source': 'wb',
          'type': 'line',
          'paint': {
              'line-width': 5,
              'line-color': [
                  'interpolate',
                  ['linear'],
                  ['get', 'group'],
                  1.0,
                  '#EE5252',
                  2.0,
                  '#E1ED00',
                  3.0,
                  '#006992'
              ]
          }
      });
  });

  /**
   * @param {string} query - user waterbody search input
   */
  function forwardGeocoder(query) {
      const matchingFeatures = [];
      for (const feature of centroids.features) {
          // Handle queries with different capitalization
          // than the source data by calling toLowerCase().
          if (
              feature.properties.name
              .toLowerCase()
              .includes(query.toLowerCase())
          ) {
              feature['place_name'] = `${feature.properties.name}`;
              feature['center'] = feature.geometry.coordinates;

              matchingFeatures.push(feature);
          }
      }
      return matchingFeatures;
  }

  /**
   * Set mapbox popup
   */
  map.on('click', 'wb_value', (e) => {
      // Copy coordinates array.
      new mapboxgl.Popup()
          .setLngLat(e.lngLat)
          .setHTML('<p> Waterbody name: ' + e.features[0].properties.name + "</br> <p> Waterbody sentiment score: " + parseFloat(e.features[0].properties.senti_score).toFixed(4))
          .addTo(map);
  });

  /**
   * Set mapbox geocoderat(e.features[0].properties.senti_score).toFixed(4) + "</br> <p> Waterbody sentiment score
   */
  const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      countries: 'gbx',
      placeholder: 'Search for a river to find out how it makes people feel',
      zoom: 12,
      limit: 10,
      localGeocoder: forwardGeocoder
  });

  map.addControl(new mapboxgl.NavigationControl());
  document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

  /**
   * Trigger chart and map functions when user searches for a waterbody
   */
  geocoder.on('result', (e) => {
      document.querySelector('table').remove()
      let WBID_Select = e.result.properties.WBID;
      let Name_Select = e.result.properties.name;


      d3.selectAll("#my_dataviz > *").remove();
      d3.selectAll("#my_dataviz1 > *").remove();
      d3.selectAll("#my_dataviz2 > *").remove();
      d3.selectAll("#my_dataviz4 > *").remove();
      d3.selectAll("#chart > *").remove();


      document.getElementById("twitter_feels").innerHTML = "How do people feel about " + Name_Select;
      document.getElementById("temporal_graph_text").innerHTML = "How people feel about " + Name_Select;
      document.getElementById("emotions_graph_text").innerHTML = "Basic emotions associated with " + Name_Select;
      document.getElementById("phrases_graph_text").innerHTML = "Common phrases associated with " + Name_Select;
      document.getElementById("eco_status_text").innerHTML = "Ecological status of " + Name_Select;
      document.getElementById("rngag_graph_text").innerHTML = "Why is " + Name_Select + "not achieving good status?"
      document.getElementById("rngag_graph_text").innerHTML = "Reasons for not achieving good ecological status of " + Name_Select;

      var eco = "https://raw.githubusercontent.com/Digital-Water-Publics/Thames21-Socio-Ecological-Data/main/pot-mi/Open-Data/Thames/" + WBID_Select + "/eco-class.csv"
      var emo_freq_path = "https://raw.githubusercontent.com/Digital-Water-Publics/Thames21-Socio-Ecological-Data/main/pot-mi/Open-Data/Thames/" + WBID_Select + "/emolex-frequency.csv"
      var rnag_path = "https://raw.githubusercontent.com/Digital-Water-Publics/Thames21-Socio-Ecological-Data/main/pot-mi/Open-Data/Thames/" + WBID_Select + "/rnag.csv"
      var nounphrase_path = "https://raw.githubusercontent.com/Digital-Water-Publics/Thames21-Socio-Ecological-Data/main/pot-mi/Open-Data/Thames/" + WBID_Select + "/common-nounphrase.csv"
      var polarity = "https://raw.githubusercontent.com/Digital-Water-Publics/Thames21-Socio-Ecological-Data/main/pot-mi/Open-Data/Thames/" + WBID_Select + "/polarity-score-new.csv"

      document.getElementById("raw_data").href = polarity;
      document.getElementById("raw_data1").href = emo_freq_path;
      document.getElementById("raw_data2").href = nounphrase_path;
      chart(polarity, eco, emo_freq_path, nounphrase_path, rnag_path)

  });

};
