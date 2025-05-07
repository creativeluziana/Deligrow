import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, User } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Simulate authentication delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setError('');
      setLoading(true);
      // Simulate authentication delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Image */}
          <div className="hidden md:block">
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1000&auto=format" 
                alt="Fresh groceries" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h2 className="text-3xl font-bold mb-4">Welcome to Deligrow</h2>
                  <p className="text-lg text-white/90">Your one-stop destination for fresh and premium groceries.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="max-w-md mx-auto w-full">
            <div className="bg-white shadow-sm rounded-2xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">
                  {isSignUp ? 'Create Account' : 'Welcome Back'}
                </h2>
                <p className="text-gray-600 mt-2">
                  {isSignUp ? 'Sign up to start shopping' : 'Sign in to your account'}
                </p>
              </div>

              {error && (
                <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-700 text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {isSignUp && (
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="pl-10 mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                        required
                      />
                      <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                )}

                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <div className="mt-1 relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10 mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      required
                    />
                    <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1 relative">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="pl-10 mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      required
                    />
                    <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                {!isSignUp && (
                  <div className="flex items-center justify-end">
                    <button type="button" className="text-sm text-green-600 hover:text-green-500">
                      Forgot password?
                    </button>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Please wait...' : (isSignUp ? 'Create Account' : 'Sign In')}
                </button>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>

                <button
                  onClick={handleGoogleLogin}
                  disabled={loading}
                  className="mt-6 w-full flex items-center justify-center py-3 px-4 rounded-lg border border-gray-300 shadow-sm bg-white hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <img 
                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
                    alt="Google" 
                    className="w-5 h-5 mr-2"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {loading ? 'Please wait...' : 'Continue with Google'}
                  </span>
                </button>
              </div>

              <p className="mt-6 text-center text-sm text-gray-600">
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                {' '}
                <button
                  onClick={() => setIsSignUp(!isSignUp)}
                  disabled={loading}
                  className="font-medium text-green-600 hover:text-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSignUp ? 'Sign in' : 'Sign up'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 