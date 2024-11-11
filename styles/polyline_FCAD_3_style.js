var size = 0;
var placement = 'point';

var style_polyline_FCAD_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#e31a1c";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("format_number(\"Length\",2)|| ' Mt'") !== null) {
        labelText = String(feature.get("format_number(\"Length\",2)|| ' Mt'"));
    }
    with
		if (feature.get("Length") !== null) {
        labelText = String(feature.get("Length"));
	   } 
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(231,113,72,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
