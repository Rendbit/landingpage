import { useState } from "react";

const useModal = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const toggleModal = () => {
        setIsModalOpen((prev) => !prev);
    };

    return {
        isModalOpen,
        openModal,
        closeModal,
        toggleModal,
        setIsModalOpen,
    };
};

export default useModal;