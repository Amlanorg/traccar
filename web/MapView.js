/*
 * Copyright 2015 Anton Tananaev (anton.tananaev@gmail.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

Ext.define('MapView', {
    extend: 'Ext.form.Panel',
    xtype: 'map-view',

    title: strings.map_title,
    layout: 'fit',

    listeners: {
        afterrender: function() {

            /*var layer = new ol.layer.Tile({source: new ol.source.BingMaps({
                key: 'AseEs0DLJhLlTNoxbNXu7DGsnnH4UoWuGue7-irwKkE3fffaClwc9q_Mr6AyHY8F',
                imagerySet: 'Road'
            })});*/

            var layer = new ol.layer.Tile({source: new ol.source.OSM({
            })});

            var view = new ol.View({
                center: ol.proj.transform(styles.map_center, 'EPSG:4326', 'EPSG:3857'),
                zoom: styles.map_zoom,
                maxZoom: styles.map_max_zoom
            });

            this.map = new ol.Map({
                target: this.body.dom.id,
                layers: [ layer ],
                view: view
            });
        },

        resize: function() {
            this.map.updateSize();
        }
    }
});
