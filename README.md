<h1 align="center">Mirror- Face Recognition Project by Nishtha Agarwal</h1> 
<p align="center">
 
<!--  <a target="_blank" href="#">Link to the App</a>
    | -->
<!--  <img src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png" alt="youtube-icon" width="30px" />
 <a target="_blank" href="https://youtu.be/Mtkn83_NiPs">Video Demo</a> -->
</p>

<!-- <img src="Images\banner.png" alt="banner" width="1000"/> -->

Mirror is an attempt to control daily crimes by verifying the identity of people who enter our households. 
<!-- This project was built as a part of the Microsoft Engage Program 2022 where mentees had to build a project on one of the three given challenges while incorporating the agile methodology.  -->
I went for the Face Recognition Project and came up with the idea of Mirror web application that'll help <u>Prevent Crimes</u>.

<b>Motivation:</b> While the world has crumbled down because of the pandemic and people are suffereing financially, mentally, physically and socially, this app can help lower the amount od thefts and raise alertess among the public.

<b>Solved Problem:</b> This web application aims to offer a quick and easy way to recognise and verify the identity of employees who visit our places regularly to take readings of water, electricity, LPG meters; AC and RO servicing; etc. Many thefts happen day-to-day due to miscellaneous person entering our premises which can be prevented by double-checking the identity just by a click. 

<!-- <b>Learnings:</b> Through the Microsoft Engage Mentorship Program 2022 under the able guidance of my mentor - Shriladha Balasubramanian ma'am I was able to go from a person who just knew how to make static web pages to a person who can build and deploy a full stack web applications based on ML.  -->

# Table of contents

