import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/passwords')({
  component: PasswordsComponent,
})

const passwordEntries = [
  {
    id: 1,
    name: 'Gmail',
    username: 'gibson.d@example.com',
    lastUpdated: '2 days ago',
  },
  { id: 2, name: 'GitHub', username: 'gibson-dev', lastUpdated: '5 hours ago' },
  { id: 3, name: 'Twitter', username: '@gibson', lastUpdated: '1 week ago' },
  {
    id: 4,
    name: 'Stripe Dashboard',
    username: 'billing@company.com',
    lastUpdated: '1 month ago',
  },
  {
    id: 5,
    name: 'AWS Console',
    username: 'root-user',
    lastUpdated: '3 weeks ago',
  },
]

function PasswordsComponent() {
  return (
    <div className="min-h-screen bg-dark-900 text-white p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary via-accent-teal to-accent-cyan bg-clip-text text-transparent">
              Password Vault
            </h1>
            <p className="text-gray-400 mt-1 text-sm sm:text-base">
              Securely manage all your credentials.
            </p>
          </div>
          <button className="btn-primary w-full sm:w-auto">
            Add New Password
          </button>
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search passwords..."
            className="w-full max-w-sm bg-dark-800 border border-white/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-white"
          />
        </div>

        <div className="card-glass overflow-hidden border border-white/20">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-b border-white/20">
                <tr>
                  <th className="p-3 sm:p-4 text-xs sm:text-sm font-semibold text-gray-300">
                    Name
                  </th>
                  <th className="p-3 sm:p-4 text-xs sm:text-sm font-semibold text-gray-300">
                    Username
                  </th>
                  <th className="p-3 sm:p-4 text-xs sm:text-sm font-semibold text-gray-300 hidden sm:table-cell">
                    Last Updated
                  </th>
                  <th className="p-3 sm:p-4 text-xs sm:text-sm font-semibold text-gray-300">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {passwordEntries.map((entry) => (
                  <tr
                    key={entry.id}
                    className="border-b border-white/10 hover:bg-dark-800/50 transition-colors"
                  >
                    <td className="p-3 sm:p-4 font-medium text-sm sm:text-base">
                      {entry.name}
                    </td>
                    <td className="p-3 sm:p-4 text-gray-400 text-xs sm:text-sm">
                      {entry.username}
                    </td>
                    <td className="p-3 sm:p-4 text-gray-400 text-xs sm:text-sm hidden sm:table-cell">
                      {entry.lastUpdated}
                    </td>
                    <td className="p-3 sm:p-4">
                      <div className="flex items-center space-x-2 sm:space-x-4">
                        <button className="text-primary hover:underline text-xs sm:text-sm">
                          View
                        </button>
                        <button className="text-accent-cyan hover:underline text-xs sm:text-sm">
                          Edit
                        </button>
                        <button className="text-red-500 hover:underline text-xs sm:text-sm">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
