import net from "net";

export function scanPort(host, port) {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    socket.setTimeout(2000);

    socket.on("connect", () => {
      socket.destroy();
      resolve({ port, open: true });
    });

    socket.on("timeout", () => {
      socket.destroy();
      resolve({ port, open: false });
    });

    socket.on("error", () => {
      resolve({ port, open: false });
    });

    socket.connect(port, host);
  });
}
