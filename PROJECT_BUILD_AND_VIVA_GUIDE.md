# Portfolio Project Guide (Build + Viva + Recruiter Q&A)

Author: Diksha Bharti  
Project: Interview-Ready Portfolio Website  
Repository: `diksha-portfolio`

## 1) Project Ka Objective

Is project ka goal ek professional personal portfolio banana tha jo:

- interview/recruiter screening ke time strong first impression de,
- projects, certifications, skills aur contact details ko clear way me present kare,
- mobile aur desktop dono par polished lage,
- future me easily update ho sake bina pura code rewrite kiye.

## 2) Project Kaise Banaya Gaya (Step-by-Step)

1. Requirement define ki gayi:
   - 2-page setup (Home + Projects), later Certifications page add hua.
   - Professional UI + animations + responsive layout.
2. Base structure create kiya:
   - `index.html`, `projects.html`, shared CSS/JS.
3. Data-driven architecture choose ki:
   - Saara editable content `assets/js/portfolio-data.js` me store kiya.
4. UI design polish ki gayi:
   - typography, spacing, gradients, motion, cards, sticky nav.
5. Functional JS add hua:
   - dynamic rendering, scroll progress, reveal animations, mobile nav toggle.
6. Resume/certificate integration:
   - local PDF links with `View Certificate`.
7. Enhancements:
   - dedicated `certifications.html`,
   - profile photo integration with professional crop/frame,
   - project links from GitHub mapping.
8. Git workflow:
   - local commit, GitHub repo creation, push to `main`.

## 3) Is Project Me Kya-Kya Features Hain

- Responsive portfolio (mobile-first behavior included)
- Dedicated pages:
  - Home
  - Projects
  - Certifications
- Animated yet professional UI
- Data-driven rendering from one source (`PORTFOLIO_DATA`)
- Contact actions:
  - email
  - phone
  - LinkedIn
  - GitHub
- Resume PDF button
- Certifications ke clickable certificate links
- Project cards with stack, contribution, outcomes, and links

## 4) Files Aur Unka Kaam

## HTML

- `index.html`
  - main landing page
  - hero, about, skills, toolkit, education, featured projects, contact
- `projects.html`
  - all project case-study details
- `certifications.html`
  - all certifications in one dedicated page

## CSS

- `assets/css/styles.css`
  - complete visual system
  - responsive breakpoints
  - animation and interaction styling
  - photo framing/crop style

## JavaScript

- `assets/js/portfolio-data.js`
  - single content source (name, projects, links, certifications, etc.)
- `assets/js/main.js`
  - home page rendering + interaction logic
- `assets/js/projects.js`
  - projects page rendering + behavior
- `assets/js/certifications.js`
  - certifications page rendering + behavior

## Assets

- `assets/docs/`
  - resume and certificate PDFs
- `assets/images/`
  - profile image

## Project Docs

- `README.md`
  - quick overview and run info
- `PROJECT_BUILD_AND_VIVA_GUIDE.md` (this file)
  - full explanation + viva/recruiter prep

## 5) Run Kaise Karein

```powershell
cd "C:\Users\sinha\OneDrive\Documents\New project\diksha-portfolio"
python -m http.server 5500
```

Open in browser:  
`http://localhost:5500`

## 6) Viva Me Puchhe Ja Sakte Questions (with Short Answer Direction)

1. Ye project static hai ya dynamic?
   - Frontend static hai, but content rendering JS-based dynamic hai via data object.
2. Aapne data alag file me kyun rakha?
   - Maintainability aur fast content updates ke liye.
3. Responsive design kaise achieve kiya?
   - CSS breakpoints + fluid grids + mobile nav behavior.
4. Accessibility me kya dhyan rakha?
   - semantic sections, skip link, focus-visible states, readable contrast.
5. Animations ka purpose kya tha?
   - UX polish, attention guidance, but over-animation avoid ki.
6. Agar recruiter bole content update karna hai to kaise karoge?
   - `portfolio-data.js` me update karke immediate reflect.
7. Certificates clickable kaise banaye?
   - `certificatePath` field aur renderer me conditional link.
8. Project architecture ka core decision kya tha?
   - data contract + reusable render functions.
9. Photo integration me kya challenge tha?
   - professional framing without distortion; solved via object-fit/object-position.
10. Deployment ke liye next step kya hoga?
   - GitHub Pages / Netlify / Vercel setup.

## 7) Recruiter Questions (Likely) + Answer Strategy

1. Isme aapka role kya tha?
   - End-to-end design, frontend implementation, content modeling, and integration.
2. Most challenging part?
   - Professional visual balance + maintainable structure + mobile consistency.
3. Why no framework (React etc.)?
   - Scope ke liye lightweight stack choose ki, faster load and simpler hosting.
4. How do you ensure code quality?
   - modular scripts, naming consistency, quick validation checks, clean file structure.
5. If team asks scaling, what will you do?
   - Move data to JSON/API, componentize UI, add build tooling.
6. What did you optimize for in this portfolio?
   - readability, recruiter navigation speed, professional presentation.
7. How quickly can you customize for a new role?
   - Very quickly by editing `PORTFOLIO_DATA` and section emphasis.

## 8) Quick 60-Second Project Pitch (Interview Use)

"I built this portfolio as a production-style frontend project focused on recruiter usability.  
It uses a data-driven architecture where all profile content is centralized in one JS data contract, so updates are fast and low-risk.  
I implemented responsive layouts, accessible interactions, animated but professional visuals, separate project and certification pages, and direct evidence links for certificates.  
This project demonstrates my practical frontend execution, UI thinking, and maintainable code organization."

## 9) Future Improvements

- Add dark-mode toggle
- Add downloadable project one-pagers
- Add real contact form with backend service
- Add project filtering and search
- Add deployment pipeline with auto-publish
