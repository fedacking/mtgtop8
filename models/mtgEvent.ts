export class MTGEvent{
    title: string;
    id: number;
    stars: number;
    bigStars: number;
    date: Date;
    format: string;

    constructor(title:string, id: number, stars: number, bigStars: number, date: Date, format: string){
        this.title = title;
        this.id = id;
        this.stars = stars;
        this.bigStars = bigStars;
        this.date = date;
        this.format = format;
    }
}