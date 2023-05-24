import { Atraction } from '../models/Atraction';
import { Hotel } from '../models/Hotel';
import { RestaurantsResponse } from '../models/Response';
import { Restaurant } from '../models/Restaurant';

export class TravelAdvisorService {
  public static baseUrl = 'https://travel-advisor.p.rapidapi.com';

  public static headers = {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': '9d12efea97msh8c8b65e21c6424cp1cc256jsn15e33ef9ebef',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
  };

  public static validateResponse(response: Response) {
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
  }

  public static async fetchRestaurantsByLatLng(
    latitude: string,
    longitude: string,
  ): Promise<RestaurantsResponse<Restaurant>> {
    const response = await fetch(
      `${this.baseUrl}/restaurants/list-by-latlng?latitude=${latitude}&longitude=${longitude}&currency=USD&latitude=en_US`,
      {
        method: 'GET',
        headers: { ...this.headers },
      },
    );

    this.validateResponse(response);

    return await response.json();
  }

  public static async fetchHotelsByLatLng(
    latitude: string,
    longitude: string,
  ): Promise<RestaurantsResponse<Hotel>> {
    const response = await fetch(
      `${this.baseUrl}/hotels/list-by-latlng?latitude=${latitude}&longitude=${longitude}&currency=USD&latitude=en_US`,
      {
        method: 'GET',
        headers: { ...this.headers },
      },
    );

    this.validateResponse(response);

    return await response.json();
  }

  public static async fetchAtractionsByLatLng(
    latitude: string,
    longitude: string,
  ): Promise<RestaurantsResponse<Atraction>> {
    const response = await fetch(
      `${this.baseUrl}/attractions/list-by-latlng?latitude=${latitude}&longitude=${longitude}&currency=USD&latitude=en_US`,
      {
        method: 'GET',
        headers: { ...this.headers },
      },
    );

    this.validateResponse(response);

    return await response.json();
  }
}
