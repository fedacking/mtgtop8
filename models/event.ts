export class MTGEvent{
    title: string;
    id: number;
    stars: number;
    bigStars: number;
    date: Date;

    constructor(title:string, id: number, stars: number, bigStars: number, date: Date){
        this.title = title;
        this.id = id;
        this.stars = stars;
        this.bigStars = bigStars;
        this.date = date;
    }
}