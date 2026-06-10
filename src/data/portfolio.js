import {
  FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaDatabase, FaServer,
  FaLaptopCode, FaLayerGroup, FaPlug, FaTools, FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope,
} from 'react-icons/fa';
import {
  SiNextdotjs, SiJavascript, SiExpress, SiMongodb, SiPostgresql, SiMysql, SiTailwindcss,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const socials = [
  { label: 'GitHub', href: 'https://github.com/gira7902-star', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bilal-ahmid-200b83314', icon: FaLinkedin },
  { label: 'WhatsApp', href: 'https://wa.me/92399999999', icon: FaWhatsapp },
  { label: 'Email', href: 'mailto:contactwithdev.bilal@gmail.com', icon: FaEnvelope },
];

export const skills = [
  { name: 'React.js', icon: FaReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#94A3B8' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'Express.js', icon: SiExpress, color: '#94A3B8' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'REST API', icon: TbApi, color: '#06B6D4' },
  { name: 'Git & GitHub', icon: FaGitAlt, color: '#F05032' },
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
];

export const services = [
  { title: 'Frontend Development', icon: FaLaptopCode, description: 'Pixel-perfect, accessible and blazing-fast interfaces with React, Next.js and Tailwind CSS.' },
  { title: 'Backend Development', icon: FaServer, description: 'Secure, scalable server-side applications built with Node.js and Express.js.' },
  { title: 'Full Stack Web Apps', icon: FaLayerGroup, description: 'End-to-end MERN applications, from database schema to polished UI deployments.' },
  { title: 'API Development', icon: FaPlug, description: 'Well-documented RESTful APIs with authentication, validation and rate limiting.' },
  { title: 'Database Design', icon: FaDatabase, description: 'Optimized data models in MongoDB, PostgreSQL and MySQL for performance at scale.' },
  { title: 'Website Maintenance', icon: FaTools, description: 'Ongoing updates, performance audits, bug fixes and feature enhancements.' },
];

export const projects = [
  {
    name: 'ShopSphere — E-Commerce Platform',
    description: 'A full-featured MERN e-commerce platform with cart, Stripe payments, admin dashboard and order tracking.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=60',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    demo: 'https://tech-zone-group1.gitlab.io/folio/',
    github: 'https://github.com/gira7902-star',
  },
  {
    name: 'TaskFlow — Project Manager',
    description: 'Kanban-style team task manager with real-time updates, drag-and-drop boards and role-based access.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=60',
    tech: ['Next.js', 'PostgreSQL', 'Node.js', 'Tailwind CSS'],
    demo: 'https://tech-zone-group1.gitlab.io/folio/',
    github: 'https://github.com/gira7902-star',
  },
  {
    name: 'DevConnect — Social Network',
    description: 'A social platform for developers featuring profiles, posts, comments and a job board powered by REST APIs.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=60',
    tech: ['React', 'Express', 'MongoDB', 'JWT'],
    demo: 'https://tech-zone-group1.gitlab.io/folio/',
    github: 'https://github.com/gira7902-star',
  },
];

export const timeline = [
  {
    period: '2021 — 2022',
    title: 'Learning Journey',
    description: 'Mastered the fundamentals: HTML, CSS, JavaScript and React. Built dozens of practice projects and contributed to open source.',
  },
  {
    period: '2022 — 2023',
    title: 'Freelance Projects',
    description: 'Delivered 15+ client projects on freelance platforms — e-commerce stores, dashboards and REST APIs with the MERN stack.',
  },
  {
    period: '2023 — Present',
    title: 'Professional Experience',
    description: 'Working as a Full Stack MERN Developer, building production-grade applications, mentoring juniors and owning features end-to-end.',
  },
];

export const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Founder, Brightline Studio',
    quote: 'Bilal transformed our idea into a polished product faster than we imagined. His communication and code quality are top tier.',
  },
  {
    name: 'Ahmed Raza',
    role: 'CTO, NovaCart',
    quote: 'Our e-commerce platform handles thousands of orders daily thanks to the scalable architecture Bilal designed.',
  },
  {
    name: 'Emily Carter',
    role: 'Product Manager, TaskHive',
    quote: 'Reliable, proactive and detail-oriented. Bilal consistently delivered ahead of schedule with zero compromises on quality.',
  },
];
