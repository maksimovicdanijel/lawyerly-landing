import { motion, AnimatePresence } from "framer-motion";

import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import { CloseIcon } from "../assets/icons/CloseIcon";
import { Button } from "./ui/button";
import { useState } from "react";
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
  const { register, handleSubmit, reset } = useForm<SignUpSchema>({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      email: "",
    },
  });

  const [state, setState] = useState({
    saving: false,
    error: "",
    saved: false,
  });

  const onSubmit: SubmitHandler<SignUpSchema> = async (data) => {
    setState({
      saved: false,
      error: "",
      saving: true,
    });

    try {
      await fetch("/", {
        method: "post",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          email: data.email,
          "form-name": "sign-up",
        }).toString(),
      });

      setState({
        saving: false,
        error: "",
        saved: true,
      });

      reset();
    } catch (err) {
      setState({
        error:
          "Imamo malih problema sa vašom prijavom. Molimo pokušajte malo kasnije.",
        saving: false,
        saved: false,
      });
    }
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
            className="h-auto w-[90%] sm:w-3/4 md:w-3/5 lg:w-[600px] rounded-xl bg-slate-50 py-12 px-8 sm:px-16 backdrop-blur-xl sm:mb-8 fixed mx-auto z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative justify-center items-center">
              <div className="w-full">
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
              <div className="w-full pt-6 lg:pt-0">
                {state.error ? (
                  <div className="bg-red-50 rounded px-4 py-2  text-red-800 mb-4">
                    {state.error}
                  </div>
                ) : null}

                {state.saved ? (
                  <div className="bg-green-100 rounded px-4 py-2  text-green-800 mb-4">
                    Uspešno ste prijavljeni na email listu. Hvala na
                    interesovanju!
                  </div>
                ) : null}

                <form
                  className="w-full"
                  name="sign-up"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <input type="hidden" name="form-name" value="sign-up" />
                  <input
                    type="email"
                    placeholder="Tvoja email adresa"
                    className="p-3 w-full rounded-lg bg-slate-50 border-slate-200 border-2  focus:border-indigo-500 outline-none focus:shadow-sm"
                    {...register("email")}
                  />
                  <Button
                    type="submit"
                    className="w-full mt-4 block"
                    disabled={state.saving}
                  >
                    {!state.saving ? "Prijavi se" : "Prijavljujem te..."}
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
