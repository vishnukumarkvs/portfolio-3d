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
  ecommerce_backend_cdk,
  nextjsrealtimechat,
  aws_bill,
  storeit,
  github,
  www,
  unsplash,
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
    name: "Ecommerce Backend with AWS CDK",
    cardicon: github,
    description:
      "I developed an Ecommerce backend on AWS using AWS SDK for business logic and AWS CDK for infrastructure creation. The solution features 3 APIs in API Gateway, serverless business logic with AWS Lambda, and data storage in DynamoDB. I have developed 3 microservices: Product, Cart and Order microservice. Communication between the cart and order microservices is handled asynchronously via AWS EventBridge and SQS.",
    tags: [
      {
        name: "AWS",
        color: "blue-text-gradient",
      },
      {
        name: "Lambda",
        color: "green-text-gradient",
      },
      {
        name: "EventBridge",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce_backend_cdk,
    source_code_link:
      "https://github.com/vishnukumarkvs/aws-serverless-ecommerce",
  },
  {
    name: "Nextjs Realtime Chat Apllications",
    cardicon: github,
    description:
      "I have developed a Realtime Chat Application utilizing Next.js. This app empowers users to engage in seamless and instantaneous communication with one another. By leveraging the power of tailwindcss, I have ensured that the application is visually appealing and responsive across various devices. To enable the real-time functionality, I have used Upstash Redis as adapter for Nextjs and Pusher for realtime communication.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Upstash Redis",
        color: "green-text-gradient",
      },
      {
        name: "Pusherjs",
        color: "pink-text-gradient",
      },
    ],
    image: nextjsrealtimechat,
    source_code_link: " https://github.com/vishnukumarkvs/nextjs-realtime-chat",
  },
  {
    name: "AWS Bill Report",
    cardicon: github,
    description:
      "The AWS Lambda function I've built utilizes the powerful AWS Cost Explorer API to gather comprehensive cost and usage data for your AWS accounts. It then efficiently generates a detailed email report, tailored to your needs, and sends it directly to a designated recipient. This report includes essential information such as the list of active resources, the total cost incurred, and a thorough breakdown of costs categorized by each resource, ensuring transparent and informed decision-making",
    tags: [
      {
        name: "AWS",
        color: "blue-text-gradient",
      },
      {
        name: "Cost Explorer",
        color: "green-text-gradient",
      },
      {
        name: "SES",
        color: "pink-text-gradient",
      },
    ],
    image: aws_bill,
    source_code_link:
      "https://github.com/vishnukumarkvs/AWS-Bill-Weekly-Reports",
  },
  {
    name: "Storeit",
    cardicon: www,
    description:
      "I have crafted a user-friendly cloud storage application that enables seamless file uploading and instant search capabilities. Powered by Next.js and AWS Amplify, the app leverages a robust tech stack, including built-in AWS services such as Cognito for authentication, S3 for storage, DynamoDB for data model, and AppSync for data synchronization. With a sleek interface designed using Tailwind CSS, users can easily manage and access their stored files.",
    tags: [
      {
        name: "AWS Amplify",
        color: "blue-text-gradient",
      },
      {
        name: "Cognito",
        color: "green-text-gradient",
      },
      {
        name: "AppSync",
        color: "pink-text-gradient",
      },
    ],
    image: storeit,
    source_code_link: "https://storeit.vishnukvs.xyz/",
  },
  {
    name: "Splashit",
    cardicon: github,
    description:
      "Splashit, a remarkable clone of a popular photo sharing platform unsplash, embodies an innovative backend microservices architecture. Deployed on AWS, this cutting-edge platform harnesses the power of state-of-the-art technologies. It guarantees users a seamless and immersive experience, focusing on scalability and reliability for exceptional performance, even under heavy loads. Leveraging Spring Boot for the backend, AWS SDK, and SQS for decoupling, I ensured the platform's efficiency and robustness.",
    tags: [
      {
        name: "Springboot",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
    ],
    image: unsplash,
    source_code_link: "https://github.com/vishnukumarkvs/splashit",
  },
];

export { services, technologies, experiences, testimonials, projects };
