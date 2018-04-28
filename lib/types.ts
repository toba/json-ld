export const contextField = '@context';
export const typeField = '@type';
export const idField = '@id';
export namespace JsonLD {
   export enum Type {
      Blog = 'Blog',
      BlogPosting = 'BlogPosting',
      BreadcrumbList = 'BreadcrumbList',
      DiscoverAction = 'DiscoverAction',
      ImageObject = 'ImageObject',
      Organization = 'Organization',
      Person = 'Person',
      Place = 'Place',
      SearchAction = 'SearchAction',
      VideoObject = 'VideoObject',
      WebPage = 'WebPage'
   }

   /**
    * @see http://schema.org/Action
    */
   export interface Action extends Thing {
      actionStatus: ActionStatusType;
      agent: Person | Organization;
      participant: Person | Organization;
      endTime: Date;
      error: Thing;
      instrument: Thing;
      location: Place | PostalAddress | string;
      object: Thing;
      result: Thing;
      startTime: Date;
      target: EntryPoint | string;
   }

   /**
    * @see http://schema.org/ActionStatusType
    */
   export interface ActionStatusType extends Thing {}

   /**
    * @see http://schema.org/AdministrativeArea
    */
   export interface AdministrativeArea extends Place {}

   export interface AggregateRating extends Rating {
      itemReviews: Thing;
      ratingCount: number;
      reviewCount: number;
   }

   /**
    * @see http://schema.org/Article
    */
   export interface Article extends CreativeWork {
      articleBody?: string;
      articleSection?: string;
      pageStart?: string | number;
      pageEnd?: string | number;
      pagination?: string;
      wordCount?: number;
   }

   /**
    * @see http://schema.org/Audience
    */
   export interface Audience extends Thing {
      audienceType: string;
      geographicArea: AdministrativeArea;
   }

   /**
    * @see http://schema.org/Blog
    */
   export interface Blog extends Thing {
      blogPost: BlogPosting[];
   }

   /**
    * @see http://schema.org/BlogPosting
    */
   export interface BlogPosting extends SocialMediaPosting {}

   /**
    * @see http://schema.org/Brand
    */
   export interface Brand extends Thing {
      aggregateRating?: AggregateRating;
      review?: Review;
      logo?: string;
   }

   /**
    * @see http://schema.org/Breadcrumb
    */
   export interface Breadcrumb extends Thing {}

   /**
    * @see http://schema.org/BreadcrumbList
    */
   export interface BreadcrumbList extends ItemList<Breadcrumb> {}

   /**
    * @see http://schema.org/BusinessEntityType
    */
   export interface BusinessEntityType extends Thing {}

   /**
    * @see http://schema.org/BusinessFunction
    */
   export interface BusinessFunction extends Thing {}

   /**
    * @see http://schema.org/Comment
    */
   export interface Comment extends CreativeWork {
      downvoteCount: number;
      upvoteCount: number;
   }

   /**
    * @see http://schema.org/Country
    */
   export interface Country extends Place {}

   /**
    * @see http://schema.org/CreativeWork
    */
   export interface CreativeWork extends Thing {
      author?: Person | Organization;
      creator?: Person | Organization;
      provider?: Person | Organization;
      producer?: Person | Organization;
      sourceOrganization?: Organization;
      editor?: Person;
      associatedArticle?: NewsArticle;
      requiresSubscription?: boolean;
      contentSize?: string;
      contentUrl?: URL | string;
      encodingFormat?: string;
      bitrate?: string;
      duration?: Duration;
      height?: Distance | QuantitativeValue | number;
      width?: Distance | QuantitativeValue | number;
      productionCompany?: Organization;
      regionsAllowed?: Place;
      copyrightHolder?: Person | Organization;
      copyrightYear?: number;
      audience?: Audience;
      encoding?: MediaObject;
      hasPart?: CreativeWork;
      isPartOf?: CreativeWork;
      headling?: string;
      keywords?: string;
      locationCreated?: Place;
      review?: Review;
      datePublished?: DateTime;
      text?: string;
      version?: number;
      mainEntity?: Thing;
      thumbnailUrl?: string;
   }

