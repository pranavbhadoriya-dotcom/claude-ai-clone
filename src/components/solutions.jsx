import './solutions.css'

const Solutions = () => {
    return (
        <div className="solutions">
            <div className="column">
                <h4>use cases</h4>
                <p> Ai Agent </p>
                <p> Coding</p>
            </div>

            <div className="column">
                <h4>Company Size</h4>
                <p>Start-up</p>
                <p>Enterprise</p>
            </div>

            <div className="column">
                <h4>Departments</h4>
                <p>Legal</p>
                <p>Security</p>
            </div>

            <div  className="column1">
                <h4>Industries</h4>
                <div className="d-flex gap-5">
                    <div  className="column2">
                        <p>Costumer Support</p>
                        <p>Education</p>
                        <p>Finencial Services</p>
                        <p>Government</p>
                    </div>
                    <div  className="column2">
                        <p>Helthcare</p>
                        <p>Life Sciences</p>
                        <p>Nonprofits</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Solutions