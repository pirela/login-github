import { useContext, useState } from "react";

import { useHistory } from "react-router-dom";

import UserContext from "../../context/UserContext";

import { ToastContainer, toast } from "react-toastify";

import { FormSignIn } from "./Form";

import "react-toastify/dist/ReactToastify.css";

import { getUserGitHub, getByUser, postUser } from "../../services/public";

import css from "./signin.module.css";

export default function SignIn() {
  const history = useHistory();

  const { setUser } = useContext<any>(UserContext);

  const [clearForm, setClearForm] = useState<boolean>(false);

  const insertUser = async (values: any) => {
    try {
      const { data, error } = await getByUser(values.usuario);

      if (data?.id) {
        setUser(data);
        history.push("/profile");
      } else if (error) {
        const userGit = await getUserGitHub(values.usuario);
        if (userGit?.id) {
          setUser(userGit);
          setClearForm(!clearForm);
          await postUser({
            nombre: userGit.name,
            email: userGit.email || "Sin email",
            gitHub: 1,
            usuario: userGit.login,
          });
          history.push("/profile");
        }
      }
    } catch (error) {
      displayToast(false);
    }
  };

  const displayToast = (flag: boolean) => {
    if (flag) {
      toast.success(<div>Registrado existosamente</div>);
    } else {
      toast.error(
        <div>No hemos encontrado el usuario, verifique los datos</div>
      );
    }
  };

  return (
    <>
      <ToastContainer autoClose={5000} draggable={false} />
      <div className={css.SingUpContainer}>
        <div className={css.SignUpTxt}>Bienvenido</div>
      </div>

      <div className={css.SingUpContainer2}>
        <p className={css.SignUpParagraph}>
          Ingrese su usuario de gitHub o el usuario con el que se registro
        </p>
        <FormSignIn
          handleclick={(v: any) => insertUser(v)}
          clearForm={clearForm}
        />
      </div>
    </>
  );
}
