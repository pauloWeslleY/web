import LogoMedalCooper from '@/assets/medal-cooper.svg'
import LogoMedalGold from '@/assets/medal-gold.svg'
import LogoMedalSilver from '@/assets/medal-silver.svg'
import { getRanking } from '@/http/api'
import Image from 'next/image'
import type { ReactElement } from 'react'

export async function Ranking() {
  const ranking = await getRanking()

  const verifyRankingPosition: Record<number, ReactElement> = {
    1: (
      <Image
        src={LogoMedalGold}
        alt="Logo medalha de ouro"
        className="absolute top-0 right-8"
      />
    ),
    2: (
      <Image
        src={LogoMedalSilver}
        alt="Logo medalha de prata"
        className="absolute top-0 right-8"
      />
    ),
    3: (
      <Image
        src={LogoMedalCooper}
        alt="Logo medalha de bronze"
        className="absolute top-0 right-8"
      />
    ),
  }

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 leading-none font-heading font-semibold text-xl">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {ranking.map((item, index) => {
          const rankingPosition = index + 1

          return (
            <div
              key={`${item.id}-${index}`}
              className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
            >
              <span className="tex-sm text-gray-300 leading-none">
                <span className="font-semibold">{rankingPosition}</span> |{' '}
                {item.name}
              </span>
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                {item.score}
              </span>

              {verifyRankingPosition[rankingPosition]}
            </div>
          )
        })}
      </div>
    </div>
  )
}
