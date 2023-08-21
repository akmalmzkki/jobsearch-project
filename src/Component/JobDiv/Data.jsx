import React from 'react'
import logo1 from '../../Assets/logo1.png'
import logo2 from '../../Assets/logo2.png'
import logo3 from '../../Assets/logo3.png'
import logo4 from '../../Assets/logo4.png'
import logo5 from '../../Assets/logo5.png'
import logo6 from '../../Assets/logo6.png'
import logo7 from '../../Assets/logo7.png'
import logo8 from '../../Assets/logo8.png'

const Data = [
  {
    id: 1,
    image: logo1,
    title: '',
    time: '',
    location: '',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, amet!',
    company: ''
  }, 
  {
    id: 2,
    image: logo2,
    title: '',
    time: '',
    location: '',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, amet!',
    company: ''
  }, 
  {
    id: 3,
    image: logo3,
    title: '',
    time: '',
    location: '',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, amet!',
    company: ''
  }, 
  {
    id: 4,
    image: logo4,
    title: '',
    time: '',
    location: '',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, amet!',
    company: ''
  }, 
  {
    id: 5,
    image: logo5,
    title: '',
    time: '',
    location: '',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, amet!',
    company: ''
  }, 
  {
    id: 6,
    image: logo6,
    title: '',
    time: '',
    location: '',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, amet!',
    company: ''
  }, 
  {
    id: 7,
    image: logo7,
    title: '',
    time: '',
    location: '',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, amet!',
    company: ''
  }, 
  {
    id: 8,
    image: logo8,
    title: '',
    time: '',
    location: '',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, amet!',
    company: ''
  }, 
]

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const randomTitles = ['Web Developer', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'UI/UX Designer', 'Graphic Designer', 'Software Engineer', 'Data Scientist', 'Data Analyst', 'DevOps Engineer', 'Cloud Engineer', 'Mobile App Developer', 'Android Developer', 'iOS Developer', 'Flutter Developer', 'React Native Developer', 'React Developer', 'Angular Developer', 'Vue Developer', 'Node Developer', 'Python Developer', 'Java Developer', 'C++ Developer', 'C# Developer', 'PHP Developer', 'Ruby Developer', 'Go Developer', 'Rust Developer', 'Swift Developer', 'Kotlin Developer', 'Dart Developer', 'SQL Developer', 'TypeScript Developer', 'JavaScript Developer', 'HTML Developer', 'CSS Developer', 'WordPress Developer', 'Shopify Developer', 'Magento Developer', 'WooCommerce Developer', 'BigCommerce Developer', 'Squarespace Developer', 'Wix Developer', 'Webflow Developer', 'Web Designer', 'WordPress Designer', 'Shopify Designer', 'Magento Designer', 'WooCommerce Designer', 'BigCommerce Designer', 'Squarespace Designer', 'Wix Designer', 'Webflow Designer'];
const randomTimes = ['Today', 'This Month', 'This Year', 'Last Year', 'Last Month', 'Last Week'];
const randomLocations = ['USA', 'United Kingdom', 'Australia', 'Germany', 'Canada', 'France', 'Italy', 'Spain', 'Russia', 'China', 'Japan', 'India'];
const randomCompanies = ['TechPros Ltd.', 'WebMasters Inc.', 'CodeCrafters', 'PixelPioneers', 'WebDev Co.', 'WebMasters', 'CodeCrafters', 'PixelPioneers', 'WebDev Co.'];

for (let i = 0; i < Data.length; i++) {
  Data[i].title = getRandomElement(randomTitles);
  Data[i].time = getRandomElement(randomTimes);
  Data[i].location = getRandomElement(randomLocations);
  Data[i].company = getRandomElement(randomCompanies);
}

export default Data