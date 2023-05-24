import { Ancestor } from './Ancestor';
import { Image } from './Image';

interface Establishment {
  key: string;
  name: string;
}

interface WeeekRange {
  open_time: number;
  close_time: number;
}

export interface Restaurant {
  location_id: string;
  name: string;
  latitude: string;
  longitude: string;
  num_reviews: string;
  timezone: string;
  location_string: string;
  photo: {
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
    user: {
      user_id: any;
      member_id: string;
      type: string;
    };
  };
  awards: any[];
  doubleclick_zone: string;
  preferred_map_engine: string;
  raw_ranking: string;
  ranking_geo: string;
  ranking_geo_id: string;
  ranking_position: string;
  ranking_denominator: string;
  ranking_category: string;
  ranking: string;
  distance: string;
  distance_string: string;
  bearing: string;
  rating: string;
  is_closed: boolean;
  open_now_text: string;
  is_long_closed: boolean;
  price_level: string;
  description: string;
  web_url: string;
  write_review: string;
  ancestors: Ancestor[];
  category: {
    key: string;
    name: string;
  };
  subcategory: any[];
  parent_display_name: string;
  is_jfy_enabled: boolean;
  nearest_metro_station: any[];
  reviews: any[];
  phone: string;
  website: string;
  address_obj: {
    street1: string;
    street2: string;
    city: string;
    state: any;
    country: string;
    postalcode: string;
  };
  address: string;
  hours: {
    week_ranges: [WeeekRange[]];
    timezone: string;
  };
  is_candidate_for_contact_info_suppression: boolean;
  cuisine: any[];
  dietary_restrictions: any[];
  establishment_types: Establishment[];
}
