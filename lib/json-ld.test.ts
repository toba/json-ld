import {
   breadcrumb,
   image,
   place,
   webPage,
   organization,
   discoverAction,
   Image
} from './json-ld';

const url = 'http://example.com/page/';
const logo: Image = {
   url: 'http://example.com/photo.jpg',
   width: 800,
   height: 600
};

test('renders image correctly', () => {
   expect(image(logo)).toMatchSnapshot();
});

test('renders place correctly', () => {
   expect(place(url)).toMatchSnapshot();
});

test('renders webPage correctly', () => {
   expect(webPage(url)).toMatchSnapshot();
});

test('renders organization correctly', () => {
   expect(organization('Org With Logo', logo)).toMatchSnapshot();
   expect(organization('Org Without Logo')).toMatchSnapshot();
});

test('renders breadcrumb correctly', () => {
   expect(breadcrumb(url, 'First Title', 1)).toMatchSnapshot();
   expect(breadcrumb(url, 'Second Title', 2)).toMatchSnapshot();
});

test('renders discover action correctly', () => {
   expect(discoverAction(url)).toMatchSnapshot();
});
