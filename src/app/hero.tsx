// @ts-ignore

"use client";

import { Button, Typography, Card } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/landed3.jpg')] bg-cover bg-no-repeat">
    <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
    <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        <Typography
          variant="h1"
          color="white"
          className="md:max-w-full lg:max-w-3xl"
        >
          Find Your Perfect Plot with WIGRAM Properties
        </Typography>
        <Typography
          variant="lead"
          color="white"
          className="mt-6 mb-10 w-full md:max-w-full lg:max-w-3xl"
        >
          Premium land for sale—build your dream home or invest in your future.
        </Typography>
        <div className="flex gap-4">
          <Button variant="gradient" color="white">
            Explore Our Land Listings
          </Button>
          <Button variant="outlined" color="white" className="border-white">
            Call +2349047171717
          </Button>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Hero;
