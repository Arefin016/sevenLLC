import { DataTableDemo } from "@/components/DataTableDemo/DataTableDemo";
import PaymentHistoryTable from "@/components/PaymentHistoryTable/PaymentHistoryTable";
import { useState } from "react";

const PaymentHistory = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Payment History", content: <PaymentHistoryTable /> },
    { label: "Last month", content: <PaymentHistoryTable /> },
    { label: "Year to date", content: <PaymentHistoryTable /> },
  ];
  return (
    <section className="mt-8 ml-8 mr-11 border border-[#F8F9FA] rounded-[20px] bg-[#FFF] shadow-dashboardShadow pl-[30px] pr-[61px] pt-6 pb-[62px]">
      <div className="flex flex-col gap-11">
        <div className="flex gap-11">
          {/* Tabs Header */}
          <div className="flex border-b gap-[167px] w-[80%]">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`px-4 py-[21px] text-xl font-semibold ${
                  activeTab === index
                    ? "border-b-2 border-headingColor text-headingColor text-xl font-semibold"
                    : "text-navbarColor text-xl font-semibold"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {/*  */}
          <div>
            <h1>This is the time</h1>
          </div>
        </div>
        {/* Tabs Content */}
        <div className="">{tabs[activeTab].content}</div>
      </div>
    </section>
  );
};

export default PaymentHistory;
