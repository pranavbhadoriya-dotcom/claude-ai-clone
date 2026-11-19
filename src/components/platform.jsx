import './platform.css'

const Platform = () => {
    return (
        <>
            <div className="platform-1">
                <div className="column">
                    <h4>Build on claude</h4>
                    <p> Overview </p>
                    <p>Pricing</p>
                    <div className="d-flex justify-content-between align-items-center mb-3"><span>Developer Docs </span><i class="bi bi-box-arrow-up-right"></i></div>
                    <div className="d-flex justify-content-between align-items-center mb-3"><span>Consol login</span> <i class="bi bi-box-arrow-up-right"></i> </div>
                </div>

                <div className="column">
                    <h4>Features</h4>
                    <p>Claude for Chrome</p>
                    <p>Claude for Microsoft 365</p>
                    <p>Skills</p>
                </div>
            </div>
        </>
    )
}
export default Platform