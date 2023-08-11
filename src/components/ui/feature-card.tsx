import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { Container } from "./container";

type Props = {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  description: string;
  image: React.ReactNode;
  icon?: React.ReactNode;
};

export const FeatureCard: React.FC<PropsWithChildren<Props>> = ({
  title,
  subtitle,
  description,
  image,
  icon,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Container className="md:flex md:justify-between md:items-center bg-white rounded-2xl shadow-sm p-10">
        <div className="md:w-5/12 mb-8 md:mb-0">
          {subtitle ? (
            <h4 className="font-bold uppercase tracking-wider text-sm mb-5 text-blue-950 flex items-center font-[Lexend]">
              {icon ? icon : null}
              <span className="ml-2">{subtitle}</span>
            </h4>
          ) : null}

          <h2 className="text-2xl md:text-4xl font-bold mb-6 md:leading-[52px] text-blue-950 font-[Lexend]">
            {title}
          </h2>
          <p className="md:leading-8 md:text-lg">{description}</p>
        </div>
        <div className="rounded-xl overflow-hidden md:w-6/12 hidden md:block">
          {image}
        </div>
      </Container>
    </motion.div>
  );
};
