import React from "react";
import { motion } from "framer-motion";
import { Container } from "./ui/container";
import { PricingTable } from "./ui/pricing-table";
import { Button } from "./ui/button";

export const Pricing: React.FC = () => {
  return (
    <motion.div className="bg-slate-900 w-full">
      <Container className="py-20">
        <div className="text-center mb-16">
          <h3 className="text-white sm:text-center text-[40px] font-[Lexend] mb-3">
            Pronađi paket za sebe.
          </h3>
          <p className="text-slate-400 text-[18px]">
            Izaberi paket koji najviše odgovara tvojim potrebama.
          </p>
        </div>

        <div className="flex justify-between gap-8 items-center">
          <div className="flex-1">
            <PricingTable
              price={17}
              title="Osnovni"
              description="Paket za tvoje najosnovnije potrebe."
              action={<Button className="w-full">Izaberi</Button>}
              features={[
                "100 klijenata",
                "1TB dokumenata",
                "Raspored",
                "Osnovne finansije",
              ]}
            />
          </div>

          <div className="flex-1">
            <PricingTable
              highlighted
              price={29}
              title="Srednji"
              description="Za tvoj uvećani obim posla i bolje finansije."
              action={
                <button className="w-full bg-blue-50 rounded-lg p-3 text-blue-950 box-sh shadow font-[500]">
                  Izaberi
                </button>
              }
              features={[
                "500 klijenata",
                "5TB dokumenata",
                "Raspored",
                "Taskovi",
                "Napredne finansije sa analitikom",
                "Mobilna aplikacija",
                "Notifikacije (email, in-app)",
              ]}
            />
          </div>

          <div className="flex-1">
            <PricingTable
              price={50}
              title="Timski"
              description="Za advokatske timove."
              action={<Button className="w-full">Izaberi</Button>}
              features={[
                "∞ klijenata",
                "∞ prostor za dokumenta",
                "Raspored",
                "Taskovi",
                "Napredne finansije",
                "Upravljanje timom",
              ]}
            />
          </div>
        </div>
      </Container>
    </motion.div>
  );
};
