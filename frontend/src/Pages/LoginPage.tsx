import React, { useRef, useState, Dispatch } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../Redux/auth/auth.actions';
import { RootState } from '../Redux/store';

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const {loading, error} = useSelector((store: RootState) => store.authManager);

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const pwdRef = useRef<HTMLInputElement>(null);

  const handleLogin = async () => {
    const user = {
      email: emailRef.current!.value,
      password: pwdRef.current!.value,
    };

    dispatch(userLogin(user, navigate));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 md:flex-row md:justify-center md:items-start">

    <div className="max-w-lg mx-auto">
      <div className="text-center mb-10" >
        <h1 className="text-4xl font-semibold">Sign-in on our management site</h1>
        <p className="text-lg text-gray-600">to maintain your tasks easily ✌️</p>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              id="email"
              type="email"
              ref={emailRef}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                className="bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                id="password"
                type={showPassword ? 'text' : 'password'}
                ref={pwdRef}
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword((show) => !show)}
              >
                {showPassword ? (
                  <i className="text-gray-500 fas fa-eye-slash"></i>
                ) : (
                  <i className="text-gray-500 fas fa-eye"></i>
                )}
              </div>
            </div>
          </div>
          <div className="mb-8">
            <button
              className={`bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                loading && 'opacity-50 cursor-not-allowed'
              }`}
              type="button"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? 'Wait' : 'Log in'}
            </button>
            {error && (
              <p className="mt-2 text-red-500">{error}</p>
            )}
          </div>
          <div className="text-center">
            <p>
              New user?{' '}
              <Link to="/register" className="text-blue-500">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default LoginPage;
