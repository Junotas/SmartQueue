import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import GettingStarted from "../components/GettingStarted";

const WelcomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <GettingStarted />
      </div>
    </div>
  );
};


export const Route = createFileRoute("/")({
  component: WelcomePage,
});

export default WelcomePage;
