var size = 0;
var placement = 'point';

var style_CADASTRAL_RIFFA_ALBUHAIR_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#d5063c";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("format_number(\"Shape_Area\" ,3) || ' Sqm'") !== null) {
        labelText = String(feature.get("format_number(\"Shape_Area\" ,3) || ' Sqm'"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,3,3,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};