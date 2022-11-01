import { Button } from "react-daisyui";

export const MyHero = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}) => {
  return (
    <div className="flex w-full justify-center bg-secondary py-10 px-4 lg:py-20">
      <div className="card max-w-5xl rounded-none text-white sm:card-side">
        <figure>
          <img
            src="/assets/images/jcc.jpg"
            alt="Album"
            className="rounded-md sm:order-last"
          />
        </figure>
        <div className="card-body px-0 sm:order-first sm:px-4">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions grid grid-cols-2">
            <Button href={primaryButtonLink} className="btn-primary btn">
              {primaryButtonText}
            </Button>
            <Button href={secondaryButtonLink} color="accent">
              {secondaryButtonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
