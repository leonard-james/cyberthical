// ─────────────────────────────────────────────────────────
// All site content, preserved verbatim from the original
// HTML pages (index.html, Learn More.html, f.html, Team.html)
// ─────────────────────────────────────────────────────────

/* ── Hero carousel images ─────────────────────────────── */
export const heroSlides = [
  { src: '/img/hero-carousel/ethicalhacking.jpeg',  alt: 'Ethical Hacking' },
  { src: '/img/hero-carousel/cybersecurity.jpg',    alt: 'Cybersecurity' },
  { src: '/img/hero-carousel/cybersecurity1.jpg',   alt: 'Cybersecurity 1' },
  { src: '/img/hero-carousel/ethicalhacking1.jpg',  alt: 'Ethical Hacking 1' },
  { src: '/img/hero-carousel/cybersecurity2.jpg',   alt: 'Cybersecurity 2' },
  { src: '/img/hero-carousel/ethicalhacking2.jpg',  alt: 'Ethical Hacking 2' },
];

/* ── Cybersecurity categories (flip cards) ────────────── */
export interface CyberCategory {
  id: string;
  title: string;
  image: string;
  description: string;
}

export const cyberCategories: CyberCategory[] = [
  {
    id: 'network',
    title: 'Network Security',
    image: '/img/types/network.jpg',
    description:
      'Is the practice of securing a computer network from intruders, whether targeted attackers or opportunistic malware.',
  },
  {
    id: 'application',
    title: 'Application Security',
    image: '/img/types/application.jpg',
    description:
      'Focuses on keeping software and devices free of threats. A compromised application could provide access to the data it\'s designed to protect. Successful security begins in the design stage, well before a program or device is deployed.',
  },
  {
    id: 'information',
    title: 'Information Security',
    image: '/img/types/information.jpg',
    description: 'Securing sensitive data from unauthorized access or modification.',
  },
  {
    id: 'operational',
    title: 'Operational Security',
    image: '/img/types/operational.jpg',
    description:
      'Includes the processes and decisions for handling and protecting data assets. The permissions users have when accessing a network and the procedures that determine how and where data may be stored or shared all fall under this umbrella.',
  },
  {
    id: 'disaster',
    title: 'Disaster Recovery & Business Continuity',
    image: '/img/types/disaster.jpg',
    description:
      'Define how an organization responds to a cyber-security incident or any other event that causes the loss of operations or data. Disaster recovery policies dictate how the organization restores its operations and information to return to the same operating capacity as before the event. Business continuity is the plan the organization falls back on while trying to operate without certain resources.',
  },
  {
    id: 'education',
    title: 'End-user Education',
    image: '/img/types/educational.jpg',
    description:
      'Addresses the most unpredictable cyber-security factor: people. Anyone can accidentally introduce a virus to an otherwise secure system by failing to follow good security practices. Teaching users to delete suspicious email attachments, not plug in unidentified USB drives, and various other important lessons is vital for the security of any organization.',
  },
];

/* ── Ethical Hacking types ────────────────────────────── */
export interface HackingType {
  id: string;
  title: string;
  image: string;
  description: string;
  tags: string[];
}

