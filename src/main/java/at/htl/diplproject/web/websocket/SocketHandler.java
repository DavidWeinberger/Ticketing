package at.htl.diplproject.web.websocket;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

@Component
public class SocketHandler extends TextWebSocketHandler {

    List<WebSocketSession> sessions = new CopyOnWriteArrayList<>();

    public static SocketHandler getSocketHandler() {
        if (socketHandler == null){
            socketHandler = new SocketHandler();
        }
        return socketHandler;
    }

    private static SocketHandler socketHandler = null;



    private SocketHandler() {}

    public void sendTextMessage(String msg) {
        List<WebSocketSession> dead = new CopyOnWriteArrayList<>();
        sessions.forEach( x -> {
            try {
                x.sendMessage(new TextMessage("update"+msg));
            } catch (IOException e) {
                dead.add(x);
            }
        });
        sessions.removeAll(dead);
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        //the messages will be broadcasted to all users.
        sessions.add(session);
    }
}
