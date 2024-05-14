var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LandClaimArea_1 = new ol.format.GeoJSON();
var features_LandClaimArea_1 = format_LandClaimArea_1.readFeatures(json_LandClaimArea_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LandClaimArea_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandClaimArea_1.addFeatures(features_LandClaimArea_1);
var lyr_LandClaimArea_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LandClaimArea_1, 
                style: style_LandClaimArea_1,
                interactive: true,
                title: '<img src="styles/legend/LandClaimArea_1.png" /> Land Claim Area'
            });
var format_Suburbs_2 = new ol.format.GeoJSON();
var features_Suburbs_2 = format_Suburbs_2.readFeatures(json_Suburbs_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Suburbs_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suburbs_2.addFeatures(features_Suburbs_2);
var lyr_Suburbs_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Suburbs_2, 
                style: style_Suburbs_2,
                interactive: false,
                title: '<img src="styles/legend/Suburbs_2.png" /> Suburbs'
            });
var format_LandParcels_3 = new ol.format.GeoJSON();
var features_LandParcels_3 = format_LandParcels_3.readFeatures(json_LandParcels_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LandParcels_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandParcels_3.addFeatures(features_LandParcels_3);
var lyr_LandParcels_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LandParcels_3, 
                style: style_LandParcels_3,
                interactive: true,
                title: '<img src="styles/legend/LandParcels_3.png" /> Land Parcels'
            });
var format_SurveyPoints_4 = new ol.format.GeoJSON();
var features_SurveyPoints_4 = format_SurveyPoints_4.readFeatures(json_SurveyPoints_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SurveyPoints_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SurveyPoints_4.addFeatures(features_SurveyPoints_4);
var lyr_SurveyPoints_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SurveyPoints_4, 
                style: style_SurveyPoints_4,
                interactive: true,
    title: 'Survey Points<br />\
    <img src="styles/legend/SurveyPoints_4_0.png" /> Air Valve<br />\
    <img src="styles/legend/SurveyPoints_4_1.png" /> Bridge<br />\
    <img src="styles/legend/SurveyPoints_4_2.png" /> Centre Of Road<br />\
    <img src="styles/legend/SurveyPoints_4_3.png" /> Cross Sign<br />\
    <img src="styles/legend/SurveyPoints_4_4.png" /> Curb Separation<br />\
    <img src="styles/legend/SurveyPoints_4_5.png" /> Drain<br />\
    <img src="styles/legend/SurveyPoints_4_6.png" /> Electric Box<br />\
    <img src="styles/legend/SurveyPoints_4_7.png" /> Fire Hydrant<br />\
    <img src="styles/legend/SurveyPoints_4_8.png" /> Lamppost<br />\
    <img src="styles/legend/SurveyPoints_4_9.png" /> Manhole<br />\
    <img src="styles/legend/SurveyPoints_4_10.png" /> No Parking Sign<br />\
    <img src="styles/legend/SurveyPoints_4_11.png" /> No Stop Sign<br />\
    <img src="styles/legend/SurveyPoints_4_12.png" /> No Turn<br />\
    <img src="styles/legend/SurveyPoints_4_13.png" /> Parking Sign<br />\
    <img src="styles/legend/SurveyPoints_4_14.png" /> Robot<br />\
    <img src="styles/legend/SurveyPoints_4_15.png" /> Stop Sign<br />\
    <img src="styles/legend/SurveyPoints_4_16.png" /> TSM<br />\
    <img src="styles/legend/SurveyPoints_4_17.png" /> UCT Sign<br />\
    <img src="styles/legend/SurveyPoints_4_18.png" /> Water Meter<br />\
    <img src="styles/legend/SurveyPoints_4_19.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_LandClaimArea_1.setVisible(true);lyr_Suburbs_2.setVisible(true);lyr_LandParcels_3.setVisible(true);lyr_SurveyPoints_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_LandClaimArea_1,lyr_Suburbs_2,lyr_LandParcels_3,lyr_SurveyPoints_4];
lyr_LandClaimArea_1.set('fieldAliases', {'Project': 'Project', 'Area': 'Area', });
lyr_Suburbs_2.set('fieldAliases', {'Suburb': 'Suburb', });
lyr_LandParcels_3.set('fieldAliases', {'Land Parcel': 'Land Parcel', 'Property Number': 'Property Number', 'Area': 'Area', });
lyr_SurveyPoints_4.set('fieldAliases', {'Title': 'Title', 'Coordinate': 'Coordinate', });
lyr_LandClaimArea_1.set('fieldImages', {'Project': 'TextEdit', 'Area': 'TextEdit', });
lyr_Suburbs_2.set('fieldImages', {'Suburb': '', });
lyr_LandParcels_3.set('fieldImages', {'Land Parcel': 'Range', 'Property Number': 'TextEdit', 'Area': 'TextEdit', });
lyr_SurveyPoints_4.set('fieldImages', {'Title': 'TextEdit', 'Coordinate': 'TextEdit', });
lyr_LandClaimArea_1.set('fieldLabels', {'Project': 'header label', 'Area': 'inline label', });
lyr_Suburbs_2.set('fieldLabels', {'Suburb': 'header label', });
lyr_LandParcels_3.set('fieldLabels', {'Land Parcel': 'header label', 'Property Number': 'inline label', 'Area': 'inline label', });
lyr_SurveyPoints_4.set('fieldLabels', {'Title': 'header label', 'Coordinate': 'inline label', });
lyr_SurveyPoints_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});