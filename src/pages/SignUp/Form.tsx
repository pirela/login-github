import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import css from "./Form.module.css";

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

const FormSignUp = ({ handleclick, clearForm }: any) => {
  const classes = useStyles();

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState("");

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    handleclick({
      nombre,
      apellido,
      email,
      usuario,
    });
  };

  useEffect(() => {
    setNombre("");
    setApellido("");
    setEmail("");
    setUsuario("");
  }, [clearForm]);

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={4}>
        <Grid item md={6} xs={12}>
          <TextField
            className={classes.root}
            fullWidth
            placeholder={"Nombre"}
            value={nombre}
            onChange={(e: any) => setNombre(e.target.value!)}
            defaultValue="Nombre"
            variant="outlined"
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField
            className={classes.root}
            fullWidth
            placeholder={"Apellido"}
            value={apellido}
            onChange={(e: any) => setApellido(e.target.value!)}
            defaultValue="Apellido"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className={classes.root}
            fullWidth
            placeholder={"Correo electrónico"}
            value={email}
            onChange={(e: any) => setEmail(e.target.value!)}
            defaultValue="Email"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className={classes.root}
            inputProps={{
              style: { fontFamily: "AkkuratPro" },
            }}
            fullWidth
            placeholder={"Usuario"}
            value={usuario}
            onChange={(e: any) => setUsuario(e.target.value!)}
            defaultValue="Usuario"
            variant="outlined"
          />
        </Grid>
        <Grid item md={8} xs={2} />
        <Grid item md={4} xs={10}>
          <Button
            className={css.FormBtn}
            variant="contained"
            disableElevation
            fullWidth
            type="submit"
          >
            Registrar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export { FormSignUp };
