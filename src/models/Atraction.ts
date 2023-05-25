import { Ancestor } from './Ancestor';
import { Image } from './Image';

interface Subcategory {
  key: string;
  name: string;
}

interface SubType {
  key: string;
  name: string;
}

export interface Atraction {
  location_id: string;
  name?: string;
  latitude: string;
  longitude: string;
  num_reviews: string;
  timezone: string;
  location_string: string;
  photo?: {
    images: {
      small: Image;
      thumbnail: Image;
      original: Image;
      large: Image;
      medium: Image;
    };
    is_blessed: boolean;
    uploaded_date: string;
    caption: string;
    id: string;
    helpful_votes: string;
    published_date: string;
    user: any;
  };
  awards: any[];
  doubleclick_zone: string;
  distance: string;
  distance_string: any;
  bearing: string;
  is_closed: boolean;
  is_long_closed: boolean;
  description: string;
  web_url: string;
  write_review: string;
  ancestors: Ancestor[];
  category: {
    key: string;
    name: string;
  };
  subcategory: Subcategory[];
  parent_display_name: string;
  is_jfy_enabled: boolean;
  nearest_metro_station: any[];
  address_obj: {
    street1: string;
    street2: any;
    city: string;
    state: any;
    country: string;
    postalcode: string;
  };
  address: string;
  is_candidate_for_contact_info_suppression: boolean;
  subtype: SubType[];
  rollup_category: {
    key: string;
    name: string;
  };
  rollup_contains_bookable: boolean;
  rollup_count: number;
}
