import { Link } from 'react-router-dom'
import './header.css'
import Meet from './meet'
import Platform from './platform'
import Pricing from './pricing'
import Solutions from './solutions'

const LoginHeader = () => {
    return (
        <>
        <header className="header">
         <div className="d-flex align-items-center container mt-4 justify-content-between">
                    <div> <img src="/caludeicon.png" alt="" width="140px" height="36px" /></div>
                    <div className="d-flex gap-4">
                        <div className="d-flex gap-1 meet-claude"> <a href="" style={{ textDecoration: "none", color: "#30302e" }}>Meet Claude</a><i className="bi bi-chevron-down"></i> <Meet/> </div>
                        <div className="d-flex gap-1 platform"><a href="" style={{ textDecoration: "none", color: "#30302e" }}>Platform</a><i className="bi bi-chevron-down"></i> <Platform/> </div>
                        <div className="d-flex gap-1 solutions-1"> <a href="" style={{ textDecoration: "none", color: "#30302e" }}>Solutions</a><i className="bi bi-chevron-down"> <Solutions/> </i></div>
                        <div className="d-flex gap-1 pricing-1"><a href="" style={{ textDecoration: "none", color: "#30302e" }}>Pricing</a><i className="bi bi-chevron-down"></i> <Pricing/> </div>
                        <div className="d-flex gap-1"> <a href="" style={{ textDecoration: "none", color: "#30302E" }}>Resources</a><i className="bi bi-chevron-down"></i></div>
          
                    
                       <Link to="/contact" > <button type="button" className="btn rounded-3" style={{ border: "1px solid #4D4C48", color: "#4D4C48", width: "150px" }}>Contact Sale</button></Link>
                        <button type="button" className="btn rounded-3" style={{ backgroundColor: "#141413", color: "#FAF9F5" }}>Try Claude</button>
                    </div>
                
                </div><br />
                </header>
        </>
    )
}
export default LoginHeader