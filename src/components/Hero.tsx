import { Button, Hero } from "react-daisyui";

export const MyHero = () => {
  return (
    <div className="flex w-full justify-center bg-secondary text-white lg:py-20">
      <Hero className="w-full max-w-4xl flex-auto py-6 text-white lg:py-12">
        <Hero.Content className="flex-col lg:flex-row-reverse">
          <img
            alt="Jaffari Community Centre"
            src="/assets/images/jcc.jpg"
            className="h-full max-w-sm rounded-md shadow-2xl"
          />
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold">Jaffari Community Centre</h1>
              <p>
                Situated on the border of Vaughan and Richmond Hill, the Jaffari
                Community Centre is a 100,000 square foot facility that is home
                to a variety of community programs and services.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button color="primary">Our Committees</Button>
              <Button variant="outline" color="primary">
                Visit Our Centre
              </Button>
            </div>
          </div>
        </Hero.Content>
      </Hero>
    </div>
  );
};
