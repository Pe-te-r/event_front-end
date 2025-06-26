import type { registerDataDetailed } from '@/types/types'
import { FaPhoneAlt, FaEnvelope, FaUserTie, FaMoneyBill, FaRegComments } from 'react-icons/fa'

interface Props {
  user: registerDataDetailed
  detailed?: boolean
}

export default function UserDetailsCard({ user, detailed }: Props) {
  return (
    <div className="bg-white shadow rounded-lg p-6 space-y-4">
      <div>
        <h2 className="text-2xl font-bold mb-2">
          {user.first_name} {user.last_name}
        </h2>
        <p className="flex items-center text-gray-600">
          <FaEnvelope className="mr-2" /> {user.email}
        </p>
        <p className="flex items-center text-gray-600">
          <FaPhoneAlt className="mr-2" /> {user.phone}
        </p>
        <p className="flex items-center text-gray-600">
          <FaUserTie className="mr-2" /> {user.role}
        </p>
        <p className="text-sm text-gray-400">Joined: {new Date(user.createAt).toLocaleDateString()}</p>
      </div>

      {detailed && (
        <div className="space-y-4">
          {user.payments && (
            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center">
                <FaMoneyBill className="mr-2" /> Payments
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                {user.payments.map((p) => (
                  <li key={p.payment_id}>Ksh {p.amount}</li>
                ))}
              </ul>
            </div>
          )}

          {user.registeredEvents && (
            <div>
              <h3 className="font-semibold text-lg mb-2">Registered Events</h3>
              <ul className="list-disc list-inside text-gray-700">
                {user.registeredEvents.map((e) => (
                  <li key={e.registration_id}>Event Registration ID: {e.registration_id}</li>
                ))}
              </ul>
            </div>
          )}

          {user.createdEvents && (
            <div>
              <h3 className="font-semibold text-lg mb-2">Created Events</h3>
              <ul className="list-disc list-inside text-gray-700">
                {user.createdEvents.map((e) => (
                  <li key={e.event_id}>{e.event_name}</li>
                ))}
              </ul>
            </div>
          )}

          {user.feedback && (
            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center">
                <FaRegComments className="mr-2" /> Feedback
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                {user.feedback.map((f) => (
                  <li key={f.feedback_id}>{f.comments}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
