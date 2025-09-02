import ButtonFavorite from "@/components/ButtonFavorite";
import DamageTable from "@/components/DamageTable";
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
        <Skeleton className="h-36 w-full rounded mb-4" />
        <Skeleton className="h-36 w-full rounded mb-4" />
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
      <div className="mb-4 flex">
        <div className="flex-1">
          <h2 className="text-2xl font-bold leading-tight">{data.name}</h2>
          <p className="text-sm text-gray-600">Level: {data.level}</p>
        </div>
        <ButtonFavorite
          spell={{
            index: data.index,
            level: data.level,
            name: data.name,
            url: data.url,
          }}
        />
      </div>

      <p className="text-sm text-balance mb-4">{data.desc[0]}</p>

      {data.higher_level.length > 1 && (
        <div className="mb-4">
          <span className="font-semibold text-gray-700">On higher level</span>
          <p className="text-sm text-balance">{data.higher_level}</p>
        </div>
      )}

      {data.material && (
        <div className="mb-4">
          <span className="font-semibold text-gray-700">Material</span>
          <p className="text-sm text-balance">{data.material}</p>
        </div>
      )}

      {(data.concentration || data.ritual) && (
        <>
          <p className="font-semibold text-gray-700 mb-1">Requirement</p>
          <div className="flex gap-2">
            {data.concentration && (
              <p className="text-sm font-semibold text-balance px-3 py-1 bg-green-100 rounded-lg">
                Concentration
              </p>
            )}
            {data.ritual && (
              <p className="text-sm font-semibold text-balance px-3 py-1 bg-green-100 rounded-lg">
                Ritual
              </p>
            )}
          </div>
        </>
      )}

      <hr className="my-4 border-gray-300" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div>
          <span className="font-semibold text-gray-700">Casting time:</span>{" "}
          {data.casting_time || "N/A"}
        </div>
        <div>
          <span className="font-semibold text-gray-700">Components:</span>{" "}
          {data.components.map((item, index) => (
            <span key={item}>
              {item}
              {index === data.components.length - 1 ? "" : ", "}
            </span>
          )) || "N/A"}
        </div>
        <div className="w-full flex gap-2">
          <span className="font-semibold text-gray-700">Classes:</span>{" "}
          {data.classes.length ? (
            data.classes.map((item) => (
              <p
                key={item.index}
                className="bg-primary/20 rounded-lg px-2 py-0.5"
              >
                {item.name}
              </p>
            ))
          ) : (
            <p>N/A</p>
          )}
        </div>
        <div className="w-full flex gap-2">
          <span className="font-semibold text-gray-700">Sub-classes:</span>{" "}
          {data.subclasses.length ? (
            data.subclasses.map((item) => (
              <p
                key={item.index}
                className="bg-primary/20 rounded-lg px-2 py-0.5"
              >
                {item.name}
              </p>
            ))
          ) : (
            <p>N/A</p>
          )}
        </div>
        <div>
          <span className="font-semibold text-gray-700">Duration:</span>{" "}
          {data.duration || "N/A"}
        </div>

        <div>
          <span className="font-semibold text-gray-700">Damage type:</span>{" "}
          {data.damage?.damage_type.name || "N/A"}
        </div>

        <div>
          <span className="font-semibold text-gray-700">Range:</span>{" "}
          {data.range || "N/A"}
        </div>

        <DamageTable details={data.damage} />
      </div>
    </div>
  );
}