   export interface ContactPoint extends Thing {
      areaServed: AdministrativeArea | GeoShape | Place | string;
      availableLanguage: Language | string;
      contactOption: ContactPointOption;
      contactType: string;
      email: string;
      faxNumber: string;
      hoursAvailable: OpeningHoursSpecification;
      productSupported: Product | string;
      telephone: string;
   }

   /**
    * @see http://schema.org/ContactPointOption
    */
   export interface ContactPointOption extends Thing {}

   /**
    * @see http://schema.org/GeoCoordinates
    */
   export interface Coordinates extends Thing {
      elevation: string | number;
      latitude: string | number;
      longitude: string | number;
      postalCode: string;
   }

   /**
    * @see http://schema.org/DateTime
    * @see https://en.wikipedia.org/wiki/ISO_8601
    */
   export interface DateTime extends Thing {}

   /**
    * @see http://schema.org/DayOfWeek
    */
   export interface DayOfWeek extends Thing {}

   /**
    * @see http://schema.org/DeliveryMethod
    */
   export interface DeliveryMethod extends Thing {
      method: {
         directDownload: 'http://purl.org/goodrelations/v1#DeliveryModeDirectDownload';
         freight: 'http://purl.org/goodrelations/v1#DeliveryModeFreight ';
         mail: 'http://purl.org/goodrelations/v1#DeliveryModeMail';
         ownFleet: 'http://purl.org/goodrelations/v1#DeliveryModeOwnFleet';
         pickUp: 'http://purl.org/goodrelations/v1#DeliveryModePickUp';
         DHL: 'http://purl.org/goodrelations/v1#DHL';
         federalExpress: 'http://purl.org/goodrelations/v1#FederalExpress';
         UPS: 'http://purl.org/goodrelations/v1#UPS';
      };
   }

   /**
    * @see http://schema.org/Demand
    */
   export interface Demand extends Thing {
      acceptedPaymentMethod: LoanOrCredit | PaymentMethod;
      advancedBookingRequirement: QuantitativeValue;
      areaServed: AdministrativeArea | GeoShape | Place | string;
      availability: ItemAvailability;
      availabilityEnds: Date;
      availabilityStarts: Date;
      availableAtOrFrom: Place;
      availableDeliveryMethod: DeliveryMethod;
      businessFunction: BusinessFunction;
      deliveryLeadTime: QuantitativeValue;
      eligibleCustomerType: BusinessEntityType;
      eligibleDuration: QuantitativeValue;
      eligibleQuantity: QuantitativeValue;
      eligibleRegion: GeoShape | Place | string;
      eligibleTransactionVolume: PriceSpecification;
      gtin12: string;
      gtin13: string;
      gtin14: string;
      gtin8: string;
      includesObject: TypeAndQuantityNode;
      ineligibleRegion: GeoShape | Place | Text;
      inventoryLevel: QuantitativeValue;
      itemCondition: OfferItemCondition;
      itemOffered: Product | Service;
      mpn: string;
      priceSpecification: PriceSpecification;
      seller: Organization | Person;
      serialNumber: string;
      sku: string;
      validFrom: Date;
      validThrough: Date;
      warranty: WarrantyPromise;
   }

   /**
    * @see http://schema.org/DiscussionForumPosting
    */
   export interface DiscussionForumPosting extends SocialMediaPosting {}

   /**
    * @see http://schema.org/Distance
    */
   export interface Distance extends Thing {}

   /**
    * @see http://schema.org/Duration
    */
   export interface Duration extends Thing {}

   /**
    * @see http://schema.org/EducationalOrganization
    */
   export interface EducationalOrganization extends Organization {
      alumni: Person[];
   }

   export interface EntryPoint extends Thing {
      actionApplication: SoftwareApplication;
      actionPlatform: string | URL;
      contentType: string;
      encodingType: string;
      httpMethod: string;
      urlTemplate: string;
   }

   /**
    * @see http://schema.org/Enumeration
    */
   export interface Enumeration extends Thing {}

