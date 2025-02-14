export const Button = ( { fontSize , player , handleLetsPlay }) => {
    return(
        <button className="btn-ai" onClick={()=>handleLetsPlay()}>
            <span className="flex"><p style={{fontSize:`${fontSize}`}} data-start="good luck!" data-text="start!" data-title={`Play with ${player}`}></p></span>
        </button>
    )
}