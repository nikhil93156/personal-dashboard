import { Code2, Wrench, Sparkles } from "lucide-react"; // Optional icons if you're using Lucide

export default function SkillsSection({ skills }) {
  return (
    <section id="skills" className="py-12 bg-slate-900 text-slate-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">🛠️ Technical Skills</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          {/* Languages */}
          <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold flex items-center mb-4">
              <Code2 className="w-5 h-5 mr-2 text-blue-400" /> Languages
            </h3>
            <ul className="space-y-2">
              {skills.languages.map((skill, index) => (
                <li key={index} className="flex items-center text-slate-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold flex items-center mb-4">
              <Wrench className="w-5 h-5 mr-2 text-blue-400" /> Tools
            </h3>
            <ul className="space-y-2">
              {skills.tools.map((tool, index) => (
                <li key={index} className="flex items-center text-slate-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          {/* Interests */}
          <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold flex items-center mb-4">
              <Sparkles className="w-5 h-5 mr-2 text-blue-400" /> Interests
            </h3>
            <ul className="space-y-2">
              {skills.interests.map((interest, index) => (
                <li key={index} className="flex items-center text-slate-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  {interest}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
