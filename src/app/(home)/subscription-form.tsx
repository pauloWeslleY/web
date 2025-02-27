'use client'

import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { ArrowRightIcon, MailIcon, UserIcon } from 'lucide-react'
import { useSubscriptionForm } from './hooks/use-subscription-form'

export function SubscriptionForm() {
  const { errors, register, isSubmitting, onSubscribe, handleSubmit } =
    useSubscriptionForm()

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
        {isSubmitting ? 'Loading...' : 'Confirmar'}
        {!isSubmitting && <ArrowRightIcon />}
      </Button>
    </form>
  )
}
