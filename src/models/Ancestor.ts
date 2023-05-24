interface Subcategory {
  key: string;
  name: string;
}

export interface Ancestor {
  subcategory: Subcategory[];
  name: string;
  abbrv: any;
  location_id: string;
}
