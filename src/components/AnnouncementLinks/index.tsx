/* eslint-disable tailwindcss/no-custom-classname */
import { Button } from "react-daisyui";

import { Advertisement } from "./Advertisement";

export const AnnouncementLinks = ({ size }: { size: string }) => {
  return (
    <div className="flex w-full justify-center">
      <div className={`max-w-${size} flex w-full justify-center px-4 py-10`}>
        <div className="flex w-full flex-col gap-2 rounded-md bg-secondary px-4 py-6">
          <Advertisement name="Marhūm Husein Mohamedtaki Shermohamed" />
          <div className="grid grid-rows-3 gap-2 sm:grid-cols-3 sm:grid-rows-1">
            <Button color="accent">Engagements</Button>
            <Button color="accent">Dua Shifa Requests</Button>
            <Button color="accent">Obituaries</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
