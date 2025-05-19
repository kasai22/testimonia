import React from 'react';
import LoginForm from '@/components/login-form';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: 'url("/loginBG.png")' }}>
      <LoginForm />
    </div>
  );
}
