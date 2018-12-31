[![npm package](https://img.shields.io/npm/v/@toba/json-ld.svg)](https://www.npmjs.org/package/@toba/json-ld)
[![Build Status](https://travis-ci.org/toba/json-ld.svg?branch=master)](https://travis-ci.org/toba/json-ld)
![Code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)
[![Dependencies](https://img.shields.io/david/toba/json-ld.svg)](https://david-dm.org/toba/json-ld)
[![DevDependencies](https://img.shields.io/david/dev/toba/json-ld.svg)](https://david-dm.org/toba/json-ld#info=devDependencies&view=list)
[![Test Coverage](https://codecov.io/gh/toba/json-ld/branch/master/graph/badge.svg)](https://codecov.io/gh/toba/json-ld)

<img src='https://toba.github.io/about/images/logo-colored.svg' width="100" align="right"/>

# Toba JSON-LD

TypeScript definitions and helper functions for [JSON Link Data](https://en.wikipedia.org/wiki/JSON-LD).

💡[Using a TypeScript module](https://toba.github.io/about/usage)

```ts
import { JsonLD } from '@toba/json-ld';

const rating: JsonLD:Rating = {
   author: "Toba";
   bestRating: 5,;
   ratingValue: 4,
   worstRating: "good"
};
```

## Helper Functions

The library can be used for only its type definitions (interfaces).

### Format

#### Finalize Link Data document

Call `ld` to finalize your Link Data document. This method replaces the more easily entered field names for `id`, `type` and `context` with the `@`-prefixed variants required by the JSON-LD standard.

```ts
import { JsonLD, ld } from '@toba/json-ld';
const json = ld(typeName, doc);
```

#### Convert document to text for web page inclusion

```ts

serialize(linkData: any)
```

#### Remove redundant context specifications

```ts
removeContext(linkData: JsonLD.Thing, context?: string)
```

### Generate

The library includes generator functions for common types.

#### [Image](http://schema.org/ImageObject)

```ts
interface Image {
   url: string;
   width?: number;
   height?: number;
}
```

```ts
import { JsonLD, image } from '@toba/json-ld';
// type will be JsonLD.ImageObject
const json = image(img);
```

#### Place

```ts
import { JsonLD, place } from '@toba/json-ld';
// type will be JsonLD.Place
const json = place(mapURL);
```

#### [Web page](http://schema.org/WebPage)

```ts
import { JsonLD, webPage } from '@toba/json-ld';
// type will be JsonLD.WebPage
const json = webPage(url);
```

#### [Organization](http://schema.org/Organization)

```ts
import { JsonLD, organization } from '@toba/json-ld';
// type will be JsonLD.Organization
const json = organization(title, logo);
```

#### [Breadcrumb](http://schema.org/breadcrumb)

```ts
import { JsonLD, breadcrumb } from '@toba/json-ld';
// type will be JsonLD.Breadcrumb
const json = breadcrumb(url, title, position);
```

#### [Discover Action](http://schema.org/DiscoverAction)

```ts
import { JsonLD, discoverAction } from '@toba/json-ld';
// type will be JsonLD.DiscoverAction
discoverAction(url: string)
```

## License

Copyright &copy; 2019 Jason Abbott

This software is licensed under the MIT license. See the [LICENSE](./LICENSE) file
accompanying this software for terms of use.
