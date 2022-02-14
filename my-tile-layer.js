import * as turf from "@turf/turf";

import {TileLayer, BitmapLayer} from './deck-layers';


class MyTileLayer extends TileLayer {
  renderSubLayers(props){
      const {
        bbox: {left, bottom, right, top}
      } = props.tile;

      return new BitmapLayer(props, {
        data: null,
        image: props.data,
        bounds: [left, bottom, right, top]
      });
    }
}

MyTileLayer.layerName = "MyTileLayer";

export { MyTileLayer };