   /**
    * @see http://schema.org/Event
    */
   export interface Event extends Thing {
      actor: Person;
      aggregateRating: AggregateRating;
      attendee: Person[] | Organization[];
      composer: Person | Organization;
      contributor: Person[] | Organization[];
      director: Person;
      doorTime: Date;
      duration: Duration;
      endDate: Date;
      eventStatus: EventStatusType;
      funder: Organization | Person;
      inLanguage: Language | string;
      isAccessibleForFree: boolean;
      location: Place | PostalAddress | string;
      offers: Offer[];
      organizer: Person | Organization;
      performer: Person | Organization;
      previousStartDate: Date;
      recordedIn: CreativeWork;
      review: Review;
      sponsor: Person | Organization;
      startDate: Date;
      subEvent: Event;
      superEvent: Event;
      translator: Person | Organization;
      typicalAgeRange: string;
      workFeatured: CreativeWork;
      workPerformed: CreativeWork;
   }

   /**
    * @see http://schema.org/EventStatusType
    */
   export interface EventStatusType extends Thing {}

   /**
    * @see http://schema.org/FinancialProduct
    */
   export interface FinancialProduct extends Service {
      annualPercentageRate: number | QuantitativeValue;
      feesAndCommissionsSpecification: string | URL;
      interestRate: number | QuantitativeValue;
   }

   /**
    * @see http://schema.org/GenderType
    */
   export interface GenderType extends Thing {}

   /**
    * @see http://schema.org/GeoCoordinates
    */
   export interface GeoCoordinates extends Thing {
      address: PostalAddress | string;
      addressCountry: Country | string;
      elevation: number | string;
      latitude: number | string;
      longitude: number | string;
      postalCode: string;
   }

   export interface GeoShape extends Thing {
      address: PostalAddress | string;
      addressCountry: Country | string;
      box: string;
      circle: string;
      elevation: string | number;
      line: string;
      polygon: string;
      postalCode: string;
   }

   /**
    * @see http://schema.org/ImageObject
    */
   export interface ImageObject extends MediaObject {
      caption?: string;
      exifData?: PropertyValue | string;
      representativeOfPage?: boolean;
      thumbnail?: ImageObject;
   }

   /**
    * @see http://schema.org/ItemAvailability
    */
   export interface ItemAvailability extends Thing {}

   /**
    * @see http://schema.org/ItemList
    */
   export interface ItemList<T extends Thing> extends Thing {
      itemListElement: ListItem<T>[] | string[] | Thing[];
      itemListOrder: ItemListOrderType | string;
      numberofItems: number;
   }

   /**
    * @see http://schema.org/ItemListOrderType
    */
   export interface ItemListOrderType extends Thing {}

   /**
    * @see http://schema.org/Language
    */
   export interface Language extends Thing {}

   /**
    * @see http://schema.org/ListItem
    */
   export interface ListItem<T extends Thing> extends Thing {
      item: T;
      nextItem: ListItem<T>;
      position: number | string;
      previousItem: ListItem<T>;
   }

   /**
    * @see http://schema.org/LoanOrCredit
    */
   export interface LoanOrCredit extends FinancialProduct {
      amount: MonetaryAmount | number;
      loanTerm: QuantitativeValue;
      requiredCollateral: Thing | string;
   }

   /**
    * @see http://schema.org/LocationFeatureSpecification
    */
   export interface LocationFeatureSpecification extends PropertyValue {
      hoursAvailable: OpeningHoursSpecification;
      validFrom: Date;
      validThrough: Date;
   }

   export interface MediaObject extends CreativeWork {
      embedUrl?: URL | string;
      encodesCreativeWork?: CreativeWork;
      expires?: Date;
      playerType?: string;
      productionCompany?: Organization;
      regionsAllowed?: Place;
      requiresSubscription?: boolean;
      uploadDate?: Date;
   }

   /**
    * @see http://schema.org/MonetaryAmount
    */
   export interface MonetaryAmount extends Thing {
      currency: string;
      maxValue: number;
      minValue: number;
      validFrom: Date;
      validThrough: Date;
      value: boolean | number | StructuredValue | string;
   }

