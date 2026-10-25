function Settings() {
  return (
    <main style={{ width: "100%", minHeight: "100vh", boxSizing: "border-box", height: "100%", backgroundColor: "red", margin: "0px", padding: "0px" }}>
      <div style={{ display: "flex", gap: "5px", margin: "5px 15px 0", justifyContent: "flex-end" }} >
        <button className="login" style={{ width: "65px", height: "50px", backgroundColor: "#E8E8E8", color: "black", borderRadius: "50px", border: "solid #E8E8E8 1px", fontWeight: "bold" }}>Log in</button>
        <button className='mobile' style={{ width: "120px", height: "50px", backgroundColor: "#212121", color: "white", borderRadius: "50px", border: "solid #414141 1px", fontWeight: "bold" }}>Sign up for free</button>
      </div>
      <div style={{ margin: "0 auto", width: "80%", backgroundColor: "green", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
          <p style={{ fontSize: "25px", color: "white", fontWeight: "bold" }}>Settings</p>

          <div>
            <div style={{ display: "flex",  width: "400px", height: "200px", flexDirection: "column" }}>
              <p>General</p>
              <div style={{ display: "flex", flexDirection: "column", backgroundColor: "#3a3939" ,border:"1px black solid",borderRadius:"30px" ,margin: "0 auto",width:"80%",height:"120px",padding:"10px"}}>
                <div style={{ display: "flex", justifyContent: "space-between"}}>
                  <p>Apearence </p>
                  <select >
                    <option>system</option>
                    <option>light</option>
                    <option>dark</option>
                  </select>
                </div>
                <div style={{ flex: 1, height: "1px", backgroundColor: "gray"}}></div>
                <div style={{ flex: 1, height: "1px", backgroundColor: "gray" }}></div>
                <div style={{ display: "flex", justifyContent: "space-between"}}>
                  <p>Apearence </p>
                  <select>
                    <option>system</option>
                    <option>light</option>
                    <option>dark</option>
                  </select>
                </div>

              </div>


            </div>
            <div></div>
          </div>
        </div>

      </div>

    </main>
  );
}

export default Settings;