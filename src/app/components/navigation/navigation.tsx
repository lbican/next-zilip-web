import { Logo } from "@/components/logo/logo";
import { NavItem } from "@/app/components/navigation/nav-item";
import { Button, ButtonVariant } from "@/components/button/button";

const navItems = [
  "About",
  "Careers",
  "History",
  "Services",
  "Projects",
  "Blog",
];

export const Navigation = () => {
  return (
    <header className="bg-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Logo />

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              {navItems.map((item) => (
                <NavItem key={item}>{item}</NavItem>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Button variant={ButtonVariant.PRIMARY}>Login</Button>
              <Button
                variant={ButtonVariant.SECONDARY}
                className="hidden sm:block"
              >
                Register
              </Button>
            </div>

            <button className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
