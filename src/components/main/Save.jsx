import './Save.css';
import { storage } from "../../firebase";
import { getSession } from "../../storage/session";
import { useEffect, useState } from "react";

function Save() {
    const [data, setData] = useState([]);

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
                {data.map((item) => (
                    <img src={item} alt="saveImg" className="saveImg" key={item.index}/>
                ))}
            </ul>
        </>
    )
}

export default Save;