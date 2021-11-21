import { MTGFormats } from './models';
import { MTGTop8Scraper } from './mtgTop8';

async function main() {
    

    for(let i = 1; i < 6; i++){
        console.log(`page ${i} ${MTGFormats.Modern} results \n`);
        let events = await MTGTop8Scraper.getFormatEventsByPage(MTGFormats.Modern,i);
        console.log(events);
    }

    for(let i = 1; i < 6; i++){
        console.log(`page ${i} ${MTGFormats.Standard} results \n`);
        let events = await MTGTop8Scraper.getFormatEventsByPage(MTGFormats.Standard,i);
        console.log(events);
    }

    for(let i = 1; i < 6; i++){
        console.log(`page ${i} ${MTGFormats.Legacy} results \n`);
        let events = await MTGTop8Scraper.getFormatEventsByPage(MTGFormats.Legacy,i);
        console.log(events);
    }

    for(let i = 1; i < 3; i++){
        console.log(`page ${i} ${MTGFormats.Vintage} results \n`);
        let events = await MTGTop8Scraper.getFormatEventsByPage(MTGFormats.Vintage,i);
        console.log(events);
    }

    for(let i = 1; i < 6; i++){
        console.log(`page ${i} ${MTGFormats.Pioneer} results \n`);
        let events = await MTGTop8Scraper.getFormatEventsByPage(MTGFormats.Pioneer,i);
        console.log(events);
    }

    for(let i = 1; i < 6; i++){
        console.log(`page ${i} ${MTGFormats.Historic} results \n`);
        let events = await MTGTop8Scraper.getFormatEventsByPage(MTGFormats.Historic,i);
        console.log(events);
    }

    for(let i = 1; i < 6; i++){
        console.log(`page ${i} ${MTGFormats.Commander} results \n`);
        let events = await MTGTop8Scraper.getFormatEventsByPage(MTGFormats.Commander,i);
        console.log(events);
    }
}

main();