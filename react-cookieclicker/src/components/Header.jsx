import "./Header.css";
export default function Header() {
    return (
      <header className="header">
         {/*  HTML for navigation bar */} 
        <div className = "navparent">
        {/* HTML for navigation links */}
            <div className="navchildren">
                <a className="linktwo"> Music </a>
                <a className="linkthree">Page 3</a>
                <a className="linkfour">Page 4</a>
                <a className="linkfive">Page 5</a>
                <a className="linksix">Page 6</a>
                <a className="linkseven">Page 7</a>
            </div>
        </div>
        {/* HTML to prevent nav bar overlap*/}
        <div className = "navboundary">
        </div>
      </header>
    );
  }
  