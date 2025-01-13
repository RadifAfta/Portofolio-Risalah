import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Anchor, Ship, Heart, ChevronRight, Download, Settings, BookOpen, ExternalLink, Computer, BarChart2, ChevronDown, ArrowRight, Github, Linkedin, Instagram, Brain, Code, Rocket, Stars, Trophy, Target, Phone, MapPin, Send } from 'lucide-react';

const Portfolio = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrollProgress, setScrollProgress] = useState(0);

    const currentYear = new Date().getFullYear();

    useEffect(() => {
        const handleScroll = () => {
            // Calculate scroll progress
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);

            // Update active section based on scroll position
            const sections = ['home', 'about', 'projects', 'skills', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) {
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    const stats = [
        { label: "Years Experience", value: "3+", icon: <Target className="w-5 h-5" /> },
        { label: "Projects Done", value: "10+", icon: <Trophy className="w-5 h-5" /> },
        { label: "Awards", value: "5+", icon: <Rocket className="w-5 h-5" /> }
    ];

    const highlights = [
        {
            icon: <Anchor className="w-6 h-6" />,
            title: "Ship Design Specialist",
            description: "Expert in modern naval architecture and marine engineering"
        },
        {
            icon: <Settings className="w-6 h-6" />,
            title: "Hydrodynamics Expert",
            description: "Specialized in computational fluid dynamics and vessel optimization"
        }
    ];

    const projects = [
        {
            title: "Desain Kapal Kargo",
            description: "Perancangan kapal kargo 15000 DWT dengan fokus pada efisiensi bahan bakar",
            tech: ["AutoCAD", "Maxsurf", "Rhinoceros 3D"],
            icon: <Ship className="w-8 h-8 text-blue-600" />,
            documentationUrl: "https://drive.google.com/file/d/contoh-dokumentasi" // URL dokumentasi
        },
        {
            title: "Analisis Struktur Kapal",
            description: "Simulasi dan analisis kekuatan struktur kapal menggunakan metode elemen hingga",
            tech: ["ANSYS", "SolidWorks", "Excel"],
            icon: <Settings className="w-8 h-8 text-blue-600" />,
            documentationUrl: "https://drive.google.com/file/d/contoh-dokumentasi-struktur" // URL dokumentasi
        }
    ];

    const skills = {
        technical: [
            { name: "Desain Kapal", proficiency: 90 },
            { name: "Hidrodinamika", proficiency: 85 },
            { name: "Konstruksi Kapal", proficiency: 88 }
        ],
        software: [
            { name: "AutoCAD", proficiency: 92 },
            { name: "Maxsurf", proficiency: 85 },
            { name: "ANSYS", proficiency: 80 }
        ],
        analysis: [
            { name: "Rhinoceros 3D", proficiency: 88 },
            { name: "SolidWorks", proficiency: 85 }
        ]
    };

    const certifications = [
        {
            title: "Marine Engineering Professional",
            issuer: "Maritime Institute",
            year: "2023",
            icon: <Trophy className="w-6 h-6" />
        },
        {
            title: "Advanced Ship Design",
            issuer: "Naval Architecture Board",
            year: "2023",
            icon: <Stars className="w-6 h-6" />
        }
    ];


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: <Linkedin className="w-5 h-5" />,
            url: 'https://linkedin.com/in/risalah',
            color: 'bg-[#0077B5]'
        },
        {
            name: 'Github',
            icon: <Github className="w-5 h-5" />,
            url: 'https://github.com/risalah',
            color: 'bg-[#333]'
        },
        {
            name: 'Instagram',
            icon: <Instagram className="w-5 h-5" />,
            url: 'https://instagram.com/risalah',
            color: 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737]'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/*Navbar */}
            <nav className="fixed w-full z-50 bg-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-20">
                        {/* Logo Section */}
                        <div className="flex items-center">
                            <div className="flex items-center space-x-3 bg-sky-100/50 backdrop-blur-md rounded-full px-4 py-2 border border-sky-200/50 hover:bg-sky-100/70 transition-all duration-300">
                                <Ship className="h-6 w-6 text-sky-600" />
                                <span className="font-bold text-sky-800 text-lg">Risalah</span>
                                <span className="text-sky-600 text-sm">Portfolio</span>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-2 bg-sky-100/50 backdrop-blur-md rounded-full px-2 py-1 border border-sky-200/50">
                            {[
                                { name: 'Home', href: '#home' },
                                { name: 'About', href: '#about' },
                                { name: 'Projects', href: '#projects' },
                                { name: 'Skills', href: '#skills' },
                                { name: 'Contact', href: '#contact' }
                            ].map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="px-4 py-2 text-sm font-medium text-sky-800 hover:text-sky-900 rounded-full transition-all duration-300 hover:bg-sky-200/50"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2 rounded-full bg-sky-100/50 backdrop-blur-md text-sky-800 hover:bg-sky-200/50 transition-colors duration-300"
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden absolute w-full bg-gradient-to-br from-sky-100 to-sky-200 transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                        }`}
                >
                    {/* Mobile menu content */}
                </div>
            </nav>

            {/* Hero Section Full Layar */}
            <div
                id="home"
                className="relative min-h-screen flex items-center bg-sky-50/50 overflow-hidden"
            >
                <div className="absolute inset-0 bg-[radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-10 items-center">
                    {/* Text Content */}
                    <div className="space-y-8 z-10">
                        <div className="flex items-center space-x-4">
                            <div className="h-1 w-16 bg-sky-400 rounded"></div>
                            <span className="text-base font-medium text-sky-700">
                                Mahasiswa Teknik Perkapalan
                            </span>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-sky-900 leading-tight">
                                Risalah
                                <br />
                                Alifatus Zharo
                            </h1>

                            <p className="text-xl text-sky-800 max-w-2xl">
                                Ahli desain dan rekayasa kapal dengan keahlian mendalam dalam hidrodinamika dan konstruksi maritim, menghadirkan inovasi di dunia maritim.
                            </p>
                        </div>

                        <div className="flex space-x-4">
                            <a
                                href="#contact"
                                className="px-8 py-4 bg-sky-600 text-white rounded-full font-semibold hover:bg-sky-700 transition-colors flex items-center space-x-3 shadow-lg hover:shadow-xl"
                            >
                                <span>Hubungi Saya</span>
                                <Mail className="w-6 h-6" />
                            </a>
                            <a
                                href="#projects"
                                className="px-8 py-4 border border-sky-600 text-sky-700 rounded-full font-semibold hover:bg-sky-100 transition-colors flex items-center space-x-3"
                            >
                                <span>Lihat Proyek</span>
                                <ChevronRight className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Foto Profesional */}
                    <div className="hidden md:flex justify-center items-center relative">
                        <div className="relative z-10 group">
                            {/* Lingkaran luar dengan efek hover */}
                            <div className="absolute -inset-2 bg-sky-400/30 rounded-full blur-lg group-hover:opacity-75 transition-all duration-300 opacity-0"></div>

                            {/* Foto profil bulat */}
                            <div className="relative w-96 h-96 rounded-full overflow-hidden border-8 border-sky-200/50 shadow-2xl transform transition-all duration-300 group-hover:scale-105">
                                <img
                                    src="/assets/hero-about.jpg"
                                    alt="Risalah Alifatus Zharo"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>

                            {/* Badge Profesional */}
                            <div className="absolute bottom-6 right-6 bg-white/60 backdrop-blur-md rounded-full px-5 py-3 flex items-center space-x-3 border border-sky-200/50 hover:bg-white/70 transition-all">
                                <Ship className="w-7 h-7 text-sky-600" />
                                <span className="text-base text-sky-800 font-medium">Desain Kapal</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Down Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    <a
                        href="#about"
                        className="text-sky-700 hover:text-sky-900 mb-2 animate-bounce"
                    >
                        <ChevronDown className="w-8 h-8" />
                    </a>
                    <span className="text-sm text-sky-700 tracking-widest uppercase">Gulir Ke Bawah</span>
                </div>
            </div>

            {/* About Section*/}
            <section id="about" className="py-20 bg-gradient-to-b from-sky-50/50 to-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Image Section */}
                        <div className="relative group">
                            {/* Decorative Elements */}
                            <div className="absolute -inset-4 bg-sky-100 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {/* Main Image Container */}
                            <div className="relative">
                                {/* Main Profile Image */}
                                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-300 group-hover:scale-[1.02]">
                                    <img
                                        src="/assets/hero.jpg"
                                        alt="Risalah Alifatus Zharo"
                                        className="w-full h-[600px] object-cover object-center"
                                    />

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-sky-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                {/* Floating Stats Cards */}
                                <div className="absolute -right-8 top-1/3 z-20">
                                    <div className="bg-white p-4 rounded-2xl shadow-xl border border-sky-100">
                                        <div className="flex items-center space-x-3">
                                            <div className="p-2 bg-sky-100 rounded-xl">
                                                <Trophy className="w-6 h-6 text-sky-600" />
                                            </div>
                                            <div>
                                                <p className="text-sky-900 font-bold text-lg">5+ Awards</p>
                                                <p className="text-sky-600 text-sm">In Naval Design</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Experience Badge */}
                                <div className="absolute -left-8 bottom-1/4 z-20">
                                    <div className="bg-white p-4 rounded-2xl shadow-xl border border-sky-100">
                                        <div className="flex items-center space-x-3">
                                            <div className="p-2 bg-sky-100 rounded-xl">
                                                <Target className="w-6 h-6 text-sky-600" />
                                            </div>
                                            <div>
                                                <p className="text-sky-900 font-bold text-lg">3+ Years</p>
                                                <p className="text-sky-600 text-sm">Experience</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="space-y-8">
                            {/* Section Header */}
                            <div className="space-y-4">
                                <div className="inline-flex items-center space-x-2 bg-sky-100/50 rounded-full px-4 py-2">
                                    <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></span>
                                    <span className="text-sky-700 font-medium">About Me</span>
                                </div>
                                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-blue-600">
                                    Innovative Maritime Engineer
                                </h2>
                                <p className="text-sky-600/80 text-lg leading-relaxed">
                                    Passionate about revolutionizing maritime engineering through innovative design and sustainable solutions. Specializing in advanced ship design and hydrodynamic optimization.
                                </p>
                            </div>

                            {/* Highlights Grid */}
                            <div className="grid gap-6">
                                {highlights.map((highlight, index) => (
                                    <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-sky-100 hover:shadow-xl transition-all duration-300">
                                        <div className="flex items-start space-x-4">
                                            <div className="p-3 bg-sky-100 rounded-xl">
                                                {React.cloneElement(highlight.icon, { className: "text-sky-600" })}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-sky-900 mb-2">{highlight.title}</h3>
                                                <p className="text-sky-600">{highlight.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-3 gap-6">
                                {stats.map((stat, index) => (
                                    <div key={index} className="bg-white p-4 rounded-2xl text-center group hover:bg-sky-50 transition-colors duration-300">
                                        <div className="flex justify-center mb-2">
                                            <div className="p-2 bg-sky-100 rounded-xl group-hover:bg-sky-200 transition-colors">
                                                {React.cloneElement(stat.icon, { className: "text-sky-600" })}
                                            </div>
                                        </div>
                                        <p className="text-2xl font-bold text-sky-900">{stat.value}</p>
                                        <p className="text-sky-600 text-sm">{stat.label}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex space-x-4">
                                <a
                                    href="#contact"
                                    className="px-6 py-3 bg-sky-600 text-white rounded-full font-semibold hover:bg-sky-700 transition-colors flex items-center space-x-2"
                                >
                                    <span>Let's Connect</span>
                                    <ChevronRight className="w-5 h-5" />
                                </a>
                                <a
                                    href="#"
                                    className="px-6 py-3 border border-sky-600 text-sky-700 rounded-full font-semibold hover:bg-sky-50 transition-colors flex items-center space-x-2"
                                >
                                    <Download className="w-5 h-5" />
                                    <span>Download CV</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section*/}
            <section id="projects" className="py-20 bg-gradient-to-b from-sky-50/50 to-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header with Modern Typography */}
                    <div className="text-center mb-16 space-y-4">
                        <div className="inline-flex items-center space-x-2 bg-sky-100/50 rounded-full px-4 py-2">
                            <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></span>
                            <span className="text-sky-700 font-medium">Featured Projects</span>
                        </div>
                        <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-blue-600">
                            Latest Works
                        </h2>
                        <p className="text-sky-600/80 max-w-2xl mx-auto text-lg">
                            Exploring innovative solutions in maritime engineering
                        </p>
                    </div>

                    {/* Project Cards with Modern Design */}
                    <div className="grid lg:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="group relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border border-sky-100 hover:border-sky-200">
                                {/* Project Header */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="p-3 bg-sky-100 rounded-2xl group-hover:bg-sky-200 transition-colors">
                                            {React.cloneElement(project.icon, {
                                                className: "text-sky-600 group-hover:text-sky-700 transition-colors"
                                            })}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-sky-900 group-hover:text-sky-700 transition-colors">
                                                {project.title}
                                            </h3>
                                            <span className="text-sky-600/80 text-sm">{project.category}</span>
                                        </div>
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-sm ${project.status === "Completed"
                                        ? "bg-green-100 text-green-700"
                                        : "bg-yellow-100 text-yellow-700"
                                        }`}>
                                        {project.status}
                                    </span>
                                </div>

                                {/* Project Description */}
                                <p className="text-sky-700/80 mb-6 line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-4 py-2 bg-sky-50 text-sky-600 rounded-full text-sm font-medium hover:bg-sky-100 transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-2 text-sky-600">
                                        <BookOpen className="w-5 h-5" />
                                        <span className="text-sm">{project.duration}</span>
                                    </div>

                                    <div className="flex space-x-4">
                                        <a
                                            href={project.documentationUrl}
                                            className="flex items-center space-x-2 px-4 py-2 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition-colors"
                                        >
                                            <span className="text-sm font-medium">View Details</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>

                                {/* Hover Effect Gradient Border */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-sky-400 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>

                            </div>
                        ))}
                    </div>

                    {/* View All Projects Button */}
                    <div className="mt-16 text-center">
                        <a
                            href="#"
                            className="inline-flex items-center space-x-2 px-8 py-4 bg-sky-100 text-sky-600 rounded-full hover:bg-sky-200 transition-colors group"
                        >
                            <span className="font-medium">View All Projects</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 bg-gradient-to-b from-sky-50/50 to-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Modern Section Header */}
                    <div className="text-center mb-16 space-y-4">
                        <div className="inline-flex items-center space-x-2 bg-sky-100/50 rounded-full px-4 py-2">
                            <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></span>
                            <span className="text-sky-700 font-medium">Professional Skills</span>
                        </div>
                        <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-blue-600">
                            Tech Stack & Expertise
                        </h2>
                        <p className="text-sky-600/80 max-w-2xl mx-auto text-lg">
                            Cutting-edge skills in maritime engineering and design
                        </p>
                    </div>

                    {/* Main Skills Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {/* Technical Skills */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-sky-100 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center space-x-4 mb-8">
                                <div className="p-3 bg-sky-100 rounded-2xl">
                                    <Brain className="w-6 h-6 text-sky-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-sky-900">Technical Skills</h3>
                            </div>

                            <div className="space-y-6">
                                {skills.technical.map((skill, index) => (
                                    <div key={index} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sky-800 font-medium">{skill.name}</span>
                                            <span className="text-sky-600">{skill.proficiency}%</span>
                                        </div>
                                        <div className="h-2 bg-sky-100 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-sky-500 to-blue-500 rounded-full transform transition-all duration-500"
                                                style={{ width: `${skill.proficiency}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Software Skills */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-sky-100 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center space-x-4 mb-8">
                                <div className="p-3 bg-sky-100 rounded-2xl">
                                    <Code className="w-6 h-6 text-sky-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-sky-900">Software Skills</h3>
                            </div>

                            <div className="space-y-6">
                                {skills.software.map((skill, index) => (
                                    <div key={index} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sky-800 font-medium">{skill.name}</span>
                                            <span className="text-sky-600">{skill.proficiency}%</span>
                                        </div>
                                        <div className="h-2 bg-sky-100 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-sky-500 to-blue-500 rounded-full transform transition-all duration-500"
                                                style={{ width: `${skill.proficiency}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Analysis Skills */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-sky-100 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center space-x-4 mb-8">
                                <div className="p-3 bg-sky-100 rounded-2xl">
                                    <Target className="w-6 h-6 text-sky-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-sky-900">Analysis Skills</h3>
                            </div>

                            <div className="space-y-6">
                                {skills.analysis.map((skill, index) => (
                                    <div key={index} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sky-800 font-medium">{skill.name}</span>
                                            <span className="text-sky-600">{skill.proficiency}%</span>
                                        </div>
                                        <div className="h-2 bg-sky-100 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-sky-500 to-blue-500 rounded-full transform transition-all duration-500"
                                                style={{ width: `${skill.proficiency}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Certifications Section */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg border border-sky-100">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-sky-100 rounded-2xl">
                                    <Rocket className="w-6 h-6 text-sky-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-sky-900">Certifications & Achievements</h3>
                            </div>
                            <span className="px-4 py-2 bg-sky-100 text-sky-600 rounded-full text-sm font-medium">
                                {certifications.length} Credentials
                            </span>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {certifications.map((cert, index) => (
                                <div key={index} className="flex items-start space-x-4 p-6 rounded-2xl bg-sky-50 hover:bg-sky-100 transition-colors">
                                    <div className="p-3 bg-white rounded-xl">
                                        {React.cloneElement(cert.icon, { className: "text-sky-600" })}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-sky-900">{cert.title}</h4>
                                        <p className="text-sky-600">{cert.issuer}</p>
                                        <span className="text-sm text-sky-500">{cert.year}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Stats */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "Years Experience", value: "3+" },
                            { label: "Projects Completed", value: "10+" },
                            { label: "Certifications", value: "5+" },
                            { label: "Design Tools", value: "8+" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg border border-sky-100 hover:shadow-xl transition-all">
                                <h4 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-blue-600">
                                    {stat.value}
                                </h4>
                                <p className="text-sky-600 mt-2">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Contact Section */}
            <section id="contact" className="py-20 bg-gradient-to-b from-sky-50/50 to-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16 space-y-4">
                        <div className="inline-flex items-center space-x-2 bg-sky-100/50 rounded-full px-4 py-2">
                            <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></span>
                            <span className="text-sky-700 font-medium">Get in Touch</span>
                        </div>
                        <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-blue-600">
                            Let's Connect
                        </h2>
                        <p className="text-sky-600/80 max-w-2xl mx-auto text-lg">
                            Open for collaboration and innovative maritime projects
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Info Card */}
                        <div className="space-y-8">
                            {/* Quick Contact Card */}
                            <div className="bg-white rounded-3xl p-8 shadow-lg border border-sky-100 hover:shadow-xl transition-all duration-300">
                                <h3 className="text-2xl font-bold text-sky-900 mb-6">Quick Contact</h3>

                                <div className="space-y-6">
                                    {[
                                        {
                                            icon: <Mail className="w-5 h-5" />,
                                            title: 'Email',
                                            value: 'risalah.alifatus@gmail.com',
                                            link: 'mailto:risalah.alifatus@gmail.com'
                                        },
                                        {
                                            icon: <Phone className="w-5 h-5" />,
                                            title: 'Phone',
                                            value: '+62 xxx-xxxx-xxxx',
                                            link: 'tel:+62xxxxxxxxxx'
                                        },
                                        {
                                            icon: <MapPin className="w-5 h-5" />,
                                            title: 'Location',
                                            value: 'Surabaya, Indonesia',
                                            link: '#'
                                        }
                                    ].map((item, index) => (
                                        <a
                                            key={index}
                                            href={item.link}
                                            className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-sky-50 transition-colors group"
                                        >
                                            <div className="p-3 bg-sky-100 rounded-xl group-hover:bg-sky-200 transition-colors">
                                                {React.cloneElement(item.icon, { className: "text-sky-600" })}
                                            </div>
                                            <div>
                                                <p className="text-sm text-sky-600">{item.title}</p>
                                                <p className="text-sky-900 font-medium">{item.value}</p>
                                            </div>
                                            <ArrowRight className="w-5 h-5 text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="bg-white rounded-3xl p-8 shadow-lg border border-sky-100">
                                <h3 className="text-2xl font-bold text-sky-900 mb-6">Social Links</h3>
                                <div className="grid grid-cols-3 gap-4">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`${social.color} text-white p-4 rounded-2xl flex flex-col items-center space-y-2 hover:scale-105 transition-transform`}
                                        >
                                            {social.icon}
                                            <span className="text-sm font-medium">{social.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-sky-100">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-2xl font-bold text-sky-900">Send Message</h3>
                                <span className="px-4 py-2 bg-sky-100 text-sky-600 rounded-full text-sm font-medium">
                                    24/7 Support
                                </span>
                            </div>

                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-sky-900">Your Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-sky-900">Your Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-sky-900">Subject</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                                        placeholder="How can I help you?"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-sky-900">Message</label>
                                    <textarea
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all resize-none"
                                        placeholder="Write your message here..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-6 py-4 bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center space-x-2 group"
                                >
                                    <span>Send Message</span>
                                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>

                            {/* Additional Info */}
                            <div className="mt-8 p-4 bg-sky-50 rounded-xl">
                                <p className="text-sky-600 text-sm text-center">
                                    Usually respond within 24 hours 🚀
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Banner */}
                    <div className="mt-16 text-center">
                        <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg border border-sky-100">
                            <span className="text-sky-900 font-medium">Ready to collaborate?</span>
                            <div className="w-1 h-1 bg-sky-400 rounded-full"></div>
                            <span className="text-sky-600">Let's create something amazing together</span>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="relative bg-gradient-to-b from-white to-sky-50/50 pt-20 pb-10 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Main Footer Content */}
                    <div className="grid md:grid-cols-4 gap-12 pb-12 border-b border-sky-200/50">
                        {/* Brand Section */}
                        <div className="md:col-span-2 space-y-6">
                            <div className="flex items-center space-x-3">
                                <Ship className="w-8 h-8 text-sky-600" />
                                <span className="text-2xl font-bold text-sky-900">Portfolio</span>
                            </div>
                            <p className="text-sky-700 max-w-sm">
                                Bringing innovation to maritime engineering through modern design and advanced technology.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="p-2 bg-sky-100 text-sky-600 rounded-full hover:bg-sky-200 transition-colors">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="#" className="p-2 bg-sky-100 text-sky-600 rounded-full hover:bg-sky-200 transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="#" className="p-2 bg-sky-100 text-sky-600 rounded-full hover:bg-sky-200 transition-colors">
                                    <Mail className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold text-sky-900">Quick Links</h3>
                            <ul className="space-y-3">
                                {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <a
                                            href={`#${item.toLowerCase()}`}
                                            className="text-sky-700 hover:text-sky-600 transition-colors flex items-center space-x-2 group"
                                        >
                                            <span>{item}</span>
                                            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold text-sky-900">Get in Touch</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center space-x-2 text-sky-700">
                                    <Mail className="w-4 h-4" />
                                    <span>contact@example.com</span>
                                </li>
                                <li className="flex items-center space-x-2 text-sky-700">
                                    <Github className="w-4 h-4" />
                                    <span>github.com/username</span>
                                </li>
                                <li className="flex items-center space-x-2 text-sky-700">
                                    <Linkedin className="w-4 h-4" />
                                    <span>linkedin.com/in/username</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Copyright Section */}
                    <div className="pt-8 text-center">
                        <div className="inline-flex flex-col items-center space-y-2">
                            {/* Code N1que Badge */}
                            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-4 py-2 rounded-full shadow-lg">
                                <span className="text-xs font-medium uppercase tracking-wider">Powered by</span>
                                <span className="font-bold">CodeN1que</span>
                            </div>

                            {/* Copyright Text */}
                            <div className="flex items-center justify-center space-x-2 text-sky-700">
                                <span>© {currentYear} All rights reserved.</span>
                                <span>Made with</span>
                                <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
                                <span>by</span>
                                <a
                                    href="https://coden1que.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold hover:text-sky-600 transition-colors"
                                >
                                    CodeN1que
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;