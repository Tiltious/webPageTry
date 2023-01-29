export class Houses {
    id:String = '';
    category:String = '';
    subcategory:String = '';
    price:String;
    area:String;
    floor:String;
    elevator:Boolean;
    stages:String = '';
    bedrooms:String;
    wc:String;
    description:String;
    constructor(
        price:String,
        area:String,
        floor:String,
        elevator:Boolean,
        bedrooms:String,
        wc:String,
        description:String
    ){
        this.price =price;
        this.area = area;
        this.floor = floor;
        this.elevator = elevator;
        this.bedrooms = bedrooms;
        this.wc = wc;
        this.description =description;
    }
}
