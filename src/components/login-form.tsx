'use client';

import React, { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError('');
    setSuccess('');

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || 'Something went wrong');
    } else {
      setSuccess('Login successful!');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="flex w-[25rem] p-12 flex-col justify-center items-center gap-2.5 rounded-3xl border border-[#A8A29E] bg-white/5 backdrop-blur-md">
      <h2 className="text-3xl font-bold text-[#F97316] mb-6">Login</h2>

      <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-3/4 px-4 py-2 mb-4 border-b border-white bg-transparent text-white placeholder-white focus:outline-none"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-3/4 px-4 py-2 mb-4 border-b border-white bg-transparent text-white placeholder-white focus:outline-none"
          required
        />

        <button type="submit" className="w-3/4 py-2 bg-[#F97316] text-white rounded-md font-medium text-lg mb-4 hover:opacity-90">
          Login
        </button>

        {error && <div className="text-red-500 text-sm">{error}</div>}
        {success && <div className="text-green-500 text-sm">{success}</div>}
      </form>
    </div>
  );
}
