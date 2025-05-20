export default function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="bg-slate-900 text-slate-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">📁 Projects</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded-md">
                  {project.date}
                </span>
              </div>
              <p className="text-sm text-slate-400 mb-1">{project.type} | {project.domain}</p>
              <p className="mb-4 text-slate-200">{project.description}</p>

              <div className="bg-slate-700 p-4 rounded-md mt-2">
                <p className="text-sm font-semibold text-blue-300 mb-1">Implementation:</p>
                <p className="text-sm text-slate-300">{project.implementation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
