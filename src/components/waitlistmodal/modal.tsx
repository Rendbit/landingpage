import React, { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";
import { CgClose } from "react-icons/cg";
import { analytics, logEvent } from "../../tools/firebase";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

interface RendBitWaitlistFormProps {
  isModalOpen: boolean;
  toggleModal: () => void;
}

const RendBitWaitlistForm: React.FC<RendBitWaitlistFormProps> = ({
  isModalOpen,
  toggleModal,
}) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [processing, setProcessing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProcessing(true);
    setError(null);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/waitlist-api/user/join`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "x-api-key": import.meta.env.VITE_API_KEY || "",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        console.error("Error submitting form:", res.statusText);
        setError(
          data.message
            ? data.message
            : "Error joining waitlist. Please try again."
        );
        setTimeout(() => {
          setError(null);
        }, 5000);
        setProcessing(false);
        logEvent(analytics, "rendbit_waitlist_join_fail");
        return;
      }

      toast.success("Successfully joined the waitlist!");
      setFormData({ firstName: "", lastName: "", email: "" });
      logEvent(analytics, "rendbit_waitlist_join_success");
      toggleModal();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <>
      <div
        className={`${
          isModalOpen ? "flex" : "hidden"
        } flex fixed inset-0 items-center justify-center bg-[#00000090] z-50 overflow-hidden`}
      >
        <div
          className="fixed inset-0 bg-black opacity-50"
          aria-hidden="true"
        ></div>
        <div className="relative z-10"></div>
        <div className="rounded-3xl w-full max-w-lg border border-gray-700 bg-[#000D2C] p-8 relative">
          <div className="flex items-center mb-12">
            <div className="flex items-center">
              <div className="text-blue-400 mr-2">
                <img src="./image/logo.svg" alt="RendBit" />
              </div>
              <h1 className="text-white text-3xl font-bold">RendBit</h1>
            </div>
            <button
              className="ml-auto  rounded-full bg-white cursor-pointer text-gray-900 p-1 text-[18px]"
              onClick={() => {
                toggleModal();
                logEvent(analytics, "rendbit_waitlist_join_modal_close");
              }}
              aria-label="Close modal"
              type="button"
            >
              <CgClose />
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <p className="text-red-400 flex">{error}</p>
            <div className="mb-6">
              <label htmlFor="firstName" className="block text-white mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full rounded-lg border p-4 text-white"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="lastName" className="block text-white mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full rounded-lg border p-4 text-white"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border p-4 text-white"
                required
              />
            </div>

            <div className="relative rounded-[13px] p-0.5 bg-gradient-to-r from-cyan-300 to-[#0A1F35] shadow-lg">
              <div className="absolute cursor-pointer inset-0 rounded-[13px] bg-cyan-300 blur-md opacity-40 -z-10"></div>
              <button
                type="submit"
                onClick={() => {
                  logEvent(analytics, "rendbit_waitlist_join_register");
                }}
                className="relative cursor-pointer w-full text-white font-bold bg-[#0A1F35] py-3 px-6 rounded-[13px] transition-all duration-300"
              >
                <span className="relative z-10">
                  {processing ? "Joining..." : "JOIN WAIT-LIST"}
                </span>
                <div className="absolute inset-0 rounded-[13px] bg-[#0A1F35] opacity-30 blur-sm -z-10"></div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RendBitWaitlistForm;
