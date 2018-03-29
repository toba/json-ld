import { JsonLD } from './types';
import { is } from '@toba/tools';

const defaultContext = 'http://schema.org';
const contextField = '@context';
const typeField = '@type';
const idField = '@id';

export interface Image {
   url: string;
   width?: number;
   height?: number;
}

/**
 * Add standard Linked Data fields
 */
export function ld<T extends JsonLD.Thing>(type: string, fields: any = {}): T {
   if (is.defined(fields, 'id')) {
      // rename ID field to standard
      fields[idField] = fields['id'];
      delete fields['id'];
   }
   fields[typeField] = type;
   fields[contextField] = defaultContext;
   return fields;
}

export function image(img: Image): JsonLD.ImageObject {
   const schema: JsonLD.ImageObject = { url: img.url };
   if (img.width) {
      schema.width = img.width;
   }
   if (img.height) {
      schema.height = img.height;
   }
   return ld<JsonLD.ImageObject>(JsonLD.Type.ImageObject, schema);
}

/**
 * Map place
 */
export function place(mapUrl: string): JsonLD.Place {
   return ld<JsonLD.Place>(JsonLD.Type.Place, { hasMap: mapUrl });
}

export function webPage(url: string): JsonLD.WebPage {
   return ld<JsonLD.WebPage>(JsonLD.Type.WebPage, { id: url });
}

export function organization(title: string, logo?: Image): JsonLD.Organization {
   const schema: { [key: string]: any } = { name: title };
   if (is.value(logo)) {
      schema['logo'] = image(logo);
   }
   return ld<JsonLD.Organization>(JsonLD.Type.Organization, schema);
}

export function breadcrumb(
   url: string,
   title: string,
   position: number
): JsonLD.BreadcrumbList {
   const schema: { [key: string]: any } = { item: { id: url, name: title } };
   if (!isNaN(position)) {
      schema.position = position;
   }
   return ld<JsonLD.BreadcrumbList>(JsonLD.Type.BreadcrumbList, schema);
}

export function discoverAction(url: string): JsonLD.DiscoverAction {
   return ld<JsonLD.DiscoverAction>(JsonLD.Type.DiscoverAction, {
      target: url
   });
}

/**
 * Convert link data to string with nulls and zeroes removed.
 */
export function serialize(linkData: any): string {
   removeContext(linkData);
   return JSON.stringify(
      linkData,
      (_key, value) => (value === null || value === 0 ? undefined : value)
   );
}

/**
 * Remove redundant context specifications.
 */
export function removeContext(linkData: JsonLD.Thing, context: string = null) {
   if (
      linkData !== undefined &&
      linkData !== null &&
      typeof linkData == is.Type.Object
   ) {
      if (
         linkData.hasOwnProperty(contextField) &&
         linkData[contextField] !== null
      ) {
         if (context !== null && linkData[contextField] == context) {
            // remove redundant value
            delete linkData[contextField];
         } else {
            // switch to new context
            context = linkData[contextField];
         }
      }
      for (const field in linkData) {
         removeContext(linkData[field], context);
      }
   }
}
