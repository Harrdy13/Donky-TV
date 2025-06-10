let localStream;
let remoteStream;
let peerConnection;

const config = {
  iceServers: [{ urls: "stun:stun.l.google.com:19302" }]
};

const localVideo = document.getElementById("localVideo");
const remoteVideo = document.getElementById("remoteVideo");

async function startCall() {
  localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
  localVideo.srcObject = localStream;

  peerConnection = new RTCPeerConnection(config);

  // Add local tracks to peer connection
  localStream.getTracks().forEach(track => {
    peerConnection.addTrack(track, localStream);
  });

  // When remote track is received
  peerConnection.ontrack = (event) => {
    if (!remoteStream) {
      remoteStream = new MediaStream();
      remoteVideo.srcObject = remoteStream;
    }
    remoteStream.addTrack(event.track);
  };

  // Exchange ICE candidates
  peerConnection.onicecandidate = (event) => {
    if (event.candidate) {
      console.log("New ICE candidate:", event.candidate);
    }
  };

  // Create offer
  const offer = await peerConnection.createOffer();
  await peerConnection.setLocalDescription(offer);
  console.log("Offer created. Send this to peer:");
  console.log(JSON.stringify(offer));
}

// For receiving answer (in manual simulation)
async function receiveAnswer(answerJSON) {
  const answer = new RTCSessionDescription(JSON.parse(answerJSON));
  await peerConnection.setRemoteDescription(answer);
  console.log("Remote description set from answer.");
}
