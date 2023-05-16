import Link from "next/link";

interface pageProps {}

const Register = ({}) => {
  return (
    <div>
          <div className="text-center p-8">Register</div>
          <Link href="/auth/signIn" className="text-center p-10 w-full">
            Already Registered ? Sign In Instead
          </Link>
    </div>
  );
};

export default Register;
