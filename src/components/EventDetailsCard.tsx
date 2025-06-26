import type { EventType } from '@/types/types'
import { FaCalendarAlt, FaRegStar, FaUsers, FaCommentAlt } from 'react-icons/fa'

type Props = {
  event: EventType
}

export default function EventDetailsCard({ event }: Props) {
  return (
    <div className="bg-white shadow rounded-lg p-6 space-y-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">{event.event_name}</h2>

      <p className="text-gray-600">{event.event_description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <div className="flex items-center gap-2 text-gray-700">
          <FaCalendarAlt className="text-blue-500" />
          <span>{new Date(event.event_date).toLocaleDateString('en-KE', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-700">
          <FaUsers className="text-green-500" />
          <span>{event.registration_count} Registrations</span>
        </div>

        <div className="flex items-center gap-2 text-gray-700">
          <FaRegStar className="text-yellow-500" />
          <span>Average Rating: {event.average_rating}/5</span>
        </div>
      </div>

      {event.feedbacks?.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <FaCommentAlt className="mr-2 text-indigo-600" />
            Feedback
          </h3>
          <ul className="space-y-2">
            {event.feedbacks.map((fb) => (
              <li key={fb.feedback_id} className="border p-3 rounded text-gray-700 bg-gray-50">
                <p className="mb-1"><strong>Rating:</strong> {fb.rating}/5</p>
                <p><strong>Comment:</strong> {fb.comments}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
