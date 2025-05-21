export default function EducationTimeline({ education }) {
  return (
    <section
      id="education"
      className="bg-slate-800 text-slate-100 rounded-2xl shadow-lg border border-slate-700 p-6 sm:p-8 md:p-10 max-w-4xl mx-auto transition-all duration-300"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-slate-100">🎓 Education</h2>
      <div className="space-y-10 relative">

        {/* Vertical Timeline Line */}
        <div className="absolute left-2 top-0 h-full w-1 bg-blue-500 rounded-full"></div>

        {education.map((edu, index) => (
          <div key={index} className="relative pl-12">
            {/* Timeline Dot */}
            <div className="absolute left-0 top-1.5 w-5 h-5 bg-blue-500 border-2 border-white dark:border-slate-800 rounded-full shadow-sm"></div>

            <h3 className="text-xl sm:text-2xl font-semibold text-slate-100">{edu.institution}</h3>
            <p className="text-slate-400 font-medium mb-1">{edu.period}</p>
            <p className="text-slate-200 font-medium">{edu.degree}</p>
            <p className="text-slate-300">{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
