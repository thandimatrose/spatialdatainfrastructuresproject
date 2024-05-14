var wms_layers = [];


        var lyr_OpenStreetMaps_0 = new ol.layer.Tile({
            'title': 'Open Street Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Servitudes_1 = new ol.format.GeoJSON();
var features_Servitudes_1 = format_Servitudes_1.readFeatures(json_Servitudes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Servitudes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servitudes_1.addFeatures(features_Servitudes_1);
var lyr_Servitudes_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Servitudes_1, 
                style: style_Servitudes_1,
                popuplayertitle: "Servitudes",
                interactive: false,
                title: '<img src="styles/legend/Servitudes_1.png" /> Servitudes'
            });
var format_ValuationRands_2 = new ol.format.GeoJSON();
var features_ValuationRands_2 = format_ValuationRands_2.readFeatures(json_ValuationRands_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ValuationRands_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ValuationRands_2.addFeatures(features_ValuationRands_2);
var lyr_ValuationRands_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ValuationRands_2, 
                style: style_ValuationRands_2,
                popuplayertitle: "Valuation (Rands)",
                interactive: true,
    title: 'Valuation (Rands)<br />\
    <img src="styles/legend/ValuationRands_2_0.png" /> 0 - 1000000<br />\
    <img src="styles/legend/ValuationRands_2_1.png" /> 1000000 - 2000000<br />\
    <img src="styles/legend/ValuationRands_2_2.png" /> 2000000 - 3000000<br />\
    <img src="styles/legend/ValuationRands_2_3.png" /> 3000000 - 4000000<br />\
    <img src="styles/legend/ValuationRands_2_4.png" /> 4000000 - 5000000<br />'
        });
var format_Suburbs_3 = new ol.format.GeoJSON();
var features_Suburbs_3 = format_Suburbs_3.readFeatures(json_Suburbs_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Suburbs_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suburbs_3.addFeatures(features_Suburbs_3);
var lyr_Suburbs_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suburbs_3, 
                style: style_Suburbs_3,
                popuplayertitle: "Suburbs",
                interactive: false,
                title: '<img src="styles/legend/Suburbs_3.png" /> Suburbs'
            });

lyr_OpenStreetMaps_0.setVisible(true);lyr_Servitudes_1.setVisible(true);lyr_ValuationRands_2.setVisible(true);lyr_Suburbs_3.setVisible(true);
var layersList = [lyr_OpenStreetMaps_0,lyr_Servitudes_1,lyr_ValuationRands_2,lyr_Suburbs_3];
lyr_Servitudes_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'LU_SRVT_TY': 'LU_SRVT_TY', 'BGN_DATE': 'BGN_DATE', 'END_DATE': 'END_DATE', 'DGRM_NO': 'DGRM_NO', 'SRVT_NO': 'SRVT_NO', 'LU_LGL_STS': 'LU_LGL_STS', 'SG_EXTN': 'SG_EXTN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ValuationRands_2.set('fieldAliases', {'Feature ID': 'Feature ID', 'Surveyor G': 'Surveyor G', 'Zone': 'Zone', 'Valuation': 'Valuation', 'Address': 'Address', 'ERF_Number': 'ERF_Number', 'Land Exten': 'Land Exten', 'Search GRV': 'Search GRV', });
lyr_Suburbs_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OFC_SBRB_N': 'OFC_SBRB_N', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Servitudes_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'LU_SRVT_TY': 'Range', 'BGN_DATE': 'DateTime', 'END_DATE': 'DateTime', 'DGRM_NO': 'TextEdit', 'SRVT_NO': 'TextEdit', 'LU_LGL_STS': 'Range', 'SG_EXTN': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ValuationRands_2.set('fieldImages', {'Feature ID': 'TextEdit', 'Surveyor G': '', 'Zone': 'TextEdit', 'Valuation': 'TextEdit', 'Address': 'TextEdit', 'ERF_Number': 'TextEdit', 'Land Exten': '', 'Search GRV': 'TextEdit', });
lyr_Suburbs_3.set('fieldImages', {'OBJECTID': 'Range', 'OFC_SBRB_N': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Servitudes_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'LU_SRVT_TY': 'header label - always visible', 'BGN_DATE': 'no label', 'END_DATE': 'no label', 'DGRM_NO': 'no label', 'SRVT_NO': 'no label', 'LU_LGL_STS': 'no label', 'SG_EXTN': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_ValuationRands_2.set('fieldLabels', {'Feature ID': 'hidden field', 'Surveyor G': 'hidden field', 'Zone': 'hidden field', 'Valuation': 'header label - always visible', 'Address': 'header label - always visible', 'ERF_Number': 'header label - always visible', 'Land Exten': 'hidden field', 'Search GRV': 'header label - always visible', });
lyr_Suburbs_3.set('fieldLabels', {'OBJECTID': 'no label', 'OFC_SBRB_N': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Suburbs_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});