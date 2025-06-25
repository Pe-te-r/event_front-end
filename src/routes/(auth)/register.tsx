import { createFileRoute, Link } from '@tanstack/react-router'
import { useForm } from '@tanstack/react-form'
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaLock,
  FaUserPlus
} from 'react-icons/fa'
import { FormGroup } from '@/components/FormGroup'

export const Route = createFileRoute('/(auth)/register')({
  component: RegisterComponent,
})

function RegisterComponent() {
  const form = useForm({
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      password: '',
      confirm_password: '',
    },
    onSubmit: async ({ value }) => {
      console.log('Registering user with:', value)
      // TODO: Handle registration logic
    },
  })

  return (
    <div className="flex justify-center items-start pt-[10vh] min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-xl p-6 sm:p-8 space-y-6">
        {/* Heading */}
        <div className="flex items-center gap-2 text-green-600">
          <FaUserPlus size={22} />
          <h2 className="text-2xl font-bold">Create Your Account</h2>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
          className="space-y-5"
        >
          {/* First Name */}
          <form.Field
            name="first_name"
            validators={{
              onChange: ({ value }) => !value && 'First name is required',
            }}
            children={(field) => (
              <FormGroup
                icon={<FaUser />}
                label="First Name"
                placeholder="John"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                error={typeof field.state.meta.errors?.[0] === 'string' ? field.state.meta.errors[0] : undefined}
                />
            )}
          />

          {/* Last Name */}
          <form.Field
            name="last_name"
            children={(field) => (
              <FormGroup
                icon={<FaUser />}
                label="Last Name"
                placeholder="Doe"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                error={field.state.meta.errors?.[0]}
              />
            )}
          />

          {/* Email */}
          <form.Field
            name="email"
            validators={{
              onChange: ({ value }) => {
                if (!value) return 'Email is required'
                if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(value)) {
                  return 'Invalid email address'
                }
              },
            }}
            children={(field) => (
              <FormGroup
                icon={<FaEnvelope />}
                label="Email"
                type="email"
                placeholder="john@example.com"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                error={field.state.meta.errors?.[0]}
              />
            )}
          />

          {/* Phone */}
          <form.Field
            name="phone"
            validators={{
              onChange: ({ value }) => {
                if (value && !/^\d{10,15}$/.test(value)) return 'Enter a valid phone number'
              },
            }}
            children={(field) => (
              <FormGroup
                icon={<FaPhoneAlt />}
                label="Phone"
                type="tel"
                placeholder="0712345678"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                error={field.state.meta.errors?.[0]}
              />
            )}
          />

          {/* Password */}
          <form.Field
            name="password"
            validators={{
              onChange: ({ value }) => {
                if (!value) return 'Password is required'
                if (value.length < 6) return 'Password must be at least 6 characters'
              },
            }}
            children={(field) => (
              <FormGroup
                icon={<FaLock />}
                label="Password"
                type="password"
                placeholder="******"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                error={field.state.meta.errors?.[0]}
              />
            )}
          />

          {/* Confirm Password */}
          <form.Field
            name="confirm_password"
            validators={{
              onChange: ({ value, fieldApi }) => {
                const password = fieldApi.form.getFieldValue('password')
                if (!value) return 'Confirm your password'
                if (value !== password) return 'Passwords do not match'
              },
            }}
            children={(field) => (
              <FormGroup
                icon={<FaLock />}
                label="Confirm Password"
                type="password"
                placeholder="******"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                error={field.state.meta.errors?.[0]}
              />
            )}
          />
          <p className="text-xs text-gray-500 text-center mt-2">
            By registering, you agree to our{' '}
            <Link to="/terms" className="text-blue-500 hover:underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="text-blue-500 hover:underline">
              Privacy Policy
            </Link>.
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 cursor-pointer text-white py-2 rounded hover:bg-green-700 transition flex items-center justify-center gap-2"
          >
            <FaUserPlus /> Register
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-4 text-center">
                    Already have an account?{' '}
          <Link
            to="/Login"
            className="text-blue-600 font-medium hover:underline hover:text-blue-800 transition"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  )
}
