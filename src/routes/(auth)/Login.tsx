import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useForm } from '@tanstack/react-form'
import { FaEnvelope, FaLock, FaSignInAlt } from 'react-icons/fa'
import { useMutation } from '@tanstack/react-query'
import { LoginUser } from '@/api/login'
import { authActions } from '@/stores/authStore'
import { toast } from 'sonner'

export const Route = createFileRoute('/(auth)/Login')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate()

  // send data
  const mutation = useMutation({
    mutationFn: LoginUser,
    onSuccess: (data) => {
      console.log('Login success:', data)
      toast.success('Logged in successfully!')
      authActions.login({
        id: data.user.id,
        email: data.user.email,
        name: data.user.username || 'User',
        role: data.user.role || 'user'
      },
        data.accessToken
      )
      navigate({to:'/'})
    },
    onError: (error) => {
      console.error('Login failed:', (error as Error).message)
      toast.error((error as Error).message)
    }
  })

  // form
  const form = useForm({
    defaultValues: {
      email: 'mary21@duck.com',
      password: 'mary@8526',
    },
    onSubmit: async ({ value }) => {
      mutation.mutate(value)
      console.log('Logging in with:', value)
      // TODO: Handle the actual login
    },
  })

  return (
    <div className="flex justify-center min-h-screen bg-gray-50 px-4 pt-[25vh]">
      <div className="w-full max-w-md bg-white shadow-lg  rounded-lg p-6 h-max sm:p-8">
        {/* Title */}
        <div className="flex items-center gap-2 mb-6 text-blue-600">
          <FaSignInAlt size={20} />
          <h2 className="text-2xl font-bold">Login to Your Account</h2>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
          className="space-y-5"
        >
          {/* Email Field */}
          <form.Field
            name="email"
            validators={{
              onChange: ({ value }) => {
                if (!value) return 'Email is required'
                if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(value)) return 'Invalid email address'
              },
            }}
            children={(field) => (
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Email</label>
                <div className="flex items-center border rounded px-3 py-2">
                  <FaEnvelope className="text-gray-400 mr-2" />
                  <input
                    type="email"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full outline-none"
                  />
                </div>
                {field.state.meta.errors?.length > 0 && (
                  <p className="text-red-500 text-sm mt-1">{field.state.meta.errors[0]}</p>
                )}
              </div>
            )}
          />

          {/* Password Field */}
          <form.Field
            name="password"
            validators={{
              onChange: ({ value }) => {
                if (!value) return 'Password is required'
                if (value.length < 6) return 'Password must contain 6 characters'
              },
            }}
            children={(field) => (
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Password</label>
                <div className="flex items-center border rounded px-3 py-2">
                  <FaLock className="text-gray-400 mr-2" />
                  <input
                    type="password"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="******"
                    className="w-full outline-none"
                  />
                </div>
                {field.state.meta.errors?.length > 0 && (
                  <p className="text-red-500 text-sm mt-1">{field.state.meta.errors[0]}</p>
                )}
              </div>
            )}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200 flex justify-center items-center gap-2"
          >
            <FaSignInAlt />
            Login
          </button>
          <p className="text-sm text-gray-600 mt-4 text-center">
            Don&apos;t have an account?{' '}
            <Link
              to="/register"
              className="text-blue-600 font-medium hover:underline hover:text-blue-800 transition"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
