import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";
import dashboard from "../assets/images/dashboard.jpg";
import { Button } from "./ui/button";
import { Highlighted } from "./ui/highlighted";

export const Hero = () => {
  const [invitationVisible, setInvitationVisible] = useState(false);

  return (
    <section
      className="bg-gradient-to-b from-60% from-slate-200 to-slate-50 w-screen h-screen flex justify-center items-center pb-24 sm:pb-32 md:pb-44 lg:pb-0"
      id="home"
    >
      <div className="2xl:w-[1280px] w-11/12 flex items-center justify-between">
        <div className="flex flex-col lg:w-8/12 w-full text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <div className="text-4xl sm:text-6xl font-bold drop-shadow-sm tracking-tight leading-10 text-blue-950 font-[Lexend]">
              <span>Advokatska kancelarija</span>
            </div>
            <div className="mt-1 text-4xl sm:text-6xl font-bold tracking-tight">
              <Highlighted>u tvom džepu</Highlighted>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="sm:text-xl mt-7 w-10/12 sm:w-[600px] mx-auto lg:mx-0 sm:leading-9 text-indigo-950 drop-shadow-sm">
              Kompletno rešenje za tvoju advokatsku kancelariju dostupno uvek i
              na svim uređajima
            </p>
          </motion.div>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Button onClick={() => setInvitationVisible(!invitationVisible)}>
              Isprobaj besplatno
            </Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="w-5/12 ml-8 hidden lg:block"
        >
          <img
            src="https://placehold.co/400x500?text=Advokat ovde"
            className="rounded-xl shadow"
          />
        </motion.div>
      </div>

      {invitationVisible ? (
        <InvitationModal onClose={() => setInvitationVisible(false)} />
      ) : null}
    </section>
  );
};
