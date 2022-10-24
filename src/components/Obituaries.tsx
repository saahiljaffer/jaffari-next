export const Obituaries = () => {
  const obituaries = [
    'Marhūm Husein Mohamedtaki Shermohamed',
    'Marhūma Khurshid bai Hussein Rajabali Bhimani',
    'Marhum Gulam Fazal',
    'SMarhum Ramzanali Rajabali Mawani',
  ];

  return (
    <div className="text-white gap-1 w-full flex justify-center content-center p-4">
      <div className="max-w-2xl w-full flex flex-col gap-1">
        <h2 className="text-black mb-2 font-semibold text-center">
          Obituaries
        </h2>
        {obituaries.map((obituary) => (
          <div key={obituary} className="p-3 w-full rounded-lg bg-slate-900 ">
            {obituary}
          </div>
        ))}
      </div>
    </div>
  );
};