- [Features of the Application](#features-of-the-application)
- [Compatible Platforms](#compatible-platforms)
- [Built With](#built-with)
- [Installation](#installation)
- [Usage of Agile Methodology](#usage-of-agile-methodology)
- [Navigation through the Application](#navigating-through-the-application)
- [Challenges Faced](#challenges-faced)
- [Future Scope](#future-scope)
- [Bug Log](#bug-log)
- [Resources Used](#resources-used)
- [Support and Contact](#support-and-contact)

# Features of the Application

1. Responsive on all devices
2. Accesses front camera of device after getting permission 
3. Allows one to click live images 
4. Recognises the idenity of person with just a click
5. No need of extra space to click and upload picture

[(Back to top)](#table-of-contents)

# Compatible Platforms
Laptops, Desktops, Tablet PCs and Mobiles- this web application is responsive with all devices.

<center><img src="Images\responsive.png" alt="banner" width="700"/></center>

# Built With
 
* ![Front-end][front-end-shield]
* ![Back-end][back-end-shield]
* ![ML-Model][model-shield]

In spite of all the smart devices that exist today in the world, one thing that is common is - web and internet browsers. I selected my application to be a <b>web application</b> so that a large number of users are able to use it with ease and ensure their safety just by a scan. 

For frontend development, I have used <b>ReactJS</b>, a popular JavaScript library for building user interfaces based on UI components. For backend development, I have used <b>Flask</b>, a Python web framework. For ML model, I have used OpenCV- Python.

The design of this application is designed on Figma along with editing on Canva and reference from Dribble. The primary font of the application is Manrope, sans-serif.

[(Back to top)](#table-of-contents)

# Installation 
To use this project, follow the steps below:

Initialise git on your terminal.

```bash
git init
```
Clone this repository.

```bash
git clone https://github.com/only4nishtha/faceRecognition
``` 

Change the directory. 

```bash
cd faceRecognition
```

Open the repository with your code editor. 
In case you do not have a code editor, it is recommended you use Visual Studio Code. 

```bash
code .
```

Open the terminal in Visual code by pressing Ctrl+J (Windows) and run the following commands:

```bash
npm i
```
After the required packages are installed, run the following command: 

```bash
npm start
```

<!-- Please note: To run the machine on localhost:3000 you will have to edit the following lines of code: 

........(TO BE DONE) -->

[(Back to top)](#table-of-contents)

# Usage of Agile Methodology

<center><img src="Images\agile.png" alt="agile methodology" width="700"/></center>

<!-- After attending the AMA session and discussing with my mentor, I understood how modern softwares are developed and how agile methodologies are applied in Microsoft to deliver great products. Now  -->
I understood the importance of incorporating Agile Methodology into my project. 

Since wasn't a team project, I had to handle evrything single-handedly. Therefore I divided myself into six different people - one for research, one for design, one for developing the frontend of the web application, one for the backend, one for incorporating the ML model and finally the one for fixing bugs. This division helped me to get into a zone and focus on a particular functionality whenever I was working on the project. 

This made my development process efficient and flexible.

I used Trello as my primary application for designing the timeline of my work. 

* <b>Using Trello for managing sprints</b>

<center><img src="Images\trello.png" alt="trello borad" width="700"/></center>

<br>
I divided my entire development process into <b>4 sprints (each having the duration of 1 week)</b> as shown in the images below. 
<br>

<center><img src="Images\sprint1.png" alt="sprint 1"/></center>

<br>

<center><img src="Images\sprint2.png" alt="sprint 2" /></center>

<br>

<center><img src="Images\sprint3.png" alt="sprint 3" /></center>

<br>

<center><img src="Images\sprint4.png" alt="sprint 4" /></center>

<br>
* <b>Adjusting AceHacker Assignments</b>
To cater to the assignments provided by the AceHacker platform and also undertake the suggestions provided by the mentor, I made a separate card where I put these assignments and made sure I was completing them alongside my ongoing sprints and college's end term exams. 
<br>

<center><img src="Images\assignments.png" alt="Assignments" /></center>

[(Back to top)](#table-of-contents)

# Navigating Through The Application

1. Go to the home page and click the button of "Start Mirroring".
2. You will be redirected to another page. Allow access to camera and in a short time you will see your live video. Click on the button "Mirror it".
3. In a few seconds, the app will give you the answer in form of your name or "Nobody".

<img src="Images\known-face.png" alt="known-face"/>

<img src="Images\stranger.png" alt="stranger"/>

[(Back to top)](#table-of-contents)

# Challenges Faced

"If one is not facing any hardships while developing an application, one isn't considering every possible case for user's better experience."

During the development process I faced the following challenges: 
1. Understanding the working of the ML model and backend side of my application as I had never worked with Python as well as backend before. However, thanks to online communities, stackoverflow, my mentor and friends I was able to find resources which helped me in creating this web application. 
2. Preparing a feature list. In the beginning I wanted to build an app like no other and incorporate many features. But in the interest of time, I had to narrow down the features to the least possible basic functionalities that should be there in a face recognition web application. 
3. Hosting. Initially I was using Heroku to host my application and I realised it later that there were constant Application Server errors. Therefore I switched to PythonAnywhere for backend and Netlify for frontend. The deployment was easy and I did learn a valuable lesson that even if it is the tiniest part of your application, you need to research well and make sure the service you are choosing caters to all the needs of your software.
4. Implementing the Admin's Interface. I was able to design the User's Interface but since I had less time I wasn't able to implement the feature of adding new pictures to the DB. 

All these challenges were less of challenges and more of lessons, lessons to help me have an even better development process in the future so that I can incorporate the customers' requests and requirements easily and efficiently. Though I couldn't do justice to the web app, but now I know how to utilise my summer vacatiobs this year.

[(Back to top)](#table-of-contents)

# Future Scope
The web application can be improved by adding the following features. 
1. Adding Admin's Interface with a login page to limit the access to authorities only. 
2. Linking it to a DB with details of each person like position which can be displayed in form of a card upon detection of his/her face.
3. Saving the detected file for a period of 7 days, for it may be required.
4. Report a profile. A person can report a third official in case of theft or complain within a week of detection. He/ she will have to provide own details like Aadhar number, mobile number and share a copy of FIR or camera recording clip along with description in a form.
5. Attendance System on the Admin's side. Detecting a third face by a user could automatically mark the presence of the third time. The date and time can be saved in the DB for the Admin's assurance.
6. Using Tags. Increasing the DB to as many people as possible and thereafter tags can be used to segregate profiles. For example, adding a picture of missing or wanted person and respective tags will be displayed, when the scanned image matches.
7. Live Cam Capturing
8. Video Door Phones Capturing

[(Back to top)](#table-of-contents)

# Bug Log

Following are the known bugs of the web application: 
1. The application is accepting only one face's recognition currently after connecting it with Flask, though the OpenCV code alone was working fine for multiple personalities.
2. The UI of the web app can be improved and made professional and in accordance with the idea of this application. 
3. No permanent database for collecting record of scanned faces is available.

[(Back to top)](#table-of-contents)

# Resources Used

* [Connecting Flask to ReactJS](https://dev.to/nagatodev/how-to-connect-flask-to-reactjs-1k8i)
* [Flask backend](https://www.youtube.com/watch?v=oA8brF3w5XQ)
* [face-recognition library and OpenCV](https://www.youtube.com/watch?v=WQeoO7MI0Bs&t=0s)
* [ReactJS frontend](https://github.com/adrianhajdin/project_modern_ui_ux_gpt3)
* [Deploying Code](https://www.youtube.com/watch?v=XHayJTMQdkA)

# Support and Contact

Email To: only4nishtha@gmail.com

[(Back to top)](#table-of-contents)


<!--MARKDOWN LINKS-->
[front-end-shield]: https://img.shields.io/badge/Front--End-ReactJS%2C%20BEM%20CSS-green
[back-end-shield]: https://img.shields.io/badge/Back--End-Flask%20(Python%20framework)-green
[model-shield]: https://img.shields.io/badge/ML%20Model-face--recognition%20(Python%20library)-green
