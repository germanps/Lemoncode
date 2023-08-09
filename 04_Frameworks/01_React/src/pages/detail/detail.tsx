import React from "react"
import { Link, useLocation, useParams } from "react-router-dom"
import Button  from "@mui/material/Button"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import './detail.scss'

const Detail: React.FC = () => {
  const {id} = useParams();
  const {state} = useLocation()

  const [userRepos, setUserRepos] = React.useState([])

  React.useEffect(() => {
    getRepos()
  }, [state])
  
  const getRepos = () => {
    fetch(state.user.repos_url)
      .then((response) => response.json())
      .then((json) => setUserRepos(json))
  }
  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Nombre',
      width: 250,
      editable: false,
      
    },
    {
      field: 'description',
      headerName: 'Descripción',
      width: 590,
      editable: false,
      
    },
    {
      field: 'html_url',
      headerName: 'Ver repositorio',
      headerAlign: "right",
      width: 150,
      align: 'right',
      editable: false,
      renderCell: (params) => {
        return(
          <div className="avatar-cell">
            <a className="link" href={params.value} target="_blank">Ir al repo</a>
          </div>
        )
      }
    },

  ];

  return (
    <div className="detail">
      <h2 className="detail-title">
        <span>Detalle de usuario <span className="user">{id}</span></span>
      </h2>
      <div className="details-container">
        <div className="detail-user-image-wrapper">
          <img src={state.user.avatar_url} title="avatar image" />
        </div>
        <h3 className="grid-title">Repositorios</h3>
        <DataGrid
          rows={userRepos}
          columns={columns}
          className="repos-list-grid"
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection={false}
          disableRowSelectionOnClick
        />
        <Link to="/githublist">
          <Button 
            type="button" 
            variant="contained"
            startIcon={<ArrowBackIcon />}
          >Volver al listado</Button>
        </Link>
      </div>
    </div>
  );
};

export default Detail