import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

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

const FormSignIn = ({ handleclick, clearForm }: any) => {
  const classes = useStyles();

  const history = useHistory();

  const [usuario, setUsuario] = useState("");

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    handleclick({
      usuario,
    });
  };

  useEffect(() => {
    setUsuario("");
  }, [clearForm]);

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={4}>
        <Grid item md={12} xs={12}>
          <TextField
            className={classes.root}
            inputProps={{
              style: { fontFamily: "AkkuratPro" },
            }}
            fullWidth
            placeholder={"Usuario"}
            value={usuario}
            onChange={(e: any) => setUsuario(e.target.value!)}
            defaultValue="usuario"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={6}>
          <Button
            className={css.FormBtn}
            variant="contained"
            disableElevation
            fullWidth
            onClick={() => history.push("/singUp")}
          >
            Registrar
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button
            className={css.FormBtn}
            variant="contained"
            disableElevation
            fullWidth
            type="submit"
          >
            Ingresar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export { FormSignIn };
