import Plugs from "../component/Plugs";
import React, { useState, useEffect, useRef } from 'react';
import '../App.css';

function Plugins() {


  return (

    <>
      <main style={{ width: "100%", height: "100%" }}>
        <div style={{ display: "flex", gap: "5px", right: "10px", marginRight: "10px", top: "5px", left: "5px", justifyContent: "flex-end" }} >
          <button className="login" style={{ width: "65px", height: "50px", backgroundColor: "#E8E8E8", color: "black", borderRadius: "50px", border: "solid #E8E8E8 1px", fontWeight: "bold" }}>Log in</button>
          <button className='mobile' style={{ width: "120px", height: "50px", backgroundColor: "#212121", color: "white", borderRadius: "50px", border: "solid #414141 1px", fontWeight: "bold" }}>Sign up for free</button>
        </div >

        <div className="mainPlugs" style={{ margin: "0 auto", padding: "0px 100px", width: "100%" }}>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
            <div >
              <h2>Plugins</h2>
              <p>Work with ChatGPT across your favorite tools.</p>
            </div>
            <div style={{ border: "solid 1px gray", borderRadius: "50px", padding: "2px", height: "30px", alignContent: "center", gap: "2px", padding: "5px" }}>
              <img src={`${process.env.PUBLIC_URL}/photo/inline-svg-4.svg`} alt="SVG" style={{ width: "15px", height: "15px", marginRight: "2px" }} />
              <input type="text" placeholder="Search Plugins" style={{ backgroundColor: "transparent", outline: "none", border: "none", color: "white" }}></input>
            </div>
          </div>
          <div style={{marginTop:"30px"}}>
            <p>Popular</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="mainpldiv" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: " 5px", justifyContent: "center", width: "100%" }}>
              <Plugs image="content.png" title="Remote Desktop Commander" explain="Build and automate, anywhere" />
              <Plugs image="content_8.png" title="Google Drive" explain="Drive, Docs, Sheets or Slides" />
              <Plugs image="content (2).png" title="Flaim Fantasy" explain="Fantasy Sports Analysis" />
              <Plugs image="content_4.png" title="WPVibe" explain="AI WordPress tools" />
              <Plugs image="content_1 (2).png" title="Health" explain="Explore your health data in ChatGPT" />
              <Plugs image="content11.png" title="GitHub" explain="Triage PRs, issues, CI, and publish flows" />
            </div>
          </div>
          <div className="plugs"style={{ display: "flex", justifyContent: "flex-start", margin: "10px", fontSize: "10px",borderRadius:"15px",padding:"10px" }}>
            <div><img style={{ width: "25px", height: "25px", border: "solid gray 1px", borderRadius: "5px", zIndex: "1", backgroundColor: " #000000" }} src={`${process.env.PUBLIC_URL}/photo/content_2 (2).png`} /></div>
            <div><img style={{ width: "25px", height: "25px", border: "solid gray 1px", borderRadius: "5px", marginLeft: "-4px", zIndex: "2", backgroundColor: " #000000" }} src={`${process.env.PUBLIC_URL}/photo/content_3 (2).png`} /></div>
            <div><img style={{ width: "25px", height: "25px", border: "solid gray 1px", borderRadius: "5px", marginLeft: "-4px", zIndex: "3", backgroundColor: " #000000" }} src={`${process.env.PUBLIC_URL}/photo/content_47.png`} /></div>
            <div style={{ display: "flex", justifyContent: "flex-start",alignContent:"center", margin: "10px", fontSize: "10px" }}><p>See Outlook Email, Supabase, and more</p></div>

          </div>
          <div style={{marginTop:"30px"}}>
            <p>New & Noteworthy</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="mainpldiv" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: " 5px", justifyContent: "center", width: "100%" }}>
              <Plugs image="content (2221).png" title="Adobe" explain="Create and manage your store" />
              <Plugs image="content_15.png" title="Shopify" explain="Drive, Docs, Sheets or Slides" />
              <Plugs image="content_54.png" title="tldraw" explain="Draw and diagram with agents" />
              <Plugs image="content_4 (2).png" title="MagicPath" explain="Design directly in ChatGPT" />
              <Plugs image="logo-256_square.png" title="Canva" explain="Create, review, edit designs" />
              <Plugs image="content_38.png" title="Superpowers" explain="Make your agents better devs" />
            </div>
          </div>
          <div className="plugs"style={{ display: "flex", justifyContent: "flex-start", margin: "10px", fontSize: "10px",borderRadius:"15px",padding:"10px" }}>
            <div><img style={{ width: "25px", height: "25px", border: "solid gray 1px", borderRadius: "5px", zIndex: "1", backgroundColor: " #000000" }} src={`${process.env.PUBLIC_URL}/photo/content_41.png`} /></div>
            <div><img style={{ width: "25px", height: "25px", border: "solid gray 1px", borderRadius: "5px", marginLeft: "-4px", zIndex: "2", backgroundColor: " #000000" }} src={`${process.env.PUBLIC_URL}/photo/content_13.png`} /></div>
            <div><img style={{ width: "25px", height: "25px", border: "solid gray 1px", borderRadius: "5px", marginLeft: "-4px", zIndex: "3", backgroundColor: " #000000" }} src={`${process.env.PUBLIC_URL}/photo/content_1.svg`} /></div>
            <div style={{ display: "flex", justifyContent: "flex-start",alignContent:"center", margin: "10px", fontSize: "10px" }}><p>See Figma, Atlassian, and more</p></div>

          </div>
          <div style={{marginTop:"30px"}}>
            <p>Small Business</p>
          </div>
          <div className="mainpldiv"style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: " 5px", justifyContent: "center", width: "100%" }}>
              <Plugs image="content_48.png" title="Dropbox" explain="Find, create, and take action" />
              <Plugs image="content_70.png" title="HubSpot" explain="Insights to action in HubSpot" />
              <Plugs image="content_58.png" title="Stripe" explain="Accept payments. Grow revenue." />
              <Plugs image="logo-256_square.png" title="Canva" explain="Create, review, edit designs" />
              <Plugs image="content_49.png" title="Gusto" explain="People and payroll, made easy" />
              <Plugs image="content_41.png" title="Figma" explain="Create designs, ship to code" />
            </div>
          </div>
          <div className="plugs"style={{ display: "flex", justifyContent: "flex-start", margin: "10px", fontSize: "10px",borderRadius:"15px",padding:"10px" }}>
            <div><img style={{ width: "25px", height: "25px", border: "solid gray 1px", borderRadius: "5px", zIndex: "1", backgroundColor: " #000000" }} src={`${process.env.PUBLIC_URL}/photo/content_62.png`} /></div>
            <div><img style={{ width: "25px", height: "25px", border: "solid gray 1px", borderRadius: "5px", marginLeft: "-4px", zIndex: "2", backgroundColor: " #000000" }} src={`${process.env.PUBLIC_URL}/photo/content_15.png`} /></div>
            <div><img style={{ width: "25px", height: "25px", border: "solid gray 1px", borderRadius: "5px", marginLeft: "-4px", zIndex: "3", backgroundColor: " #000000" }} src={`${process.env.PUBLIC_URL}/photo/content123.svg`} /></div>
            <div style={{ display: "flex", justifyContent: "flex-start",alignContent:"center", margin: "10px", fontSize: "10px" }}><p>See Slack, Shopify, and more </p></div>

          </div>
          <div style={{marginTop:"30px"}}>
            <p>Productivity</p>
          </div>
          <div className="mainpldiv"style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: " 5px", justifyContent: "center", width: "100%" }}>
              <Plugs image="content_47.png" title="Firecrawl" explain="Search and extract web data" />
              <Plugs image="content_66.png" title="Notion" explain="Create docs, tasks, databases" />
              <Plugs image="content (1).png" title="Klaviyo" explain="Get insights on your marketing" />
              <Plugs image="content_52.png" title="Granola" explain="Add your meeting context" />
              <Plugs image="content_69.png" title="Wispr Flow  " explain="Ask about your meeting notes" />
              <Plugs image="content_31.png" title="Metricool" explain="Analyze and schedule posts" />
            </div>
          </div>
          <div className="plugs"style={{ display: "flex", justifyContent: "flex-start", margin: "10px", fontSize: "10px",borderRadius:"15px",padding:"10px" }}>
            <div><img style={{ width: "25px", height: "25px", border: "solid gray 1px", borderRadius: "5px", zIndex: "1", backgroundColor: " #000000" }} src={`${process.env.PUBLIC_URL}/photo/content_1.png`} /></div>
            <div><img style={{ width: "25px", height: "25px", border: "solid gray 1px", borderRadius: "5px", marginLeft: "-4px", zIndex: "2", backgroundColor: " #000000" }} src={`${process.env.PUBLIC_URL}/photo/content_7.png`} /></div>
            <div><img style={{ width: "25px", height: "25px", border: "solid gray 1px", borderRadius: "5px", marginLeft: "-4px", zIndex: "3", backgroundColor: " #000000" }} src={`${process.env.PUBLIC_URL}/photo/content_46.png`} /></div>
            <div style={{ display: "flex", justifyContent: "flex-start",alignContent:"center", margin: "10px", fontSize: "10px" }}><p>See Asana, Fathom, and more</p></div>

          </div>
           <div style={{marginTop:"30px"}}>
            <p>Creativity</p>
          </div>
          <div className="mainpldiv" style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: " 5px", justifyContent: "center", width: "100%" }}>
              <Plugs image="logo-256_square.png" title="Canva" explain="Create, review, edit designs" />
              <Plugs image="content_57.png" title="Higgsfield " explain="Every image and video model" />
              <Plugs image="content_60.png" title="Everygen" explain="Create videos with AI" />
              <Plugs image="content_17.png" title="Runway" explain="Generate with every AI model" />
              <Plugs image="content_41.png" title="Figma" explain="Create designs, ship to code" />
              <Plugs image="content_5.png" title="Mobbin" explain="Find UI & UX design references" />
            </div>
          </div>
          <div className="plugs"style={{ display: "flex", justifyContent: "flex-start", margin: "10px", fontSize: "10px",borderRadius:"15px",padding:"10px" }}>
            <div><img style={{ width: "25px", height: "25px", border: "solid gray 1px", borderRadius: "5px", zIndex: "1", backgroundColor: " #000000" }} src={`${process.env.PUBLIC_URL}/photo/content_40.png`} /></div>
            <div><img style={{ width: "25px", height: "25px", border: "solid gray 1px", borderRadius: "5px", marginLeft: "-4px", zIndex: "2", backgroundColor: " #000000" }} src={`${process.env.PUBLIC_URL}/photo/content_10.png`} /></div>
            <div><img style={{ width: "25px", height: "25px", border: "solid gray 1px", borderRadius: "5px", marginLeft: "-4px", zIndex: "3", backgroundColor: " #000000" }} src={`${process.env.PUBLIC_URL}/photo/content_25.png`} /></div>
            <div style={{ display: "flex", justifyContent: "flex-start",alignContent:"center", margin: "10px", fontSize: "10px" }}><p>See invideo, Creative Claw, and more</p></div>

          </div>
          <div className="mainpldiv"style={{marginTop:"30px"}}>
            <p>Developer Tools</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: " 5px", justifyContent: "center", width: "100%" }}>
              <Plugs image="content_3 (2).png" title="Supabase" explain="Manage and query databases" />
              <Plugs image="content_57.png" title="Higgsfield " explain="Every image and video model" />
              <Plugs image="content_60.png" title="Everygen" explain="Create videos with AI" />
              <Plugs image="content_17.png" title="Runway" explain="Generate with every AI model" />
              <Plugs image="content_41.png" title="Figma" explain="Create designs, ship to code" />
              <Plugs image="content_5.png" title="Mobbin" explain="Find UI & UX design references" />
            </div>
          </div>
          <div className="plugs"style={{ display: "flex", justifyContent: "flex-start", margin: "10px", fontSize: "10px",borderRadius:"15px",padding:"10px" }}>
            <div><img style={{ width: "25px", height: "25px", border: "solid gray 1px", borderRadius: "5px", zIndex: "1", backgroundColor: " #000000" }} src={`${process.env.PUBLIC_URL}/photo/content_40.png`} /></div>
            <div><img style={{ width: "25px", height: "25px", border: "solid gray 1px", borderRadius: "5px", marginLeft: "-4px", zIndex: "2", backgroundColor: " #000000" }} src={`${process.env.PUBLIC_URL}/photo/content_10.png`} /></div>
            <div><img style={{ width: "25px", height: "25px", border: "solid gray 1px", borderRadius: "5px", marginLeft: "-4px", zIndex: "3", backgroundColor: " #000000" }} src={`${process.env.PUBLIC_URL}/photo/content_25.png`} /></div>
            <div style={{ display: "flex", justifyContent: "flex-start",alignContent:"center", margin: "10px", fontSize: "10px" }}><p>See invideo, Creative Claw, and more</p></div>

          </div>


        </div>

      </main>

    </>
  );
}

export default Plugins;