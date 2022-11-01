export const ImportantAnnouncement = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col gap-2 bg-yellow-400 p-4 text-center font-semibold">
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};
