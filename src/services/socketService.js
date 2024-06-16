// import { io } from 'socket.io-client';

// // Replace with your Q-SYS system's TCP server address
// const SOCKET_URL = 'http://your-tcp-server-address:3000';

// class SocketService {
//   constructor() {
//     this.socket = io(SOCKET_URL, {
//       transports: ['websocket'] // Force WebSocket transport
//     });

//     this.socket.on('connect', () => {
//       console.log('Connected to TCP server');
//     });

//     this.socket.on('disconnect', () => {
//       console.log('Disconnected from TCP server');
//     });

//     this.socket.on('connect_error', (err) => {
//       console.error('Connection error:', err);
//     });

//     this.socket.on('error', (err) => {
//       console.error('Socket error:', err);
//     });
//   }

//   sendEvent(event, data) {
//     this.socket.emit(event, data);
//   }
// }

// export default new SocketService();
