const athlete = require('./images/athlete.png')
const birthday = require('./images/birthday.png')
const gunispare = require('./images/gunispare.png')
const loki = require('./images/loki.png')
const nicogames = require('./images/nicogames.png')
const bestoftimes = require('./images/bestoftimes.png')
const nicocraft = require('./images/nicocraft.png')
const thirsty = require('./images/thirsty.png')


export const projects = [
    {name: 'Athlete Analytics', url: 'https://www.athleteanalytics.net/', html:true, react:true,firebase:true,css: true, javascript: true, excel: true,image: athlete, description: "Athlete Analytics is a full stack software application that uses state of the art hardware to analyze an athlete's performance based on their movements. The software then generates an automatic workout plan based on their goals and performance."},
    {name: 'Shop LoKi', url: 'https://shoploki.com/', html:true, react:true,firebase:true, image: loki, description:'LoKi is a full stack affiliate marketing ecommerce website. It integrates search that allows you to explore and compare the products of over 50 different ecommerce companies.'},
    {name: 'GuniSpare', url: 'https://gunispare.webflow.io',webflow:true, react:true,firebase:true, image: gunispare, description:'GuniSpare invented a universal spare wheel solution. I built a full stack ecommerce shop using React.js and webflow to find your cars perfect fit. '},
    {name: 'Best Of Times Film', url: 'https://bestoftimesfilm.com', webflow:true,  image: bestoftimes, description: 'Best of times film is a videography company based in Atlanta. I created  a simple landing page and contact forms for their business.'},   
    {name: 'Nico Games', url: 'https://nico-games.web.app', html:true, react:true,firebase:true, image: nicogames, description: "I created a fun little game library for my little brother's 8th birthday. I added a star wars style birthday message and an MP3 player for the perfect birthday gift."},
    {name: 'Birthday Card', url: 'https://birthday-788be.web.app/', html:true, react:true,firebase:true, css: true, javascript: true, description: "A fun little birthday card I made for a friend! Includes an MP3 player, a 3D world with animations and a message!", image: birthday},
    {name: 'Nico Craft', url: 'https://nico-craft.web.app/', html:true, react:true,firebase:true, description: "Nico Craft is a silly minecraft clone built in React that I made for my little brother. He loves minecraft and I thought it would be a fun little gift to give him.", image: nicocraft},
    {name: 'Thirsty Elephant', url: 'https://thirsty-15b7d1.webflow.io/', webflow:true, description: "Landing Page for a small shaved ice business.", image: thirsty},
]
