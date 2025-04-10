import React, { useState, ChangeEvent, FormEvent } from 'react';
// import { X } from 'lucide-react';

// Define the form data structure
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
//   walletAddress: string;
}

// Define the component props
interface RendBitWaitlistFormProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const RendBitWaitlistForm: React.FC<RendBitWaitlistFormProps> = ({ setIsModalOpen }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

    console.log(formData);
    
    e.preventDefault();
    const res = await fetch('https://rendbit-waitlist-server.onrender.com/waitlist-api/user/join', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'API_KEY':'FDAye5u6y52jk6ryh3n:OIYUITRUIQTjdgcn2bvGFASdjtkyuj,tdnfkhu8&^*%&E%IDTycghjmbnerh'
      },
      body: JSON.stringify(formData),
    });
    console.log(res);
    
    if (!res.ok) {
      console.error('Error submitting form:', res.statusText);
      return;
    }
    const data = await res.json();
    console.log('Form submitted successfully:', data);
    // Handle successful form submission
    console.log('Form submitted:', formData);
    // API call would go here
    // After successful submission, you could close the modal:
    // setIsModalOpen(false);
  };

  const handleClose = (): void => {
    setIsModalOpen(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-50">
      <div className="rounded-3xl w-full max-w-lg border border-gray-700 bg-[#000D2C] p-8 relative">
        <div className="flex items-center mb-12">
          <div className="flex items-center">
            <div className="text-blue-400 mr-2">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 36L4 18L24 4L44 18L36 36H12Z" fill="#4299E1" />
                <circle cx="36" cy="12" r="4" fill="#63B3ED" />
              </svg>
            </div>
            <h1 className="text-white text-3xl font-bold">RendBit</h1>
          </div>
          <button 
            className="ml-auto text-gray-400 hover:text-white"
            onClick={handleClose}
            aria-label="Close modal"
            type="button"
          >
            X
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
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
              className="w-full rounded-lg bg-gray-900 border-none p-4 text-white"
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
              className="w-full rounded-lg bg-gray-900 border-none p-4 text-white"
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
              className="w-full rounded-lg bg-gray-900 border-none p-4 text-white"
              required
            />
          </div>
          
          {/* <div className="mb-10">
            <label htmlFor="walletAddress" className="block text-white mb-2">
              Stellar Wallet Address
            </label>
            <input
              type="text"
              id="walletAddress"
              name="walletAddress"
              value={formData.walletAddress}
              onChange={handleChange}
              className="w-full rounded-lg bg-gray-900 border-none p-4 text-white"
              required
            />
          </div> */}
          
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-4 rounded-lg hover:bg-gray-800 font-bold tracking-wide uppercase"
          >
            JOIN WAIT-LIST
          </button>
        </form>
      </div>
    </div>
  );
};

export default RendBitWaitlistForm;