export const hackingTypes: HackingType[] = [
  {
    id: 'web-app',
    title: 'Web Application Hacking',
    image: '/img/ha/web.jpg',
    tags: ['SQL Injection', 'XSS', 'Web'],
    description:
      'It involves testing web applications for vulnerabilities like SQL injection, cross-site scripting (XSS), and security misconfigurations. Ethical hackers focus on identifying flaws that could allow unauthorized access or data breaches.',
  },
  {
    id: 'network',
    title: 'Network Hacking',
    image: '/img/ha/networking.jpg',
    tags: ['Port Scanning', 'Protocols', 'Network'],
    description:
      'It focuses on identifying weaknesses in a network\'s security. This includes scanning for open ports, identifying vulnerable services, and exploiting weaknesses in network protocols to gain unauthorized access or disrupt services.',
  },
  {
    id: 'wireless',
    title: 'Wireless Network Hacking',
    image: '/img/ha/wlan.jpg',
    tags: ['WEP', 'WPA', 'Wi-Fi'],
    description:
      'It targets wireless networks to find and exploit Wi-Fi security protocols like WEP, WPA, and WPA2 vulnerabilities. The goal is to gain unauthorized access to the wireless network or intercept data.',
  },
  {
    id: 'system',
    title: 'System Hacking',
    image: '/img/ha/system.jpg',
    tags: ['Password Cracking', 'Privilege Escalation'],
    description:
      'It involves hacking into individual systems to gain unauthorized access, escalate privileges, or execute malicious actions. Techniques include password cracking, exploiting system vulnerabilities, and installing malicious software.',
  },
  {
    id: 'social',
    title: 'Social Engineering',
    image: '/img/ha/social.jpg',
    tags: ['Phishing', 'Baiting', 'Human Factor'],
    description:
      'It exploits human psychology to gain unauthorized access to systems or information. Ethical hackers use phishing, baiting, or pretexting to trick users into revealing sensitive information or performing actions that compromise security.',
  },
  {
    id: 'mobile',
    title: 'Ethical Hacking of Mobile Platforms',
    image: '/img/ha/ehmp.jpg',
    tags: ['iOS', 'Android', 'Mobile Apps'],
    description:
      'It focuses on identifying vulnerabilities in mobile operating systems (iOS, Android) and applications. This includes testing for insecure data storage, insufficient transport layer protection, and weak authentication mechanisms.',
  },
  {
    id: 'physical',
    title: 'Physical Hacking',
    image: '/img/ha/physical.jpg',
    tags: ['Physical Access', 'Locks', 'Biometrics'],
    description:
      'It involves gaining unauthorized physical access to facilities or devices. Ethical hackers may test the security of physical entry points, such as doors, locks, and biometric systems, to identify vulnerabilities that could allow unauthorized access.',
  },
  {
    id: 'cloud',
    title: 'Cloud Security Testing',
    image: '/img/ha/csl.jpg',
    tags: ['Cloud', 'APIs', 'Misconfiguration'],
    description:
      'It involves assessing the security of cloud infrastructure, applications, and services. Ethical hackers test for misconfigurations, insecure APIs, and other vulnerabilities that could be exploited in a cloud environment.',
  },
  {
    id: 'iot',
    title: 'IoT (Internet of Things) Hacking',
    image: '/img/ha/iot.jpg',
    tags: ['IoT', 'Smart Devices', 'Wearables'],
    description:
      'It focuses on identifying security flaws in IoT devices and networks. This includes testing the security of smart devices, wearable technology, and other connected devices to prevent unauthorized access and data breaches.',
  },
  {
    id: 'reverse',
    title: 'Reverse Engineering',
    image: '/img/ha/reverse.jpg',
    tags: ['Firmware', 'Malware Analysis', 'Exploit Dev'],
    description:
      'It involves analyzing software or hardware to discover vulnerabilities, understand how it works, or develop exploits. Ethical hackers use reverse engineering to uncover hidden flaws or malicious code within applications or firmware.',
  },
];

/* ── Hacker Types ─────────────────────────────────────── */
export interface HackerType {
  id: string;
  title: string;
  image: string;
  color: string;      // Tailwind accent color key
  description: string;
}

export const hackerTypes: HackerType[] = [
  {
    id: 'white',
    title: 'White Hat Hacker',
    image: '/img/hackers/White Hat Hacker.jpg',
    color: 'emerald',
    description:
      'A white-hat hacker (whitehat) is an ethical security hacker. Ethical hacking is a term meant to imply a broader category than just penetration testing. Under the owner\'s consent, white-hat hackers aim to identify any vulnerabilities or security issues the current system has.',
  },
  {
    id: 'gray',
    title: 'Gray Hat Hacker',
    image: '/img/hackers/Gray Hat Hacker.jpg',
    color: 'yellow',
    description:
      'A grey hat (greyhat or gray hat) is a computer hacker or computer security expert who may sometimes violate laws or typical ethical standards, but usually does not have the malicious intent typical of a black hat hacker.',
  },
  {
    id: 'black',
    title: 'Black Hat Hacker',
    image: '/img/hackers/Black Hat Hacker.jpg',
    color: 'red',
    description:
      'A black hat hacker (or blackhat) is a computer hacker who violates laws or ethical standards for nefarious purposes, such as cybercrime, cyberwarfare, or malice. These acts can range from piracy to identity theft. A black hat is often referred to as a "cracker".',
  },
];

/* ── FAQ items ────────────────────────────────────────── */
export interface FaqItem {
  id: string;
  question: string;
  answer: string | string[];
}

