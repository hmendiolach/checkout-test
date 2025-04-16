import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Address } from '../entities/address.entity';

@Injectable()
export class AddressService {
  constructor(private httpService: HttpService) {}

  async searchAddress(query: string) {
    // Call OpenStreetMap Nominatim API
    const response = await this.httpService.get(
      `https://nominatim.openstreetmap.org/search`,
      {
        params: {
          q: query,
          format: 'json',
          addressdetails: 1
        },
        headers: {
          'User-Agent': 'stripe-demo-backend'
        }
      }
    ).toPromise();

    return response.data;
  }

  async validateAndEnrichAddress(address: Partial<Address>) {
    // Validate and get additional data
    const searchResult = await this.searchAddress(
      `${address.street}, ${address.city}, ${address.country}`
    );

    if (searchResult?.[0]) {
      return {
        ...address,
        latitude: searchResult[0].lat,
        longitude: searchResult[0].lon,
        placeId: searchResult[0].place_id,
        formattedAddress: searchResult[0].display_name,
        geocodingData: searchResult[0]
      };
    }

    return address;
  }
}