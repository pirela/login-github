import React, { useContext, useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import css from "./Form.module.css";

import UserContext from "../../context/UserContext";
import { useHistory } from "react-router-dom";

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

const FormProfile = ({ handleclick, clearForm, user }: any) => {
  const classes = useStyles();

  const history = useHistory();

  const { setUser } = useContext<any>(UserContext);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [usuario, setUsuario] = useState("");
  const [publicRepos, setPublicRepos] = useState(0);

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    handleclick({
      usuario,
    });
  };

  useEffect(() => {
    setNombre(user?.nombre || user?.name);
    setApellido(user?.apellido || "");
    setUsuario(user?.usuario || user?.login);
    setPublicRepos(user?.public_repos || 0);
  }, [user]);

  const cerrarSesion = () => {
    setUser({});
    history.push("/");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={4}>
        <Grid item md={12} xs={12}>
          <TextField
            className={classes.root}
            fullWidth
            placeholder={"Nombre"}
            value={nombre}
            onChange={(e: any) => setNombre(e.target.value!)}
            variant="outlined"
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <TextField
            className={classes.root}
            fullWidth
            placeholder={"Apellido"}
            value={apellido}
            onChange={(e: any) => setApellido(e.target.value!)}
            variant="outlined"
          />
        </Grid>

        <Grid item md={12} xs={12}>
          <TextField
            className={classes.root}
            fullWidth
            placeholder={"usuario"}
            value={usuario}
            onChange={(e: any) => setUsuario(e.target.value!)}
            variant="outlined"
          />
        </Grid>

        <Grid item md={12} xs={12}>
          <TextField
            className={classes.root}
            fullWidth
            placeholder={"Repositorios publicos"}
            value={publicRepos}
            disabled
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            className={css.FormBtn}
            variant="contained"
            disableElevation
            fullWidth
            type="submit"
          >
            Ver repositorios
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Button
            className={css.FormBtn}
            variant="contained"
            disableElevation
            fullWidth
            onClick={() => cerrarSesion()}
          >
            Cerrar sesión
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export { FormProfile };
