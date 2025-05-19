"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (form.password !== form.confirm) {
      return setError("Passwords do not match");
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setSuccess("Registration successful!");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md p-8 rounded-xl text-white w-[400px]">
      <h2 className="text-2xl font-bold mb-4 text-orange-400">Register</h2>
      <input name="name" onChange={handleChange} placeholder="Name" className="input" />
      <input name="email" onChange={handleChange} type="email" placeholder="Email" className="input" />
      <input name="password" onChange={handleChange} type="password" placeholder="Password" className="input" />
      <input name="confirm" onChange={handleChange} type="password" placeholder="Confirm Password" className="input" />
      <button type="submit" className="bg-orange-400 py-2 rounded w-full mt-4 hover:bg-orange-500">
        Register
      </button>
      {error && <p className="text-red-400 mt-2">{error}</p>}
      {success && <p className="text-green-400 mt-2">{success}</p>}
    </form>
  );
}
