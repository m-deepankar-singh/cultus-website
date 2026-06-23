import type { NavItem, Stat, Program, FAQ, Office, SegmentButton, Testimonial, EventItem } from "./types";

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Cultus",
    href: "#",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Products", href: "/products" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    label: "Programs",
    href: "/programs",
    children: [
      { label: "AWS re/Start Sri Lanka", href: "/programs/aws-restart-srilanka" },
    ],
  },
  { label: "For Learners", href: "/for-learners" },
  { label: "For Businesses", href: "/for-businesses" },
  { label: "For Governments", href: "/for-governments" },
  { label: "For Universities", href: "/for-universities" },
  { label: "Events", href: "/events" },
];

export const EVENTS: EventItem[] = [
  {
    title: "Transforming BFSI Talent for the AI Era",
    eyebrow: "Exclusive Webinar",
    description:
      "An exclusive webinar for Banking, Financial Services & Insurance leaders on building agile, AI-ready teams for the future of banking. Hear from industry leaders on workforce readiness, responsible AI adoption, and the human skills that still matter.",
    date: "6 July 2026",
    day: "Monday",
    time: "1:00 PM – 2:00 PM",
    timezone: "Sri Lanka Time",
    format: "Live Webinar · Online",
    image: "/images/assets/Asset 35@2x.png",
    href: "/bfsi-ai-webinar",
    ctaText: "View & Register",
    status: "upcoming",
    tags: ["BFSI", "AI & Workforce", "Leadership"],
  },
];

export const HOME_STATS: Stat[] = [
  { value: 221000, suffix: "+", label: "Learners trained across tech, business, and emerging roles" },
  { value: 93, suffix: "%", label: "Placement rate for eligible learners" },
  { value: 4000, suffix: "+", label: "Recruiters and hiring partners in our network" },
  { value: 11, suffix: "", label: "Asian countries through active programs and partnerships" },
  { value: 80, suffix: "%+", label: "Learners report higher confidence and job readiness" },
  { value: 50, suffix: "+", label: "Institutional & CSR partners" },
];

export const ABOUT_STATS: Stat[] = [
  { value: 221000, suffix: "+", label: "Learners trained across tech, business, and emerging roles" },
  { value: 93, suffix: "%", label: "Placement rate for eligible learners" },
  { value: 4000, suffix: "+", label: "Recruiters and hiring partners in our network" },
  { value: 80, suffix: "%+", label: "Learners report higher confidence and job readiness" },
  { value: 11, suffix: "", label: "Asian countries through active programs and partnerships" },
  { value: 50, suffix: "+", label: "Institutional & CSR partners" },
  { value: 110, suffix: "+", label: "Expert sessions conducted" },
  { value: 30, suffix: "+", label: "Industry placement partners" },
];

export const UNIVERSITY_STATS: Stat[] = [
  { value: 93, suffix: "%", label: "Placement Rate for eligible learners" },
  { value: 80, suffix: "%+", label: "Learners report higher confidence and job-readiness" },
  { value: 4000, suffix: "+", label: "Recruiters trust our talent pipeline" },
  { value: 221000, suffix: "+", label: "Learners transformed through Cultus" },
  { value: 30, suffix: "+", label: "Industry Placement Partners" },
];

export const SEGMENT_BUTTONS: SegmentButton[] = [
  {
    title: "For Learners",
    description: "Launch your career with industry-aligned skills and placement support",
    href: "/for-learners",
    icon: "GraduationCap",
  },
  {
    title: "For Businesses",
    description: "Hire pre-vetted, job-ready talent at zero recruitment cost",
    href: "/for-businesses",
    icon: "Building2",
  },
  {
    title: "For Governments",
    description: "Drive national growth through large-scale skilling missions",
    href: "/for-governments",
    icon: "Landmark",
  },
  {
    title: "For Universities",
    description: "Increase graduate placements with industry-aligned skilling",
    href: "/for-universities",
    icon: "School",
  },
];

