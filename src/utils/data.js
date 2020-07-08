export default function getItems(){
    return new Promise((resolve, reject) => {
        require([
            "esri/Map",
            "esri/views/MapView",
            "esri/layers/FeatureLayer",
        ], (Map, MapView, FeatureLayer) => {
        
            const map = new Map({
                basemap: "topo-vector"
            });
        
            const layer = new FeatureLayer({
                url: "https://services1.arcgis.com/0Lw2m57KEotYYFaA/arcgis/rest/services/survey123_b9b1d621d16543378b6d3a6b3e02b424/FeatureServer"
            })
            // add layers to map 
            map.add(layer);
            
            const query = {
                outFields: ["*"],
                returnGeometry: true,
                where: '1 = 1'
            };
        
            const items = layer.queryFeatures(query).then( result => {
               return result.features.map(feature => {
                    const {attributes, geometry: {x, y}} =  feature.toJSON()
                    return {
                        type: 'Feature',
                        properties: attributes,
                        geometry: {
                            type: 'Point',
                            coordinates: [x, y]
                        }
                    }
                })
            });
            resolve(items)
        });
    })
}