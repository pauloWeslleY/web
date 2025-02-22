import { BadgeCheckIcon, MedalIcon, MousePointerClickIcon } from 'lucide-react'

export function Stats() {
  const loadStats = [
    {
      icon: MousePointerClickIcon,
      value: '942',
      label: 'Acessos ao link',
    },
    {
      icon: BadgeCheckIcon,
      value: '875',
      label: 'Acessos ao link',
    },
    {
      icon: MedalIcon,
      value: '3º',
      label: 'Posição no ranking',
    },
  ]

  return (
    <div className="grid gap-3 md:grid-cols-3">
      {loadStats.map((stat, index) => {
        const { icon: Icon } = stat

        return (
          <div
            key={`${stat.value}-${index}`}
            className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl"
          >
            <span className="font-heading text-2xl text-gray-200 font-semibold leading-none">
              {stat.value}
            </span>
            <span className="text-sm text-gray-300 leading-none text-center">
              {stat.label}
            </span>

            <Icon className="size-5 text-purple absolute top-3 left-3" />
          </div>
        )
      })}
    </div>
  )
}
