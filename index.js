import 'dotenv/config'
import Sheet from './sheet.js'
import fetch from 'node-fetch';

(async function () {
    const res = await fetch(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&results_per_page=100&what=Data%20Analyst&location0=US&location1=California&location2=Orange%20County`);
    const json = await res.json(); 

    const rows = json["results"].map(job => {
        return {
            id: job.id,
            created: job.created,
            company: job.company["display_name"],
            title: job.title,
            description: job.description,
            location: job.location["display_name"],
            salary_min: job.salary_min,
            salary_max: job.salary_max,
            url: job.redirect_url,
            
        }
    })

    const sheet = new Sheet();
    await sheet.load();
    await sheet.addRows(rows);

  })();
