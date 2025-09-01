import ErrorPage from "@/components/ErrorPage";
import Loader from "@/components/Loader";
import Spell from "@/components/Spell";
import { getSpells } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export default function SpellList() {
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
    <div>
      {data.results.map((spell) => (
        <Spell key={spell.index} spell={spell} />
      ))}
    </div>
  );
}
