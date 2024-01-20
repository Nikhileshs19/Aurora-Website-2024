import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AllUsers = () => {

    const navigate = useNavigate();

    const getGoogleData = async () => {
        try {
            const response = await axios.get("http://localhost:6005/login/success", { withCredentials: true });

        } catch (error) {
            //console.log("error", error)
            navigate('/*')
        }
    }
    useEffect(() => {
      getGoogleData()
    }, [])

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("http://localhost:6005/get-all-user", {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userData");
                setData(data.data)
            })
    }, [])

    const cellStyle = {
        border: '1px solid white',
        padding: '8px',
        textAlign: 'left',
      };

    return (
        <>
            <div style={{color:'white'}}><h1>All Registered Users</h1></div>
            <table style={{ borderCollapse: 'collapse', width: '100%', color: 'white' }}>
                <tr>
                    <th style={cellStyle}>Name</th>
                    <th style={cellStyle}>Registration No.</th>
                    <th style={cellStyle}>Phone No</th>
                    <th style={cellStyle}>Learners ID</th>
                    <th style={cellStyle}>Email ID</th>
                    <th style={cellStyle}>Branch</th>
                    <th style={cellStyle}>Workshops</th>
                    <th style={cellStyle}>UPI ID</th>
                    <th style={cellStyle}>Transaction ID</th>
                    <th style={cellStyle}>Screenshot</th>
                </tr>
                {data.map(i => {
                    return (
                        <tr>
                            <th style={cellStyle}>{i.name}</th>
                            <th style={cellStyle}>{i.regNo}</th>
                            <th style={cellStyle}>{i.phoneNo}</th>
                            <th style={cellStyle}>{i.learnerid}</th>
                            <th style={cellStyle}>{i.email}</th>
                            <th style={cellStyle}>{i.branch}</th>
                            <th style={cellStyle}>{i.workshops.map(a=>{return(<li>{a}</li>)})}</th>
                            <th style={cellStyle}>{i.upiID}</th>
                            <th style={cellStyle}>{i.txnID}</th>
                            <th style={cellStyle}><img src={i.screenshot} style={{ width: '10rem'}}/></th>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}

export default AllUsers