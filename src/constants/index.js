import {
    mobile,
    collaboration,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    radic_school,
    freelance,
    pilana_ivandol,
    gericht_restaurant,
    cars_showcase,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Collaboration",
      icon: collaboration,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    
  ];
  
  const experiences = [
    {
      title: "Teacher",
      company_name: "Elementary School of the Radić brothers, Pakrac",
      icon: radic_school,
      iconBg: "#FFFFFF",
      date: "March 2019 - until today",
      points: [
        "The teacher helps in the development of basic IT skills and critical thinking",
        "Plans, prepares and conducts teaching lessons in information sciences",
        "Works in smaller groups and has the opportunity to get to know each student better.",
        "Helps students develop social skills and emotional intelligence",
      ],
    },
    {
      title: "Freelance Jobs",
      icon: freelance,
      iconBg: "#FFFFFF",
      date: "Dec 2021 - until today",
      points: [
        "Ceating user interfaces",
        "Designing layouts",
        "Implementing responsive designs",
        "Integrating various frontend technologies",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Ivandol Sawmill",
      description:
        "A comprehensive platform for making garden furniture, bedrooms, catering inventory, bedrooms and other items from solid wood.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
      ],
      image: pilana_ivandol,
      source_code_link: "https://pilana-ivandol.hr/",
    },
    {
      name: "Gericht Restaurant",
      description:
        "Restaurant website built with React JS & Tailwind CSS. It is a one page website with many different sections available which can be navigated via the navbar on top. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: gericht_restaurant,
      source_code_link: "https://github.com/Mara1395/Gericht-restaurant",
    },
    {
      name: "Car Showcase",
      description:
        "Car Showcase Next.js application, used Rapid API for display vehicles and their features. Built in Next.js, React, TypeScript and Tailwind CSS.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: cars_showcase,
      source_code_link: "https://github.com/Mara1395/cars_showcase",
    },
  ];
  
  export { services, technologies, experiences, projects };