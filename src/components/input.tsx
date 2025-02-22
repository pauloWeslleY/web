import type { ComponentProps, ElementType } from 'react'

interface InputRootProps extends ComponentProps<'div'> {
  error?: boolean
}

interface InputIconProps extends ComponentProps<'span'> {
  icon: ElementType
}

interface InputFieldProps extends ComponentProps<'input'> {}

interface InputErrorMessageProps extends ComponentProps<'span'> {
  error?: string
}

function InputRoot({ error = false, ...props }: InputRootProps) {
  return (
    <div
      {...props}
      data-error={error}
      className="group bg-gray-800 h-12 border border-gray-600 px-4 rounded-xl flex items-center gap-2 focus-within:border-gray-100 data-[error=true]:border-danger"
    />
  )
}

function InputIcon({ icon: Icon, ...props }: InputIconProps) {
  return (
    <span
      {...props}
      className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger"
    >
      <Icon className="size-5" />
    </span>
  )
}

function InputField(props: InputFieldProps) {
  return <input className="flex-1 outline-0 placeholder-gray-400" {...props} />
}

function InputErrorMessage({ error, ...props }: InputErrorMessageProps) {
  return (
    <>
      {error && (
        <span
          data-error={Boolean(error)}
          className="text-xs font-semibold data-[error=true]:text-danger"
          {...props}
        >
          {error}
        </span>
      )}
    </>
  )
}

export const Input = {
  Root: InputRoot,
  Icon: InputIcon,
  Field: InputField,
  ErrorMessage: InputErrorMessage,
}
