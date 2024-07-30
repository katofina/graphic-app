import "./Save.css";
import React from "react";
import { storage } from "../../firebase";
import { getSession } from "../../storage/session";
import { useEffect, useState } from "react";

function Save() {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    storage
      .ref()
      .child(`images${getSession().email}`)
      .listAll()
      .then((res) => {
        res.items.forEach((item) => {
          item
            .getDownloadURL()
            .then((res) => setData((data) => data.concat(res)));
        });
      });
  }, []);

  if (data.length)
    return (
      <>
        <ul className="ulSave">
          {data.map((item, index) => (
            <img src={item} alt="saveImg" className="saveImg" key={index} />
          ))}
        </ul>
      </>
    );
}

export default Save;
