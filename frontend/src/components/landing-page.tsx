import Image from "next/image";
import { Container } from "./container";
import clsx from "clsx";
import { Button } from "./button";
import { useEffect, useState } from "react";

interface Props {
  className?: string;
}

export const LandingPage = ({ className }: Props) => {
  // email = e.target.email.value;

  const initialValues = { email: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formState, setFormState] = useState(0);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //function to advanced (to change state form 0 at 1)
  const next = () => {
    return setFormState(formState + 1);
  };
  //function to back
  const previous = () => {
    return setFormState(formState - 1);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    next();
  };

  return (
    <>
      {formState === 0 && (
        <Container
          className={clsx(" md:bg-dark_grey md:h-screen md:flex", className)}
        >
          <div className="md:flex md:flex-row-reverse md:bg-white md:w-5/6 xl:w-8/12 2xl:w-9/12 2xl:py-5 md:m-auto md:justify-between md:p-4 md:rounded-2xl items-center md:gap-10">
            <div className="md:w-2/4 xl:w-4/10">
              <Image
                className="md:content-img_desktop" //to change the size of the image when the size of screen > 768px
                width={400}
                height={400}
                layout="responsive"
                src={"/assets/images/illustration-sign-up-mobile.svg"}
                alt="image of the page"
              />
            </div>
            <div className=" space-y-6 md:space-y-10 p-5 md:2/4 xl:w-6/10">
              <h1 className="text-4xl  2xl:text-5xl text-dark_grey font-bold">
                Stay Update!
              </h1>
              <p className="md:text-md 2xl:text-2xl">
                Join 60.000+ product managers receiving monthly updates on :
              </p>
              <div className=" space-y-3 2xl:space-y-5">
                <Productlist>
                  Product discovery and building what matters
                </Productlist>
                <Productlist>
                  Measuring to ensure updates are a success
                </Productlist>
                <Productlist>And much more!</Productlist>
              </div>
              <form
                method="post"
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
              >
                <div className="email flex flex-col items-start gap-3 text-xs md:text-xl">
                  <label htmlFor="email" className="font-bold text-dark_grey">
                    Email Address
                  </label>
                  <input
                    className="border border-grey rounded-xl p-4 w-full md:p-2 placeholder:text-sm md:placeholder:md:text-md"
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    id="email"
                    placeholder="email@company.com"
                  />
                </div>
                <Button type="submit">Subscribe to monthly newsletter</Button>
              </form>
            </div>
          </div>
        </Container>
      )}

      {formState === 1 && (
        <Container className=" md:bg-dark_grey md:h-screen md:flex">
          <div className="flex flex-col justify-between px-10 py-20 gap-6 h-screen m-auto md:bg-white md:w-5/12 md:h-4/6 xl:h-3/6 xl:w-4/12 2xl:w-3/12 md:rounded-xl md:p-6 md:gap-2">
            <div className="space-y-6">
              <span>
                <svg
                  className="bg-primary rounded-full"
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
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
              <h1 className="md:text-5xl text-4xl font-bold text-charcoal_grey">
                Thanks for subscribing!
              </h1>
              <p>
                A confimation email has been sent to{" "}
                <span className="font-bold">{formValues.email}</span>. please
                open it and check the button inside to confirm your inscription
              </p>
            </div>
            <Button type="button" onClick={previous}>
              Dismiss message
            </Button>
          </div>
        </Container>
      )}
    </>
  );
};

interface productlistProps {
  children: React.ReactNode;
}

//this is a component to make the list of the product
const Productlist = ({ children }: productlistProps) => {
  return (
    <div className="flex gap-4 items-start">
      <span>
        <svg
          className="w-6 h-6"
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
      <span className="md:text-md">{children}</span>
    </div>
  );
};
