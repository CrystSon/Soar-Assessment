import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../../store/slices/transactionsSlice";
import SendIcon from "../../assets/send.svg";
import { ChevronRight } from "lucide-react";
import { Transaction } from "../../types";
import { fetchQuickTransferData } from "../../utils/api";

export default function QuickTransfer() {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const [selectedContact, setSelectedContact] = useState<string | null>(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchQuickTransferData();
      setData(response);
    };
    fetchData();
  }, []);

  const handleSendClick = () => {
    setErrorMessage("");

    if (!selectedContact) {
      setErrorMessage("Please select a contact to send the money.");
      return;
    }

    const parsedAmount = parseFloat(amount);
    if (
      isNaN(parsedAmount) ||
      parsedAmount <= 0 ||
      !/^\d+(\.\d{1,2})?$/.test(amount)
    ) {
      setErrorMessage("Please enter a valid amount greater than 0.");
      return;
    }

    setIsDisabled(true);
    setSuccessMessage("");

    setTimeout(() => {
      const contactData = data.find((ele) => ele.id === selectedContact);

      const newTransaction: Transaction = {
        id: Date.now().toString(),
        type: 'withdrawal',
        amount: parsedAmount,
        description: `Quick Transfer to ${contactData?.name}`,
        date: new Date().toISOString(),
        serviceProvider: "Card",
        use: 'others'
      };

      dispatch(addTransaction(newTransaction));
      setIsDisabled(false);
      setSuccessMessage("Transfer successful!");
      setSelectedContact("");
      setAmount("");
    }, 2000);
  };

  return (
    <div>
      <div className="flex items-center mb-6">
        <h2 className="text-2xl font-semibold text-[#343C6A]">
          Quick Transfer
        </h2>
      </div>
      <div className="bg-white rounded-2xl p-6 relative h-[300px]">
        <div className="space-y-2 pr-16">
          <div className="overflow-x-auto pb-4 -mx-2 px-2 scrollbar-hide user-scroll ">
            <div className="flex space-x-4 relative  ">
              {data.map((contact) => (
                <button
                  key={contact.id}
                  onClick={() => setSelectedContact(contact.id)}
                  className={`flex flex-col items-center min-w-[80px] relative  py-2 rounded-full ${
                    selectedContact === contact.id && "bg-gray-200"
                  } `}
                >
                  <div className="">
                    <img
                      src={contact.avatar}
                      alt={contact.name}
                      className="h-12 w-12 rounded-full"
                    />
                  </div>
                  <div className={`text-center w-full `}>
                    <p
                      className={`text-sm font-medium text-[#343C6A] ${
                        selectedContact === contact.id
                          ? "font-extrabold text-black"
                          : ""
                      }`}
                    >
                      {contact.name}
                    </p>
                    <p className="text-xs text-[#8B8D97]">{contact.role}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div
          className="absolute right-6 top-10 bg-white rounded-full shadow-lg p-4 cursor-pointer"
          onClick={() => {
            const container = document.querySelector(".user-scroll");
            if (container) {
              container.scrollBy({ left: 100, behavior: "smooth" }); // Adjust the scroll amount as needed
            }
          }}
        >
          <ChevronRight color="#718EBF" size={20} />
        </div>
        <div className="flex items-center gap-3 mt-6">
          <p className="text-xs text-[#718EBF]">Write Amount</p>
          <div className="relative flex">
            <div className="flex-1">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                step="0.01"
                className="w-full rounded-full bg-[#EDF1F7] text-[#718EBF] py-3 px-4 text-sm font-medium focus:outline-none"
                placeholder="Enter amount"
              />
            </div>

            <div className="relative">
              <button
                onClick={handleSendClick}
                disabled={isDisabled}
                className={`absolute right-0 top-1 bg-[#232323] text-white rounded-full pl-4 pr-8 py-2 flex items-center gap-x-2 
                  ${
                    isDisabled
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-[#2D60FF]/90"
                  } transition-colors`}
              >
                <span className="font-medium text-xs">Send</span>
                <img src={SendIcon} alt="Send" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        {successMessage && (
          <p className="mt-2 text-green-600">{successMessage}</p>
        )}
        {errorMessage && <p className="text-red-600 mt-2">{errorMessage}</p>}
      </div>
    </div>
  );
}
