import { motion, AnimatePresence } from "framer-motion";

import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import { CloseIcon } from "../assets/icons/CloseIcon";
import { Button } from "./ui/button";
import { FormEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type Props = {
  onClose?: () => void;
  onSubscribe?: () => void;
};

const signUpSchema = yup.object({
  email: yup.string().email().required("Email polje je obavezno"),
});

type SignUpSchema = yup.InferType<typeof signUpSchema>;

export const InvitationModal: React.FC<Props> = ({ onClose, onSubscribe }) => {
  const { register, handleSubmit } = useForm<SignUpSchema>({
    resolver: yupResolver(signUpSchema),
  });

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const onSubmit: SubmitHandler<SignUpSchema> = async (data) => {
    setSaving(true);

    try {
      await fetch("/", {
        method: "post",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ email: data.email }).toString(),
      });
    } catch (err) {
      setError(
        "Imamo malih problema sa vašom prijavom. Molimo pokušajte malo kasnije"
      );
    } finally {
      setSaving(false);
    }

    setSaving(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, zIndex: 50 }}
        animate={{ opacity: 1, zIndex: 50 }}
        transition={{ duration: 0.1 }}
        exit={{ opacity: 0 }}
      >
        <div
          className="w-full h-full  bg-gray-400/60 fixed top-0 left-0 flex z-50 justify-center items-center"
          onClick={onClose}
        >
          <div
            className="w-full h-screen sm:h-auto sm:w-3/4 md:w-3/5 lg:w-[1000px] xl:w-[1100px] sm:rounded-2xl bg-slate-50 py-12 px-8 sm:px-16 backdrop-blur-xl sm:mb-8 fixed mx-auto z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex relative justify-center items-center">
              <div className="w-1/2 hidden lg:inline">
                <h2 className="mt-6 mb-4 text-4xl font-bold tracking-normal text-indigo-500">
                  Hvala na interesovanju!
                </h2>
                <p>
                  Aktivno radimo na razvoju aplikacije i ako želiš da budeš u
                  toku sa dešavanjima možes se prijaviti na našu email listu.
                </p>

                <ul className="mb-6 mt-6">
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>Budi u toku sa razvojem aplikacije</span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>Rani pristup aplikaciji</span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>Utiči na funkcionalnosti aplikacije</span>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-1/2 flex items-center flex-col pl-12">
                {error ? (
                  <div className="bg-red-50 rounded px-4 py-2 border-red-600 border">
                    {error}
                  </div>
                ) : null}
                <form
                  className="w-full"
                  data-netlify="true"
                  name="sign-up"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <input
                    type="email"
                    placeholder="Tvoja email adresa"
                    className="p-3 w-full rounded-lg bg-slate-50 border-slate-200 border-2  focus:border-indigo-500 outline-none focus:shadow-sm"
                    {...register("email")}
                  />
                  <Button
                    type="submit"
                    className="w-full mt-4 block"
                    disabled={saving}
                  >
                    {!saving ? "Prijavi se" : "Prijavljujem te..."}
                  </Button>
                </form>
              </div>
              <div
                className="fixed top-6 right-6 z-50 w-5 h-5 cursor-pointer"
                onClick={onClose}
              >
                <CloseIcon />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