export const PROGRAMS: Program[] = [
  {
    title: "Artificial Intelligence & Data",
    description: "Become an in-demand expert in the technologies shaping tomorrow's workforce.",
    courses: [
      "AI for Business Professionals",
      "Business Analytics & Data Science",
      "Business Intelligence Tools",
      "Generative AI with Copilot",
      "Prompt Engineering for Managers",
      "AI Foundations for Graduates",
      "Full Stack Development",
    ],
    ctaText: "Want to learn more about AI & Data skilling?",
    icon: "Brain",
  },
  {
    title: "Finance & Fintech",
    description: "Build expertise in modern finance \u2013 from analytics and digital lending to investor readiness and financial literacy.",
    courses: [
      "Financial Analytics & Fintech",
      "Digital Lending & Credit Innovation",
      "Investor Readiness Report",
      "India Fund Fest",
      "Financial Literacy",
    ],
    ctaText: "Want to elevate your financial skills?",
    icon: "TrendingUp",
  },
  {
    title: "Technology & Cloud",
    description: "Gain the technical expertise to thrive in a cloud-first world\u2014from foundational cloud skills to business digitisation.",
    courses: [
      "AWS re/Start",
      "Cloud Computing",
      "SME Digitisation",
    ],
    ctaText: "Interested in Technology & Cloud programs?",
    icon: "Cloud",
  },
  {
    title: "Marketing & Growth",
    description: "Master the art of modern marketing \u2013 blend creativity with data, AI, and growth-driven strategies.",
    courses: [
      "Growth Hacking & AI-Powered Digital Marketing",
      "Digital Marketing",
    ],
    ctaText: "Ready to boost your marketing skills?",
    icon: "Megaphone",
  },
  {
    title: "HR & Workforce Development",
    description: "Build and optimize talent with next-generation HR strategies and inclusive job-readiness programs.",
    courses: [
      "AI-Powered HR Automation & Workforce Optimisation",
      "Cultus Job Readiness (White-collared Jobs)",
      "Karya Kaushal (Blue & Grey-collared Jobs)",
    ],
    ctaText: "Looking to develop or hire ready talent?",
    icon: "Users",
  },
  {
    title: "Innovation & Product",
    description: "Learn to ideate, build, and launch products that solve real-world problems and drive market success.",
    courses: [
      "Design Thinking & Innovation",
      "Product Management Fundamentals",
      "Entrepreneurship",
    ],
    ctaText: "Ready to Innovate?",
    icon: "Lightbulb",
  },
  {
    title: "Green Energy",
    description: "Equip yourself with the skills to lead in the sustainable energy revolution and build a cleaner future.",
    courses: [
      "Hydrogen Technologies",
      "Solar Energy Systems",
      "Wind Power Technologies",
    ],
    ctaText: "Power your career in sustainable energy.",
    icon: "Leaf",
  },
  {
    title: "Creative & Design",
    description: "Shape digital experiences and visual storytelling with industry-driven creative skills.",
    courses: [
      "UX/UI",
      "Animation",
    ],
    ctaText: "Ready to create?",
    icon: "Palette",
  },
  {
    title: "Bootcamps & Workshops",
    description: "Accelerate your learning with intensive, hands-on training designed for immediate impact.",
    courses: [
      "Bootcamp 2\u20135 Day In-Person Workshop",
    ],
    ctaText: "Transform your skills in days.",
    icon: "Zap",
  },
];

