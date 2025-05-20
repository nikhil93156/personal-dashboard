# Personal Dashboard

A modern, responsive personal dashboard built with [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com).  
Showcase your profile, education, skills, projects, trainings, and extracurricular activities in a clean, card-based UI.

## Features

- **Responsive Design:** Looks great on desktop and mobile.
- **Dark/Light Mode:** Seamless color transitions for all sections.
- **Sticky Navigation:** Fixed top navbar with mobile sidebar menu.
- **Profile Card:** Displays your photo, bio, and contact info.
- **Education Timeline:** Vertical timeline of your academic journey.
- **Skills Section:** Card-based technical skills with icons.
- **Projects Section:** Highlight your projects with details and implementation.
- **Trainings Section:** List of trainings and certifications.
- **Extracurricular Section:** Showcase your activities and volunteering.
- **Download Resume:** Button to download your resume PDF.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open your browser:**  
   Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

- `src/app/components/` — All UI components (ProfileCard, EducationTimeline, etc.)
- `src/app/data/resumeData.js` — Your profile, education, skills, projects, trainings, and extracurricular data.
- `public/nikhil_image.jpeg` — Your profile image (place your image here).
- `public/resume.pdf` — Your resume file for download.
- `src/app/page.js` — Main page layout and section composition.
- `src/app/globals.css` — Global styles (Tailwind CSS).

## Customization

- **Update your data:**  
  Edit `src/app/data/resumeData.js` with your own information.
- **Profile Image:**  
  Replace `public/nikhil_image.jpeg` with your own image.
- **Resume:**  
  Place your PDF resume as `public/resume.pdf`.
- **Skills/Projects:**  
  Add or remove items in the `skills` and `projects` arrays.

## Dependencies

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [lucide-react](https://lucide.dev/icons/) (for icons)

## Deployment

Deploy easily on [Vercel](https://vercel.com/) or any platform supporting Next.js.

## License

This project is for personal use and portfolio demonstration.

---

**Made with ❤️ using Next.js and Tailwind CSS**
