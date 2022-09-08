import "./UserList.css";
import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutlineOutlined } from '@material-ui/icons';
import { userRows } from "../../data";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {
    const [data,setData]= useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item)=> item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img src={params.row.avatar} alt="" />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'transaction',
            headerName: 'transaction volume',
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 120,
            renderCell: (params) => {
                return (
                    <>
                        <Link to = {"/user/"+params.row.id}>
                            <button className="userListEdit">Edit </button>
                        </Link>
                        <DeleteOutlineOutlined className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
                    </>
                )
            }
        }
    ];

    return (
        <div className="userList">
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={9}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}
