import { Image } from './Image';

interface Award {
  award_type: string;
  year: string;
  images: {
    small: string;
    large: string;
  };
  categories: any[];
  display_name: string;
}

interface Offer {
  content_id: string;
  provider_display_name: string;
  internal_provider_name: string;
  logo: string;
  treatment: string;
  is_bookable: boolean;
  availability: string;
  display_style: string;
  link: string;
  auction_offer_key: string;
}

export interface Hotel {
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
    user: {
      user_id: any;
      member_id: string;
      type: string;
    };
  };
  awards: Award[];
  preferred_map_engine: string;
  autobroaden_type: string;
  autobroaden_label: string;
  raw_ranking: string;
  ranking_geo: string;
  ranking_geo_id: string;
  ranking_position: string;
  ranking_denominator: string;
  ranking_category: string;
  ranking: string;
  subcategory_type: string;
  subcategory_type_label: string;
  distance: string;
  distance_string: any;
  bearing: string;
  rating: string;
  is_closed: boolean;
  is_long_closed: boolean;
  price_level: string;
  price: string;
  hac_offers: {
    availability: string;
    offers: Offer[];
    all_booking_offers: any[];
  };
  hotel_class: string;
  hotel_class_attribution: string;
  business_listings: {
    desktop_contacts: any[];
    mobile_contacts: any[];
  };
  special_offers: {
    desktop: any[];
    mobile: any[];
  };
  listing_key: string;
}