   /**
    * @see http://schema.org/MusicAlbum
    */
   export interface MusicAlbum extends CreativeWork {
      albumProductionType: MusicAlbumProductionType;
      albumRelease: MusicRelease;
      albumReleaseType: MusicAlbumReleaseType;
      byArtist: MusicGroup;
   }

   /**
    * @see http://schema.org/MusicAlbumProductionType
    */
   export interface MusicAlbumProductionType extends Thing {}

   /**
    * @see http://schema.org/MusicAlbumReleaseType
    */
   export interface MusicAlbumReleaseType extends Thing {}

   /**
    * @see http://schema.org/MusicComposition
    */
   export interface MusicComposition extends CreativeWork {
      composer: Person | Organization;
      firstPerformance: Event;
      includedComposition: MusicComposition;
      iswcCode: string;
      lyricist: Person;
      lyrics: CreativeWork;
      musicArrangement: MusicComposition;
      musicCompositionForm: string;
      musicalKey: string;
      recordedAs: MusicRecording;
   }

   /**
    * @see http://schema.org/MusicGroup
    */
   export interface MusicGroup extends Organization {
      album: MusicAlbum;
      genre: string | URL;
      track: ItemList<MusicRecording> | MusicRecording;
   }

   /**
    * @see http://schema.org/MusicPlaylist
    */
   export interface MusicPlaylist extends CreativeWork {
      numTracks: number;
      track: ItemList<MusicRecording> | MusicRecording;
   }

   /**
    * @see http://schema.org/MusicRecording
    */
   export interface MusicRecording extends CreativeWork {
      byArtist: MusicGroup;
      duration: Duration;
      inAlbum: MusicAlbum;
      inPlaylist: MusicPlaylist;
      isrcCode: string;
      recordingOf: MusicComposition;
   }

   /**
    * @see http://schema.org/MusicRelease
    */
   export interface MusicRelease extends MusicPlaylist {
      catalogNumber: string;
      creditedTo: Person | Organization;
      duration: Duration;
      musicReleaseFormat: MusicReleaseFormatType;
      recordLabel: Organization;
      realseOf: MusicAlbum;
   }

   /**
    * @see http://schema.org/MusicReleaseFormatType
    */
   export interface MusicReleaseFormatType extends Thing {}

   export interface NewsArticle extends Article {
      dateline: string;
      printColumn: string;
      printEdition: string;
      printPage: string;
      printSelection: string;
   }

   export interface Offer extends Thing {
      acceptingPaymentMethod: LoanOrCredit | PaymentMethod;
      addOn: Offer;
      advancedBookingRequirement: QuantitativeValue;
      aggregateRating: AggregateRating;
      areaServiced: AdministrativeArea | GeoShape | Place | string;
      availability: ItemAvailability;
      availabilityEnds: Date;
      availabilityStarts: Date;
      availableAtOrFrom: Place;
      availableDeliveryMethod: DeliveryMethod;
      businessFunction: BusinessFunction;
      category: Thing | string;
      deliveryLeadTime: QuantitativeValue;
      eligibleCustomerType: BusinessEntityType;
      eligibleDuration: QuantitativeValue;
      eligibleQuantity: QuantitativeValue;
      eligibleRegion: GeoShape | Place | string;
      eligibleTransactionVolume: PriceSpecification;
      gtin12: string;
      gtin13: string;
      gtin14: string;
      gtin8: string;
      includesObject: TypeAndQuantityNode;
      ineligibleRegion: GeoShape | Place | string;
      inventoryLevel: QuantitativeValue;
      itemCondition: OfferItemCondition;
      itemOffered: Product | Service;
      mpn: string;
      offeredBy: Organization | Person;
      price: number | string;
      priceCurrency: string;
      priceSpecification: PriceSpecification;
      priceValidUntil: Date;
      review: Review;
      seller: Organization | Person;
      serialNumber: string;
      sku: string;
      validFrom: Date;
      validThrough: Date;
      warranty: WarrantyPromise;
   }

