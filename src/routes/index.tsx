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

      <div className="grid lg:grid-cols-4 gap-4">
        {allGames.map((game) => (
          <div key={game.id}>
            <Link
              to="/$id"
              params={{
                id: game.id,
              }}
              className="hover:underline text-center flex items-center flex-col gap-2"
            >
              <img
                src={`/gotmailjp/${game.id}/logo.jpeg`}
                alt={`${game.title} Thumbnail`}
                className="max-w-64 mb-auto"
              />
              <p>{game.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
