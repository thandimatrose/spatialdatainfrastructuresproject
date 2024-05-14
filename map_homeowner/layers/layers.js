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
var format_ManualValue_1 = new ol.format.GeoJSON();
var features_ManualValue_1 = format_ManualValue_1.readFeatures(json_ManualValue_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ManualValue_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ManualValue_1.addFeatures(features_ManualValue_1);
var lyr_ManualValue_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ManualValue_1, 
                style: style_ManualValue_1,
                popuplayertitle: "Manual Value",
                interactive: true,
    title: 'Manual Value<br />\
    <img src="styles/legend/ManualValue_1_0.png" /> 21000 - 4228800<br />\
    <img src="styles/legend/ManualValue_1_1.png" /> 4228800 - 8392800<br />\
    <img src="styles/legend/ManualValue_1_2.png" /> 8392800 - 12384400<br />\
    <img src="styles/legend/ManualValue_1_3.png" /> 12384400 - 16501400<br />\
    <img src="styles/legend/ManualValue_1_4.png" /> 16501400 - 19961000<br />'
        });

lyr_OpenStreetMaps_0.setVisible(true);lyr_ManualValue_1.setVisible(true);
var layersList = [lyr_OpenStreetMaps_0,lyr_ManualValue_1];
lyr_ManualValue_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SL_LAND_PR': 'SL_LAND_PR', 'SG26_CODE': 'SG26_CODE', 'LU_IZNG_CD': 'LU_IZNG_CD', 'INT_ZONE_V': 'INT_ZONE_V', 'INT_ZONE_C': 'INT_ZONE_C', 'INT_ZONE_D': 'INT_ZONE_D', 'LU_LGL_STS': 'LU_LGL_STS', 'Search GVR 2022': 'Search GVR 2022', 'comparativesalesvaluations_parcelnumber': 'comparativesalesvaluations_parcelnumber', 'comparativesalesvaluations_date': 'comparativesalesvaluations_date', 'comparativesalesvaluations_approved': 'comparativesalesvaluations_approved', 'comparativesalesvaluations_value': 'comparativesalesvaluations_value', 'comparativesalesvaluations_evalid': 'comparativesalesvaluations_evalid', 'manualvaluations_parcelnumber': 'manualvaluations_parcelnumber', 'manualvaluations_date': 'manualvaluations_date', 'manualvaluations_categoryid': 'manualvaluations_categoryid', 'manualvaluations_value': 'manualvaluations_value', 'manualvaluations_approved': 'manualvaluations_approved', 'manualvaluations_jobid': 'manualvaluations_jobid', 'manualvaluations_evalid': 'manualvaluations_evalid', 'incomecapitalisationvaluations_evalid': 'incomecapitalisationvaluations_evalid', 'incomecapitalisationvaluations_parcelnumber': 'incomecapitalisationvaluations_parcelnumber', 'incomecapitalisationvaluations_date': 'incomecapitalisationvaluations_date', 'incomecapitalisationvaluations_noi': 'incomecapitalisationvaluations_noi', 'incomecapitalisationvaluations_marketvalue': 'incomecapitalisationvaluations_marketvalue', 'incomecapitalisationvaluations_value': 'incomecapitalisationvaluations_value', 'incomecapitalisationvaluations_approved': 'incomecapitalisationvaluations_approved', 'incomecapitalisationvaluations_categoryid': 'incomecapitalisationvaluations_categoryid', });
lyr_ManualValue_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'SL_LAND_PR': 'Range', 'SG26_CODE': 'TextEdit', 'LU_IZNG_CD': 'Range', 'INT_ZONE_V': 'Range', 'INT_ZONE_C': 'TextEdit', 'INT_ZONE_D': 'TextEdit', 'LU_LGL_STS': 'Range', 'Search GVR 2022': '', 'comparativesalesvaluations_parcelnumber': 'TextEdit', 'comparativesalesvaluations_date': 'DateTime', 'comparativesalesvaluations_approved': 'CheckBox', 'comparativesalesvaluations_value': 'TextEdit', 'comparativesalesvaluations_evalid': 'Range', 'manualvaluations_parcelnumber': 'TextEdit', 'manualvaluations_date': 'DateTime', 'manualvaluations_categoryid': 'Range', 'manualvaluations_value': 'TextEdit', 'manualvaluations_approved': 'CheckBox', 'manualvaluations_jobid': 'TextEdit', 'manualvaluations_evalid': 'Range', 'incomecapitalisationvaluations_evalid': 'Range', 'incomecapitalisationvaluations_parcelnumber': 'TextEdit', 'incomecapitalisationvaluations_date': 'DateTime', 'incomecapitalisationvaluations_noi': 'TextEdit', 'incomecapitalisationvaluations_marketvalue': 'TextEdit', 'incomecapitalisationvaluations_value': 'TextEdit', 'incomecapitalisationvaluations_approved': 'CheckBox', 'incomecapitalisationvaluations_categoryid': 'Range', });
lyr_ManualValue_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'SL_LAND_PR': 'inline label - visible with data', 'SG26_CODE': 'no label', 'LU_IZNG_CD': 'no label', 'INT_ZONE_V': 'no label', 'INT_ZONE_C': 'no label', 'INT_ZONE_D': 'no label', 'LU_LGL_STS': 'no label', 'Search GVR 2022': 'inline label - always visible', 'comparativesalesvaluations_parcelnumber': 'no label', 'comparativesalesvaluations_date': 'no label', 'comparativesalesvaluations_approved': 'no label', 'comparativesalesvaluations_value': '', 'comparativesalesvaluations_evalid': 'no label', 'manualvaluations_parcelnumber': 'no label', 'manualvaluations_date': '', 'manualvaluations_categoryid': 'no label', 'manualvaluations_value': 'inline label - always visible', 'manualvaluations_approved': 'no label', 'manualvaluations_jobid': 'no label', 'manualvaluations_evalid': 'no label', 'incomecapitalisationvaluations_evalid': 'no label', 'incomecapitalisationvaluations_parcelnumber': 'no label', 'incomecapitalisationvaluations_date': 'no label', 'incomecapitalisationvaluations_noi': 'no label', 'incomecapitalisationvaluations_marketvalue': 'no label', 'incomecapitalisationvaluations_value': 'no label', 'incomecapitalisationvaluations_approved': 'no label', 'incomecapitalisationvaluations_categoryid': 'no label', });
lyr_ManualValue_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});