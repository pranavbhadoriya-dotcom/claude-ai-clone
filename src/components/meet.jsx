import './meet.css'
import './header.css'

const Meet = () => {
    return (
        <div className="card1">
            <div className="column">
                <h4>Products</h4>
                <p> Claude </p>
                <p>Claude Code</p>
                <p>Claude Cowork</p>
                <p> @Claude </p>
            </div>

            <div className="column">
                <h4>Features</h4>
                <p>Claude for Chrome</p>
                <p>Claude for Microsoft 365</p>
                <p>Skills</p>
            </div>

            <div className="column">
                <h4>Claude apps built for</h4>
                <p>Design</p>
                <p>Security</p>
            </div>

            <div className="column">
                <h4>Models</h4>
                <div className="d-flex justify-content-between align-items-center mb-3"><span>Mythos</span><i class="bi bi-box-arrow-up-right"></i></div>
                <div className="d-flex justify-content-between align-items-center mb-3"><span>Fable </span><i class="bi bi-box-arrow-up-right"></i></div>
                <div className="d-flex justify-content-between align-items-center mb-3"> <span>Opus </span><i class="bi bi-box-arrow-up-right"></i></div>
                <div className="d-flex justify-content-between align-items-center mb-3"><span>Sonnet</span><i class="bi bi-box-arrow-up-right"></i></div>
                <div style={{ display: "flex", gap: "60px" }}><span>Haiku </span><i class="bi bi-box-arrow-up-right"></i></div>
            </div>
        </div>
    )
}

export default Meet