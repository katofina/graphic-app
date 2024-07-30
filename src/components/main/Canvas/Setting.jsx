import { useDispatch } from "react-redux";
import option from "../../../store/optionSlice";

const Settings = () => {
    const dispatch = useDispatch();

    return (
        <div className="panel-setting">
            <label style={{marginLeft: '10px'}} htmlFor="width">Width of line: </label>
            <input 
                style={{margin: '0 10px'}} 
                id="width" 
                type="number" 
                min={1} 
                max={20} 
                defaultValue={1}
                onChange={(e) => {dispatch(option.actions.setLineWidth(e.target.value));}}
            />
            <label style={{marginLeft: '10px'}} htmlFor="checkbox">Filling: </label>
            <input 
                style={{margin: '0 10px'}} 
                id="checkbox" 
                type="checkbox" 
                onChange={(e) => dispatch(option.actions.setFilling(e.target.checked))}
            />

            <label style={{marginLeft: '10px'}} htmlFor="checkbox">Color of filling: </label>
            <input 
                style={{margin: '0 10px'}} 
                id="colorFill" 
                type="color" 
                onChange={(e) => dispatch(option.actions.setFillColor(e.target.value))}
            />
        </div>
    )
}
export default Settings;