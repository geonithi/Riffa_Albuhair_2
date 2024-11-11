var wms_layers = [];


        var lyr_satellitemaps_0 = new ol.layer.Tile({
            'title': ' satellite  maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_CADASTRAL_RIFFA_ALBUHAIR_1 = new ol.format.GeoJSON();
var features_CADASTRAL_RIFFA_ALBUHAIR_1 = format_CADASTRAL_RIFFA_ALBUHAIR_1.readFeatures(json_CADASTRAL_RIFFA_ALBUHAIR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CADASTRAL_RIFFA_ALBUHAIR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CADASTRAL_RIFFA_ALBUHAIR_1.addFeatures(features_CADASTRAL_RIFFA_ALBUHAIR_1);
var lyr_CADASTRAL_RIFFA_ALBUHAIR_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CADASTRAL_RIFFA_ALBUHAIR_1, 
                style: style_CADASTRAL_RIFFA_ALBUHAIR_1,
                popuplayertitle: "CADASTRAL_RIFFA_ALBUHAIR",
                interactive: true,
                title: '<img src="styles/legend/CADASTRAL_RIFFA_ALBUHAIR_1.png" /> CADASTRAL_RIFFA_ALBUHAIR'
            });
var format_Parcel_numberRIFFA_ALBUHAIR_2 = new ol.format.GeoJSON();
var features_Parcel_numberRIFFA_ALBUHAIR_2 = format_Parcel_numberRIFFA_ALBUHAIR_2.readFeatures(json_Parcel_numberRIFFA_ALBUHAIR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcel_numberRIFFA_ALBUHAIR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcel_numberRIFFA_ALBUHAIR_2.addFeatures(features_Parcel_numberRIFFA_ALBUHAIR_2);
var lyr_Parcel_numberRIFFA_ALBUHAIR_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcel_numberRIFFA_ALBUHAIR_2, 
                style: style_Parcel_numberRIFFA_ALBUHAIR_2,
                popuplayertitle: "Parcel_number-RIFFA_ALBUHAIR",
                interactive: true,
                title: '<img src="styles/legend/Parcel_numberRIFFA_ALBUHAIR_2.png" /> Parcel_number-RIFFA_ALBUHAIR'
            });
var format_polyline_FCAD_3 = new ol.format.GeoJSON();
var features_polyline_FCAD_3 = format_polyline_FCAD_3.readFeatures(json_polyline_FCAD_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_polyline_FCAD_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_polyline_FCAD_3.addFeatures(features_polyline_FCAD_3);
var lyr_polyline_FCAD_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_polyline_FCAD_3, 
                style: style_polyline_FCAD_3,
                popuplayertitle: "polyline_FCAD",
                interactive: true,
                title: '<img src="styles/legend/polyline_FCAD_3.png" /> polyline_FCAD'
            });

lyr_satellitemaps_0.setVisible(true);lyr_CADASTRAL_RIFFA_ALBUHAIR_1.setVisible(true);lyr_Parcel_numberRIFFA_ALBUHAIR_2.setVisible(true);lyr_polyline_FCAD_3.setVisible(true);
var layersList = [lyr_satellitemaps_0,lyr_CADASTRAL_RIFFA_ALBUHAIR_1,lyr_Parcel_numberRIFFA_ALBUHAIR_2,lyr_polyline_FCAD_3];
lyr_CADASTRAL_RIFFA_ALBUHAIR_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_1': 'FID_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Parcel_numberRIFFA_ALBUHAIR_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'BSI_str': 'BSI_str', });
lyr_polyline_FCAD_3.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Level': 'Level', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'Length': 'Length', });
lyr_CADASTRAL_RIFFA_ALBUHAIR_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Parcel_numberRIFFA_ALBUHAIR_2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'BSI_str': 'TextEdit', });
lyr_polyline_FCAD_3.set('fieldImages', {'FID_': 'TextEdit', 'Entity': 'TextEdit', 'Level': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', 'Length': 'TextEdit', });
lyr_CADASTRAL_RIFFA_ALBUHAIR_1.set('fieldLabels', {'OBJECTID': 'no label', 'FID_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Parcel_numberRIFFA_ALBUHAIR_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'BSI_str': 'inline label - always visible', });
lyr_polyline_FCAD_3.set('fieldLabels', {'FID_': 'no label', 'Entity': 'no label', 'Level': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'hidden field', 'Length': 'inline label - always visible', });
lyr_polyline_FCAD_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});