export const PROGRAM_FAQS: FAQ[] = [
  {
    question: "Who are these programs designed for?",
    answer: "Our programs cater to a wide audience including students, recent graduates, working professionals, government bodies, universities, and enterprises seeking to upskill or reskill their workforce.",
  },
  {
    question: "What is the typical duration of a program?",
    answer: "Program lengths vary: from intensive 2\u20135 day bootcamps and workshops, to multi-week courses, and comprehensive job-readiness programs that can span several months depending on the learning path.",
  },
  {
    question: "Are the programs conducted online or in-person?",
    answer: "We offer different programs with various flexible learning modes depending on each program type and its requirements including online, in-person, and hybrid formats to suit different needs and geographies.",
  },
  {
    question: "Do you provide certifications upon completion?",
    answer: "Yes. Most programs offer a certificate of completion. Key programs like Cultus Job Readiness (CJR) award a globally recognized 5-Star Job Ready Badge valid for three years and trusted by 4,000+ employers.",
  },
  {
    question: "What is the placement support like?",
    answer: "Eligible learners in job-focused programs receive placement assistance, including profile sharing with our network of 4,000+ hiring partners, interview preparation, and career guidance.",
  },
  {
    question: "Can organizations or institutions choose specific programs to create a custom curriculum?",
    answer: "Yes. We collaborate with governments, universities, and corporates to deliver tailored skilling solutions. You can select and combine programs from our catalog to build a custom learning pathway that meets your specific goals. Contact us to discuss your needs.",
  },
  {
    question: "How do I choose the right program for me or my organization?",
    answer: "You can explore programs by category on this page, or reach out to our team for a personalized consultation based on your goals, background, and desired outcomes.",
  },
  {
    question: "What makes Cultus programs different from other skilling platforms?",
    answer: "Our programs are built with direct input from industry (10,000+ recruiters consulted), focus on measurable outcomes (93% placement rate for eligible learners), and combine AI-powered personalization with human mentoring.",
  },
  {
    question: "How can I enroll or get more details?",
    answer: "Click the \u201CGet in Touch\u201D button on any program section, or visit our Contact Us page to connect with our team for guidance and enrollment support.",
  },
];

export const LEARNER_FAQS: FAQ[] = [
  {
    question: "Who is eligible to enroll in Cultus programs?",
    answer: "Our programs are open to students, recent graduates, career changers, and working professionals looking to upskill. Specific prerequisites may apply depending on the program.",
  },
  {
    question: "How do I know which program is right for me?",
    answer: "You can explore programs by industry category above, or contact our learner support team for a personalized recommendation based on your background and career goals.",
  },
  {
    question: "Are the programs online or in-person?",
    answer: "We offer flexible learning modes\u2014online, hybrid, and in-person options\u2014depending on the program and location.",
  },
  {
    question: "Do I get a certificate after completing a program?",
    answer: "Yes. Most programs include a certificate of completion. Job-readiness programs like Cultus Job Readiness (CJR) award the 5-Star Job Ready Badge, valid for three years and recognized by 4,000+ employers.",
  },
  {
    question: "What kind of placement support do you provide?",
    answer: "Eligible learners receive end-to-end placement assistance, including profile sharing with hiring partners, interview preparation, resume building, and direct employer connections through the Cultus Jobs portal.",
  },
  {
    question: "How long do programs typically last?",
    answer: "Program duration varies: from intensive 2\u20135 day bootcamps to multi-week courses and comprehensive job-readiness programs that may span several months.",
  },
  {
    question: "How can I stay updated on new courses and program openings?",
    answer: "Follow us on Instagram and LinkedIn for the latest announcements on course launches, enrollment dates, and events, or reach out to our team at support@cultusworkforce.com for guided enrollment.",
  },
];

