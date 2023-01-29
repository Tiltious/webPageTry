import { Component, OnInit } from '@angular/core';
import { Houses } from '../../shared/houses';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {
  houses:Houses[]=[];
  constructor() {
    const house = new Houses('€85.000','150','3',true,'2','1',"ΠΟΛΙΧΝΗ (κέντρο) Διαμέρισμα 80 τμ. 1ος όροφος, πλήρως ανακαινισμένο, 2 δωμάτια, σαλόνι, χωριστή κουζίνα, γωνιακό, ατομική θέρμανση (φυσικό αέριο)");
    const house2 = new Houses('€85.000','150','3',true,'2','1',"ΠΟΛΙΧΝΗ (κέντρο) Διαμέρισμα 80 τμ. 1ος όροφος, πλήρως ανακαινισμένο, 2 δωμάτια, σαλόνι, χωριστή κουζίνα, γωνιακό, ατομική θέρμανση (φυσικό αέριο)");
    this.houses.push(house);
    this.houses.push(house2);
    this.houses.push(house2);
   }

  ngOnInit(): void {
  }

}
