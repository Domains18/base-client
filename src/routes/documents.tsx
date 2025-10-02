import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/documents')({
  component: DocumentsComponent,
})

// Dummy data for documents
const documents = [
  { id: 1, name: 'Resume_2024_Final.pdf', type: 'PDF', size: '245 KB', lastModified: '3 days ago' },
  { id: 2, name: 'Project_Proposal_Q3.docx', type: 'Word Document', size: '1.2 MB', lastModified: '1 week ago' },
  { id: 3, name: 'Tax_Invoice_8841.pdf', type: 'PDF', size: '88 KB', lastModified: '2 weeks ago' },
  { id: 4, name: 'Company_Onboarding.pptx', type: 'PowerPoint', size: '5.6 MB', lastModified: '1 month ago' },
  { id: 5, name: 'Personal_Financials.xlsx', type: 'Excel Spreadsheet', size: '450 KB', lastModified: '2 hours ago' },
]

function DocumentsComponent() {
  return (
    <div className="min-h-screen bg-dark-900 text-white p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-flame-600 to-accent-gold bg-clip-text text-transparent">
              Document Safe
            </h1>
            <p className="text-gray-400 mt-1">Your personal cloud storage.</p>
          </div>
          <button className="btn-primary mt-4 sm:mt-0">
            Upload Document
          </button>
        </div>

        {/* Search and Filter */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search documents..."
            className="w-full max-w-sm bg-dark-800 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Documents Table */}
        <div className="card-glass overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-b border-gray-700">
                <tr>
                  <th className="p-4 text-sm font-semibold text-gray-300">Name</th>
                  <th className="p-4 text-sm font-semibold text-gray-300">Type</th>
                  <th className="p-4 text-sm font-semibold text-gray-300">Size</th>
                  <th className="p-4 text-sm font-semibold text-gray-300">Last Modified</th>
                  <th className="p-4 text-sm font-semibold text-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc) => (
                  <tr key={doc.id} className="border-b border-gray-800 hover:bg-dark-800/50 transition-colors">
                    <td className="p-4 font-medium">{doc.name}</td>
                    <td className="p-4 text-gray-400">{doc.type}</td>
                    <td className="p-4 text-gray-400">{doc.size}</td>
                    <td className="p-4 text-gray-400">{doc.lastModified}</td>
                    <td className="p-4">
                      <div className="flex items-center space-x-4">
                        <button className="text-primary hover:underline text-sm">Download</button>
                        <button className="text-accent-gold hover:underline text-sm">Rename</button>
                        <button className="text-flame-500 hover:underline text-sm">Delete</button>
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
