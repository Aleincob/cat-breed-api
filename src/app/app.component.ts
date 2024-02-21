import { Component } from '@angular/core';
import { GetApiService } from './services/get-api.service';
import { BreedCatModel } from './models/breed-cat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cat-breed-api';

  catBreeds: BreedCatModel[] = [];

  constructor(private catBreedService: GetApiService) {}

  ngOnInit() {
    this.catBreedService.getBreedData().subscribe((data) => {
      console.log(data);
      this.catBreeds = data;
    });
  }
}
