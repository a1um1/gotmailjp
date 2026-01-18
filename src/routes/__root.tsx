import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

const RootLayout = () => (
  <div className="container mx-auto p-5 w-full flex min-h-dvh flex-col gap-4">
    <nav className="flex justify-between gap-4 items-center">
      <Link to="/" className="flex gap-2 items-center">
        <img src="/gotmail_logo.svg" alt="Gotmail.jp Logo" className="h-12 invert" />
        <div className="leading-tight">
          <p>GOTMAIL.JP</p>
          <p>ARCHIVAL</p>
        </div>
      </Link>
      <Link to="/" className="[&.active]:font-bold [&.active]:border-b-2 px-4 py-2">
        Home
      </Link>
    </nav>
    <Outlet />
    <hr />
    <div>
      <p>Develop by A1UM1</p>
      <p>Archive by Flashpoint Archive & darkmoe9433 (from Flashpoint Archive's Discord Server)</p>
      <p>Powered by Ruffle, Github, Vite</p>
    </div>
  </div>
);

export const Route = createRootRoute({ component: RootLayout });
