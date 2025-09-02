import { Navbar } from "@/components/Navbar";
import SpellDetailsPage from "@/pages/spells/Details";
import SpellFavoritesPage from "@/pages/spells/Favorites";
import SpellListPage from "@/pages/spells/List";
import { Route, Routes } from "react-router";

export default function App() {
  return (
    <main>
      <Navbar />
      <div className="mx-auto max-w-6xl px-5 py-4">
        <Routes>
          <Route path="/" element={<SpellListPage />} />
          <Route path="/spells/:id" element={<SpellDetailsPage />} />
          <Route path="/spells/favorites" element={<SpellFavoritesPage />} />
        </Routes>
      </div>
    </main>
  );
}
