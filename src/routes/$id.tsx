import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { allGames } from "../game";

export const Route = createFileRoute("/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();
  const currentGame = allGames.find((game) => game.id === id);
  useEffect(() => {
    (function (originalFetch) {
      const changeUrl = function (url: string): any {
        try {
          const parsed = new URL(url);
          if (url.endsWith(".swf")) return `/${id}${parsed.pathname}`;
          if (url.endsWith(".flv")) return `/${id}${parsed.pathname}`;
        } catch (e) {}
        return url;
      };
      window.fetch = function () {
        let a = Array.from(arguments) as [input: Request, init?: RequestInit];
        if (a[0]?.url?.endsWith("cgi/swf.pl"))
          return Promise.resolve(new Response(`<data swfname_e="e.swf" swfname="j.swf" />`));
        if (typeof a[0] === "string") {
          a[0] = changeUrl(a[0]);
        } else if (a[0] && typeof a[0].url === "string") {
          const changedUrl = changeUrl(a[0].url);
          if (changedUrl !== a[0].url) {
            a[0] = changedUrl;
          }
        }
        return originalFetch.apply(window, a);
      };
    })(window.fetch);
  }, []);
  if (!currentGame) return <div>Game not found</div>;

  return (
    <div id="container" className="h-full flex flex-col flex-1">
      <object className="h-full flex-1 flex flex-col">
        <embed src="index.swf" className="w-full flex-1" />
      </object>
    </div>
  );
}