export const faqItems: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Why is cybersecurity important?',
    answer:
      'It helps protect sensitive information, prevents cyberattacks, and ensures data integrity, confidentiality, and availability.',
  },
  {
    id: 'faq-2',
    question: 'What are the main types of cyber threats?',
    answer: [
      'Phishing (fraudulent emails and messages)',
      'Malware (viruses, ransomware, spyware)',
      'DDoS attacks (disrupting websites/services)',
      'Social engineering (manipulating people to gain access)',
      'Zero-day exploits (unknown vulnerabilities)',
    ],
  },
  {
    id: 'faq-3',
    question: 'How can I protect myself from cyber threats?',
    answer: [
      'Use strong and unique passwords',
      'Enable two-factor authentication (2FA)',
      'Keep software and OS updated',
      'Be cautious of phishing emails',
      'Use a reliable antivirus program',
    ],
  },
  {
    id: 'faq-4',
    question: 'What is the purpose of ethical hacking?',
    answer:
      'Ethical hacking aims to identify and fix security vulnerabilities in a system before malicious hackers can exploit them. It helps organizations strengthen their defenses.',
  },
  {
    id: 'faq-5',
    question: 'What are the types of hackers?',
    answer: [
      'White Hat Hackers (Ethical hackers who protect systems)',
      'Black Hat Hackers (Criminal hackers who exploit vulnerabilities)',
      'Gray Hat Hackers (Hackers who operate in a legal/illegal mix)',
    ],
  },
  {
    id: 'faq-6',
    question: 'What are the best free platforms to practice ethical hacking?',
    answer: [
      'TryHackMe (tryhackme.com)',
      'Hack The Box (hackthebox.com)',
      'OverTheWire WarGames (overthewire.org)',
      'Root Me (root-me.org)',
      'OWASP Security Shepherd',
    ],
  },
];

/* ── Learn More tabs ──────────────────────────────────── */
export const learnMoreTabs = [
  {
    id: 'online-safety',
    label: 'Online Safety',
    heading: 'What is Online Safety?',
    image: '/img/lm/ol.jpg',
    imageAlt: 'Online Safety',
    intro:
      'Online safety, also known as internet safety or cyber safety, refers to the practices and precautions individuals take to protect themselves, their data, and their digital identity while using the internet. It involves safeguarding personal information, avoiding cyber threats, and ensuring responsible online behavior to prevent risks such as hacking, cyberbullying, identity theft, and scams.',
    listHeading: 'Ways to stay safe online',
    items: [
      { bold: 'Use Strong and Unique Passwords', text: 'Create complex passwords with a mix of letters, numbers, and symbols. Use a password manager for security.' },
      { bold: 'Enable Two-Factor Authentication (2FA)', text: 'Activate 2FA for important accounts to add an extra layer of security.' },
      { bold: 'Beware of Phishing Scams', text: 'Do not click on suspicious links or open attachments from unknown sources.' },
      { bold: 'Keep Software and Devices Updated', text: 'Regularly update your operating system, apps, and antivirus software to fix security vulnerabilities.' },
      { bold: 'Limit Sharing Personal Information', text: 'Be cautious about what you share online, including personal details, location, and work information.' },
      { bold: 'Verify Websites Before Entering Information', text: 'Check for HTTPS and ensure the website is legitimate before providing personal data.' },
      { bold: 'Be Cautious with Downloads', text: 'Only download software from trusted sources to avoid malware and viruses.' },
      { bold: 'Monitor Your Accounts Regularly', text: 'Check your bank statements and online accounts for any suspicious activity.' },
      { bold: 'Educate Yourself and Others', text: 'Stay informed about the latest online threats and help others stay safe.' },
    ],
  },
  {
    id: 'cyber-threats',
    label: 'Cyber Threats',
    heading: 'What are Cyber Threats?',
    image: '/img/lm/ct.jpg',
    imageAlt: 'Cyber Threats',
    intro:
      'Cyber threats refer to malicious activities or potential dangers that target computer systems, networks, and digital devices to steal, damage, or disrupt data and operations. These threats can come from hackers, cybercriminals, nation-state actors, or even insider threats within an organization.',
    listHeading: 'Common Types of Cyber Threats',
    items: [
      { bold: 'Malware', text: 'Malicious software designed to infect, damage, or control devices, including viruses, worms, Trojans, and ransomware.' },
      { bold: 'Phishing', text: 'Tricking people into providing sensitive data via fake emails or websites.' },
      { bold: 'DoS & DDoS Attacks', text: 'Overloading a system with excessive traffic to make it unavailable.' },
      { bold: 'Man-in-the-Middle (MitM)', text: 'Intercepting and manipulating communication between two parties.' },
      { bold: 'Zero-Day Exploits', text: 'Cybercriminals exploiting software vulnerabilities before developers can fix them.' },
    ],
  },
  {
    id: 'ai-security',
    label: 'AI-Driven Security',
    heading: 'What is AI-Driven Security?',
    image: '/img/lm/ai.jpg',
    imageAlt: 'AI-Driven Security',
    intro:
      'AI-driven security refers to the use of artificial intelligence (AI) and machine learning (ML) to enhance cybersecurity measures, detect threats, and respond to cyberattacks more efficiently.',
    listHeading: 'Benefits of AI-Driven Security',
    items: [
      { bold: 'Threat Detection and Prevention', text: 'AI analyzes vast amounts of data to detect anomalies and potential threats in real-time.' },
      { bold: 'Automated Incident Response', text: 'AI-powered systems can respond to security breaches automatically.' },
      { bold: 'Behavioral Analysis', text: 'AI monitors user behavior to identify suspicious activities.' },
    ],
  },
];

