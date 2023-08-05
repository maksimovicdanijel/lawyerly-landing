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
      <div className="2xl:w-[1280px] xl:w-10/12 w-9/12 flex flex-col pt-40 sm:pt-16 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="text-4xl sm:text-7xl font-bold drop-shadow-sm text-center tracking-tight text-blue-950 font-[Lexend]">
            <span className="md:inline">Advokatska kancelarija</span>
          </div>
          <div className="text-center sm:mt-5 text-4xl sm:text-7xl font-bold tracking-tight">
            <Highlighted>u tvom džepu</Highlighted>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="sm:text-[22px] mt-7 sm:w-[600px] text-center m-auto sm:leading-9 text-indigo-950 drop-shadow-sm">
            Kompletno rešenje za tvoju advokatsku kancelariju dostupno uvek i na
            svim uređajima
          </div>
        </motion.div>

        <motion.div
          className="text-center sm:mt-20 mt-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Button onClick={() => setInvitationVisible(!invitationVisible)}>
            Isprobaj besplatno
          </Button>
        </motion.div>
      </div>
      {invitationVisible ? (
        <InvitationModal onClose={() => setInvitationVisible(false)} />
      ) : null}
    </section>
  );
};
