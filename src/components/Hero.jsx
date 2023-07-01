import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";
import dashboard from "../assets/images/dashboard.jpg";

export const Hero = () => {
  return (
    <section
      className="pattern-bg w-screen h-screen flex justify-center items-center pb-24 sm:pb-32 md:pb-44 lg:pb-0"
      id="home"
    >
      <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex flex-col pt-16 md:pt-16 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="text-7xl font-bold drop-shadow-sm text-center tracking-tight text-slate-900">
            <span className="hidden md:inline">Advokatska kancelarija</span>
          </div>
          <div className="text-center mt-5 text-7xl font-bold  text-customPrimary drop-shadow-sm text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-indigo-900 tracking-tight">
            u tvom džepu
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="text-[22px] mt-7 w-[600px] text-center m-auto leading-9 text-indigo-950 font-light drop-shadow-sm">
            Ovde ide neki tekst koji opisuje cemu sluzi aplikacija, i koje
            probleme resava
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <a className="custom-button-colored px-10 py-3 box-sh shadow">
            Isprobal besplatno
          </a>
        </motion.div>
      </div>
    </section>
  );
};
