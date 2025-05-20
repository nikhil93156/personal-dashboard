export default function ProfileCard({ profile }) {
  return (
    <section
      id="profile"
      className="bg-slate-800 text-slate-100 rounded-2xl shadow-lg border border-slate-700 p-6 sm:p-8 md:p-10 max-w-6xl mx-auto transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={profile.photo}
            alt={profile.name}
            className="rounded-full w-40 h-40 sm:w-48 sm:h-48 object-cover mx-auto md:mx-0 border-4 border-blue-500 shadow-md"
          />
        </div>

        {/* Profile Details */}
        <div className="text-center md:text-left flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">{profile.name}</h2>
          <p className="text-lg text-slate-300 mb-4">{profile.bio}</p>
          <ul className="space-y-1 text-base sm:text-lg mb-6">
            <li>
              <span className="font-semibold text-slate-200">📍 Address:</span>{' '}
              <span className="text-slate-400">{profile.contact.address}</span>
            </li>
            <li>
              <span className="font-semibold text-slate-200">📞 Phone:</span>{' '}
              <span className="text-slate-400">{profile.contact.phone}</span>
            </li>
            <li>
              <span className="font-semibold text-slate-200">✉️ Email:</span>{' '}
              <span className="text-slate-400">{profile.contact.email}</span>
            </li>
          </ul>
          <a
            href="/NikhilResume1.pdf"
            download
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition-colors duration-200"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
