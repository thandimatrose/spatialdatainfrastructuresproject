var size = 0;
var placement = 'point';

var style_Suburbs_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "15.600000000000001px \'Engravers MT\', sans-serif";
    var labelFill = "#363bd9";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.7;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("Suburb") !== null) {
        labelText = String(feature.get("Suburb"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(54,59,217,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 4}),fill: new ol.style.Fill({color: 'rgba(255,158,114,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
