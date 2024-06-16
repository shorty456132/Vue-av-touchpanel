import { io } from 'socket.io-client';

// Replace with your Q-SYS system's TCP server address
const SOCKET_URL = 'http://your-tcp-server-address:your-port';

class SocketService {
  constructor() {
    this.socket = io(SOCKET_URL);

    this.socket.on('connect', () => {
      console.log('Connected to TCP server');
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected from TCP server');
    });
  }

  sendEvent(event, data) {
    this.socket.emit(event, data);
  }
}

export default new SocketService();
