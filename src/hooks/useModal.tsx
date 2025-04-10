import { useEffect, useState } from "react";

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isModalOpen) {
      setIsModalOpen(false);
    } else {
      setIsModalOpen(true);
    }
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return {
    isModalOpen,
    openModal,
    closeModal,
    setIsModalOpen,
  };
};

export default useModal;
