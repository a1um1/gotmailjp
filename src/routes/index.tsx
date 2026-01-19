import { createFileRoute, Link } from "@tanstack/react-router";
import { allGames } from "../game";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="bg-(--alert-bg) text-(--alert-fg) p-4 font-bold">
        ⚠️ This project are for archival purposes only.
        <hr className="my-3" />
        <p>This is collection of flash games from the early 2000s. Developed by IDAC & GotMail.</p>
        <p>Want to upload your own arhcival? Check github for furthur informaion.</p>
      </div>

      <p>You can play these game on browser now</p>

      <ul className="list-disc pl-6">
        {allGames.map((game) => (
          <li key={game.id}>
            <Link
              to="/$id"
              params={{
                id: game.id,
              }}
              className="hover:underline"
            >
              {game.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
