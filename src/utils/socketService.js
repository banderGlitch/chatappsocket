import io from 'socket.io-client';


// http://172.16.33.44:3000/


const SOCKET_URL = 'https://3e0f-103-89-61-50.ngrok-free.app/'


class WSService {
    initailizeSocket = async() => {
        try {
            this.socket = io(SOCKET_URL, {
                transports: ['websocket']
            })
            console.log("initializing socket", this.socket)

            this.socket.on('connect', (data) => {
                console.log("=== Socket connected ====")
            })

            this.socket.on('disconnect', (data) => {
                console.log("=== Socket disconnected ====")
            })
            this.socket.on('error', (data) => {
                console.log("socket=====error", data)
            })

        } catch (error) {

            console.log("socket is not initailized!!!!!", error)
        }
    }
    emit(event, data= {}) {
        this.socket.emit(event, data)
    }
    on(event, cb){
        this.socket.on(event, cb)
    }
    removeListener(listenerName){
        this.socket.removeListener(listenerName)
    }
}

const socketServices = new WSService();

export default socketServices; 