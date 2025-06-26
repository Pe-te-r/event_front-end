
export default function DashboardCard({
  title,
  value,
  icon,
  iconBg = "bg-blue-100 text-blue-600",
}: {
  title: string
  value: number | string
  icon: React.ReactNode
  iconBg?: string
}) {
  return (
    <div className="bg-white dark:bg-gray-400 rounded-xl shadow-sm p-4 flex items-center gap-4">
      <div className={(iconBg)}>
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-900">{title}</p>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{value}</h3>
      </div>
    </div>
  )
}
