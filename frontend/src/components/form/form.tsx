import { Button } from "../button";

export const Form = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <form method="post" onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="email flex flex-col items-start gap-3 text-xs md:text-xl">
        <label htmlFor="email" className="font-bold text-dark_grey">
          Email Address
        </label>
        <input
          className="border border-grey rounded-xl p-4 w-full md:p-2 placeholder:text-sm md:placeholder:md:text-md"
          type="email"
          name="email"
          id="email"
          placeholder="email@company.com"
        />
      </div>
      <Button type="submit">Subscribe to monthly newsletter</Button>
    </form>
  );
};
