import type { eventsType } from '@/types/types'

type Props = {
  event: eventsType
  onMoreDetails?: (event: eventsType) => void
}

export default function EventCard({ event, onMoreDetails }: Props) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-semibold mb-2 text-blue-600">{event.event_name}</h2>
        <p className="text-sm text-gray-700 mb-1">
          <strong>Date:</strong> {new Date(event.event_date).toLocaleDateString()}
        </p>
        <p className="text-sm text-gray-700 mb-1">
          <strong>Location:</strong> {event.event_location}
        </p>
        <p className="text-sm text-gray-600 mt-2">{event.event_description}</p>
      </div>
      <button
        className="mt-4n cursor-pointer mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-xl self-start"
        onClick={() => onMoreDetails?.(event)}
      >
        More Details
      </button>
    </div>
  )
}
