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
var format_Effectif_Region_1 = new ol.format.GeoJSON();
var features_Effectif_Region_1 = format_Effectif_Region_1.readFeatures(json_Effectif_Region_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Effectif_Region_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Effectif_Region_1.addFeatures(features_Effectif_Region_1);
var lyr_Effectif_Region_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Effectif_Region_1, 
                style: style_Effectif_Region_1,
                interactive: false,
    title: 'Effectif_Region<br />\
    <img src="styles/legend/Effectif_Region_1_0.png" /> 0 - 1309<br />\
    <img src="styles/legend/Effectif_Region_1_1.png" /> 1309 - 8932<br />\
    <img src="styles/legend/Effectif_Region_1_2.png" /> 8932 - 19829<br />\
    <img src="styles/legend/Effectif_Region_1_3.png" /> 19829 - 50264<br />\
    <img src="styles/legend/Effectif_Region_1_4.png" /> 50264 - 127462<br />'
        });
var format_Secteur_2 = new ol.format.GeoJSON();
var features_Secteur_2 = format_Secteur_2.readFeatures(json_Secteur_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteur_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteur_2.addFeatures(features_Secteur_2);
var lyr_Secteur_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Secteur_2, 
                style: style_Secteur_2,
                interactive: true,
    title: 'Secteur<br />\
    <img src="styles/legend/Secteur_2_0.png" /> Enseignement supérieur de l\'État civil <br />\
    <img src="styles/legend/Secteur_2_1.png" /> Enseignement supérieur de l\'État militaire<br />\
    <img src="styles/legend/Secteur_2_2.png" /> Établissements d\'enseignement supérieur privés agréés <br />\
    <img src="styles/legend/Secteur_2_3.png" /> Établissements d\'enseignement supérieur privés autorisés ŕ fonctionner ŕ titre temporaire <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Effectif_Region_1.setVisible(true);lyr_Secteur_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Effectif_Region_1,lyr_Secteur_2];
lyr_Effectif_Region_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'HASC_1': 'HASC_1', 'CCN_1': 'CCN_1', 'CCA_1': 'CCA_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', 'Eff_Et_ROM_Effectif Etudiant': 'Eff_Et_ROM_Effectif Etudiant', });
lyr_Secteur_2.set('fieldAliases', {'Nom de l\'établissement': 'Nom de l\'établissement', 'Nom d\'établissement en fr': 'Nom d\'établissement en fr', 'Ville': 'Ville', 'Secteur': 'Secteur', 'Y': 'Y', 'X': 'X', 'Adresse': 'Adresse', });
lyr_Effectif_Region_1.set('fieldImages', {'ID_0': 'Hidden', 'ISO': 'Hidden', 'NAME_0': 'Hidden', 'ID_1': 'TextEdit', 'NAME_1': 'Hidden', 'HASC_1': 'Hidden', 'CCN_1': 'Hidden', 'CCA_1': 'Hidden', 'TYPE_1': 'Hidden', 'ENGTYPE_1': 'Hidden', 'NL_NAME_1': 'Hidden', 'VARNAME_1': 'Hidden', 'Eff_Et_ROM_Effectif Etudiant': 'TextEdit', });
lyr_Secteur_2.set('fieldImages', {'Nom de l\'établissement': 'Hidden', 'Nom d\'établissement en fr': 'TextEdit', 'Ville': 'TextEdit', 'Secteur': 'TextEdit', 'Y': 'Hidden', 'X': 'Hidden', 'Adresse': 'TextEdit', });
lyr_Effectif_Region_1.set('fieldLabels', {'ID_1': 'inline label', 'Eff_Et_ROM_Effectif Etudiant': 'inline label', });
lyr_Secteur_2.set('fieldLabels', {'Nom d\'établissement en fr': 'inline label', 'Ville': 'inline label', 'Secteur': 'inline label', 'Adresse': 'inline label', });
lyr_Secteur_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});