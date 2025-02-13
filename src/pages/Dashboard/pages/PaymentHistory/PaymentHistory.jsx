import { useState } from "react";

const PaymentHistory = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Home", content: <p>Welcome to the Home Tab</p> },
    { label: "Profile", content: <p>This is the Profile Tab</p> },
    { label: "Settings", content: <p>Here are your Settings</p> },
  ];
  return (
    <div className="flex flex-col gap-11  bg-gray-100">
      {/* Tabs Header */}
      <div className="flex">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-lg font-medium ${
              activeTab === index
                ? "border-b-2 border-headingColor text-headingColor text-xl"
                : "text-navbarColor text-xl font-semibold"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="">{tabs[activeTab].content}</div>
    </div>
  );
};

export default PaymentHistory;