/* ── Team members ─────────────────────────────────────── */
export interface TeamMember {
  name: string;
  course: string;
  role: string;
  image: string;
  facebook: string;
  instagram: string;
  quote: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Bhea Marie Geul',
    course: 'BSIT 2-2',
    role: 'Developer & Designer',
    image: '/img/member/bhea.jpg',
    facebook: 'https://www.facebook.com/bheamariegeul',
    instagram: 'https://www.instagram.com/ninifulss/',
    quote: 'Love cures people — both the ones who give it and the ones who receive it. — Karl A. Menninger',
  },
  {
    name: 'Celena Scott',
    course: 'BSIT 2-2',
    role: 'Researcher & Tester',
    image: '/img/member/Celena.jpg',
    facebook: 'https://www.facebook.com/celenajean.scott',
    instagram: 'https://www.instagram.com/itzjust_cln/',
    quote:
      '"Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine." — Roy T. Bennett, The Light in the Heart',
  },
  {
    name: 'Revin Gestiada',
    course: 'BSIT 2-2',
    role: 'Developer & Content',
    image: '/img/member/revin.jpg',
    facebook: 'https://www.facebook.com/revin.gestiada.3',
    instagram: 'https://www.instagram.com/reebeen',
    quote:
      'Work like you don\'t need the money. Love like you\'ve never been hurt. Dance like nobody\'s watching. — Satchel Paige',
  },
  {
    name: 'Leonard James Gobris',
    course: 'BSIT 2-2',
    role: 'Team Lead & Developer',
    image: '/img/member/Leonard.jpg',
    facebook: 'https://www.facebook.com/gobrisjamesleonard15',
    instagram: 'https://www.instagram.com/ley_jmes/',
    quote:
      'Nurture your mind with great thoughts, for you will never go any higher than you think. — Benjamin Disraeli',
  },
];

/* ── Features (tools) ─────────────────────────────────── */
export const features = [
  {
    id: 'ctm',
    icon: 'Map',
    title: 'Cyberthreat Map',
    description:
      'A Cyber Threat Map is a visual representation of ongoing cyberattacks happening in real-time or historical data about cybersecurity threats worldwide. These maps typically display attack origins, targets, types of threats, and attack frequency.',
    iframeSrc: 'https://livethreatmap.radware.com/',
    path: '/features/cyberthreat-map',
  },
  {
    id: 'pm',
    icon: 'Lock',
    title: 'Password Strength Analyzer',
    description:
      'A Password Strength Analyzer is a tool that evaluates the security level of a password based on various criteria. It helps users create stronger passwords by providing feedback on their complexity and resistance to attacks.',
    iframeSrc: 'https://www.passwordmonster.com/',
    path: '/features/password-analyzer',
  },
  {
    id: 'ipt',
    icon: 'Mail',
    title: 'Interactive Phishing Test',
    description:
      'An Interactive Phishing Test is a cybersecurity training tool designed to help individuals and organizations recognize and avoid phishing attacks. These tests simulate real-world phishing scenarios to educate users about deceptive tactics used by cybercriminals.',
    iframeSrc: 'https://gbt.bank/can-you-spot-a-phishing-scam/',
    path: '/features/phishing-test',
  },
];
