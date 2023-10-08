import React, { Dispatch, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import { userRegister } from '../Redux/auth/auth.actions';

const Register: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const { loading } = useSelector((store: RootState) => store.authManager);

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { username, email, password } = e.currentTarget;

    const data = {
      name: username.value,
      email: email.value,
      password: password.value,
    };

    dispatch(userRegister(data, navigate));
    e.currentTarget.reset();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full md:w-3/4 lg:w-1/2 xl:w-1/3 bg-white rounded-lg shadow-lg p-8">
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <h2 className="text-2xl md:text-4xl text-center">Register page</h2>
            <p className="text-lg text-gray-600 text-center">
              to enjoy all of our cool features ✌️
            </p>
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block font-medium mb-1">
              Name
            </label>
            <input
              id="username"
              type="text"
              className="w-full border rounded-md px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="w-full border rounded-md px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium mb-1">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                className="w-full border rounded-md px-3 py-2 pr-12"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-3 flex items-center"
                onClick={() =>
                  setShowPassword((showPassword) => !showPassword)
                }
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <div className="mb-8">
            <button
              type="submit"
              className={`w-full bg-blue-400 text-white py-2 rounded-md ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Signing up...' : 'Sign up'}
            </button>
          </div>
          <div>
            <p className="text-center">
              Already a user?{' '}
              <Link to="/login" className="text-blue-500">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
