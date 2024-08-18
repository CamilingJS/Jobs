<img align="center" src="https://res.cloudinary.com/dxctpvd8v/image/upload/v1724014638/Jobs-Spreadsheets_dapuvo.png" width="100%" alt="Data Analysts Jobs in Orange County" >
</a>
<p align="center">
  <a href="https://docs.google.com/spreadsheets/d/16Kqg4D0n69qhdTNwtxVroKF4e-Bd_qramPbLfHaySqY/edit?gid=0#gid=0" target="_blank">
    <img width="600px" src="https://res.cloudinary.com/dxctpvd8v/image/upload/v1724016296/SeeJobsSpreadSheet_mhddpz.png"/>
  </a> 
</p>
<h1 align="center">Jobs Spreadsheets</h1>

## Jobs Spreadsheets project is a Node.js-based application that automates the process of fetching job listings and storing them in a Google Sheet for easy access and analysis. The application interacts with the Adzuna Job Search API to retrieve a list of Data Analyst job openings in Orange County, California.
## Key features of the project include:
### API Integration: The application sends an HTTP request to the Adzuna API using the node-fetch library. The response is then parsed into a JSON format to extract relevant job information, such as job ID, creation date, company name, job title, description, location, salary range, and the job listing URL.
### Data Transformation: The retrieved data is processed and mapped into a structured format suitable for insertion into a Google Sheet.
### Google Sheets Automation: Using the Google Sheets API and the google-spreadsheet package, the application authenticates via a service account and updates a Google Sheet with the extracted job listings. The automation process includes loading the target spreadsheet, selecting the appropriate worksheet, and adding new rows with the fetched job data.
### Secure Credential Management: The project uses the dotenv package to securely manage sensitive credentials, such as API keys and Google service account details, through environment variables, ensuring that these details are kept out of the codebase.
## This project demonstrates proficiency in API integration, data processing, and cloud-based automation, making it a valuable tool for anyone needing to track and analyze job market trends in specific regions.