export const OFFICES: Office[] = [
  {
    city: "Sri Lanka",
    address: [
      "No. 70, Lucky Plaza Building",
      "St. Anthony\u2019s Road",
      "Colombo 3",
    ],
  },
  {
    city: "Indonesia",
    address: [
      "Kawasan CBD Rasuna Epicentrum - Epiwalk Office Suite",
      "Jl. HR. Rasuna Said, Karet Kuningan, Setiabudi",
      "Jakarta Selatan 12940",
    ],
  },
  {
    city: "Bangalore",
    address: [
      "PSP SQUARE, 4th Floor, No 201",
      "Green Glen Layout, Bellandur ORR",
      "Bangalore \u2013 560 103",
    ],
  },
  {
    city: "Hyderabad",
    address: [
      "6-3-634, A1&2, II Floor, Green Channel Apartments",
      "Opposite Lane ICICI Bank, Khairtabad",
      "Hyderabad, Telangana \u2013 500004",
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Priya Sharma",
    role: "Software Developer, TCS",
    quote: "The Cultus Job Readiness program transformed my career. Within 3 months of completing the program, I landed my dream job in tech.",
  },
  {
    name: "Rahul Menon",
    role: "Cloud Engineer, Wipro",
    quote: "AWS re/Start through Cultus gave me the certification and confidence I needed. The placement support was exceptional.",
  },
  {
    name: "Ananya Reddy",
    role: "Data Analyst, Infosys",
    quote: "The AI & Data program was exactly what I needed to transition into analytics. The hands-on projects made all the difference.",
  },
];

export const PARTNER_LOGOS: string[] = [
  "/images/partners/Picture1.png",
  "/images/partners/Picture2.png",
  "/images/partners/Picture3.png",
  "/images/partners/Picture4.png",
  "/images/partners/Picture5.png",
  "/images/partners/Picture6.png",
  "/images/partners/Picture7.png",
  "/images/partners/Picture8.png",
  "/images/partners/Picture9.png",
  "/images/partners/Picture10.png",
  "/images/partners/Picture11.png",
  "/images/partners/Picture12.png",
  "/images/partners/Picture13.png",
  "/images/partners/Picture14.png",
  "/images/partners/Picture15.png",
  "/images/partners/Picture16.png",
  "/images/partners/Picture17.png",
  "/images/partners/Picture18.png",
  "/images/partners/Picture19.png",
  "/images/partners/Picture20.png",
  "/images/partners/Picture21.png",
  "/images/partners/Picture22.png",
  "/images/partners/Picture23.png",
  "/images/partners/Picture24.png",
  "/images/partners/Picture25.png",
  "/images/partners/Picture26.png",
  "/images/partners/Picture27.png",
  "/images/partners/Picture28.png",
  "/images/partners/Picture29.png",
  "/images/partners/Picture30.png",
  "/images/partners/Picture31.png",
];

export const WHY_WORK_REASONS = [
  {
    icon: "Rocket",
    title: "Mission-Driven Impact",
    description: "Contribute to large-scale skilling initiatives that reach 221,000+ learners and counting",
  },
  {
    icon: "Globe",
    title: "Scale & Reach",
    description: "Be part of programs active across 11 Asian countries with 4,000+ hiring partners",
  },
  {
    icon: "Lightbulb",
    title: "Innovation at the Core",
    description: "Work with AI-driven platforms, government partnerships, and industry-aligned curriculum",
  },
  {
    icon: "Users",
    title: "Collaborative Culture",
    description: "Join a team of passionate educators, technologists, and strategists",
  },
  {
    icon: "TrendingUp",
    title: "Growth & Ownership",
    description: "Grow your career in a fast-paced, outcome-focused environment",
  },
];

export const SKILLS_CENTER_STREAMS = [
  {
    icon: "Target",
    title: "Stream 1: Job Readiness",
    subtitle: "The pathway from assessment to employability.",
    features: [
      "Competency Assessment \u2013 Evaluates 5 core and 30 sub-competencies",
      "Personalized Learning Path \u2013 AI-driven plan based on assessment results",
      "5-Stage Progression \u2013 Leads to the Cultus Job Ready Badge",
      "3-Year Valid Credential \u2013 Star-rated badge recognized by 4000+ employers",
      "Industry Expert Sessions \u2013 Live insights from leaders and recruiters",
      "Integrated with Cultus Jobs Portal \u2013 Direct employer access for badge-holders",
    ],
  },
  {
    icon: "Settings",
    title: "Stream 2: Industry 4.0",
    subtitle: "Future-ready technical certifications.",
    features: [
      "15 Industry 4.0 Courses \u2013 AI, Cloud, Green Energy, 5G, and more",
      "42\u201384 Hours Each \u2013 Instructor-supported, hands-on training",
      "Industry-Aligned Certification \u2013 Skills that match employer needs",
    ],
  },
  {
    icon: "Sparkles",
    title: "Stream 3: Smart Career",
    subtitle: "Passion-driven, versatile skill development.",
    features: [
      "Broad Course Range \u2013 Sustainability, Business English, and beyond",
      "Short to Moderate Duration \u2013 2 to 42-hour flexible learning",
      "Complementary Skills \u2013 Enhances employability and personal growth",
    ],
  },
];

export const CHALLENGES_SOLVED = [
  {
    title: "For Learners",
    icon: "GraduationCap",
    challenges: [
      "Continuous Upskilling \u2013 Access to best-in-class courses from global universities and vocational institutes.",
      "Guided Career Pathways \u2013 Career counselling, course identification, and support for overseas studies.",
      "Skill-Based Direction \u2013 Helps to identify and pursue career paths aligned with innate skills and competencies.",
      "Industry-Ready Skills \u2013 Latest Industry 4.0 training\u2014both soft and hard skills\u2014taught by industry practitioners.",
    ],
  },
  {
    title: "For Governments",
    icon: "Landmark",
    challenges: [
      "Large-Scale Youth Employment \u2013 Implementing nationwide skilling missions to enhance employability.",
      "Regional Skill Gap Mitigation \u2013 Addressing local workforce shortages through targeted training.",
      "CSR & Public Program Alignment \u2013 Partnering to deliver measurable socio-economic impact through skilling.",
      "Sustainable Livelihood Creation \u2013 Focusing on marginalised and underserved communities.",
    ],
  },
  {
    title: "For Universities",
    icon: "School",
    challenges: [
      "Delivering Measurable Outcomes \u2013 Transforming learners into job-seekers or job-creators with clear ROI.",
      "Curriculum Modernisation \u2013 Integrating industry-relevant skills not covered in traditional syllabi.",
      "Industry-Academic Alignment \u2013 Meeting the demand for job-ready, digitally-aware graduates.",
      "Improved University Ranking through enhanced employability metrics",
      "Access to Industry-Led Internship Programs",
      "Reduced Student Drop-Out Rates",
      "Higher Enrollment Numbers driven by better placement outcomes",
      "Enhanced Academic Staff Performance via industry collaboration",
      "Higher Job Placement Rate \u2013 connecting graduates to 4000+ employers",
    ],
  },
  {
    title: "For Industry",
    icon: "Building2",
    challenges: [
      "Talent Readiness \u2013 Sourcing graduates who are productive from day one, per industry definitions.",
      "Skill-Specific Hiring \u2013 Access to candidates trained in the latest tools, technologies, and workplace competencies.",
    ],
  },
];

export const GOVERNMENT_VALUE_PROPS = [
  {
    title: "Proven Scale & Impact",
    description: "We have trained 221,000+ learners through government-linked initiatives with a 93% placement rate for eligible candidates.",
    icon: "BarChart3",
  },
  {
    title: "Technology-Enabled Delivery",
    description: "Our platform enables personalized, data-driven skilling pathways that can be deployed efficiently across diverse geographies and demographics.",
    icon: "Cpu",
  },
  {
    title: "Focus on Measurable Outcomes",
    description: "We design programs with a clear focus on employment, entrepreneurship, and sustainable income generation, ensuring public investment delivers tangible returns.",
    icon: "Target",
  },
  {
    title: "Expertise in Emerging Sectors",
    description: "We build curriculum and delivery mechanisms for frontier technologies\u2014from AI and Cloud to Green Energy\u2014that are essential for national competitiveness.",
    icon: "Rocket",
  },
];

export const AWS_RESTART_DATA = {
  hero: {
    headline: "AWS re/Start",
    subheadline:
      "A free competency development program that can enhance your career in the Cloud Computing field.",
  },
  cultusWay: [
    {
      step: "01",
      title: "Define",
      description: "Identify your career goals and assess your current skill level to build a tailored learning journey.",
      icon: "Target",
    },
    {
      step: "02",
      title: "Optimize",
      description: "Sharpen your technical and behavioral skills through hands-on labs, real-world scenarios, and expert guidance.",
      icon: "Settings",
    },
    {
      step: "03",
      title: "Certify",
      description: "Prepare for and earn the AWS Certified Cloud Practitioner certification to validate your expertise.",
      icon: "Award",
    },
    {
      step: "04",
      title: "Showcase",
      description: "Present your skills to hiring partners and connect with employers seeking cloud-ready talent.",
      icon: "Sparkles",
    },
  ],
  overview: {
    title: "Building a Career in Technology with AWS re/Start",
    description:
      "AWS re/Start cooperated with Cultus Education to offer this free program online, so you can access it anywhere. Using case scenario-based learning methods, practical laboratories, and assignments, students will gain the skills needed for entry-level careers in cloud computing. The program also includes self-development modules to make you workplace-ready.",
  },
  eligibility: {
    title: "Who Is This Program For?",
    items: [
      "Those seeking entry-level jobs in Cloud and IT Sector",
      "Youth aged 18–35, including underemployed and unemployed individuals",
      "Passed Advance Level (A/L) examination (Local or foreign)",
      "Open to graduates, diploma holders, 12th pass, and planning career change",
      "Available for 3.5 hours of e-classroom learning during day or evening from Monday to Saturday",
      "Work experience, preferably in IT sector is added advantage",
      "Ready to work immediately if offered a job after completing the training",
      "Willing to relocate, if required",
    ],
  },
  requirements: {
    title: "Technical Requirements",
    items: [
      "Access to Laptop/Desktop",
      "A stable internet connection",
      "Internal/external webcam, mic, and speaker",
      "Intel Processor i3/AMD 3, RAM 4GB, 500 GB hard drive",
    ],
  },
  benefits: [
    {
      icon: "GraduationCap",
      title: "Free Training on Current & Future Skills",
      description:
        "Training for in-demand cloud computing skills is absolutely free. Your first step to unlocking a new career path in IT.",
    },
    {
      icon: "FlaskConical",
      title: "Real Scenario-Based Practicing",
      description:
        "Complete real scenario-based learning, hands-on practice, and courses to prepare for a career in Cloud computing.",
    },
    {
      icon: "Award",
      title: "Global Certification",
      description:
        "After completing the training, you will be eligible to take the AWS Certified Cloud Practitioner Exam.",
    },
    {
      icon: "Briefcase",
      title: "Placement Opportunities",
      description:
        "We will work and assist you with placement opportunities so you can start your career in cloud computing.",
    },
  ],
  technicalSkills: [
    "AWS Cloud Practitioner Certification Preparation",
    "AWS Cloud Core Services & Architecture",
    "Programming Languages for Cloud Development",
    "Cloud Security Fundamentals",
    "Networking & Infrastructure Basics",
    "Linux & Command Line Essentials",
  ],
  behavioralSkills: [
    "Time Management",
    "Team Work",
    "Problem Solving",
    "Effective Communication",
    "Critical Thinking",
    "Interview Preparation",
  ],
  faqs: [
    {
      question: "Is the AWS re/Start program really free?",
      answer:
        "Yes, the AWS re/Start program is completely free for eligible learners. There are no tuition fees or hidden costs. AWS sponsors the program to develop cloud computing talent globally.",
    },
    {
      question: "How long does the program take to complete?",
      answer:
        "The program runs for approximately 12 weeks with 3.5 hours of e-classroom learning per day, Monday to Saturday. You can choose day or evening sessions based on your availability.",
    },
    {
      question: "Do I need prior IT experience to enroll?",
      answer:
        "While 1–2 years of work experience (preferably in IT) is recommended, it is not mandatory. The program is designed for individuals seeking entry-level positions in cloud computing.",
    },
    {
      question: "What certification will I receive after completing the program?",
      answer:
        "Upon completion, you will be prepared to take the AWS Certified Cloud Practitioner exam. This is a globally recognized certification that validates your understanding of AWS Cloud fundamentals.",
    },
    {
      question: "Will I get help finding a job after the program?",
      answer:
        "Yes. Cultus provides placement assistance including connecting you with our network of 4,000+ hiring partners, interview preparation, resume building, and career guidance.",
    },
    {
      question: "Is the program conducted online or in-person?",
      answer:
        "The program is delivered online, so you can access it from anywhere with a stable internet connection and the required technical specifications.",
    },
  ] as FAQ[],
};

export const BUSINESS_VALUE_PROPS = [
  {
    title: "Hire with Confidence from a Curated Talent Pool",
    description: "Connect directly with 25,000+ Cultus-certified candidates, rigorously assessed and ready to contribute from day one.",
    icon: "UserCheck",
  },
  {
    title: "Eliminate Costly Hiring Guesswork",
    description: "Our candidates are pre-vetted using the Cultus 5-Star Job Ready Program, designed with input from 1,200+ hiring managers to guarantee industry alignment.",
    icon: "ShieldCheck",
  },
  {
    title: "Access Role-Specific, Skilled Talent",
    description: "Source professionals trained in high-demand fields like AI, Cloud, 5G, Fintech, and Green Energy, all screened for technical and workplace competencies.",
    icon: "Briefcase",
  },
];

// BFSI AI-Era Webinar landing page — mirrors the official webinar one-pager
export const WEBINAR_DATA = {
  hero: {
    eyebrow: "Exclusive Webinar for",
    audience: "Banking, Financial Services & Insurance Leaders",
    titleLead: "Transforming",
    titleMid: "BFSI Talent",
    titleTail: "for the",
    titleHighlight: "AI Era",
    subtitle: "Build Agile, AI-Ready Teams for the Future of Banking",
    date: "6 July 2026",
    day: "Monday",
    time: "1:00 PM – 2:00 PM",
    timezone: "Sri Lanka Time",
    format: "Live Webinar",
    formatNote: "Online Event",
    cta: "Register Now",
    seats: "Limited Seats Available",
    image: "/images/assets/Asset 35@2x.png",
  },
  audienceTypes: [
    { label: "Commercial Banks", icon: "Landmark" },
    { label: "Development Banks", icon: "Building2" },
    { label: "Insurance Companies", icon: "Umbrella" },
    { label: "Leasing Companies", icon: "ScrollText" },
    { label: "FinTechs", icon: "CircuitBoard" },
    { label: "Other Financial Institutions", icon: "Briefcase" },
  ],
  whyAttend: {
    intro:
      "As AI technologies become embedded across banking, financial services, and insurance operations, organizations must ensure that their workforce is equipped with the right skills, mindset, and governance practices.",
    listTitle: "Explore Insights On:",
    items: [
      "Global trends in upskilling and employability within the BFSI sector",
      "Sri Lanka's readiness for an AI-enabled BFSI workforce",
      "Gen Z + AI: Understanding the future workforce and evolving workplace expectations",
      "Skills and capabilities required to remain competitive in the AI era",
      "Frameworks, governance models, and best practices for responsible AI adoption",
      "Balancing innovation, compliance, risk management, and workforce transformation",
    ],
    image: "/images/assets/Asset 34@2x.png",
  },
  whatYoullLearn: [
    {
      icon: "BrainCircuit",
      title: "AI's Impact on the BFSI Workforce",
      description:
        "Understand how AI is changing job roles, skills, and workforce expectations across banking, financial services, and insurance.",
    },
    {
      icon: "Target",
      title: "Building an AI-Ready Talent Strategy",
      description:
        "Learn how forward-thinking organizations are preparing employees for AI-enabled workplaces.",
    },
    {
      icon: "TrendingUp",
      title: "Upskilling & Reskilling for the Future",
      description:
        "Discover practical approaches to developing critical skills without disrupting business operations.",
    },
    {
      icon: "Workflow",
      title: "Driving Workforce Agility",
      description:
        "Learn how to create adaptable teams capable of navigating continuous change.",
    },
    {
      icon: "Handshake",
      title: "The Human Skills That Still Matter",
      description:
        "Explore why leadership, communication, critical thinking, and adaptability remain essential in an AI-powered world.",
    },
  ],
  whoShouldAttend: [
    {
      icon: "Users",
      title: "HR Leaders",
      description:
        "Chief Human Resources Officers, HR Directors, HR Business Partners",
    },
    {
      icon: "GraduationCap",
      title: "Learning & Development Professionals",
      description: "Training Managers, L&D Heads, Capability Development Teams",
    },
    {
      icon: "Landmark",
      title: "BFSI Business Leaders",
      description:
        "Banking Executives, Operations Leaders, Digital Transformation Leaders",
    },
    {
      icon: "Briefcase",
      title: "Talent & Workforce Professionals",
      description:
        "Talent Acquisition Leaders, Workforce Planning Teams, Organizational Development Professionals",
    },
  ],
  speakers: {
    keynote: {
      name: "Mr. Cyrus Daruwala",
      badge: "Keynote Speaker",
      title: "Executive Director - FSI",
      org: "ASEAN Economic Forum Distinguished Speaker",
      image: "/images/assets/Asset 21@2x.png",
      bio: "Mr. Cyrus Daruwala is a globally recognized financial services leader with over 30 years of experience driving transformation across banking, insurance and financial services in Asia, the Middle East and Europe. He is a trusted advisor to banks, regulators and fintechs on strategy, innovation, digital transformation, and AI-led workforce evolution. His deep expertise in financial services, technology and people transformation helps organizations build future-ready, resilient and human-centric workplaces in the age of AI.",
    },
    others: [
      {
        name: "Mr. Sumudu Gunawardhana",
        title:
          "Chief Information Officer, Commercial Bank of Ceylon & Managing Director Crysys Ltd",
        image: "/images/assets/Asset 20@2x.png",
      },
      {
        name: "Mr. Nalin. K. Singh",
        title: "Managing Director, Cultus Global",
        image: "/images/assets/Asset 19@2x.png",
      },
    ],
  },
  keyTakeaways: [
    {
      icon: "BrainCircuit",
      text: "A deeper understanding of AI's impact on the BFSI workforce",
    },
    {
      icon: "BarChart3",
      text: "Practical insights into workforce readiness and employability trends",
    },
    {
      icon: "Rocket",
      text: "Strategies to prepare Gen Z talent for future workplace demands",
    },
    {
      icon: "ShieldCheck",
      text: "Guidance on responsible AI adoption within regulated industries",
    },
    {
      icon: "Scale",
      text: "Perspectives on balancing innovation with governance and compliance",
    },
    {
      icon: "Target",
      text: "Actionable ideas for building future-ready teams",
    },
  ],
  reserve: {
    title: "Reserve Your Seat Today",
    body: "The future of BFSI belongs to organizations that invest in people as much as technology. Join this exclusive webinar and discover how leading organizations are preparing their workforce for the AI era.",
    cta: "Register Now",
    seats: "Limited Seats Available",
  },
  about: {
    title: "About Cultus Workforce",
    body: "Cultus Workforce helps organizations build future-ready talent through workforce transformation, capability development, leadership training, and AI readiness programs.",
    missionLabel: "Our mission is simple:",
    mission: "Empower people. Strengthen organizations. Enable future growth.",
    closing:
      "We work with organizations across industries to create agile, skilled, and high-performing workforces prepared for the demands of tomorrow.",
    image: "/images/assets/Asset 32@2x.png",
    features: [
      { icon: "Users", label: "Workforce Transformation Experts" },
      { icon: "BrainCircuit", label: "AI Readiness Programs" },
      { icon: "GraduationCap", label: "Leadership Development" },
      { icon: "Rocket", label: "Future-Ready Talent Solutions" },
    ],
  },
  contact: {
    email: "info@cultusworkforce.com",
    phone: "+94 71 964 1642",
    linkedinLabel: "Cultus Workforce",
    linkedinUrl: "https://lk.linkedin.com/company/cultus-workforce",
  },
};
