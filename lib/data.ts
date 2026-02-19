import type { NavItem, Stat, Program, FAQ, Office, SegmentButton, Testimonial } from "./types";

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Cultus",
    href: "#",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Programs", href: "/programs" },
      { label: "Products", href: "/products" },
      { label: "Careers", href: "/careers" },
    ],
  },
  { label: "For Learners", href: "/for-learners" },
  { label: "For Businesses", href: "/for-businesses" },
  { label: "For Governments", href: "/for-governments" },
  { label: "For Universities", href: "/for-universities" },
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
    answer: "Follow us on Instagram and LinkedIn for the latest announcements on course launches, enrollment dates, and events, or reach out to our team at support@cultusedu.com for guided enrollment.",
  },
];

export const OFFICES: Office[] = [
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
      "6-3-634, A1&2, II Floor",
      "Green Channel Apartments",
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
  "Partner 1",
  "Partner 2",
  "Partner 3",
  "Partner 4",
  "Partner 5",
  "Partner 6",
  "Partner 7",
  "Partner 8",
  "Partner 9",
  "Partner 10",
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
      "Continuous Upskilling \u2013 Access to best-in-class courses from global universities",
      "Guided Career Pathways \u2013 Career counseling, course identification, and support",
      "Skill-Based Direction \u2013 Pursue career paths aligned with innate skills",
      "Industry-Ready Skills \u2013 Latest Industry 4.0 training by industry practitioners",
    ],
  },
  {
    title: "For Governments",
    icon: "Landmark",
    challenges: [
      "Large-Scale Youth Employment \u2013 Nationwide skilling missions",
      "Regional Skill Gap Mitigation \u2013 Targeted training programs",
      "CSR & Public Program Alignment \u2013 Measurable socio-economic impact",
      "Sustainable Livelihood Creation \u2013 Focus on underserved communities",
    ],
  },
  {
    title: "For Universities",
    icon: "School",
    challenges: [
      "Delivering Measurable Outcomes \u2013 Clear ROI on education",
      "Curriculum Modernization \u2013 Industry-relevant skills integration",
      "Improved University Ranking through enhanced employability metrics",
      "Higher Job Placement Rate \u2013 connecting graduates to 4000+ employers",
    ],
  },
  {
    title: "For Industry",
    icon: "Building2",
    challenges: [
      "Talent Readiness \u2013 Graduates productive from day one",
      "Skill-Specific Hiring \u2013 Candidates trained in latest tools and technologies",
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
