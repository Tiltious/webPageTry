export class Houses {
    id:String = '';
    category:String = '';
    subcategory:String = '';
    price:String;
    area:String;
    floor:String = '';
    elevator:any = '';
    stages:String = '';
    bedrooms:String = '';
    wc:String = '';
    description:String = '';
    mainloc:String;
    mainimg:String;
    constructor(
        price:String,
        area:String,
        category:String,
        mainloc:String,
        mainimg:String
    ){
        this.price =price;
        this.area = area;
        this.category = category;
        this.mainloc = mainloc;
        this.mainimg = mainimg;
    }
}
