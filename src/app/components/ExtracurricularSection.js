export default function ExtracurricularSection({ activities }) {
  return (
    <section id="extracurricular" className="bg-slate-900 text-slate-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">🎯 Extracurricular Activities</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">{activity.role}</h3>
                <span className="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded">
                  {activity.period}
                </span>
              </div>
              <p className="text-sm text-slate-400 mb-1">{activity.organization}</p>
              <p className="text-slate-300">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
