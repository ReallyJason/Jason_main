import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Zap,
  MessageSquare,
  Edit3,
  Video,
  Play
} from 'lucide-react';
import './EngineShowcase.css';

const codeSnippets = [
  {
    name: "WebSockets",
    code: `# RFC 6455 custom handshake & byte-frame parsing
def handshake(self, request, handler):
    key = request.headers.get("sec-websocket-key")
    guid = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11"
    accept = base64.b64encode(hashlib.sha1((key + guid).encode("utf-8")).digest()).decode("utf-8")
    
    handshake_headers = (
        "HTTP/1.1 101 Switching Protocols\\r\\n"
        "Upgrade: websocket\\r\\n"
        "Connection: Upgrade\\r\\n"
        f"Sec-WebSocket-Accept: {accept}\\r\\n\\r\\n"
    )
    handler.request.sendall(handshake_headers.encode("utf-8"))

def parse_ws_frame(self, data):
    fin = (data[0] & 0b10000000) >> 7
    opcode = data[0] & 0b1111
    mask_bit = (data[1] & 0b10000000) >> 7
    payload_len = data[1] & 0b01111111
    
    idx = 2
    if payload_len == 126:
        payload_len = int.from_bytes(data[2:4], "big")
        idx = 4
    elif payload_len == 127:
        payload_len = int.from_bytes(data[2:10], "big")
        idx = 10
        
    mask_bytes = data[idx:idx+4] if mask_bit else b""
    if mask_bit: idx += 4
    
    payload = data[idx:idx+payload_len]
    if mask_bit:
        payload = bytearray([b ^ mask_bytes[i % 4] for i, b in enumerate(payload)])
    return WebSocketFrame(fin, opcode, payload_len, payload)`
  },
  {
    name: "Canvas Sync",
    code: `# Real-time multi-user drawing sync & DB persistence
def handle_drawing_stroke(self, handler, request, payload):
    message = json.loads(payload.decode("utf-8"))
    
    # Save the coordinates to MongoDB to support persistent canvas state
    drawings_collection.insert_one({
        "startX": message.get("startX"),
        "startY": message.get("startY"),
        "endX": message.get("endX"),
        "endY": message.get("endY"),
        "color": message.get("color")
    })
    
    # Pack payload back into a WebSocket frame for active broadcasting
    reply_payload = json.dumps(message).encode("utf-8")
    ws_frame = self.generate_ws_frame(reply_payload)
    
    # Broadcast to all connected websocket clients in the workspace
    for username, client_socket in self.connected_users.items():
        try:
            client_socket.sendall(ws_frame)
        except Exception as e:
            # Handle socket disconnection gracefully
            self.queue_disconnect(username)`
  },
  {
    name: "WebRTC",
    code: `# WebRTC Signaling & Room Broker
def route_webrtc_signal(self, handler, message):
    target_socket_id = message.get("socketId")
    target_socket = socketID_to_websocket.get(target_socket_id)
    
    sender_socket = handler.request
    sender_socket_id = websocket_to_socketID[sender_socket]
    sender_username = websoc_to_user[sender_socket]
    
    # Wrap signaling data (SDP offer/answer/ice_candidate)
    forwarded_message = {
        "messageType": message.get("messageType"),
        "socketId": sender_socket_id,
        "username": sender_username,
        "sdp": message.get("sdp"),
        "candidate": message.get("candidate")
    }
    
    # Convert payload and send to the peer connection target
    if target_socket:
        payload = json.dumps(forwarded_message).encode("utf-8")
        ws_frame = generate_ws_frame(payload)
        target_socket.sendall(ws_frame)`
  },
  {
    name: "HLS Video",
    code: `# Adaptive Multi-Bitrate Video Streaming Pipeline
def serve_hls_stream(self, request, handler):
    file_path = "." + request.path
    ext = os.path.splitext(file_path)[1]
    
    # Support m3u8 playlists & HLS video segments
    mime_type = "application/x-mpegURL" if ext == ".m3u8" else "video/mp2t"
    
    with open(file_path, "rb") as f:
        content = f.read()
        
    response = Response()
    response.set_status(200, "OK")
    response.headers({
        "Content-Type": mime_type,
        "Content-Length": str(len(content)),
        "X-Content-Type-Options": "nosniff",
        "Cache-Control": "public, max-age=86400"
    })
    response.bytes(content)
    handler.request.sendall(response.to_data())`
  }
];

