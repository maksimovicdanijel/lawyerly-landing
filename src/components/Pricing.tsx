import React from "react";
import { motion } from "framer-motion";
import { Container } from "./ui/container";
import { PricingTable } from "./ui/pricing-table";
import { Button } from "./ui/button";

export const Pricing: React.FC = () => {
  return (
    <motion.div className="w-full mt-16" id="pricing">
      <Container>
        <div className="text-center mb-16">
          <h3 className="text-blue-950 md:text-center text-2xl md:text-[40px] font-[Lexend] mb-3">
            Pronađi paket za sebe.
          </h3>
          <p className="text-slate-600 md:text-[18px]">
            Izaberi paket koji najviše odgovara tvojim potrebama.
          </p>
        </div>

        <div className="md:flex justify-between gap-8 items-center">
          <div className="flex-1 mb-12 md:mb-0">
            <PricingTable
              price="17€"
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

          <div className="flex-1 mb-12 md:mb-0">
            <PricingTable
              highlighted
              price="29€"
              title="Srednji"
              description="Za tvoj uvećani obim posla i bolje finansije."
              action={
                <button className="w-full bg-white rounded-lg p-3 text-blue-950 box-sh shadow font-[500]">
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
              price={
                <span>
                  50€
                  <span className="text-slate-600 text-sm">/po korisniku</span>
                </span>
              }
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
