import { Engagement } from "./Engagement";

export const Engagements = () => {
  const engagements = [
    "Muzammil Khalfan & Fatema Jaffer",
    "Rizwan Bandali to Sakina Alidina",
    "Salmaan Mulla to Muhaimina Janmohamed",
    "Suheilali Dhirani & Aliya Shivraj",
  ];

  return (
    <div className="flex w-full content-center justify-center gap-1 bg-[#2a303c] p-4 py-10">
      <div className="flex w-full max-w-2xl flex-col gap-2">
        <h2 className="mb-2 text-center font-semibold">Engagements</h2>
        {engagements.map((engagement) => (
          <Engagement key={engagement} names={engagement} />
        ))}
      </div>
    </div>
  );
};
