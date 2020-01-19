import '@toba/test'
import {
   breadcrumb,
   image,
   place,
   webPage,
   organization,
   discoverAction,
   removeContext,
   Image
} from './json-ld'
import { contextField } from './types'

const url = 'http://example.com/page/'
const logo: Image = {
   url: 'http://example.com/photo.jpg',
   width: 800,
   height: 600
}

test('renders image correctly', () => {
   expect(image(logo)).toMatchSnapshot()
})

test('renders place correctly', () => {
   expect(place(url)).toMatchSnapshot()
})

test('renders webPage correctly', () => {
   expect(webPage(url)).toMatchSnapshot()
})

test('renders organization correctly', () => {
   const orgWithLogo = organization('Org With Logo', logo)
   const orgNoLogo = organization('Org Without Logo')
   expect(orgWithLogo).toMatchSnapshot()
   expect(orgNoLogo).toMatchSnapshot()
})

test('renders breadcrumb correctly', () => {
   expect(breadcrumb(url, 'First Title', 1)).toMatchSnapshot()
   expect(breadcrumb(url, 'Second Title', 2)).toMatchSnapshot()
})

test('renders discover action correctly', () => {
   expect(discoverAction(url)).toMatchSnapshot()
})

test('removes redundant context', () => {
   const orgWithLogo = organization('Org With Logo', logo)
   expect(orgWithLogo).toHaveAllProperties(contextField, 'logo')
   // normalization should remove redudant context properties
   expect(orgWithLogo.logo).toHaveProperty(contextField)

   removeContext(orgWithLogo)

   expect(orgWithLogo.logo).not.toHaveProperty(contextField)
})
