import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import Button  from "@mui/material/Button";
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useOrganizationContext } from '../../contexts/OrganizationContext'
import './githublist.scss';
import { GithubMemberEntity } from "../../models/GitHub";


const GitHubList: React.FC = () => {
  const {organization, setOrganization} = useOrganizationContext()
  const [members, setMembers] = useState<GithubMemberEntity[]>([]);
  const [showMembersError, setShowMembersError] = useState(false)
  const [organizationSearch, setOrganizationSearch] = useState<string>(organization)

  React.useEffect(() => {
    setShowMembersError(false)
    getOrganization()
  }, [organization]);

  const getOrganization = () => {
    fetch(`https://api.github.com/orgs/${organizationSearch}/members`)
      .then((response) => response.json())
      .then((json) => {
        if(json.length > 0) setMembers(json)
        else handleMembersError()
      } );
  }

  const handleSearchOrganization = (e) => {
    e.preventDefault()
    setOrganization(organizationSearch)
  }

  const handleMembersError = () => {
    setMembers([])
    setShowMembersError(true)
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

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
          <Link className="link" to={`/githublist/${params.value}`} state={{user: params.row}}>{params.value}</Link>
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
                size="large"
                style={{padding: '14px 22px'}}
                disabled={organizationSearch === '' || organizationSearch.length < 3 ? true : false}
              >Buscar</Button>
            </div>
          </form>
        </div>
        {
          showMembersError && 
            <Stack spacing={1} style={{marginBottom: '1rem'}}>
              <Item style={{fontSize: '1.2rem'}}>
                No se encuentran miembros para esta organización: {organization}
              </Item>
            </Stack>
        }
        <DataGrid
          rows={members}
          columns={columns}
          className="members-list-grid"
          style={{minHeight: '150'}}
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
        {
          !showMembersError && 

            <Stack className="navigation-link" spacing={1}>
              <Item style={{fontSize: '1.2rem'}}>Para navegar a la página de usuario hacer click en su nombre</Item>
            </Stack>
        }
        <Link to={'/home'} style={{marginTop:'2rem', display: 'inline-block'}}>
            <Button variant='contained' color='info' size="small">Volver</Button>
        </Link>
      </div>
    </div>
  );
};

export default GitHubList;