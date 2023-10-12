import { Button } from "@/components/button";

export const SuccessMessage = () => {
  let email = "email@company.com";
  return (
    <div className=" flex-col justify-between px-10 py-20 gap-6 h-screen m-auto hidden">
      <div className="space-y-6">
        <span>
          <svg
            className="bg-primary rounded-full"
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 64 64"
          >
            <defs>
              <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
                <stop offset="0%" stop-color="#FF6A3A" />
                <stop offset="100%" stop-color="#FF527B" />
              </linearGradient>
            </defs>
            <g fill="none">
              <circle cx="32" cy="32" r="32" fill="url(#a)" />
              <path
                stroke="#FFF"
                stroke-width="4"
                d="m18.286 34.686 8.334 7.98 19.094-18.285"
              />
            </g>
          </svg>
        </span>
        <h1 className=" text-4xl font-bold text-dark_grey">
          Thanks for subscribing!
        </h1>
        <p>
          A confimation email has been sent to{" "}
          <span className="font-bold">{email}</span>. please open it and check
          the button inside to confirm your inscription
        </p>
      </div>
      <Button>Dismiss message</Button>
    </div>
  );
};
