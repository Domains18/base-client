import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/url-shortener')({
    component: UrlShortenerComponent,
});

// Dummy data for shortened links
const shortenedLinks = [
    {
        id: 1,
        originalUrl: 'https://github.com/TanStack/router',
        shortUrl: 'https://gib.son/ts-router',
        clicks: 128,
    },
    {
        id: 2,
        originalUrl: 'https://tailwindcss.com/docs/installation',
        shortUrl: 'https://gib.son/tw-docs',
        clicks: 76,
    },
    {
        id: 3,
        originalUrl: 'https://react.dev/learn',
        shortUrl: 'https://gib.son/react-learn',
        clicks: 210,
    },
    {
        id: 4,
        originalUrl: 'https://vitejs.dev/guide/',
        shortUrl: 'https://gib.son/vite-guide',
        clicks: 45,
    },
];

function UrlShortenerComponent() {
    return (
        <div className="min-h-screen bg-dark-900 text-white p-4 sm:p-6 md:p-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-flame-600 to-accent-gold bg-clip-text text-transparent">
                        Link Shortener
                    </h1>
                    <p className="text-gray-400 mt-2">
                        Create short, memorable links from long URLs.
                    </p>
                </div>

                {/* Shorten Form */}
                <div className="card-glass p-6 sm:p-8 mb-10">
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <input
                            type="url"
                            placeholder="Enter a long URL to shorten..."
                            className="flex-grow w-full bg-dark-800 border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <button className="btn-primary w-full sm:w-auto">Shorten</button>
                    </div>
                </div>

                {/* Recent Links */}
                <div>
                    <h2 className="text-2xl font-semibold mb-6">Your Recent Links</h2>
                    <div className="space-y-4">
                        {shortenedLinks.map(link => (
                            <div
                                key={link.id}
                                className="card-glass p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                            >
                                <div className="flex-grow">
                                    <p
                                        className="font-medium truncate text-gray-300"
                                        title={link.originalUrl}
                                    >
                                        {link.originalUrl}
                                    </p>
                                    <a
                                        href="#"
                                        className="text-primary font-semibold hover:underline"
                                    >
                                        {link.shortUrl}
                                    </a>
                                </div>
                                <div className="flex items-center space-x-6 text-sm w-full sm:w-auto">
                                    <div className="flex items-center space-x-2">
                                        <span className="font-bold text-lg">{link.clicks}</span>
                                        <span className="text-gray-400">Clicks</span>
                                    </div>
                                    <button className="text-accent-gold hover:underline">
                                        Copy
                                    </button>
                                    <button className="text-flame-500 hover:underline">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
