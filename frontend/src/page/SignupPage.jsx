// 

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { z } from "zod";
import { Code, Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";
import AuthImagePattern from "../components/AuthImagePattern";
import { useAuthStore } from "../store/useAuthStore";

const SignUpSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(6, "Password must be atleast of 6 characters"),
  name: z.string().min(3, "Name must be atleast 3 character"),
});

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signup, isSigninUp } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(SignUpSchema) });

  const onSubmit = async (data) => {
    try {
      await signup(data);
      console.log("signup Data", data);
    } catch (error) {
      console.error("Signup failed", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-base-100 to-secondary/5 grid lg:grid-cols-2">
      <div className="flex flex-col justify-center items-center p-6 sm:p-12 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/3 to-transparent opacity-50"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-16 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
        
        <div className="w-full max-w-lg space-y-8 relative z-10">
          {/* Logo Section */}
          <div className="text-center mb-12">
            <div className="flex flex-col items-center gap-4 group">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:rotate-3">
                  <Code className="w-8 h-8 text-primary-content" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-success rounded-full animate-pulse"></div>
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Welcome Coders
                  <picture className="inline-block ml-2">
                    <source
                      srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f973/512.webp"
                      type="image/webp"
                    />
                    <img
                      src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f973/512.gif"
                      alt="🥳"
                      width="32"
                      height="32"
                      className="animate-bounce"
                    />
                  </picture>
                </h1>
                <p className="text-base-content/70 text-lg">Create your account to get started</p>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="card bg-base-100/80 backdrop-blur-sm shadow-2xl border border-base-300/50">
            <div className="card-body p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-base-content/80">Full Name</span>
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-primary">
                      <Code className="h-5 w-5 text-base-content/40" />
                    </div>
                    <input
                      type="text"
                      {...register("name")}
                      className={`input input-bordered w-full pl-12 pr-4 h-12 transition-all duration-200 focus:ring-2 focus:ring-primary/20 ${
                        errors.name ? "input-error border-error" : "focus:border-primary"
                      }`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  {errors.name && (
                    <div className="alert alert-error mt-2 py-2 px-3 text-sm">
                      <span>{errors.name.message}</span>
                    </div>
                  )}
                </div>

                {/* Email Field */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-base-content/80">Email Address</span>
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-primary">
                      <Mail className="h-5 w-5 text-base-content/40" />
                    </div>
                    <input
                      type="email"
                      {...register("email")}
                      className={`input input-bordered w-full pl-12 pr-4 h-12 transition-all duration-200 focus:ring-2 focus:ring-primary/20 ${
                        errors.email ? "input-error border-error" : "focus:border-primary"
                      }`}
                      placeholder="you@example.com"
                    />
                  </div>
                  {errors.email && (
                    <div className="alert alert-error mt-2 py-2 px-3 text-sm">
                      <span>{errors.email.message}</span>
                    </div>
                  )}
                </div>

                {/* Password Field */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-base-content/80">Password</span>
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-primary">
                      <Lock className="h-5 w-5 text-base-content/40" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      {...register("password")}
                      className={`input input-bordered w-full pl-12 pr-12 h-12 transition-all duration-200 focus:ring-2 focus:ring-primary/20 ${
                        errors.password ? "input-error border-error" : "focus:border-primary"
                      }`}
                      placeholder="Create a strong password"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-4 flex items-center hover:text-primary transition-colors"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-base-content/40" />
                      ) : (
                        <Eye className="h-5 w-5 text-base-content/40" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <div className="alert alert-error mt-2 py-2 px-3 text-sm">
                      <span>{errors.password.message}</span>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="form-control mt-8">
                  <button
                    type="submit"
                    className="btn btn-primary w-full h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200 disabled:loading"
                    disabled={isSigninUp}
                  >
                    {isSigninUp ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin mr-2" />
                        Creating Account...
                      </>
                    ) : (
                      <>
                        <Code className="h-5 w-5 mr-2" />
                        Create Account
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center space-y-4">
            <div className="divider text-base-content/40">Already have an account?</div>
            <Link 
              to="/login" 
              className="btn btn-outline btn-primary w-full h-12 font-semibold hover:shadow-lg transition-all duration-200"
            >
              Sign In Instead
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side - Image/Pattern */}
      <AuthImagePattern
        title={"Welcome to The Axiom Hub"}
        subtitle={"Sign up to access our platform and start using our service"}
      />
    </div>
  );
};

export default SignupPage;