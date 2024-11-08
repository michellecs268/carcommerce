"use client";

import { useState } from "react";
import AgentPage from '../agents/page';
import ListingPage from '../listings/page';
import SellerProfilePage from '../sellerProfile/page'
import RatingsPage from '../ratings/page'

export default function Dashboard() {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="bg-gray-100 h-[calc(100vh-64px)]"> {/* Adjust height based on header size */}
      {/* Main Section */}
      <div className="flex text-black h-full">
        {/* Left Column: Dashboard Options */}
        <div className="w-1/2 bg-red-500 p-5 h-full">
          <ul className="space-y-2 m-0 p-0"> {/* Ensure no margin or padding on <ul> */}
            <li>
              <button
                className={`w-full text-left p-2 rounded hover:bg-gray-200 ${
                  selectedOption === "option1" ? "bg-gray-300" : ""
                }`}
                onClick={() => handleOptionClick("option1")}
              >
                Seller Profile
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left p-2 rounded hover:bg-gray-200 ${
                  selectedOption === "option2" ? "bg-gray-300" : ""
                }`}
                onClick={() => handleOptionClick("option2")}
              >
                Used Car Agents
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left p-2 rounded hover:bg-gray-200 ${
                  selectedOption === "option3" ? "bg-gray-300" : ""
                }`}
                onClick={() => handleOptionClick("option3")}
              >
                My Listings
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left p-2 rounded hover:bg-gray-200 ${
                  selectedOption === "option4" ? "bg-gray-300" : ""
                }`}
                onClick={() => handleOptionClick("option4")}
              >
                Rate Agents
              </button>
            </li>
          </ul>
        </div>

        {/* Right Column: Content Based on Selected Option */}
        <div className="w-3/4 p-4 h-full overflow-auto">
        {selectedOption === "option1" && (
          <SellerProfilePage
            email="seller@example.com"
            firstName="John"
            lastName="Doe"
            dob="dob"
          />
          )}
          {selectedOption === "option2" && <AgentPage />}
          {selectedOption === "option3" && <ListingPage />}
          {selectedOption === "option4" && <RatingsPage />}
        </div>
      </div>
    </div>
  );
}
