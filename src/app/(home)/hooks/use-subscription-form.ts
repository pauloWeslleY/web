import { SubscriptionSchema } from '@/app/(home)/schemas'
import type { SubscriptionFormProps } from '@/app/(home)/types'
import { postSubscriptions } from '@/http/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'

export function useSubscriptionForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SubscriptionFormProps>({
    resolver: zodResolver(SubscriptionSchema),
  })

  async function onSubscribe({ name, email }: SubscriptionFormProps) {
    const referrer = searchParams.get('referrer')

    const { subscriberId } = await postSubscriptions({
      email,
      name,
      referrer,
    })

    router.push(`/invite/${subscriberId}`)
  }

  return {
    errors,
    register,
    onSubscribe,
    handleSubmit,
    isSubmitting,
  }
}