   /**
    * @see http://schema.org/OfferCatalog
    */
   export interface OfferCatalog extends ItemList<Offer> {}

   /**
    * @see http://schema.org/OfferItemCondition
    */
   export interface OfferItemCondition extends Thing {}

   /**
    * @see http://schema.org/OpeningHoursSpecification
    */
   export interface OpeningHoursSpecification extends Thing {
      closes: Date;
      dayOfWeek: DayOfWeek;
      opens: Date;
      validFrom: Date;
      validThrough: Date;
   }

   /**
    * @see http://schema.org/Organization
    */
   export interface Organization extends Thing {
      address: PostalAddress | string;
      aggregateRating: AggregateRating;
      alumni: Person[];
      areaServiced: AdministrativeArea | GeoShape | Place | string;
      award: string;
      brand: Brand | Organization;
      contactPoint: ContactPoint;
      department: Organization;
      dissolutionDate: Date;
      duns: string;
      email: string;
      employee: Person | Person[];
      event: Event;
      faxNumber: string;
      founder: Person | Person[];
      foundingDate: Date;
      foundingLocation: Place;
      funder: Organization | Person;
      globalLocationNumber: string;
      hasOfferCatalog: OfferCatalog;
      hasPOS: Place;
      isicV4: string;
      legalName: string;
      leiCode: string;
      location: Place | PostalAddress | string;
      logo: ImageObject | URL;
      makesOffer: Offer;
      member: Organization | Person;
      memberOf: Organization | Person;
      naics: string;
      numberOfEmployees: QuantitativeValue;
      owns: OwnershipInfo | Product;
      parentOrganization: Organization;
      review: Review;
      seeks: Demand;
      sponsor: Organization | Person;
      subOrganization: Organization;
      taxID: string;
      telephone: string;
      vatID: string;
   }

   /**
    * @see http://schema.org/OwnershipInfo
    */
   export interface OwnershipInfo extends Thing {
      acquiredFrom: Organization | Person;
      ownedFrom: Date;
      ownedThrough: Date;
      typeOfGood: Product | Service;
   }

   /**
    * @see http://schema.org/PaymentMethod
    */
   export interface PaymentMethod extends Thing {}

   /**
    * @see http://schema.org/Person
    */
   export interface Person extends Thing {
      additionalName: string;
      addres: PostalAddress | string;
      affiliation: Organization;
      alumniOf: EducationalOrganization[] | Organization[];
      award: string;
      birthDate: string;
      birthPlace: Place;
      brand: Brand | Organization;
      children: Person[];
      colleague: Person | URL;
      contactPoint: ContactPoint;
      deathDate: Date;
      deathPlace: Place;
      duns: string;
      email: string;
      familyName: string;
      faxNumber: string;
      follows: Person[];
      funder: Organization | Person;
      gender: GenderType | string;
      givenName: string;
      globalLocationNumber: string;
      hasOfferCatalog: OfferCatalog;
      hasPOS: Place;
      height: Distance | QuantitativeValue;
      homeLocation: ContactPoint | Place;
      honorificPrefix: string;
      honorificSuffix: string;
      isicV4: string;
      jobTitle: string;
      knows: Person[];
      makesOffer: Offer;
      memberOf: Organization[] | ProgramMembership[];
      naics: string;
      nationality: Country;
      netWorth: MonetaryAmount | PriceSpecification;
      owns: OwnershipInfo[] | Product[];
      parent: Person[];
      performerIn: Event;
      relatedTo: Person[];
      seeks: Demand[];
      sibling: Person[];
      sponder: Organization | Person;
      spouse: Person;
      taxID: string;
      telephone: string;
      vatID: string;
      weight: QuantitativeValue;
      workLocation: ContactPoint | Place;
      worksFor: Organization;
   }

   /**
    * @see http://schema.org/Photograph
    */
   export interface Photograph extends CreativeWork {}

