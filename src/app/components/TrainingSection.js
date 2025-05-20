export default function TrainingSection({ trainings }) {
  return (
    <section id="trainings" className="bg-slate-900 text-slate-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">🎓 Trainings & Certifications</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {trainings.map((training, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">{training.organization}</h3>
                <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
                  {training.period}
                </span>
              </div>
              <p className="text-slate-300">{training.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
