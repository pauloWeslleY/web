import LogoMedalCooper from '@/assets/medal-cooper.svg'
import LogoMedalGold from '@/assets/medal-gold.svg'
import LogoMedalSilver from '@/assets/medal-silver.svg'
import Image from 'next/image'

export default function Ranking() {
  const loadListRanking = [
    {
      image: LogoMedalGold,
      label: '1°',
      title: 'André Souza',
      points: '1.128',
    },
    {
      image: LogoMedalSilver,
      label: '2°',
      title: 'Melissa Loures',
      points: '928',
    },
    {
      image: LogoMedalCooper,
      label: '3°',
      title: 'Rodrigo Gonçalves',
      points: '875',
    },
  ]

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 leading-none font-heading font-semibold text-xl">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {loadListRanking.map((item, index) => {
          return (
            <div
              key={`${item.title}-${index}`}
              className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
            >
              <span className="tex-sm text-gray-300 leading-none">
                <span className="font-semibold">{item.label}</span> |{' '}
                {item.title}
              </span>
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                {item.points}
              </span>

              <Image
                src={item.image}
                alt="Logo medalha de ouro"
                className="absolute top-0 right-8"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
