import RegisterForm from "@/components/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900" style={{ backgroundImage: 'url("/loginBG.png")' }}>
      <RegisterForm />
    </div>
  );
}
