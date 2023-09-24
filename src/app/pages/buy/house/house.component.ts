import { Component, OnInit } from '@angular/core';
import { Houses } from '../../shared/houses';
import { HousesService } from '../../shared/houses.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {
  houses: Houses[] = [];
  houses2: Houses[] = [];
  constructor(private houserv: HousesService) {
  }

  ngOnInit() {
    this.houserv.getAllHouses().subscribe((response: any) => {
      for (let house of response.data) {
        let mainimg;
        !!house.mainImageURL ? mainimg = house.mainImageURL : mainimg = "assets/missing_photo-medium.jpg";
        house.buy_or_rent == 0 && house.category == 'house' ? this.houses2.push(new Houses(house.price, house.sq_meters, house.buy_or_rent, house.geography, mainimg)) : null
      }
    })
  }

}
