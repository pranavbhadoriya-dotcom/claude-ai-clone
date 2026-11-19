import './brand.css'

const Brandcard = () => {
    return (
        <>
        <br /><br /><br /><br />
            <div className='main'>
                <div className="card w-50 ms-5 rounded-4" style={{ backgroundColor: "#F0EEE6" }}>
                    <div className="card-body" style={{ display: "flex", flexDirection: "column", gap: "50px", alignContent: "center" }}>
                        <div className="companies mt-5 mb-5 ps-5 pe-5">
                            <div className="left">
                                <img src="https://cdn.sanity.io/images/4zrzovbb/claude-com/74ea6c22373a93746176788b31b17ea20ae59223-178x47.svg" alt="" />
                                <img src="https://cdn.sanity.io/images/4zrzovbb/claude-com/dfe2bb49cbe6a11d747deb00e01474b0ac4a8de8-120x24.svg" alt="" />
                                <img src="https://cdn.sanity.io/images/4zrzovbb/claude-com/05e7af628f73b9ab5ce68b47e2035d292564c421-181x32.svg" alt="" />

                                <img src="https://cdn.sanity.io/images/4zrzovbb/claude-com/b7e4f274d9789cf6709450c85ee987064b78d784-156x40.svg" alt="" />
                                <img src="https://cdn.sanity.io/images/4zrzovbb/claude-com/f90f7f0b84c285e5a2c3dcc8764aae3eb74cf701-141x31.svg" alt="" />
                                <img src="https://cdn.sanity.io/images/4zrzovbb/claude-com/84694a8c9a86c0b8bf37a874c675ccaeec9c6654-111x26.svg" alt="" />
                            </div>

                            <div className="right">
                                <img src="https://cdn.sanity.io/images/4zrzovbb/claude-com/b7e4f274d9789cf6709450c85ee987064b78d784-156x40.svg" alt="" />
                                <img src="https://cdn.sanity.io/images/4zrzovbb/claude-com/f90f7f0b84c285e5a2c3dcc8764aae3eb74cf701-141x31.svg" alt="" />
                                <img src="https://cdn.sanity.io/images/4zrzovbb/claude-com/84694a8c9a86c0b8bf37a874c675ccaeec9c6654-111x26.svg" alt="" />

                                <img src="https://cdn.sanity.io/images/4zrzovbb/claude-com/74ea6c22373a93746176788b31b17ea20ae59223-178x47.svg" alt="" />
                                <img src="https://cdn.sanity.io/images/4zrzovbb/claude-com/dfe2bb49cbe6a11d747deb00e01474b0ac4a8de8-120x24.svg" alt="" />
                                <img src="https://cdn.sanity.io/images/4zrzovbb/claude-com/05e7af628f73b9ab5ce68b47e2035d292564c421-181x32.svg" alt="" />
                            </div>
                        </div>
                    </div>

                </div>

                <div>
                    <h3>Connects with your favorite <br /> command line tools</h3>
                    <p>Your terminal is where real work <br /> Claude Code connects with the tools that <br /> power development—deployment, databases, monitoring, <br /> version control. Rather than adding another interface <br /> to juggle, it enhances  your existing stack.</p>
                </div>
            </div> <br /><br /><br /><br />
        </>
    )
}
export default Brandcard