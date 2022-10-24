export const Obituaries = () => {
  const obituaries = [
    "Marhūm Husein Mohamedtaki Shermohamed",
    "Marhūma Khurshid bai Hussein Rajabali Bhimani",
    "Marhum Gulam Fazal",
    "SMarhum Ramzanali Rajabali Mawani",
  ];

  return (
    <div className="flex w-full content-center justify-center gap-1 p-4 py-10 text-white">
      <div className="flex w-full max-w-2xl flex-col gap-2">
        <h2 className="mb-2 text-center font-semibold text-black">
          Obituaries
        </h2>
        {obituaries.map((obituary) => (
          <div key={obituary} className="w-full rounded-lg bg-slate-900 p-3 ">
            {obituary}
          </div>
        ))}
      </div>
    </div>
  );
};
