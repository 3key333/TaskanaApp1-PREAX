import './Button.css'

function Button() {
    return(
        <div className="header-button-container">

            <button className="header-button" type="button">
                <img src="/header-btn-light.svg" alt="plus icon" />
                <span>Создать</span>
            </button>

        </div>
    )
}

export default Button
export { Button }