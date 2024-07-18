const Instruments = () => {
    return (
        <div className="panel-instrument">
            <button className="instrument-button brush"></button>
            <button className="instrument-button square"></button>
            <button className="instrument-button circle"></button>
            <button className="instrument-button rubber"></button>
            <button className="instrument-button line"></button>
            <input type="color" style={{marginLeft:10}}/>
            <button className="instrument-button back"></button>
            <button className="instrument-button forward"></button>
            <button className="instrument-button save"></button>
        </div>
    )
}

export default Instruments;