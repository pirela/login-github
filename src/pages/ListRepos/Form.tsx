import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import css from "./Form.module.css";

const ListReposForm = ({ handleclick, dataRepos, displayToast }: any) => {
  const [dataRepoFav, setDataRepoFav] = useState<any>([]);

  const addRepoFav = (index: any) => {
    setDataRepoFav([...dataRepoFav, dataRepos[index]]);
    displayToast(true);
  };

  const deleteRepoFav = (index: any) => {
    const newData = [...dataRepoFav];
    newData.splice(index, 1);
    setDataRepoFav(newData);
    displayToast(false);
  };
  return (
    <div className={css.FormReposContainer}>
      {dataRepos.map((repo: any, index: any) => (
        <Grid container className={css.FormReposMargin}>
          <Grid item xs={10}>
            <div key={repo.id}> {repo.name} </div>
          </Grid>
          <Grid item xs={2}>
            <Button
              className={css.FormBtn}
              variant="contained"
              disableElevation
              fullWidth
              onClick={() => addRepoFav(index)}
            >
              Favorito
            </Button>
          </Grid>
        </Grid>
      ))}

      <div className={css.FormReposTxt}>Repositorios favoritos</div>

      {dataRepoFav.map((repo: any, index: any) => (
        <Grid container className={css.FormReposMargin}>
          <Grid item xs={10}>
            <div key={repo.id}> {repo.name} </div>
          </Grid>
          <Grid item xs={2}>
            <Button
              className={css.FormBtn}
              variant="contained"
              disableElevation
              fullWidth
              onClick={() => deleteRepoFav(index)}
            >
              eliminar
            </Button>
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

export { ListReposForm };
