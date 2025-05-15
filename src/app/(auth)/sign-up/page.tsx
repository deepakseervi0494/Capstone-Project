import SignUpCard from "@/features/auth/components/sign-up-card";
import { getCurrent } from "@/features/auth/actions";
import { redirect } from "next/navigation";
const SignUpPage = async () => {
  const user = await getCurrent();
  if (user) {
    redirect("/");
  }

  return (
    <div className="flex gap-2">
      <SignUpCard></SignUpCard>
      <img src='/12-removebg-preview.png' width='auto' height='auto' className="bg-white animate-custom-pulse rounded-lg"></img>
      
    </div>
  );
};
export default SignUpPage;
