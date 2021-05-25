import { useState } from "react";

import { useHistory } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

import { FormSignUp } from "./Form";

import "react-toastify/dist/ReactToastify.css";

import { postUser } from "../../services/public";

//import img from "../../assets/img/banner.jpg";

import css from "./signup.module.css";

export default function SignUp() {
  const [clearForm, setClearForm] = useState<boolean>(false);
  const history = useHistory();

  const insertUser = async (values: any) => {
    const { data, error } = await postUser(values);
    if (data?.id) {
      displayToast(true);
      setClearForm(!clearForm);
    } else if (error) {
      displayToast(false);
    }
  };

  const displayToast = (flag: boolean) => {
    if (flag) {
      toast.success(<div>Registrado existosamente</div>);
      history.push("/")
    } else {
      toast.error(<div>Revise los campos, o ya se encuentra registrado</div>);
    }
  };

  return (
    <>
      <ToastContainer autoClose={5000} draggable={false} />
      <div className={css.SingUpContainer}>
        <div className={css.SignUpTxt}>Registro</div>
      </div>
      
      <div className={css.SingUpContainer}>
        <FormSignUp
          handleclick={(v: any) => insertUser(v)}
          clearForm={clearForm}
        />
      </div>
    </>
  );
}
