import './footer.css'

const Footer = () => {

    return (
        <>
            <footer className="footer">
                <div className="mainfooter p-5">
                    <div>
                        <div><img src="/caludeblack.png" alt="" width="150px" height="50px" /></div><br />
                        <div className='chat-box'><input type="text" placeholder="How can i help you today ?" />
                            <button> <i class="bi bi-arrow-up"></i></button>
                        </div>

                        <div className="mt-3 d-flex gap-3">
                           <button className="bt"><i class="bi bi-pencil">&nbsp;&nbsp;</i>Write</button>
                           <button  className="bt" ><i class="bi bi-file-text"></i>&nbsp;&nbsp;Learn</button>
                           <button  className="bt"><i class="bi bi-code-slash"></i>&nbsp;&nbsp;Code</button>
                        </div>
                    </div>
                    <div>
                        <ul className='list'>
                            <h6>Products</h6>
                            <li>Claude</li>
                            <li>Claude Code</li>
                            <li>Claude Code for Enterprise</li>
                            <li>Claude Cowork</li>
                            <li>@Claude</li>
                            <li>Claude Design</li>
                            <li>Claude Security</li>
                            <li>Download app</li>
                            <li>Pricing</li>
                            <li>Log in</li>
                        </ul><br />

                        <ul className='list'>
                            <h6>Models</h6>
                            <li>Mythos</li>
                            <li>Fable</li>
                            <li>Opus</li>
                            <li>Sonnet</li>
                            <li>Haiku</li>
                        </ul><br />

                        <ul className='list'>
                            <h6>Features</h6>
                            <li>Claude for Chrome</li>
                            <li>Claude for Microsoft 365</li>
                            <li>Skills</li>
                        </ul><br />
                    </div>

                    <div>
                        <ul className='list'>
                            <h6>Solutions</h6>
                            <li>AI agents</li>
                            <li>Code Modernization</li>
                            <li>Coding</li>
                            <li>Customer support</li>
                            <li>Education</li>
                            <li>Enterprise</li>
                            <li>Financial services</li>
                            <li>Government</li>
                            <li>Healthcare</li>
                            <li>Legal</li>
                            <li>Life sciences</li>
                            <li>Nonprofits</li>
                            <li>Security</li>
                            <li>Small business</li>
                            <li>Startups</li>
                        </ul><br />

                        <ul className='list'>
                            <h6>Claude Platform</h6>
                            <li>Overview</li>
                            <li>Developer docs</li>
                            <li>Pricing</li>
                            <li>Ecosystem</li>
                            <li>Marketplace</li>
                            <li>Claude on AWS</li>
                            <li>Google Cloud</li>
                            <li>Microsoft Foundry</li>
                            <li>Regional Compliance</li>
                            <li>Console login</li>
                        </ul><br />

                    </div>


                    <div>
                        <ul className='list'>
                            <h6>Resources</h6>
                            <li>Blog</li>
                            <li>Claude Partener network</li>
                            <li>Community</li>
                            <li>Connectors</li>
                            <li>Courses</li>
                            <li>Customer stories</li>
                            <li>Engineering at Anthropic</li>
                            <li>Events</li>
                            <li>Plugins</li>
                            <li>Powered by Claude</li>
                            <li>Service partners</li>
                            <li>Tutorials</li>
                            <li>Use cases</li>
                        </ul><br />

                        <ul className='list'>
                            <h6>Company</h6>
                            <li>Anthropic</li>
                            <li>Careers</li>
                            <li>Policy</li>
                            <li>Economic Futures</li>
                            <li>Research</li>
                            <li>News</li>
                            <li>Policy on the AI Exponential</li>
                            <li>Responsible Scalling Policy</li>
                            <li>Security and compliance</li>
                            <li>Transparency</li>
                        </ul><br />

                    </div>

                    <div>
                        <ul className='list'>
                            <h6>Help and security</h6>
                            <li>Availability</li>
                            <li>Status</li>
                            <li>Support center</li>
                        </ul><br />

                        <ul className='list'>
                            <h6>Terms and policies</h6>
                            <li>Privacy Choices</li>
                            <li>Privacy policy</li>
                            <li>Responsible disclosure policy</li>
                            <li>Terms of services:Commercial</li>
                            <li>Terms of service:Consumer</li>
                            <li>Usage policy</li>
                        </ul><br />

                    </div>

                </div>

                <div  class="footer-bottom mt-1">
                    <hr class="footer-line" />

                    <div class="container">

                        <div class="d-flex justify-content-between align-items-center flex-wrap">


                            <div class="social-icons d-flex align-items-center gap-4">

                                <a href="#"><i class="bi bi-twitter-x"></i></a>

                                <a href="#"><i class="bi bi-linkedin"></i></a>

                                <a href="#"><i class="bi bi-youtube"></i></a>

                                <a href="#"><i class="bi bi-instagram"></i></a>

                            </div>



                            <button class="language-btn">
                                <i class="bi bi-globe"></i>
                                English (US)
                                <i class="bi bi-chevron-down"></i>
                            </button>

                        </div>

                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer