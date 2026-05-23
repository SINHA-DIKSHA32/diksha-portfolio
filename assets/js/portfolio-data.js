const PORTFOLIO_DATA = {
  profile: {
    fullName: "Diksha Bharti",
    role: "MCA Student | Software Developer",
    subtitle: "Building practical software products with strong coding fundamentals, structured problem solving, and project-driven execution.",
    objective:
      "Motivated MCA student aspiring to become a software developer, with a strong foundation in programming, data structures, and databases. Seeking a challenging role to contribute technical skills and grow within a dynamic organization.",
    resumePath: "assets/docs/Resume_Diksha.pdf"
  },
  contacts: {
    email: "sinhadiksha32@gmail.com",
    phone: "+91 7739354326",
    github: "https://github.com/users/SINHA-DIKSHA32/projects",
    linkedin: "https://www.linkedin.com/in/diksha-bharti-8181262b6"
  },
  skills: [
    { category: "Languages", items: ["C", "Java", "Python"] },
    { category: "Web Technologies", items: ["HTML", "CSS", "JavaScript", "PHP"] },
    { category: "Tools and IDEs", items: ["Visual Studio Code", "Eclipse", "Android Studio"] },
    { category: "Databases", items: ["MySQL", "Oracle SQL"] },
    {
      category: "Coursework",
      items: [
        "Data Structures and Algorithms",
        "Operating System",
        "Software Engineering"
      ]
    },
    {
      category: "Areas of Interest",
      items: ["Android App Development", "Software Development", "Web Development"]
    }
  ],
  toolkit: [
    {
      title: "Version Control and Collaboration",
      tools: ["Git", "GitHub", "Markdown Documentation", "Issue-Based Workflow"]
    },
    {
      title: "Development and Debugging",
      tools: ["VS Code", "Eclipse", "Android Studio", "Chrome DevTools"]
    },
    {
      title: "Database and Querying",
      tools: ["MySQL", "Oracle SQL", "Schema Design Basics", "Data Validation Queries"]
    },
    {
      title: "Testing and Delivery Habits",
      tools: ["Manual Testing", "Feature-Level Validation", "Bug Reproduction Notes", "Incremental Iteration"]
    }
  ],
  capabilities: [
    {
      title: "Build Features End-to-End",
      details:
        "Convert ideas into working modules by combining UI logic, backend flow, and database interactions."
    },
    {
      title: "Debug and Optimize Workflows",
      details:
        "Identify bottlenecks, isolate issues, and improve execution speed with structured troubleshooting."
    },
    {
      title: "Write Clean, Maintainable Code",
      details:
        "Prefer readable structure, modular logic, and consistent conventions for easy collaboration."
    },
    {
      title: "Communicate and Collaborate",
      details:
        "Document progress clearly, discuss tradeoffs, and contribute effectively in team project settings."
    }
  ],
  projectToolHighlights: ["Git", "GitHub", "VS Code", "MySQL", "Oracle SQL", "Android Studio"],
  softSkills: ["Work Ethic", "Problem Solving", "Critical Thinking"],
  projects: [
    {
      id: "plagiarism-detection",
      title: "Plagiarism Detection Using Data Structures and Algorithms",
      status: "Completed",
      summary:
        "Built a solution to detect source-code similarity using string matching and fundamental DSA techniques in C.",
      contribution:
        "Designed and implemented the core comparison logic and structured the project around reusable algorithm modules.",
      outcome:
        "Demonstrated how algorithmic pattern matching can identify code-level similarities in an academic context.",
      stack: ["C", "Data Structures", "String Matching Algorithms"],
      highlights: [
        "Applied DSA concepts to a real problem statement.",
        "Focused on deterministic matching for clarity and interpretability.",
        "Structured program flow for clean test inputs and outputs."
      ],
      links: []
    },
    {
      id: "biometric-retrieval",
      title: "Biometric-Based Patient History Retrieval System",
      status: "Completed",
      summary:
        "Engineered a biometric patient identification workflow that enables faster record retrieval for clinical usage.",
      contribution:
        "Worked on patient identification flow with fingerprint-based retrieval logic and record linkage support.",
      outcome:
        "Reduced patient record retrieval time by approximately 60%, improving access speed to critical information.",
      stack: ["Python", "Flask", "SQLite", "OpenCV", "Biometric Matching"],
      highlights: [
        "Integrated biometric identification with patient data access.",
        "Prioritized practical usability for time-sensitive scenarios.",
        "Built with reliability and consistency in data retrieval flow."
      ],
      links: []
    },
    {
      id: "smart-virtual-assistant",
      title: "Smart Virtual Assistant with Gamified UI and IoT Device Simulation",
      status: "Ongoing",
      summary:
        "Designing an Android-based assistant with animated interaction, voice and text commands, and simulated IoT controls.",
      contribution:
        "Leading UI interaction design and command handling logic while iterating on device simulation workflows.",
      outcome:
        "Current progress is focused on user experience quality, responsiveness, and modular feature expansion.",
      stack: ["Android", "Java", "Voice Command Interface", "UI Design", "IoT Simulation"],
      highlights: [
        "Combines gamified interaction with assistant workflows.",
        "Supports both text and voice command pathways.",
        "Built as an extendable foundation for future smart-device integration."
      ],
      links: []
    }
  ],
  education: [
    {
      institution: "Graphic Era Hill University",
      timeline: "2024-2026 (Ongoing)",
      qualification: "MCA (Master of Computer Applications)",
      score: "CGPA: 7.56 (Till 2nd Semester)"
    },
    {
      institution: "Ranchi University",
      timeline: "2021-2024",
      qualification: "B.A. (Computer Applications Honours)",
      score: "Percentage: 76%"
    },
    {
      institution: "SRT College",
      timeline: "2019-2021",
      qualification: "12th, Jharkhand Academic Council",
      score: "Percentage: 64%"
    },
    {
      institution: "New Horizon School",
      timeline: "2019",
      qualification: "10th, Central Board of Secondary Education",
      score: "Percentage: 73%"
    }
  ],
  certifications: [
    {
      title: "TCS iON Career Edge - Young Professional",
      issuer: "TCS iON",
      period: "May 2024",
      details:
        "Completed modules on communication, presentation, resume writing, group discussion, interview skills, IT fundamentals, and AI (NPTEL)."
    },
    {
      title: "Python with Machine Learning - On Job Training",
      issuer: "LifeTech Software",
      period: "Apr 2024 - May 2024",
      details:
        "Completed theoretical sessions and practical project-based training with Python and machine learning fundamentals.",
      certificatePath: "assets/docs/On-Job-Training-Certificate.pdf"
    },
    {
      title: "Machine Learning with AI - Internshala Program",
      issuer: "Internshala",
      period: "Apr 2026",
      details:
        "Combined certificate set containing both uploaded proofs from the Internshala Machine Learning with AI program.",
      certificatePath: "assets/docs/Machine-Learning-with-AI-Internshala-Certificate-Set.pdf"
    },
    {
      title: "Digital Marketing",
      issuer: "NOC Program",
      period: "2026",
      details:
        "Certification record for Digital Marketing coursework and completion.",
      certificatePath: "assets/docs/Digital-Marketing-Certificate.pdf"
    },
    {
      title: "Spoken Tutorial Program by IIT Bombay",
      issuer: "IIT Bombay",
      period: "2026",
      details:
        "Participant certificate for the Spoken Tutorial Program conducted by IIT Bombay.",
      certificatePath: "assets/docs/Spoken-Tutorial-IIT-Bombay-Participant-Certificate.pdf"
    }
  ],
  achievements: [
    {
      title: "2nd Prize - Speech Competition (College Level)",
      period: "2023",
      details: "Recognized for delivering a speech on Artificial Intelligence."
    },
    {
      title: "3rd Prize - Group Discussion (NSS Volunteers, Nirmala College, Ranchi)",
      period: "07 Jul 2022",
      details:
        "Received certificate of merit and medal for securing 3rd position during Van Mahotsav celebrations."
    }
  ]
};

window.PORTFOLIO_DATA = PORTFOLIO_DATA;
