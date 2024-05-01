var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_zoning_clippedservitude_clipped_1 = new ol.format.GeoJSON();
var features_zoning_clippedservitude_clipped_1 = format_zoning_clippedservitude_clipped_1.readFeatures(json_zoning_clippedservitude_clipped_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zoning_clippedservitude_clipped_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zoning_clippedservitude_clipped_1.addFeatures(features_zoning_clippedservitude_clipped_1);
var lyr_zoning_clippedservitude_clipped_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zoning_clippedservitude_clipped_1, 
                style: style_zoning_clippedservitude_clipped_1,
                popuplayertitle: "zoning_clipped — servitude_clipped",
                interactive: true,
                title: '<img src="styles/legend/zoning_clippedservitude_clipped_1.png" /> zoning_clipped — servitude_clipped'
            });
var format_servitude_clipped_2 = new ol.format.GeoJSON();
var features_servitude_clipped_2 = format_servitude_clipped_2.readFeatures(json_servitude_clipped_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_servitude_clipped_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_servitude_clipped_2.addFeatures(features_servitude_clipped_2);
var lyr_servitude_clipped_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_servitude_clipped_2, 
                style: style_servitude_clipped_2,
                popuplayertitle: "servitude_clipped",
                interactive: true,
                title: '<img src="styles/legend/servitude_clipped_2.png" /> servitude_clipped'
            });
var format_Study_Areas_3 = new ol.format.GeoJSON();
var features_Study_Areas_3 = format_Study_Areas_3.readFeatures(json_Study_Areas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Study_Areas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Study_Areas_3.addFeatures(features_Study_Areas_3);
var lyr_Study_Areas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Study_Areas_3, 
                style: style_Study_Areas_3,
                popuplayertitle: "Study_Areas",
                interactive: true,
                title: '<img src="styles/legend/Study_Areas_3.png" /> Study_Areas'
            });

lyr_OSMStandard_0.setVisible(true);lyr_zoning_clippedservitude_clipped_1.setVisible(true);lyr_servitude_clipped_2.setVisible(true);lyr_Study_Areas_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_zoning_clippedservitude_clipped_1,lyr_servitude_clipped_2,lyr_Study_Areas_3];
lyr_zoning_clippedservitude_clipped_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SL_LAND_PR': 'SL_LAND_PR', 'SG26_CODE': 'SG26_CODE', 'LU_IZNG_CD': 'LU_IZNG_CD', 'INT_ZONE_V': 'INT_ZONE_V', 'INT_ZONE_C': 'INT_ZONE_C', 'INT_ZONE_D': 'INT_ZONE_D', 'LU_LGL_STS': 'LU_LGL_STS', });
lyr_servitude_clipped_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'LU_SRVT_TY': 'LU_SRVT_TY', 'BGN_DATE': 'BGN_DATE', 'END_DATE': 'END_DATE', 'DGRM_NO': 'DGRM_NO', 'SRVT_NO': 'SRVT_NO', 'LU_LGL_STS': 'LU_LGL_STS', 'SG_EXTN': 'SG_EXTN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Study_Areas_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OFC_SBRB_N': 'OFC_SBRB_N', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_zoning_clippedservitude_clipped_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'SL_LAND_PR': 'Range', 'SG26_CODE': 'TextEdit', 'LU_IZNG_CD': 'Range', 'INT_ZONE_V': 'Range', 'INT_ZONE_C': 'TextEdit', 'INT_ZONE_D': 'TextEdit', 'LU_LGL_STS': 'Range', });
lyr_servitude_clipped_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'LU_SRVT_TY': 'Range', 'BGN_DATE': 'DateTime', 'END_DATE': 'DateTime', 'DGRM_NO': 'TextEdit', 'SRVT_NO': 'TextEdit', 'LU_LGL_STS': 'Range', 'SG_EXTN': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Study_Areas_3.set('fieldImages', {'OBJECTID': 'Range', 'OFC_SBRB_N': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_zoning_clippedservitude_clipped_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'SL_LAND_PR': 'no label', 'SG26_CODE': 'no label', 'LU_IZNG_CD': 'no label', 'INT_ZONE_V': 'no label', 'INT_ZONE_C': 'no label', 'INT_ZONE_D': 'no label', 'LU_LGL_STS': 'no label', });
lyr_servitude_clipped_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'LU_SRVT_TY': 'header label - always visible', 'BGN_DATE': 'no label', 'END_DATE': 'no label', 'DGRM_NO': 'no label', 'SRVT_NO': 'no label', 'LU_LGL_STS': 'no label', 'SG_EXTN': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Study_Areas_3.set('fieldLabels', {'OBJECTID': 'no label', 'OFC_SBRB_N': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Study_Areas_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});