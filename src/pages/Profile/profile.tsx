import { useContext, useEffect } from "react";

import { useHistory } from "react-router-dom";

import UserContext from "../../context/UserContext";

import { FormProfile } from "./Form";

import "react-toastify/dist/ReactToastify.css";

import css from "./profile.module.css";

export default function Profile() {
  const { user } = useContext<any>(UserContext);

  const history = useHistory();

  useEffect(() => {
    if (!user.id) {
      history.push("/");
    }
  });

  return (
    <>
      <div className={css.ProfileContainer}>
        <FormProfile
          user={user}
          handleclick={(v: any) => history.push("/repos")}
        />
      </div>
    </>
  );
}
