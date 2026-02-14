"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Save username for display in the shell
    if (username) {
      localStorage.setItem("username", username);
    }
    router.push("/ingestion");
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col lg:flex-row overflow-hidden">
      {/* Left Side: Image / Hero */}
      <div className="relative w-full lg:w-1/2 h-64 lg:h-auto overflow-hidden">
        <Image
          src="https://ea854xr24n6.exactdn.com/wp-content/uploads/2025/02/CXS-Right-Brain-Left-Brain.jpg?strip=all"
          alt="CXS Right Brain Left Brain"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        {/* Logo over image */}
        <div className="absolute top-6 left-6 lg:top-12 lg:left-12 z-10">
          <Image
            src="/logo.png"
            alt="CX Studios Logo"
            width={180}
            height={180}
            className="h-16 lg:h-24 w-auto object-contain"
          />
        </div>
        <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-8 lg:p-16">
          <div className="max-w-xl">
            <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              We build amazing things!
            </h1>
            <p className="text-lg text-white/90 leading-relaxed drop-shadow-md hidden sm:block">
              Amazing things happen when AI meets human understanding. CX Studios delivers exceptional customer experience solutions with the precision of lean six sigma to fuel your business growth.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 lg:p-20 bg-gray-50/50">
        <div className="w-full max-w-md space-y-12">
          <div className="space-y-2 text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Welcome Back
            </h2>
            <p className="text-gray-500">
              Please enter your details to sign in
            </p>
          </div>

          <form onSubmit={handleSignIn} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 uppercase tracking-[0.15em] mb-2 px-1">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none bg-white shadow-sm"
                placeholder="Enter your username"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 uppercase tracking-[0.15em] mb-2 px-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none bg-white shadow-sm"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between px-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="size-4 rounded border-gray-300 text-primary focus:ring-primary" />
                <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">Remember me</span>
              </label>
              <button type="button" className="text-sm font-bold text-primary hover:text-accent transition-colors">
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-accent transition-all shadow-lg shadow-primary/20 active:scale-[0.98]"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <button type="button" className="font-bold text-primary hover:text-accent transition-colors">
              Contact Support
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
