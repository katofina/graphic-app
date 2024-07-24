import './Save.css';
import React from 'react';
import { storage } from "../../firebase.ts";
import { getSession } from "../../storage/session.ts";
import { useEffect, useState } from "react";

function Save() {
    const [data, setData] = useState<string[]>([]);
    console.log(data);

    useEffect(() => {
        storage
            .ref()
            .child(`images${getSession().email}`)
            .listAll()
            .then((res) => {
                console.log(res.items);
                res.items.forEach((item) => {
                    item.getDownloadURL().then((res) => setData((data) => data.concat(res)));
                });
            });
    }, [])

    if(data.length) return (
        <>
            <ul className="ulSave">
                {data.map((item, index) => (
                    <img src={item} alt="saveImg" className="saveImg" key={index}/>
                ))}
            </ul>
        </>
    )
}

export default Save;