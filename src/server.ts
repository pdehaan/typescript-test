import express from "express";
import http from "http";
import net from "net";

import routes from "./routes/index";

declare var process: {
  env: {
    PORT: number;
    SERVER: string;
  };
};

createServer(process.env.PORT, process.env.SERVER)
  .then(
    (server: http.Server): void => {
      const addrInfo: net.AddressInfo = server.address() as net.AddressInfo;
      console.log(`Now listening on http://${addrInfo.address}:${addrInfo.port}`);
    },
  );

function createServer(
  port: number = 3000,
  host: string = "127.0.0.1",
): Promise<http.Server> {
  const app: express.Application = express();
  app.use("/", routes.home);
  app.use("/name", routes.name);
  const server: http.Server = app.listen(port, host);
  return Promise.resolve(server);
}
