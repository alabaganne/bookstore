import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// After Sign Up, Ask User to:
// * Verify email address
// * Add phone number
// * Submit Identity Card image to be able to purchase (optional)
function Register() {
  return (
    <div className="flex-center bg-gray-200 py-32">
      <div className="rounded bg-white p-12">
        <h2>Create Account</h2>
        <form action="" className="mt-10 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="form-group required col-span-1">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="John"
                className="form-control"
              />
            </div>
            <div className="form-group required col-span-1">
              <label htmlFor="lastName">First Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Doe"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group required">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              placeholder="johndoe@example.com"
              className="form-control mt-1"
            />
          </div>
          <div className="form-group required">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
            />
          </div>
          <div className="form-group required">
            <label htmlFor="passwordConfirmation">Password Confirmation</label>
            <input
              type="password"
              name="passwordConfirmation"
              id="passwordConfirmation"
              className="form-control"
              placeholder="Repeat your password"
            />
          </div>
          <div className="flex items-center justify-between gap-10">
            <div className="text-sm text-gray-500">
              You already have an account?{' '}
              <Link to="/login" className="text-black hover:underline">
                Log in here
              </Link>
              .
            </div>
            <div>
              <button className="btn-common btn-base btn-primary">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
