import { Formats, MTGEvent } from './models';
import { MTGTop8Scraper } from './mtgTop8';

async function main() {
    

    for(let i = 1; i < 6; i++){
        console.log(`page ${i} ${Formats.Modern} results \n`);
        let events = await MTGTop8Scraper.getFormatEventsByPage(Formats.Modern,i);
        console.log(events);
    }

    for(let i = 1; i < 6; i++){
        console.log(`page ${i} ${Formats.Standard} results \n`);
        let events = await MTGTop8Scraper.getFormatEventsByPage(Formats.Standard,i);
        console.log(events);
    }

    for(let i = 1; i < 6; i++){
        console.log(`page ${i} ${Formats.Legacy} results \n`);
        let events = await MTGTop8Scraper.getFormatEventsByPage(Formats.Legacy,i);
        console.log(events);
    }

    for(let i = 1; i < 6; i++){
        console.log(`page ${i} ${Formats.Vintage} results \n`);
        let events = await MTGTop8Scraper.getFormatEventsByPage(Formats.Vintage,i);
        console.log(events);
    }

    for(let i = 1; i < 6; i++){
        console.log(`page ${i} ${Formats.Pioneer} results \n`);
        let events = await MTGTop8Scraper.getFormatEventsByPage(Formats.Pioneer,i);
        console.log(events);
    }

    for(let i = 1; i < 6; i++){
        console.log(`page ${i} ${Formats.Historic} results \n`);
        let events = await MTGTop8Scraper.getFormatEventsByPage(Formats.Historic,i);
        console.log(events);
    }

    for(let i = 1; i < 3; i++){
        console.log(`page ${i} ${Formats.Commander} results \n`);
        let events = await MTGTop8Scraper.getFormatEventsByPage(Formats.Commander,i);
        console.log(events);
    }
}

main();