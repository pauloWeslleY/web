'use client'

import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRightIcon, MailIcon, UserIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const subscriptionSchema = z.object({
  name: z.string().min(2, 'Digite seu nome completo'),
  email: z.string().email('Digite um e-mail válido'),
})

type SubscriptionFormValues = z.infer<typeof subscriptionSchema>

export function SubscriptionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscriptionFormValues>({
    resolver: zodResolver(subscriptionSchema),
  })

  function onSubscribe(data: SubscriptionFormValues) {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubscribe)}
      className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
    >
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>

      <div className="space-y-3">
        <div className="space-y-2">
          <Input.Root error={Boolean(errors.name)}>
            <Input.Icon icon={UserIcon} />
            <Input.Field
              {...register('name')}
              type="text"
              placeholder="Nome Completo"
            />
          </Input.Root>
          <Input.ErrorMessage error={errors.name?.message} />
        </div>

        <div className="space-y-2">
          <Input.Root error={Boolean(errors.email)}>
            <Input.Icon icon={MailIcon} />
            <Input.Field
              {...register('email')}
              type="email"
              placeholder="E-mail"
            />
          </Input.Root>
          <Input.ErrorMessage error={errors.email?.message} />
        </div>
      </div>

      <Button type="submit">
        Confirmar
        <ArrowRightIcon />
      </Button>
    </form>
  )
}
