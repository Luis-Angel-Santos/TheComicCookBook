export interface MenuItems {
  menuItems:      MenuItem[];
  totalMenuItems: number;
  type:           string;
  offset:         number;
  number:         number;
}

export interface MenuItem {
  id:              number;
  title:           string;
  restaurantChain: string;
  image:           string;
  imageType:       string;
  servings:        Servings;
}

export interface Servings {
  number: number;
  size:   number;
  unit:   string;
}
