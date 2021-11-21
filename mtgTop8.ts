import { default as superagent, Response } from 'superagent';
import { default as cheerio } from 'cheerio';
import { default as moment } from 'moment';
import { MTGEvent, Formats } from './models';

export module MTGTop8Scraper {
    
    export async function getFormatEventsByPage(format: Formats, page: number): Promise<MTGEvent[]> {
        let response = await superagent.get(`https://mtgtop8.com/format?f=${format}&meta=52&cp=${page}`).send(); 
        return getEventsFromHTMLResponse(response);
    }

    export async function getEventInformation(eventId: number){

    }

    export async function getEventTop8Decklists(eventId: number){

    }

    export async function getDecklist(/* some parameters probably*/){

    }

    export async function getEventsFromHTMLResponse(response: Response): Promise<MTGEvent[]>{
        let $ = cheerio.load(response.text);
        let table = $('table.Stable');
        return $('tr.hover_tr', table).map((i, tableRow) => {
            let eventTitle = $('td a', tableRow).text();
            let eventId = parseInt($('td a', tableRow).attr('href').match(/e\=(\d*)/)[1]);
            let eventDate =  moment($('td[align="right"]', tableRow).text(), 'DD/MM/YY').toDate();
            let eventStars = $('td img[src$="/star.png"]', tableRow).length
            let eventBigStars = $('td img[src$="/bigstar.png"]', tableRow).length;

            return new MTGEvent(eventTitle, eventId, eventStars, eventBigStars, eventDate);
        }).get();
    }
}