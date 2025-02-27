import DateRangePicker from "@/components/DateRangePicker/DateRangePicker";
import PaymentHistoryTable from "@/components/PaymentHistoryTable/PaymentHistoryTable";
import axios from "axios";
import { useEffect, useState } from "react";
const baseUrl = import.meta.env.VITE_SITE_URL;

const SecondTable = () => {
  const tabs = [
    { label: "Payment History", dataTitle: "paymentHistoryData" },
    { label: "Last month", dataTitle: "lastMonthData" },
    { label: "Year to date", dataTitle: "yearToDateData" },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [payMentHistory, setPayMentHistory] = useState([]);

  const getPaymentData = () => {
    let token = localStorage.getItem("token");
    token = JSON.parse(token);
    axios({
      method: "get",
      url: `${baseUrl}/api/user-order/payment`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        setPayMentHistory(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPaymentData();
  }, []);

  const handleDelete = () => {
    getPaymentData(); // Refetch data after delete
  };

  const formattedPayments = payMentHistory.map(payment => ({
    invoiceId: `inv${payment.invoice_number}`,
    invoiceDate: payment.created_at.split("T")[0],
    product: payment.order?.item_type || "Unknown Product",
    quantity: payment.quantity || "N/A",
    amount: payment.amount.toFixed(2),
    paymentMethod: payment.payment_method || "N/A",
    datePaid: payment.payment_date ? payment.payment_date.split("T")[0] : "N/A",
    status: payment.status, // Fixed this line
    id: payment.id,
  }));

  console.log(payMentHistory, "this is the payment history");

  console.log("this is the formated payment", formattedPayments);

  return (
    <section className="border border-[#F8F9FA] rounded-[20px] bg-[#FFF] shadow-dashboardShadow md:pl-[30px] md:pr-[30px] px-4 md:pt-6 md:pb-[62px]">
      <div className="flex flex-col gap-6 md:gap-11">
        <div className="flex flex-col md:flex-row gap-11 items-center">
          {/* Tabs Header */}
          <div className="flex border-b gap-10 md:gap-5 xl:gap-[167px] md:w-[80%]">
            {tabs.map(tab => (
              <button
                key={tab?.dataTitle}
                className={`xmd:px-4 pt-6 pb-2 xmd:py-[21px] text-xs xxs:text-lg xmd:text-xl font-semibold ${
                  activeTab?.dataTitle === tab?.dataTitle
                    ? "border-b-2 border-headingColor text-headingColor text-xl font-semibold"
                    : "text-navbarColor text-xl font-semibold"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {/*  */}
          <div>
            <DateRangePicker />
          </div>
        </div>
        {/* Tabs Content */}
        <PaymentHistoryTable onDelete={handleDelete} data={formattedPayments} />
      </div>
    </section>
  );
};

export default SecondTable;
