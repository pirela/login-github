import { useEffect, useState, useContext } from "react";

import { makeStyles } from "@material-ui/core/styles";

import { useHistory } from "react-router-dom";

import UserContext from "../../context/UserContext";

import TextField from "@material-ui/core/TextField";

import { ListReposForm } from "./Form";

import "react-toastify/dist/ReactToastify.css";

import Button from "@material-ui/core/Button";

import css from "./ListRepos.module.css";

import { getUserReposGitHub } from "../../services/public";

import { ToastContainer, toast } from "react-toastify";

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#0069fa",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "#474748",
      fontFamily: "AkkuratPro",
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#0069fa",
    },
  },
});

export default function ListRepos() {
  const classes = useStyles();

  const [usuario, setUsuario] = useState("");

  const { user } = useContext<any>(UserContext);

  const history = useHistory();

  const [dataRepos, setDataRepos] = useState([]);

  const getRepost = async (usuario: string) => {
    try {
      const data = await getUserReposGitHub(usuario);
      setDataRepos(data);
    } catch (error) {
      console.info("error");
    }
  };

  const displayToast = (flag: boolean) => {
    if (flag) {
      toast.success(<div>Agregado a los favoritos</div>);
    } else {
      toast.error(<div>Eliminado de los favoritos</div>);
    }
  };

  useEffect(() => {
    if (!user.id) {
      history.push("/");
    } else {
      getRepost(user.usuario);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ToastContainer autoClose={5000} draggable={false} />
      <div className={css.ProfileContainer}>
        <Button
          className={css.FormBtn}
          variant="contained"
          disableElevation
          fullWidth
          onClick={() => history.push("/profile")}
        >
          Regresar al perfil
        </Button>

        {user.gitHub === 0 && (
          <div className={css.ListRepo2}>
            <TextField
              className={classes.root}
              fullWidth
              placeholder={"Usuario de gitHub a buscar"}
              value={usuario}
              onChange={(e: any) => setUsuario(e.target.value!)}
              variant="outlined"
            />
            <Button
              className={css.FormBtn}
              variant="contained"
              disableElevation
              fullWidth
              onClick={() => getRepost(usuario)}
            >
              Buscar
            </Button>
          </div>
        )}

        <div className={css.ProfileTxt}> Lista de repositorios </div>
        <ListReposForm
          handleclick={(v: any) => console.info(v)}
          dataRepos={dataRepos}
          displayToast={displayToast}
        />
      </div>
    </>
  );
}
