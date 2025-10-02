import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/crm')({
  component: CrmComponent,
})

function CrmComponent() {
  return (
    <div className="min-h-screen bg-dark-900 text-white p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-flame-600 to-accent-gold bg-clip-text text-transparent">
            Personal CRM
          </h1>
          <p className="text-gray-400 mt-2">This feature is coming soon. Manage your personal and professional contacts.</p>
        </div>
      </div>
    </div>
  )
}
