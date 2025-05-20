// app/page.js
import ResponsiveNav from './components/ResponsiveNav';
import ProfileCard from './components/ProfileCard';
import EducationTimeline from './components/EducationTimeline';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import TrainingSection from './components/TrainingSection';
import ExtracurricularSection from './components/ExtracurricularSection';
import { resumeData } from './data/resumeData';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <ResponsiveNav />
      <main className="container mx-auto px-4 py-8 space-y-8 pt-30 md:pt-7">
        <ProfileCard profile={resumeData.profile} />
        <EducationTimeline education={resumeData.education} />
        <SkillsSection skills={resumeData.skills} />
        <ProjectsSection projects={resumeData.projects} />
        <TrainingSection trainings={resumeData.trainings} />
        <ExtracurricularSection activities={resumeData.extracurricular} />
      </main>
      <footer className="bg-blue-600 dark:bg-gray-800 text-white p-4 text-center transition-colors duration-300">
        <p>© {new Date().getFullYear()} Nikhil Kumar - Personal Dashboard</p>
      </footer>
    </div>
  );
}