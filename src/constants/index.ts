export const myProjects = [
  {
    id: 1,
    title: 'Imagic - SaaS Image Editing Application',
    description:
      'A SaaS image editing platform with real-time AI-powered image operations and seamless payment integration.',
    subDescription: [
      'Built with Next.js, MongoDB, and Vercel for scalability and deployment.',
      'Integrated AI-powered image processing via Cloudinary, reducing load time by 5%.',
      'Implemented secure authentication with Clerk and payments using Stripe.',
    ],
    href: 'https://imagic-git-main-arshadsherifs-projects.vercel.app/',
    logo: '',
    image: '/assets/projects/imagic.png',
    tags: [
      { id: 1, name: 'Next.js', path: '/assets/logos/next.svg' },
      { id: 2, name: 'MongoDB', path: '/assets/logos/mongodb.svg' },
      { id: 3, name: 'Stripe', path: '/assets/logos/stripe.svg' },
      { id: 4, name: 'Cloudinary', path: '/assets/logos/cloudinary.svg' },
    ],
  },
  {
    id: 2,
    title: 'SkyNet – Decentralized File Storage',
    description:
      'A decentralized application (DApp) leveraging blockchain and IPFS for secure file storage.',
    subDescription: [
      'Integrated JWT-based authentication for secure Pinata API interaction.',
      'Developed frontend with React, Shadcn UI, Framer Motion, and Vite.',
      'Built smart contracts using Hardhat and Ethers.js, deployed on Sepolia testnet.',
    ],
    href: 'https://sky-net-alpha.vercel.app/',
    logo: '',
    image: '/assets/projects/skynet.png',
    tags: [
      { id: 1, name: 'React', path: '/assets/logos/react.svg' },
      { id: 2, name: 'Solidity', path: '/assets/logos/solidity.svg' },
      { id: 3, name: 'Hardhat', path: '/assets/logos/hardhat.svg' },
      { id: 4, name: 'IPFS', path: '/assets/logos/ipfs.svg' },
    ],
  },
  {
    id: 3,
    title: 'Hirrd – Job Portal',
    description:
      'A feature-rich job portal platform with job posting, tracking, and real-time filtering.',
    subDescription: [
      'Developed using React, Vite, and Tailwind CSS.',
      'Implemented authentication with Clerk supporting Google OAuth and email/password.',
      'Utilized Firebase for scalability and performance.',
    ],
    href: 'https://hirrd-vert.vercel.app/',
    logo: '',
    image: '/assets/projects/hirrd.png',
    tags: [
      { id: 1, name: 'React', path: '/assets/logos/react.svg' },
      { id: 2, name: 'Firebase', path: '/assets/logos/firebase.svg' },
      { id: 3, name: 'Clerk', path: '/assets/logos/clerk.svg' },
      { id: 4, name: 'TailwindCSS', path: '/assets/logos/tailwindcss.svg' },
    ],
  },
  {
    id: 4,
    title: 'Krypt – Ethereum Transfer App',
    description:
      'A Web3 application for secure Ethereum transactions with real-time tracking.',
    subDescription: [
      'Developed using React, Tailwind CSS, Hardhat, Solidity, and MetaMask.',
      'Enabled secure ETH transfers with Etherscan-based transaction tracking.',
      'Enhanced engagement with Giphy API for dynamic content.',
    ],
    href: 'https://web3-q8yjiaa7p-arshadsherif.vercel.app/',
    logo: '',
    image: '/assets/projects/krypt.png',
    tags: [
      { id: 1, name: 'React', path: '/assets/logos/react.svg' },
      { id: 2, name: 'Solidity', path: '/assets/logos/solidity.svg' },
      { id: 3, name: 'MetaMask', path: '/assets/logos/metamask.svg' },
      { id: 4, name: 'Hardhat', path: '/assets/logos/hardhat.svg' },
    ],
  },
];

export const mySocials = [
  {
    name: "Github",
    href: "https://github.com/ArshadSherif",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/arshad-sherif-185278239/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/am5682/",
    icon: "/assets/socials/leetcode.svg",
  },
  {
    name: "Email",
    href: "mailto:sherifarshad2003@gmail.com",
    icon: "/assets/socials/gmail.svg",
  },
];

export const experiences = [
  {
    title: "SDE Intern",
    job: "Nyalazone Solutions",
    date: "Mar 2025 – Present",
    contents: [
      "Contributed to CRM platform across frontend and backend.",
      "Migrated legacy systems from Angular 8 to Angular 19.",
      "Developed backend logic with Python 3, Flask, PostgreSQL, and SQLAlchemy.",
    ],
  },
  {
    title: "Leap Intern",
    job: "Fidelity Investments",
    date: "Jun 2024 – Sep 2024",
    contents: [
      "Built a full-stack application using Power Apps for tokenization platform onboarding.",
      "Implemented secure login, automated form submission, and Excel export.",
      "Developed asset/tranche creation and token management features.",
    ],
  },
];

export const reviews = [
  {
    name: "Certification",
    username: "FreeCodeCamp",
    body: "Front End Development Libraries Certification",
    img: "/assets/reviews/freecodecamp.svg",
  },
  {
    name: "Certification",
    username: "FreeCodeCamp",
    body: "Responsive Web Design Certification",
    img: "/assets/reviews/freecodecamp.svg",
  },
  {
    name: "Oracle",
    username: "OCI",
    body: "Oracle Cloud Infrastructure 2024 Certified Foundations Associate",
    img: "/assets/reviews/oracle.svg",
  },
  {
    name: "Fortinet",
    username: "Cybersecurity",
    body: "Fortinet Certified Associate in Cybersecurity",
    img: "/assets/reviews/fortinet.svg",
  },
];
