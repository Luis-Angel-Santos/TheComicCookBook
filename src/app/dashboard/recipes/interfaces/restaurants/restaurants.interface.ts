export interface Restaurants {
  restaurants: Restaurant[];
}

export interface Restaurant {
  _id:                         string;
  name:                        string;
  phone_number:                number;
  address:                     Address;
  type:                        string;
  description:                 string;
  local_hours:                 LocalHours;
  cuisines:                    string[];
  food_photos:                 string[];
  logo_photos:                 string[];
  store_photos:                any[];
  dollar_signs:                number;
  pickup_enabled:              boolean;
  delivery_enabled:            boolean;
  is_open:                     boolean;
  offers_first_party_delivery: boolean;
  offers_third_party_delivery: boolean;
  miles:                       number;
  weighted_rating_value:       number;
  aggregated_rating_count:     number;
}

export interface Address {
  street_addr:   string;
  city:          string;
  state:         string;
  zipcode:       string;
  country:       string;
  lat:           number;
  lon:           number;
  street_addr_2: string;
  latitude:      number;
  longitude:     number;
}

export interface LocalHours {
  operational: Delivery;
  delivery:    Delivery;
  pickup:      Delivery;
  dine_in:     Delivery;
}

export interface Delivery {
  Monday:    string;
  Tuesday:   string;
  Wednesday: string;
  Thursday:  string;
  Friday:    string;
  Saturday:  string;
  Sunday:    string;
}
