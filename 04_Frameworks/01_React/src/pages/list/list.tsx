import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import Button  from "@mui/material/Button";
import SearchIcon from '@mui/icons-material/Search';
import './list.scss';

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

const List: React.FC = () => {
  const [members, setMembers] = useState<MemberEntity[]>([]);
  const [organization, setOrganization] = useState<string>('lemoncode')
  const [organizationSearch, setOrganizationSearch] = useState<string>(organization)

  React.useEffect(() => {
    getOrganization()
  }, [organization]);

  const getOrganization = () => {
    fetch(`https://api.github.com/orgs/${organizationSearch}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }

  const handleSearchOrganization = (e) => {
    e.preventDefault()
    setOrganization(organizationSearch)
  }
  

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 150 },
    {
      field: 'avatar_url',
      headerName: 'Avatar',
      width: 90,
      editable: true,
      renderCell: (params) => {
        return(
          <div className="avatar-cell">
            <img className="image" src={params.value} title="avatar image" />
          </div>
        )
      }
    },
    {
      field: 'login',
      headerName: 'Nombre',
      width: 200,
      editable: true,
      renderCell: (params) => {
        return (
          <Link to={`/detail/${params.value}`}>{params.value}</Link>
        )
      }
    },
  ];

  return (
    <div className="list">
      <h2 className="list-title">
        <span>Listado de organizaciones</span>
      </h2>
      <div className="list-grid-wrapper">
        <div className="list-grid-header">
          <h3 className="list-sub-title">Listado organización <span>{organization}</span></h3>
          <form className="filter-wrapper" onSubmit={handleSearchOrganization}>
            <div className="control-wrapper">
              <TextField 
                id="outlined-basic" 
                label="Busca por orzanización" 
                variant="outlined" 
                placeholder="Ingresa una organización"
                onChange={(e) => setOrganizationSearch(e.target.value)}
                value={organizationSearch}
              />
            </div>
            <div className="control-wrapper">
              <Button 
                type="submit" 
                variant="contained"
                endIcon={<SearchIcon />}
                disabled={organization === '' || organization.length < 3 ? true : false}
              >Buscar</Button>
            </div>
          </form>
        </div>
        <DataGrid
          rows={members}
          columns={columns}
          className="members-list-grid"
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection={false}
          disableRowSelectionOnClick
        />
        <div className="navigation-link">
          <Link to="/detail">Navigate to detail page</Link>
        </div>
      </div>
    </div>
  );
};

export default List;