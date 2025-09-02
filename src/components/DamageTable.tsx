import type { TSpellDetail } from "@/types";

type Props = {
  details: TSpellDetail["damage"];
};

export default function DamageTable({ details }: Props) {
  if (!details?.damage_at_slot_level) return null;

  return (
    <div className="col-span-full">
      <p className="font-semibold mb-2">Damage info</p>

      <table className="border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-1">Slot level</th>
            <th className="w-52 border border-gray-300 px-4 py-1">Damage</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(details.damage_at_slot_level).map(
            ([level, damage]) => (
              <tr key={level}>
                <td className="border border-gray-300 px-4 py-1 text-center">
                  {level}
                </td>
                <td className="border border-gray-300 px-4 py-1 text-center">
                  {damage}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
