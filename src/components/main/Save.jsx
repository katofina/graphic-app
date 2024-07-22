import { useSelector } from "react-redux";
import './Save.css';

function Save() {
    const arrSave = useSelector(store => store.canvas.save);
    return (
        <>
            <ul className="ulSave">
                {arrSave.map((item) => (
                    <img src={item} alt="saveImg" className="saveImg" key={item.index}/>
                ))}
            </ul>
        </>
    )
}

export default Save;