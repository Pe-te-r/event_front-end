type FormGroupProps = {
  icon: React.ReactNode
  label: string
  type?: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
}

export function FormGroup({
  icon,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
}: FormGroupProps) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1 text-gray-700">{label}</label>
      <div className="flex items-center border rounded px-3 py-2">
        <div className="text-gray-400 mr-2">{icon}</div>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full outline-none text-sm"
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
}
