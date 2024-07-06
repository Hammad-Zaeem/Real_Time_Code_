import { useState } from "react";
import Client from "../components/Client"

function Editor() {
  const [clients, setClients] = useState([
    {socketId : 1, username : "Hammad"}
  ]);

  return (
    <div className="wrapper">
      <div className="aside">
        <div className="asideInner">
          <div className="logo">
            <img className="logoImage" src="/code-sync.png" alt="logo" />
          </div>
          <h3>Connected</h3>
          <div className="clientsList">
            {clients.map((client) => (
              <Client key={client.socketId} username={client.username} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editor;
