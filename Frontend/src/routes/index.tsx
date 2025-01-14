import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import GettingStarted from "../components/GettingStarted";

const WelcomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-grow flex items-center justify-center">
        <GettingStarted />
      </div>
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: WelcomePage,
});

export default WelcomePage;
