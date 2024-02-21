import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BreedCatModel } from '../models/breed-cat';
import { ImgsCat } from '../models/imgs-cat';
@Injectable({
  providedIn: 'root',
})
export class GetApiService {
  constructor(private http: HttpClient) {}

  getBreedData() {
    return this.http.get<BreedCatModel>('https://api.thecatapi.com/v1/breeds/');
  }

  getCatImgs() {
    return this.http.get<ImgsCat>('');
  }
}
