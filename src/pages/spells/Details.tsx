import { useParams } from "react-router";

export default function SpellDetailsPage() {
  const { id } = useParams<{ id: string }>();

  return <div>Spell: {id}</div>;
}
