export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="rounded-xl border-0 shadow-sm hover:shadow-md transition-all duration-300 group bg-white p-6 text-center">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 mb-4 group-hover:bg-emerald-100 transition-colors">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
}
