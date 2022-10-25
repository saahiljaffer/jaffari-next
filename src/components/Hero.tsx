import Link from "next/link";

export const Hero = () => {
  return (
    <div className="hero flex-auto bg-zinc-600 py-6 text-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          alt="Jaffari Community Centre"
          src="/assets/images/jcc.jpg"
          className="w-full max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-3xl font-bold">Jaffari Community Centre</h1>
          <p className="py-6">
            Situated on the border of Vaughan and Richmond Hill, the Jaffari
            Community Centre is a 100,000 square foot facility that is home to a
            variety of community programs and services.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/donate">
              <div className="btn bg-slate-900 text-white">Donate Now</div>
            </Link>
            <a className="btn border-white bg-white text-slate-900">
              Visit Our Centre
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
