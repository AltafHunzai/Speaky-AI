import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className='transition-colors duration-200 text-gray-600 hover:text-purple-500'
    >
      {children}
    </Link>
  );
};

export default function Header() {
  return (
    <nav className='container flex justify-between items-center px-8 py-4 mx-auto'>
      <div className='flex lg:flex-1'>
        <Link
          href={"/"}
          className='transition-colors duration-200 text-gray-600 hover:text-purple-500'
        >
          <span className='flex items-center gap-2 shrink-0'>
            <Image
              src={"/icon.ico"}
              alt='speaky logo'
              width={32}
              height={32}
              className='hover:rotate-12 transform transition duration-200 ease-in-out'
            />
            <span className='text-lg font-extrabold'>Speaky AI</span>
          </span>
        </Link>
      </div>
      <div className='flex lg:justify-center lg:items-center gap-2 lg:gap-12 '>
        <NavLink href={"/#pricing"}>Pricing</NavLink>
        <SignedIn>
          <NavLink href={"/#posts"}>Your Posts</NavLink>
        </SignedIn>
      </div>
      <div className='flex lg:justify-end lg:flex-1'>
        <div className='flex gap-2 items-center'>
          <SignedIn>
            <NavLink href={"/dashboard"}>Upload a Video</NavLink>
          </SignedIn>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
          <SignedOut>
            <SignInButton>
              <NavLink href={"/sign-in"}>Sign In</NavLink>
            </SignInButton>
          </SignedOut>
      </div>
    </nav>
  );
}
