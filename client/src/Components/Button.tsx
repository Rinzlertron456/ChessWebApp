export const Button = ( { fontSize , player }) => {
    return(
        <button className="btn-ai">
            <span className="flex"><p style={{fontSize:`${fontSize}`}} data-start="good luck!" data-text="start!" data-title="Play with {player}"></p></span>
        </button>
    )
}