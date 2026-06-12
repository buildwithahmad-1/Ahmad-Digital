import {
  FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaDatabase, FaServer,
  FaLaptopCode, FaLayerGroup, FaPlug, FaTools, FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope,
  FaWordpress, FaRocket, FaSearch, FaMale, FaFemale,
} from 'react-icons/fa';
import {
  SiNextdotjs, SiJavascript, SiExpress, SiMongodb, SiPostgresql, SiMysql, SiTailwindcss,
  SiElementor, SiWoocommerce, SiShopify, SiPhp,
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
  { label: 'GitHub', href: 'https://github.com/Ahmad8384', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ahmad-shahzad-50b7b9415', icon: FaLinkedin },
  { label: 'WhatsApp', href: 'https://wa.me/923075989163', icon: FaWhatsapp },
  { label: 'Email', href: 'mailto:as6629151@gmail.com', icon: FaEnvelope },
];

export const skills = [
  { name: 'WordPress', icon: FaWordpress, color: '#21759B' },
  { name: 'Custom WordPress Theme Development', icon: FaLaptopCode, color: '#0F172A' },
  { name: 'Elementor', icon: SiElementor, color: '#6A55FA' },
  { name: 'WooCommerce', icon: SiWoocommerce, color: '#8B58FF' },
  { name: 'Shopify', icon: SiShopify, color: '#96BF0D' },
  { name: 'Shopify Store Development', icon: FaLaptopCode, color: '#0F172A' },
  { name: 'Shopify Theme Customization', icon: FaTools, color: '#F59E0B' },
  { name: 'PHP', icon: SiPhp, color: '#777BB4' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'SEO Optimization', icon: FaSearch, color: '#F59E0B' },
  { name: 'Website Performance Optimization', icon: FaRocket, color: '#EF4444' },
  { name: 'Git & GitHub', icon: FaGitAlt, color: '#F05032' },
  { name: 'REST API Integration', icon: TbApi, color: '#06B6D4' },
];

export const services = [
  {
    title: 'WordPress Development',
    icon: FaWordpress,
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80',
    description: 'Pixel-perfect, responsive and high-performance WordPress websites using custom themes, Elementor and WooCommerce.',
  },
  {
    title: 'Custom Theme Development',
    icon: FaLaptopCode,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    description: 'Fully custom WordPress themes built for speed, scalability and business-focused design.',
  },
  {
    title: 'Shopify Store Development',
    icon: SiShopify,
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    description: 'Complete Shopify stores with modern UI, product optimization, and conversion-focused design.',
  },
  {
    title: 'Website Optimization',
    icon: FaRocket,
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
    description: 'Speed optimization, performance improvements, bug fixing and overall website enhancement for better user experience.',
  },
  {
    title: 'SEO & Digital Marketing',
    icon: FaSearch,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    description: 'On-page SEO, basic optimization strategies and digital marketing techniques to improve visibility and traffic.',
  },
  {
    title: 'Website Maintenance',
    icon: FaTools,
    image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80',
    description: 'Ongoing updates, security fixes, content updates and feature improvements to keep websites running smoothly.',
  },
];

export const projects = [
  {
    name: '🛒 Shopnex — E-Commerce Platform',
    description: 'A modern WordPress + WooCommerce based e-commerce website with product management, cart system, and smooth checkout experience.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=60',
    tech: ['WordPress', 'WooCommerce', 'Elementor', 'PHP', 'MySQL'],
    demo: 'http://shopnex.42web.io/',
    github: 'https://github.com/Ahmad8384',
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
    period: 'Learning Phase',
    title: '🚀 Learning Phase',
    description: 'Started with web basics like HTML, CSS, JavaScript and WordPress. Built small projects and learned how websites work, including hosting and Git/GitHub.',
  },
  {
    period: 'Growth Phase',
    title: '💻 Growth Phase',
    description: 'Worked on real projects using WordPress, custom themes, WooCommerce, and Shopify. Gained freelance experience and improved development skills through client work.',
  },
  {
    period: 'Professional Phase',
    title: '🌐 Professional Phase',
    description: 'Now building modern WordPress websites, Shopify stores, and optimized web solutions with focus on performance, SEO, and business growth.',
  },
];

export const testimonials = [
  {
    name: 'Ayesha Khan',
    role: 'Business Owner',
    icon: FaFemale,
    quote: 'Very professional work and clean design.\nMy WordPress website looks exactly how I wanted.\nFast delivery and good communication.',
  },
  {
    name: 'Ali Raza',
    role: 'Shop Owner',
    icon: FaMale,
    quote: 'Amazing Shopify store design and smooth layout.\nEverything works perfectly and looks modern.\nReally satisfied with the overall work.',
  },
  {
    name: 'Usman Malik',
    role: 'Client',
    icon: FaMale,
    quote: 'Great WordPress development work.\nDelivered on time with good quality.\nEasy to work with and very helpful.',
  },
];
