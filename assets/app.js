import 'unpoly'
import Alpine from 'alpinejs'
import mediumZoom from 'medium-zoom'
import docsearch from '@docsearch/js'
import { tabs } from 'edge-uikit/tabs'
import Persist from '@alpinejs/persist'
import { initBaseComponents, initSearchComponent, initZoomComponent } from '@dimerapp/docs-theme/scripts'

await import.meta.glob(['../content/**/*.png', '../content/**/*.jpeg', '../content/**/*.jpg'])

Alpine.plugin(tabs)
Alpine.plugin(Persist)
Alpine.plugin(initBaseComponents)
Alpine.plugin(initSearchComponent(docsearch))
Alpine.plugin(initZoomComponent(mediumZoom))
Alpine.start()