   export interface Place extends Thing {
      additionalProperty: PropertyValue;
      address: PostalAddress | string;
      aggregateRating: AggregateRating;
      amenityFeature: LocationFeatureSpecification;
      branchCode: string;
      containedInPlace: Place;
      containsPlace: Place;
      event: Event;
      faxNumber: string;
      geo: GeoCoordinates | GeoShape;
      globalLocationNumber: string;
      hasMap: Map<string, URL> | URL | string;
      isicV4: string;
      logo: ImageObject | URL;
      openingHoursSpecification: OpeningHoursSpecification;
      photo: ImageObject | Photograph;
      review: Review;
      smokingAllowed: boolean;
      specialOpeningHoursSpecification: OpeningHoursSpecification;
      telephone: string;
   }

   export interface PostalAddress extends ContactPoint {
      addressCountry: Country | string;
      addressLocality: string;
      addressRegion: string;
      postOfficeBoxNumber: string;
      postalCode: string;
      streetAddress: string;
   }

   /**
    * @see http://schema.org/PriceSpecification
    */
   export interface PriceSpecification extends Thing {
      eligibleQuantity: QuantitativeValue;
      eligibleTransactionVolume: PriceSpecification;
      maxPrice: number;
      minPrice: number;
      price: number | string;
      priceCurrency: string;
      validFrom: Date;
      validThrough: Date;
      valueAddedTaxIncluded: boolean;
   }

   /**
    * @see http://schema.org/ProgramMembership
    */
   export interface ProgramMembership extends Thing {
      hostingOrganization: Organization;
      member: Organization | Person;
      membershipNumber: string;
      programName: string;
   }

   export interface Product extends Thing {
      additionalProperty: PropertyValue;
      aggregateRating: AggregateRating;
      audience: Audience;
      award: string;
      brand: Brand | Organization;
      category: string | Thing;
      color: string;
      depth: Distance | QuantitativeValue;
      gtin12: string;
      gtin13: string;
      gtin14: string;
      gtin8: string;
      height: Distance | QuantitativeValue;
      isAccessoryOrSparePart: Product;
      isConsumableFor: Product;
      isRelatedTo: Product | Service;
      itemCondition: OfferItemCondition;
      logo: ImageObject | URL;
      manufacturer: Organization;
      model: ProductModel | string;
      mpn: string;
      offers: Offer;
      productID: string;
      productionDate: Date;
      purchaseDate: Date;
      releaseDate: Date;
      review: Review;
      sku: string;
      weight: QuantitativeValue;
      width: Distance | QuantitativeValue;
   }

   /**
    * @see http://schema.org/ProductModel
    */
   export interface ProductModel extends Product {
      isVariantOf: ProductModel;
      predecessorOf: ProductModel;
      successorOf: ProductModel;
   }

   export interface PropertyValue extends Thing {
      maxValue: number;
      minValue: number;
      propertyID: string | URL;
      unitCode: string | URL;
      unitText: string;
      value: boolean | number | StructuredValue | string;
      valueReference:
         | Enumeration
         | PropertyValue
         | QualitativeValue
         | QuantitativeValue
         | StructuredValue;
   }

   export interface QualitativeValue extends Thing {
      additionalProperty: PropertyValue;
      equal: QualitativeValue;
      greater: QualitativeValue;
      greaterOrEqual: QualitativeValue;
      lesser: QualitativeValue;
      lesserOrEqual: QualitativeValue;
      nonEqual: QualitativeValue;
      valueReference:
         | Enumeration
         | PropertyValue
         | QualitativeValue
         | QuantitativeValue
         | StructuredValue;
   }

   export interface QuantitativeValue extends Thing {
      additionalProperty: PropertyValue;
      maxValue: number;
      minValue: number;
      unitCode: string | URL;
      unitText: string;
      value: boolean | number | StructuredValue | string;
      valueReference:
         | Enumeration
         | PropertyValue
         | QualitativeValue
         | QuantitativeValue
         | StructuredValue;
   }

   /**
    * @see http://schema.org/Rating
    */
   export interface Rating extends Thing {
      author: Organization | Person;
      bestRating: string | number;
      ratingValue: string | number;
      worstRating: string | number;
   }

   /**
    * @see http://schema.org/Review
    */
   export interface Review extends CreativeWork {
      itemReviewed: Thing;
      reviewBody: string;
      reviewRating: Rating;
   }

