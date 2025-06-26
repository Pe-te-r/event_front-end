import { createFileRoute } from '@tanstack/react-router'
import { useForm } from '@tanstack/react-form'
import { useCreateEvent } from '@/hooks/events'
import { toast } from 'sonner'

export const Route = createFileRoute('/organizer/create')({
  component: RouteComponent,
})

function RouteComponent() {
  const { mutate, isPending } = useCreateEvent()

  const form = useForm({
    defaultValues: {
      event_name: '',
      event_date: '',
      event_location: '',
      event_description: '',
    },
    onSubmit: async ({ value }) => {
      mutate(value, {
        onSuccess: () => {
          toast.success('Event created successfully!')
          form.reset() // Reset form after success
        },
        onError: (error) => {
          toast.error(error.message || 'Failed to create event')
        },
      })
    },
  })

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Create Event</h2>

      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault()
          form.handleSubmit()
        }}
      >
        <form.Field name="event_name">
          {(field) => (
            <div className="flex flex-col">
              <label htmlFor={field.name} className="font-medium">Event Name</label>
              <input
                id={field.name}
                type="text"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                className="border px-3 py-2 rounded"
                disabled={isPending}
              />
            </div>
          )}
        </form.Field>

        <form.Field name="event_date">
          {(field) => (
            <div className="flex flex-col">
              <label htmlFor={field.name} className="font-medium">Event Date</label>
              <input
                id={field.name}
                type="datetime-local"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                className="border px-3 py-2 rounded"
                disabled={isPending}
              />
            </div>
          )}
        </form.Field>

        <form.Field name="event_location">
          {(field) => (
            <div className="flex flex-col">
              <label htmlFor={field.name} className="font-medium">Location</label>
              <input
                id={field.name}
                type="text"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                className="border px-3 py-2 rounded"
                disabled={isPending}
              />
            </div>
          )}
        </form.Field>

        <form.Field name="event_description">
          {(field) => (
            <div className="flex flex-col">
              <label htmlFor={field.name} className="font-medium">Description</label>
              <textarea
                id={field.name}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                className="border px-3 py-2 rounded"
                disabled={isPending}
              />
            </div>
          )}
        </form.Field>

        <button
          type="submit"
          className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 ${isPending ? 'opacity-60 cursor-not-allowed' : ''
            }`}
          disabled={isPending}
        >
          {isPending ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  )
}
