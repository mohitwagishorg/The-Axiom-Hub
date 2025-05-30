import React, { useState } from "react";
import { Code, Eye, EyeOff, Loader2, Lock, Mail, Terminal, Zap, Shield, Users, ArrowRight, Sparkles } from "lucide-react";

// Mock AuthImagePattern component for demo
const AuthImagePattern = ({ title, subtitle }) => (
  <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
    <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
    <div className="absolute bottom-20 right-20 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
    <div className="relative z-10 text-center p-8">
      <div className="mb-6">
        <div className="w-20 h-20 mx-auto mb-4 bg-primary/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-primary/30">
          <Terminal className="w-10 h-10 text-primary" />
        </div>
      </div>
      <h2 className="text-3xl font-bold text-base-content mb-4">{title}</h2>
      <p className="text-lg text-base-content/70 max-w-md">{subtitle}</p>
    </div>
  </div>
);

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }
    
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be atleast of 6 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoggingIn(true);
    try {
      // Simulate login API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Logging Data", { email, password });
      alert("Login successful!");
    } catch (error) {
      console.error("Login Failed", error);
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-base-100">
      {/* Left Side - Login Form */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        
        <div className="w-full max-w-md space-y-8 relative z-10">
          {/* Logo Section */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-4 group">
              {/* Enhanced Logo */}
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-warning rounded-full flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-warning-content" />
                </div>
              </div>
              
              {/* Enhanced Title */}
              <div className="space-y-2">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Welcome Back Coders
                </h1>
                <p className="text-base-content/60 font-medium">Login to your account</p>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="stats shadow-sm bg-base-200/50 backdrop-blur-sm">
              <div className="stat p-3 text-center">
                <div className="stat-figure text-primary">
                  <Users className="w-4 h-4" />
                </div>
                <div className="stat-value text-sm">10K+</div>
                <div className="stat-desc text-xs">Developers</div>
              </div>
            </div>
            <div className="stats shadow-sm bg-base-200/50 backdrop-blur-sm">
              <div className="stat p-3 text-center">
                <div className="stat-figure text-secondary">
                  <Zap className="w-4 h-4" />
                </div>
                <div className="stat-value text-sm">24/7</div>
                <div className="stat-desc text-xs">Uptime</div>
              </div>
            </div>
            <div className="stats shadow-sm bg-base-200/50 backdrop-blur-sm">
              <div className="stat p-3 text-center">
                <div className="stat-figure text-accent">
                  <Shield className="w-4 h-4" />
                </div>
                <div className="stat-value text-sm">100%</div>
                <div className="stat-desc text-xs">Secure</div>
              </div>
            </div>
          </div>

          {/* Enhanced Form */}
          <div className="card bg-base-100/80 backdrop-blur-sm shadow-xl border border-base-300/50">
            <div className="card-body p-6">
              <div className="space-y-6">
                {/* Email Field */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-base-content/80">Email Address</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-primary/60" />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`input input-bordered w-full pl-10 bg-base-100/50 backdrop-blur-sm transition-all duration-300 focus:bg-base-100 focus:scale-[1.02] ${
                        errors.email ? "input-error" : "focus:input-primary"
                      }`}
                      placeholder="developer@axiomhub.com"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <div className={`w-2 h-2 rounded-full bg-success transition-opacity duration-300 ${
                        email && !errors.email ? "opacity-100" : "opacity-0"
                      }`}></div>
                    </div>
                  </div>
                  {errors.email && (
                    <div className="alert alert-error mt-2 py-2">
                      <span className="text-sm">{errors.email}</span>
                    </div>
                  )}
                </div>

                {/* Password Field */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-base-content/80">Password</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-primary/60" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={`input input-bordered w-full pl-10 pr-12 bg-base-100/50 backdrop-blur-sm transition-all duration-300 focus:bg-base-100 focus:scale-[1.02] ${
                        errors.password ? "input-error" : "focus:input-primary"
                      }`}
                      placeholder="••••••••••••"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center hover:bg-base-200/50 rounded-r-lg transition-colors"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-base-content/60 hover:text-primary transition-colors" />
                      ) : (
                        <Eye className="h-5 w-5 text-base-content/60 hover:text-primary transition-colors" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <div className="alert alert-error mt-2 py-2">
                      <span className="text-sm">{errors.password}</span>
                    </div>
                  )}
                </div>

                {/* Enhanced Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="btn btn-primary w-full btn-lg group hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
                  disabled={isLoggingIn}
                >
                  {isLoggingIn ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Logging you in...
                    </>
                  ) : (
                    <>
                      <span>Login to Axiom Hub</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>

              {/* Additional Options */}
              <div className="divider text-base-content/50">or</div>
              
              <div className="space-y-3">
                <button className="btn btn-outline btn-block group hover:scale-[1.02] transition-all duration-300">
                  <Terminal className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Continue with GitHub
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced Footer */}
          <div className="text-center space-y-4">
            <div className="card bg-base-200/30 backdrop-blur-sm">
              <div className="card-body p-4">
                <p className="text-base-content/70">
                  Don't have an account?{" "}
                  <a href="/signup" className="link link-primary">
                    Sign up
                  </a>
                </p>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex justify-center items-center gap-6 text-xs text-base-content/50">
              <div className="flex items-center gap-1">
                <Shield className="w-3 h-3" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                <span>Trusted by 10K+ devs</span>
              </div>
              <div className="flex items-center gap-1">
                <Zap className="w-3 h-3" />
                <span>Lightning Fast</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Enhanced Image/Pattern */}
      <AuthImagePattern
        title={"Welcome to The Axiom Hub"}
        subtitle={"Login to access our platform and start coding with our powerful tools and community"}
      />
    </div>
  );
};

export default LoginPage;