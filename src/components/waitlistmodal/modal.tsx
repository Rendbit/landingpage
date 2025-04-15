import React, { useState, ChangeEvent, FormEvent } from "react";
import useModal from "../../hooks/useModal";
import { toast } from "react-toastify";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

const RendBitWaitlistForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [processing, setProcessing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { closeModal } = useModal();

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
        return;
      }

      toast.success("Successfully joined the waitlist!");
      setFormData({ firstName: "", lastName: "", email: "" });

      closeModal();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-[#00000090] z-50">
        <div className="rounded-3xl w-full max-w-lg border border-gray-700 bg-[#000D2C] p-8 relative">
          <div className="flex items-center mb-12">
            <div className="flex items-center">
              <img src="./image/logo.svg" alt="" className="w-[50px]" />
              <h1 className="text-white text-3xl font-bold">RendBit</h1>
            </div>
            <button
              className="ml-auto cursor-pointer text-gray-400 hover:text-white"
              onClick={closeModal}
              aria-label="Close modal"
              type="button"
            >
              X
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

            <button
              type="submit"
              className="w-full cursor-pointer bg-[#0A1F35] text-white py-4 rounded-lg hover:bg-gray-800 font-bold tracking-wide uppercase"
            >
              {processing ? "Joining..." : "JOIN WAIT-LIST"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RendBitWaitlistForm;
