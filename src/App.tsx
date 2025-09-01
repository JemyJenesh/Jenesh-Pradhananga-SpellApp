import { Navbar } from "@/components/Navbar";
import SpellList from "@/pages/spells/List";

export default function App() {
  return (
    <main>
      <Navbar />
      <div className="mx-auto max-w-6xl px-5 py-4">
        <SpellList />
      </div>
    </main>
  );
}
