"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";

const Modal = () => {
  let [isOpen, setIsOpen] = useState(true);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button type="button" className="btn" onClick={openModal}>
        Track
      </button>
    </>
  );
};

export default Modal;
