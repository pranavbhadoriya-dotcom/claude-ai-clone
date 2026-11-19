

const Card4 = () => {
    return (
        <>
        <br /><br />
            <center>
                <h1 style={{ fontSize: "50px" }}>What developers are saying</h1>
            </center> <br /><br /> <br /><br />
            <hr className="w-75" style={{marginLeft:"150px"}} /> <br />
            <div style={{display:"flex", justifyContent:"space-around"}}>
                <div><img src="https://cdn.sanity.io/images/4zrzovbb/claude-com/648a551dca8eaf811bd5228c852a9e65386b0904-118x32.svg" alt="" /></div>
                <div ><p style={{fontSize:"20px"}}>“Claude Code has dramatically accelerated our team's coding <br /> efficiency. I can now write EDA code in a notebook—pulling <br />data, training a model, and evaluating it with basic metrics— <br /> and then ask Claude to convert that into a Metaflow pipeline. <br /> This process saves 1-2 days of routine (and often boring!) work <br /> per model.”</p>
                <p style={{fontSize:"12px", color:"#5E5D59"}}>Anton Biryukov, Staff Software Engineer</p>
                <button className="pt-1 pb-1 ps-3 pe-3 fw-medium" style={{border:"1px solid #9B9A95", fontSize:"12px", backgroundColor:"transparent", color:"#5E5D59", borderRadius:"8px"}} >Read Story</button>
                </div>
                
            </div><br />

             <hr className="w-75" style={{marginLeft:"150px"}} /> <br />
            <div style={{display:"flex", justifyContent:"space-around"}}>
                <div><img src="https://cdn.sanity.io/images/4zrzovbb/claude-com/fa755cc324f3ead28cea084cb63c403edfccc0da-141x23.svg" alt="" /></div>
                <div ><p style={{fontSize:"20px"}}>“With Claude, we're not just automating customer service— <br /> we're elevating it to truly human quality. This lets support <br /> teams think more strategically about customer experience and <br /> what makes interactions genuinely valuable.”</p>
                <p style={{fontSize:"12px", color:"#5E5D59"}}>Anton Biryukov, Staff Software Engineer</p>
                <button className="pt-1 pb-1 ps-3 pe-3 fw-medium" style={{border:"1px solid #9B9A95", fontSize:"12px", backgroundColor:"transparent", color:"#5E5D59", borderRadius:"8px"}} >Read Story</button>
                </div>
                
            </div> <br />

             <hr className="w-75" style={{marginLeft:"150px"}} /> <br />
            <div style={{display:"flex", justifyContent:"space-around"}}>
                <div><img src="https://cdn.sanity.io/images/4zrzovbb/claude-com/dd2c022495a4655e77541d16bc01b96e2052d6a3-128x36.svg" alt="" /></div>
                <div ><p style={{fontSize:"20px"}}>“Claude Code has dramatically accelerated our team's coding <br /> efficiency. I can now write EDA code in a notebook—pulling <br />data, training a model, and evaluating it with basic metrics— <br /> and then ask Claude to convert that into a Metaflow pipeline. <br /> This process saves 1-2 days of routine (and often boring!) work <br /> per model.”</p>
                <p style={{fontSize:"12px", color:"#5E5D59"}}>Anton Biryukov, Staff Software Engineer</p>
                <button className="pt-1 pb-1 ps-3 pe-3 fw-medium btn" style={{border:"1px solid #9B9A95", fontSize:"12px", backgroundColor:"transparent", color:"#5E5D59", borderRadius:"8px"}} >Read Story</button>
                </div>
                
            </div>
        </>
    )
}
export default Card4