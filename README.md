Tile layer for pydeck
========================

Using custom layer in pydeck to handle Tile layer with OrthographicView ( based on [pydeck_custom_layer](https://github.com/ajduberstein/pydeck_custom_layer) )

```python

import pydeck as pdk

pdk.settings.custom_libraries = [
    {
        "libraryName": "MyTileLayerLibrary",
        "resourceUri": "https://cdn.jsdelivr.net/gh/shrddr/pydeck_myTileLayer@master/dist/bundle.js",
    }
]

DATA_URL = 'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png'

custom_layer = pdk.Layer(
    "MyTileLayer",
    DATA_URL,
    min_zoom=0,
    max_zoom=7,
    tile_size=256
)

view_state = pdk.ViewState(target=[128, 85, 0], zoom=7)
view = pdk.View(
    type="OrthographicView",
    controller=True
)

r = pdk.Deck(
    layers=[custom_layer],
    initial_view_state=view_state,
    views=[view]
)

r.to_html("tilemap.html")
```