const EngineShowcase: React.FC = () => {
  const [activeCodeTab, setActiveCodeTab] = useState(0);
  const features = [
    {
      title: "Real-time Messaging & DMs",
      desc: "Robust, live direct messaging and multi-user chatrooms powered by a custom-engineered WebSocket connection manager.",
      image: "/websocket_chat.png",
      badgeText: "WebSockets",
      icon: <MessageSquare size={18} className="text-cyan-400" />,
      link: "https://cse312.jasonhusoftware.com/chat"
    },
    {
      title: "Collaborative Whiteboard",
      desc: "Multi-user drawing canvas with instant stroke synchronization and persistent stroke history stored in MongoDB.",
      image: "/drawing_canvas.png",
      badgeText: "HTML5 Canvas",
      icon: <Edit3 size={18} className="text-purple-400" />,
      link: "https://cse312.jasonhusoftware.com/drawing-board"
    },
    {
      title: "WebRTC Peer-to-Peer Calling",
      desc: "Instant audio and video calling established directly between browsers using a custom WebSocket signaling broker.",
      image: "/webrtc_call.png",
      badgeText: "WebRTC",
      icon: <Video size={18} className="text-pink-400" />,
      link: "https://cse312.jasonhusoftware.com/video-call"
    },
    {
      title: "Adaptive Video Streaming",
      desc: "YouTube-style media catalog serving multi-bitrate HLS configurations (.m3u8 index maps & .ts segments) transcoded by ffmpeg.",
      image: "/video_stream.png",
      badgeText: "HLS / FFmpeg",
      icon: <Play size={18} className="text-yellow-400" />,
      link: "https://cse312.jasonhusoftware.com/videotube"
    }
  ];

  return (
    <section id="engine" className="section engine-section">
      <div className="engine-glow-blob engine-blob-cyan"></div>
      <div className="engine-glow-blob engine-blob-purple"></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header & Code Showcase */}
        <div className="engine-header-layout">
          <motion.div
            className="engine-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="engine-badge cyberpunk-border">
              <Zap size={14} className="engine-badge-icon" /> Featured Project
            </div>
            <h2 className="section-title text-gradient" style={{ color: 'var(--text-primary)', fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}>
              Custom Socket Engine
            </h2>
            <p className="section-subtitle">
              A high-performance real-time media portal. Built completely from the socket layer up in Python to support collaborative whiteboard synchronization, instant messaging, peer-to-peer video calling, and adaptive-bitrate video streaming.
            </p>
            <a href="https://cse312.jasonhusoftware.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary engine-link" style={{ fontFamily: 'var(--font-mono)' }}>
              Visit the Engine <ExternalLink className="btn-icon" size={18} style={{ marginLeft: '8px' }} />
            </a>
          </motion.div>

          <motion.div 
            className="engine-code-showcase glass"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="code-tabs">
              {codeSnippets.map((snippet, idx) => (
                <button 
                  key={idx} 
                  className={`code-tab ${activeCodeTab === idx ? 'active' : ''}`}
                  onClick={() => setActiveCodeTab(idx)}
                >
                  {snippet.name}
                </button>
              ))}
            </div>
            <div className="code-content-wrapper" data-lenis-prevent>
              <pre className="code-pre">
                <code>{codeSnippets[activeCodeTab].code}</code>
              </pre>
            </div>
          </motion.div>
        </div>

        {/* Feature Grid */}
        <div className="engine-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="engine-card glass border-beam-container"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="border-beam" />
              <a href={feature.link} target="_blank" rel="noopener noreferrer" className="engine-image-container" style={{ display: 'block' }}>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="engine-image-preview"
                  loading="lazy"
                />
                <div className="engine-image-overlay">
                  <span className="poster-text">{feature.badgeText}</span>
                </div>
              </a>
              <div className="engine-card-content">
                <div className="flex items-center gap-2 mb-2">
                  {feature.icon}
                  <h3 className="engine-card-title" style={{ margin: 0 }}>{feature.title}</h3>
                </div>
                <p className="engine-card-desc">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineShowcase;
