import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DeznovLogin() {
  // Move useNavigate to the top with other hooks
  const navigate = useNavigate();
  
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful");
        navigate('/explore');
      } else {
        alert(data.message || "Login failed");
      }

    } catch (error) {
      console.error("Error during login:", error);
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[#0D0E11] relative overflow-hidden flex items-center justify-center">
        <h1
          className="text-white text-3xl absolute top-4 left-4 font-extrabold cursor-pointer"
          onClick={() => navigate("/")}
        >
          DezNov
        </h1>
        
        {/* Main form container */}
        <div className="relative z-10 w-full max-w-md mx-4">
          <div className="bg-opacity-90 backdrop-blur-sm rounded-2xl border-2 border-gray-700 p-8 shadow-2xl">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-light text-white mb-2">
                Welcome Back to {" "}
                <span className="text-[#2A9F8D] font-medium">Deznov</span>
              </h1>
              <h5 className="text-md text-[rgba(255,255,255,0.5)]">Login to continue</h5>
            </div>

            {/* Form - Added proper form element */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email field */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your registered email"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2a9f8d] focus:border-transparent transition-all"
                />
              </div>

              {/* Password field */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2a9f8d] focus:border-transparent transition-all pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#2A9F8D] hover:bg-[#3DD3BC] disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#2a9f8d] focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                {isLoading ? "Logging in..." : "Log In"}
              </button>
            </form>

            {/* Sign up link */}
            <div className="text-center mt-6">
              <span className="text-gray-400 text-sm">
                Do not have an account?{" "}
              </span>
              <button
                className="text-[#2A9F8D] hover:text-[#3DD3BC] text-sm font-medium transition-colors cursor-pointer"
                onClick={() => navigate("/auth/signup")}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}