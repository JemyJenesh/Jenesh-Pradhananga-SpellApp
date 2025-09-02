import ErrorPage from "@/components/ErrorPage";
import Loader from "@/components/Loader";
import Spell from "@/components/Spell";
import { getSpells } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export default function SpellListPage() {
  const { isPending, error, data } = useQuery({
    queryKey: ["spells"],
    queryFn: getSpells,
  });

  if (isPending) {
    return <Loader />;
  }

  if (error) {
    return (
      <ErrorPage
        title="Error loading data!"
        message="Error while listing spells."
      />
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="col-span-full">
        <h1 className="text-2xl font-bold">Spells</h1>
      </div>
      {data.results.map((spell) => (
        <Spell key={spell.index} spell={spell} />
      ))}
    </div>
  );
}
