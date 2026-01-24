
import { PortfolioData } from './types';

export const INITIAL_DATA: PortfolioData = {
  name: "Dishan Dilakshitha Ranasinghe",
  titles: ["Secure System Designer", "Cloud & IoT Practitioner", "RealWorld Problem Solver"],
  phone: "+94763261558",
  email: "dishand398@gmail.com",
  linkedin: "linkedin.com/in/dishan-ranasinghe",
  github: "github.com/RanasingheDD",
  medium: "medium.com/@roxchain12345",
  cvUrl: "https://drive.google.com/file/d/1ktq4T1YXcGOPZc_ShNJBZSqxyRi75Sie/view?usp=drive_link", 
  summary: "Real world problem solver with strong hands-on experience in designing, developing, and securing scalable systems. Passionate about System Design, cloud-native architectures, and DevSecOps practices. Proven experience in AWS, Azure, CTF development, and building secure software solutions with a user-centric approach.",
  education: {
    school: "UNIVERSITY OF KELANIYA",
    location: "Kelaniya, Sri Lanka",
    degree: "Bsc.(Hons) Electronics and Computer Science - Final Year Undergraduate",
    gpa: "GPA 3.5"
  },
  services: [
    {
      id: "s1",
      title: "Secure System Design",
      description: "Designing end-to-end architectures with security as a first-class citizen using industry best practices.",
      icon: "Shield"
    },
    {
      id: "s2",
      title: "Cloud Infrastructure",
      description: "Deployment and management of scalable cloud environments on AWS and Azure with automated CI/CD.",
      icon: "Cloud"
    },
    {
      id: "s3",
      title: "Full-Stack Development",
      description: "Building robust web and mobile applications using modern frameworks like React, Spring Boot, and Flutter.",
      icon: "Code"
    },
    {
      id: "s4",
      title: "Embedded System Development",
      description: "Designing embedded systems.",
      icon: "Zap"
    }
  ],
  projects: [
    {
      id: "1",
      title: "EV Charging Station Management System",
      period: "12/2025",
      link: "https://github.com/RanasingheDD/ev_station_booking",
      description: ["Full-stack system Development project", "Focused on secure API design, authentication, and cloud deployment"],
      technologies: ["React", "TypeScript", "SpringBoot", "Spring Security", "JWT", "OAuth", "Flutter", "AWS", "Linux", "ELK"],
      imageUrl: "./assets/images/EV-web.png"
    },
    {
      id: "2",
      title: "Securing a Web Application on AWS",
      period: "10/2025 - 12/2025",
      link: "https://www.linkedin.com/posts/dishan-ranasinghe_securing-a-web-application-on-aws-ugcPost-7398259921013727232-REms?utm_source=share&utm_medium=member_desktop&rcm=ACoAADPb2hkB7KrlZfvIbyXY4OPRv_gYRgrwRYg",
      description: ["Implemented secure cloud architecture using IAM, VPC, EC2, and S3", "Configured WAF, GuardDuty, CloudTrail, and CloudWatch for threat detection"],
      technologies: ["Linux", "IAM", "VPC", "EC2", "S3", "WAF", "GuardDuty", "CloudTrail", "CloudWatch"],
      imageUrl: "./assets/images/secring-web-aws.png"
    },
    {
      id: "3",
      title: "Antivirus Software for Windows ",
      period: "06/2025 - 09/2025",
      link: "https://github.com/madush123/VirusGuard",
      description: ["Developed malware detection using hash-based analysis and Integrated centralized threat database"],
      technologies: ["C#", "Visual Programming" , "RDLC", "MySql", "Github", "SHA-256", "MD5", "VirusTotal"],
      imageUrl: "./assets/images/medusa-av.png"
    },
        {
      id: "4",
      title: "Dog Disease Diagnosis- Dog Care Mobile App",
      period: "03/2025 - 05/2025",
      link: "https://www.linkedin.com/posts/dishan-ranasinghe_ai-machinelearning-deepseek-activity-7309496708948770816-HXqZ/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADPb2hkB7KrlZfvIbyXY4OPRv_gYRgrwRYg",
      description: ["Help pet owners diagnose potential diseases based on symptoms and Integrating DeepSeek R1 for intelligent predictions"],
      technologies: ["Flutter", "NodeJs", "DeepSeek R1 API", "Firebase Authentication"],
      imageUrl: "./assets/images/dog.png"
    },
    {
      id: "5",
      title: "Student Attendance System",
      period: "2023 ",
      link: "https://github.com/RanasingheDD/Students-Attendance-system",
      description: ["Development of a student attendance system using Java, featuring a graphical user interface "],
      technologies: ["  Java", "Java Gui", "OOP", "Mysql"],
      imageUrl: "./assets/images/attendence.png"
    },
    {
      id: "6",
      title: "E-Commercial Mobile Application",
      period: "03/2024 - 06/2024",
      link: "#",
      description: ["Development of a comprehensive e-commerce mobile application using Flutter"],
      technologies: [" Flutter", "Python", "Flask", "Firebase Authentication", "Firebase" , "Database"],
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
    },  
  ],
  certifications: [
    {
      id: "c1",
      name: "Advent of Cyber 2023",
      issuer: "TryHackMe",
      date: "Dec 2023",
      link: "https://drive.google.com/file/d/10TPr7Y0YvoIYuaTgB7OELeQKFUgDqt2a/view?usp=drive_link",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
    },
    {
      id: "c2",
      name: "Amazon S3 Getting Started",
      issuer: "Amazon Web Services",
      date: "Oct 2024",
      link: "https://drive.google.com/file/d/1TBDTdwfuxZEItgD-uK3LYG2tZzoMmCYk/view?usp=drive_link",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
    },
    {
      id: "c2",
      name: "Getting Started with Security",
      issuer: "Amazon Web Services",
      date: "10/26/2025",
      link: "https://www.credly.com/earner/earned/badge/11c6511c-e9b1-46a9-a66b-244887c784d4",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
    },
        {
      id: "c2",
      name: "Getting Started with Serverless",
      issuer: "Amazon Web Services",
      date: "11/1/2025",
      link: "https://www.credly.com/earner/earned/badge/2b316042-6b06-4f9e-9eee-2dbc31b7ce03",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
    },
        {
      id: "c2",
      name: "Getting Started with Storage",
      issuer: "Amazon Web Services",
      date: "10/31/2025",
      link: "https://www.credly.com/earner/earned/badge/df49fcf0-a3ea-49fd-8d5d-15b454c8f1dc",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
    },
        {
      id: "c2",
      name: "AWS Security Best Practices",
      issuer: "Amazon Web Services",
      date: "Oct 2024",
      link: "https://drive.google.com/file/d/12HrMYZi0rIsOcKIvq_WR3UdoiU7Wtz4w/view?usp=drive_link",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
    },
        {
      id: "c2",
      name: "Getting Started with Networking",
      issuer: "Amazon Web Services",
      date: "10/26/2025",
      link: "https://www.credly.com/earner/earned/badge/3fdad3cd-f707-485d-8cf2-af5dccc20cb7",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
    }
  ],
  skills: [
    { 
      category: "Languages", 
      skills: [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "HTML5", logo: "https://img.icons8.com/color/48/000000/html-5--v1.png" },
        { name: "Css", logo: "https://img.icons8.com/color/48/000000/css3.png" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
        { name: "Dart", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" }
      ] 
    },
    { 
      category: "Frameworks & Libraries", 
      skills: [
        { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
        { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" }
      ] 
    },
    { 
      category: "Cloud & DevOps", 
      skills: [
        { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
        { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
        { name: "Ansible", logo: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/ansible/ansible-original.svg" }
      ] 
    },

    { 
      category: "Databases", 
      skills: [
        { name: "MySQL", logo: "https://img.icons8.com/color/48/000000/mysql-logo.png" },
        { name: "MongoDB", logo: "https://img.icons8.com/color/48/000000/mongodb.png" },
        { name: "Firebase", logo: "https://img.icons8.com/color/48/000000/firebase.png" },
        { name: "Supabase", logo: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/supabase/supabase-original.svg"},
        { name: "Redis", logo: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/redis/redis-original.svg"}
      ] 
    }
  ],
  achievements: [
    { id: "a1", text: "Secured 2nd Runner-up position in UOK Robot Battles 2K25." },
    { id: "a2", text: "Achieved 1st Runner-up position in JapuraExpo 2K25." },
    { id: "a2", text: "Achieved 1st Runner-up position in ICAPS  2025, held at the University of Kelaniya in Undergraduate Research Symposium" },
    { id: "a2", text: "Secured 2nd Runner-up position in CyberZee 2024." }
  ],
  leadership: [
    {
      id: "l1",
      role: "Team Leader",
      organization: "Electronic Equipment Repair Unit",
      period: "2025",
      description: "Team leader of electronic equipment repair unit, Department of Physics and Electronics."
    }
  ]
};