   /**
    * @see http://schema.org/SearchAction
    */
   export interface SearchAction extends Action {
      query: string;
   }

   /**
    * @see http://schema.org/DiscoverAction
    */
   export interface DiscoverAction extends Action {}

   /**
    * @see http://schema.org/Service
    */
   export interface Service extends Thing {
      aggregateRating: AggregateRating;
      areaServed: AdministrativeArea | GeoShape | Place | string;
      audience: Audience;
      availableChannel: ServiceChannel;
      award: string;
      brand: Brand | Organization;
      category: string | Thing;
      hasOfferCatalog: OfferCatalog;
      hoursAvailable: OpeningHoursSpecification;
      isRelatedTo: Product | Service;
      isSimilarTo: Product | Service;
      logo: ImageObject | URL;
      offers: Offer[];
      provider: Organization | Person;
      providerMobility: string;
      review: Review;
      serviceOutput: Thing;
      serviceType: string;
   }

   /**
    * @see http://schema.org/ServiceChannel
    */
   export interface ServiceChannel extends Thing {
      availableLanguage: Language;
      processingTime: Duration;
      providesService: Service;
      serviceLocation: Place;
      servicePhone: ContactPoint;
      servicePostalAddress: PostalAddress;
      serviceSmsNumber: ContactPoint;
      serviceURL: URL;
   }

   /**
    * @see http://schema.org/SocialMediaPosting
    */
   export interface SocialMediaPosting extends Article {
      sharedContent?: CreativeWork;
   }

   /**
    * @see http://schema.org/SoftwareApplication
    */
   export interface SoftwareApplication extends Thing {
      applicationCategory: string;
      applicationSuite: string;
      downloadUrl: string;
      operatingSystem: string;
      softwareVersion: string;
   }

   /**
    * @see http://schema.org/Specialty
    */
   export interface Specialty extends Thing {}

   /**
    * @see http://schema.org/StructuredValue
    */
   export interface StructuredValue extends Thing {}

   export interface Thing {
      [key: string]: any;
      [idField]?: string;
      [contextField]?: string;
      [typeField]?: string;
      name?: string;
      description?: string;
      image?: ImageObject | string;
      alternateName?: string;
      additionalType?: URL;
      potentialAction?: Action;
      sameAs?: URL;
      mainEntityOfPage?: CreativeWork | URL;
      url?: URL | string;
   }

   /**
    * @see http://schema.org/TypeAndQuantityNode
    */
   export interface TypeAndQuantityNode extends Thing {
      amountOfThisGood: number;
      businessFunction: BusinessFunction;
      typeOfGood: Product | Service;
      unitCode: string | URL;
      unitText: string;
   }

   export interface URL extends Thing {}

   /**
    * @see http://schema.org/VideoObject
    */
   export interface VideoObject extends MediaObject {
      actor: Person;
      caption: string;
      director: Person;
      musicBy: MusicGroup;
      thumbnail: ImageObject;
      transcript: string;
      videoFrameSize: string;
      videoQuality: string;
   }

   /**
    * @see http://schema.org/WarrantyPromise
    */
   export interface WarrantyPromise extends Thing {
      durationOfWarranty: QuantitativeValue;
      warrantyScope: WarrantyScope;
   }

   /**
    * @see http://schema.org/WarrantyScope
    */
   export interface WarrantyScope extends Thing {}

   /**
    * @see http://schema.org/WebPage
    */
   export interface WebPage extends CreativeWork {
      breadcrumb?: BreadcrumbList | Breadcrumb[];
      lastReviewed?: Date;
      mainContentOfPage?: WebPageElement;
      primaryImageOfPage?: ImageObject;
      relatedLink?: URL[];
      reviewedBy?: Person | Organization;
      significantLink?: URL;
      specialty?: Specialty;
   }

   /**
    * @see http://schema.org/WebPageElement
    */
   export interface WebPageElement extends CreativeWork {}

   /**
    * @see http://schema.org/WebSite
    */
   export interface WebSite extends CreativeWork {}
}
