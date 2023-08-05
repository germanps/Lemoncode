import React from "react";
import { Link } from "react-router-dom";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import './list.scss';

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

const List: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/lemoncode/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }, []);

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
            <img className="image" src={params.value} />
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
      <h2 className="list-title">Hello from List page</h2>
      <div className="list-grid-wrapper">
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