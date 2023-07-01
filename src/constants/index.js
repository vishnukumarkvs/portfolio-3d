import {
  nextjs,
  aws,
  mobile,
  backend,
  creator,
  web,
  javascript,
  reactjs,
  tailwind,
  nodejs,
  java,
  git,
  kubernetes,
  docker,
  medium,
  tcs,
  lw,
  carrent,
  jobit,
  tripguide,
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
    title: "Cloud Developer",
    icon: web,
  },
  {
    title: "Next.js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Writer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "JavaScript",
    icon: javascript,
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
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Tata Consultancy Services",
    icon: tcs,
    iconBg: "#383E56",
    date: "July 2021 - Present",
    points: [
      "Developing and maintaining cloud infrastructure using Terraform and AWS CDK.",
      "Worked in Terraform and Terraform Sentinel (Policy as code)",
      "Have written scripts using python boto3 library as well as in javascript",
      "Also worked in System Integration Testing where I have written, evaluated and executed Test cases.",
    ],
  },
  {
    title: "Hybrid Multi Cloud Intern",
    company_name: "LinuxWorld Informatics Pvt Ltd",
    icon: lw,
    iconBg: "#E6DEDD",
    date: "May 2020 - Jul 2021",
    points: [
      "Hybrid Multi Cloud Computing Training (AWS | Terraform | Kubernetes)",
      "Have written various infrastructure scripts in Terraform in AWS",
      "Familiarized with various Cloud Technologies with its Industrial use cases.",
      "Professionally trained in Docker, Kubernetes and Ansible",
    ],
  },
  {
    title: "Freelance Application Developer",
    company_name: "Medium",
    icon: medium,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "I have developed full stack applications using Nextjs and React.",
      "Implementing responsive design and ensuring cross-browser compatibility in my projects.",
      "Have been developing projects while consistently incorporating the latest trends and advancements in the field.",
      "Have written various articles in Medium sharing my knowledge",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
