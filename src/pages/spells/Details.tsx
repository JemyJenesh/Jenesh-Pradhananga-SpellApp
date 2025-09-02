import ErrorPage from "@/components/ErrorPage";
import { Skeleton } from "@/components/ui/skeleton";
import { getSpell } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

export default function SpellDetailsPage() {
  const { id } = useParams<{ id: string }>();

  const { isPending, error, data } = useQuery({
    queryKey: ["spells", id],
    queryFn: () => getSpell(id!),
    enabled: !!id,
  });

  if (isPending) {
    return (
      <div className="border rounded p-6">
        <Skeleton className="mb-1 h-8 w-32 rounded" />
        <Skeleton className="h-4 w-24 rounded mb-4" />
        <Skeleton className="h-36 w-full rounded" />
      </div>
    );
  }

  if (error) {
    return (
      <ErrorPage
        title="Error loading data!"
        message="Error while getting spell details."
      />
    );
  }

  return (
    <div className="bg-white border border-gray-300 rounded-lg p-6 text-gray-800">
      <div className="mb-4">
        <h2 className="text-2xl font-bold leading-tight">{data.name}</h2>
        <p className="text-sm text-gray-600">Level: {data.level}</p>
      </div>

      <div className="text-sm text-balance">{data.desc[0]}</div>

      <hr className="my-4 border-gray-300" />

      <div className="grid grid-cols-2 gap-3 text-sm mb-4">
        <div>
          <span className="font-semibold text-gray-700">Casting time:</span>{" "}
          {data.casting_time}
        </div>
        <div>
          <span className="font-semibold text-gray-700">Duration:</span>{" "}
          {data.duration}
        </div>
        {data.damage && (
          <div>
            <span className="font-semibold text-gray-700">Damage type:</span>{" "}
            {data.damage.damage_type.name}
          </div>
        )}
        <div>
          <span className="font-semibold text-gray-700">Range:</span>{" "}
          {data.range}
        </div>
      </div>
    </div>
  );
}
