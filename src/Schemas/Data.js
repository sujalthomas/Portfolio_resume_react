export const Data = {
  profile: {
    name: "Sujal Thomas Tatipelli",
    ocupation: "Full-Stack Software Developer",
    location: "San Jose, CA",
    email: "sujalt1811@gmail.com",
    telephone: "+1(669)234-6586",
    image: "images/profilepic.jpg",
  },
  aboutMe: {
    label: "Profile",
    description:
      "I'm a California based Full Stack Software Engineer, currently looking for new oppurtunities.",
  },
  skills: {
    technicalLabel: "Technologies",
    softLabel: "Skills",
    technicalSkills: [
      "Java",
      "Spring Boot",
      "Python",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Nodejs",
      "Tableau / Power BI",
      "SQL / MongoDB",
      "GCP / AWS",
      "Docker",
      "Kafka",
      "API Gateway",   
    ],
    softSkills: [
      "Extrovert",
      "Team Player",
      "Leadership",
      "Communication",
      "Problem Solving",
      "Critical Thinking",
    ],
  },
  socialMedia: {
    label: "SOCIAL",
    social: [
      {
        label: "Sujal Thomas",
        name: "linkedin",
        url: "https://www.linkedin.com/in/sujal-thomas-tatipelli-b72120161/",
        className: "bxl-linkedin-square",
      },
      {
        label: "sujalthomas",
        name: "github",
        url: "https://github.com/sujalthomas",
        className: "bxl-github",
      },
      {
        label: "Sujal Thomas",
        name: "twiiter",
        url: "https://twitter.com/RenegadeThomas",
        className: "bxl-twitter",
      },
    ],
  },
  experience: {
    works: [
      {
        title: "DATA ANALYST INTERN",
        period: "May 2022 - Sep 2022",
        company: "Pikky",
        description: [
          "Engineered a comprehensive data pipeline, leveraging ETL methodologies utilizing Python & SQL to ingest data from diverse sources into a centralized data warehouse, enhancing data accessibility & integrity.",
          "Devised & documented a robust data model for the data warehouse, optimizing decision-making processes and establishing a data dictionary to streamline data management & governance.",
          "Innovated and deployed a data visualization dashboard using Power BI & Redash, enabling stakeholders to interpret complex data effortlessly and make informed decisions."
        ],
      },
    ],
    academic: [
      {
        career: "Bachelor of Science in Software Engineering & Minor in Mathematics",
        institution: "San Jose State University",         date: "2022",
        electives: "Electives: Autonomous Robotics, Machine Learning & Big Data, Cyber Security, Mathematical Modelling.",
        volunteer: "Volunteer: Google Student Developer Club Tech Lead, Software & Computer Engineering Club",
      },
    ],
    proyects: [
      {
        name: "Full Stack Developer",
        company: "SJSU",
        period: "Sep 2022 - Dec 2022",
        description: [
          "Transformed a Node.js app into a Spring MVC-based cashier's app with administrative login capability for Starbucks employees & in-store order processing functionality.",
          "Executed a scalable cloud deployment on Google Cloud Platform (GCP) with an external load balancer set up as an ingress for the cashier's app.",
          "Set up an internal load balancer for the Starbucks API behind a Kong API Gateway, enhancing security and performance.",
          "Incorporated MySQL DB & RabbitMQ as required cloud databases to support complex data transactions.",
          "Developed the Starbucks API for mobile app & storefront deployment, integrated with Kong API Gateway & secured with API Key Authentication.",
          "Contributed to the entire project cycle, from requirement analysis & application design to deployment and performance testing, ensuring high-quality code and documentation shared on GitHub.",
          "Maintained a comprehensive project journal detailing the weekly progress, challenges faced, and solutions implemented.",
        ],
      },
      {
        name: "Back End Developer",
        company: "SJSU",
        period: "Sep 2021 - May 2022",
        description: [
          "Orchestrated a team of four in the construction of a price comparison website, transforming a Figma prototype into a fully functional webpage, utilizing Node.js and React Native. The development process did not involve pre-existing APIs, and the database was built organically from the ground up.",
          "Employed the BeautifulSoup4 Python library to scrape over 50,000 records from 20 different retailer websites, capturing the current inventory of sneakers and their latest prices. The gathered data was parsed, cleaned up, and stored to create a comprehensive database. Selenium was used for AI test automation across various user scenarios.",
          "Developed a custom RESTful API and integrated it with the IFTTT service, enabling the website's features to be accessed by popular IoT home automation devices like Google Home and Alexa.",
        ],
      },
      {
        name: "Back End Developer",
        company: "SJSU",
        period: "Aug 2021 - Dec 2021",
        description: [
          "Steered a collaborative team of five, nurturing an environment of shared responsibility, in the conception and realization of an interactive activity tracker application. Exercised key decision-making in task allocation and materialized a user-friendly interface, employing Flutter for UI design.",
          "Expertly integrated a suite of services, including Firebase Authentication API and Firebase database, facilitating seamless user profile management. Incorporated a dynamic leaderboard functionality and proficiently orchestrated the deployment of the application to the web store.",
        ],
      },
    ],
  },
};
