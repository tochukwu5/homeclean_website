import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-light flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl mb-6">🧹</div>
        <h1 className="text-5xl font-heading font-bold text-dark mb-3">404</h1>
        <h2 className="text-xl font-heading font-semibold text-gray-600 mb-4">Page Not Found</h2>
        <p className="text-gray-500 mb-8">
          Looks like this page got cleaned away! Let's get you back to a spotless experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="btn-primary">Back to Home</Link>
          <Link to="/booking" className="btn-secondary">Book a Clean</Link>
        </div>
      </div>
    </div>
  )
}
