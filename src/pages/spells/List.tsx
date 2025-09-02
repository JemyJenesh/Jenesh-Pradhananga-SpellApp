import ErrorPage from "@/components/ErrorPage";
import Spell from "@/components/Spell";
import { Skeleton } from "@/components/ui/skeleton";
import { getSpells } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function SpellListPage() {
  const { isPending, error, data } = useQuery({
    queryKey: ["spells"],
    queryFn: getSpells,
  });
  const [search, setSearch] = useState("");

  if (isPending) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="col-span-full">
          <h1 className="text-2xl font-bold">Spells</h1>
        </div>

        <Skeleton className="h-24 w-full rounded" />
        <Skeleton className="h-24 w-full rounded" />
        <Skeleton className="h-24 w-full rounded" />
        <Skeleton className="h-24 w-full rounded" />
        <Skeleton className="h-24 w-full rounded" />
        <Skeleton className="h-24 w-full rounded" />
      </div>
    );
  }

  if (error) {
    return (
      <ErrorPage
        title="Error loading data!"
        message="Error while listing spells."
      />
    );
  }

  const filteredData = data.results.filter((spell) =>
    spell.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="col-span-full flex gap-2 flex-wrap justify-between">
        <h1 className="text-2xl font-bold">Spells</h1>

        <input
          className="border rounded-lg px-4 py-1"
          placeholder="Search spells"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filteredData.length < 1 ? (
        <p>No spells found!</p>
      ) : (
        filteredData.map((spell) => <Spell key={spell.index} spell={spell} />)
      )}
    </div>
  );
}
