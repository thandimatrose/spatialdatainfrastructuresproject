var wms_layers = [];

var lyr_TerrainMap_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets",
    attributions: ' ',
                              params: {
                                "LAYERS": "Elevation_DTM_2m",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Terrain Map",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_TerrainMap_0, 0]);

        var lyr_OpenStreetMaps_1 = new ol.layer.Tile({
            'title': 'Open Street Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Evaluations_2 = new ol.format.GeoJSON();
var features_Evaluations_2 = format_Evaluations_2.readFeatures(json_Evaluations_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Evaluations_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Evaluations_2.addFeatures(features_Evaluations_2);
var lyr_Evaluations_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Evaluations_2, 
                style: style_Evaluations_2,
                popuplayertitle: "Evaluations",
                interactive: true,
    title: 'Evaluations<br />\
    <img src="styles/legend/Evaluations_2_0.png" /> Below R1 000 000<br />\
    <img src="styles/legend/Evaluations_2_1.png" /> R1 000 000 - R2 000 000<br />\
    <img src="styles/legend/Evaluations_2_2.png" /> R2 000 000 - R3 000 000<br />\
    <img src="styles/legend/Evaluations_2_3.png" /> R3 000 000 - R4 000 000<br />\
    <img src="styles/legend/Evaluations_2_4.png" /> Above R4 000 000<br />'
        });
var format_Servitudes_3 = new ol.format.GeoJSON();
var features_Servitudes_3 = format_Servitudes_3.readFeatures(json_Servitudes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Servitudes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servitudes_3.addFeatures(features_Servitudes_3);
var lyr_Servitudes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Servitudes_3, 
                style: style_Servitudes_3,
                popuplayertitle: "Servitudes",
                interactive: false,
                title: '<img src="styles/legend/Servitudes_3.png" /> Servitudes'
            });
var format_Suburbs_4 = new ol.format.GeoJSON();
var features_Suburbs_4 = format_Suburbs_4.readFeatures(json_Suburbs_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Suburbs_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suburbs_4.addFeatures(features_Suburbs_4);
var lyr_Suburbs_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suburbs_4, 
                style: style_Suburbs_4,
                popuplayertitle: "Suburbs",
                interactive: false,
                title: '<img src="styles/legend/Suburbs_4.png" /> Suburbs'
            });

lyr_TerrainMap_0.setVisible(true);lyr_OpenStreetMaps_1.setVisible(true);lyr_Evaluations_2.setVisible(true);lyr_Servitudes_3.setVisible(true);lyr_Suburbs_4.setVisible(true);
var layersList = [lyr_TerrainMap_0,lyr_OpenStreetMaps_1,lyr_Evaluations_2,lyr_Servitudes_3,lyr_Suburbs_4];
lyr_Evaluations_2.set('fieldAliases', {'Feature ID': 'Feature ID', 'Surveyor G': 'Surveyor G', 'Zone': 'Zone', 'Int_Valuat': 'Int_Valuat', 'Address': 'Address', 'ERF Number': 'ERF Number', 'Land Exten': 'Land Exten', 'Search GVR': 'Search GVR', 'Evaluation': 'Evaluation', });
lyr_Servitudes_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'LU_SRVT_TY': 'LU_SRVT_TY', 'BGN_DATE': 'BGN_DATE', 'END_DATE': 'END_DATE', 'DGRM_NO': 'DGRM_NO', 'SRVT_NO': 'SRVT_NO', 'LU_LGL_STS': 'LU_LGL_STS', 'SG_EXTN': 'SG_EXTN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Suburbs_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OFC_SBRB_N': 'OFC_SBRB_N', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Evaluations_2.set('fieldImages', {'Feature ID': 'TextEdit', 'Surveyor G': 'TextEdit', 'Zone': 'TextEdit', 'Int_Valuat': 'TextEdit', 'Address': 'TextEdit', 'ERF Number': 'TextEdit', 'Land Exten': 'TextEdit', 'Search GVR': 'TextEdit', 'Evaluation': 'TextEdit', });
lyr_Servitudes_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'LU_SRVT_TY': 'Range', 'BGN_DATE': 'DateTime', 'END_DATE': 'DateTime', 'DGRM_NO': 'TextEdit', 'SRVT_NO': 'TextEdit', 'LU_LGL_STS': 'Range', 'SG_EXTN': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Suburbs_4.set('fieldImages', {'OBJECTID': 'Range', 'OFC_SBRB_N': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Evaluations_2.set('fieldLabels', {'Feature ID': 'hidden field', 'Surveyor G': 'hidden field', 'Zone': 'hidden field', 'Int_Valuat': 'hidden field', 'Address': 'header label - always visible', 'ERF Number': 'header label - always visible', 'Land Exten': 'hidden field', 'Search GVR': 'header label - always visible', 'Evaluation': 'header label - always visible', });
lyr_Servitudes_3.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'LU_SRVT_TY': 'hidden field', 'BGN_DATE': 'hidden field', 'END_DATE': 'hidden field', 'DGRM_NO': 'hidden field', 'SRVT_NO': 'hidden field', 'LU_LGL_STS': 'hidden field', 'SG_EXTN': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'inline label - always visible', });
lyr_Suburbs_4.set('fieldLabels', {'OBJECTID': 'no label', 'OFC_SBRB_N': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Suburbs_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});