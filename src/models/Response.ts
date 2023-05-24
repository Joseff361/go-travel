export interface RestaurantsResponse<T> {
  data: T[];
  restaurant_availability_options?: any;
  open_hours_options?: any;
  status?: any;
  paging: any;
}
