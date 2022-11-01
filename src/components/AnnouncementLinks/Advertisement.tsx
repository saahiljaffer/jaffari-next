export const Advertisement = ({ name }: { name: string }) => {
  return (
    <div className="card card-compact rounded-md bg-white">
      <div className="card-body flex flex-col items-start gap-0">
        <p className="font-semibold uppercase">
          Pleace recite Surah Al-Fateha for
        </p>
        <p>{name}</p>

        <span className="mt-2 text-xs uppercase text-zinc-500">Sponsored</span>
      </div>
    </div>
  );
};
