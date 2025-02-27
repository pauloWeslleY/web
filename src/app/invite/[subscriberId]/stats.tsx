import {
  getSubscribersSubscriberIdInviteClicks,
  getSubscribersSubscriberIdInvitesCount,
  getSubscribersSubscriberIdRankingPosition,
} from '@/http/api'
import { BadgeCheckIcon, MedalIcon, MousePointerClickIcon } from 'lucide-react'
import type { ElementType } from 'react'

interface GetListStatsSubscriber {
  label: string
  value: number | string
  icon: ElementType
}

interface StatsProps {
  subscriberId: string
}

async function getListStatsSubscriber({
  subscriberId,
}: StatsProps): Promise<GetListStatsSubscriber[]> {
  const accessCount = await getSubscribersSubscriberIdInviteClicks(subscriberId)
  const inviteCount = await getSubscribersSubscriberIdInvitesCount(subscriberId)
  const rankingCount =
    await getSubscribersSubscriberIdRankingPosition(subscriberId)

  return [
    {
      icon: MousePointerClickIcon,
      value: accessCount.count,
      label: 'Acessos ao link',
    },
    {
      icon: BadgeCheckIcon,
      value: inviteCount.count,
      label: 'Inscrições feitas',
    },
    {
      icon: MedalIcon,
      value: `${rankingCount.position ?? 0}º`,
      label: 'Posição no ranking',
    },
  ]
}

export async function Stats({ subscriberId }: StatsProps) {
  const loadStats = await getListStatsSubscriber({ subscriberId })

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
