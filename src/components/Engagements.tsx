export const Engagements = () => {
  const engagements = [
    'Muzammil Khalfan & Fatema Jaffer',
    'Rizwan Bandali to Sakina Alidina',
    'Salmaan Mulla to Muhaimina Janmohamed',
    'Suheilali Dhirani & Aliya Shivraj',
  ];

  return (
    <div className="py-10 bg-[#2a303c] text-white gap-1 w-full flex justify-center content-center p-4">
      <div className="max-w-2xl w-full flex flex-col gap-2">
        <h2 className="text-white mb-2 font-semibold text-center">
          Engagements
        </h2>
        {engagements.map((engagement) => (
          <div
            key={engagement}
            className="p-3 w-full rounded-lg bg-white text-black "
          >
            {engagement}
          </div>
        ))}
      </div>
    </div>
  );
};
