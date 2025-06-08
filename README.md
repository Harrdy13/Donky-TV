# Donky-TV
A random video chat site like built with WebRTC.
<!DOCTYPE html><html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Donky TV - Login</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Arial, sans-serif;
    }
    body, html {
      height: 100%;
      overflow: hidden;
    }
    video#bg-video {
      position: fixed;
      top: 0;
      left: 0;
      min-width: 100%;
      min-height: 100%;
      object-fit: cover;
      z-index: -1;
    }
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: white;
    }
    .login-box {
      background: rgba(0, 0, 0, 0.7);
      padding: 30px;
      border-radius: 10px;
      text-align: center;
    }
    .login-box h1 {
      margin-bottom: 20px;
    }
    .login-box input {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      border: none;
      border-radius: 5px;
    }
    .login-box button {
      background-color: #007bff;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .tagline {
      margin-top: 15px;
      font-style: italic;
    }
  </style>
</head>
<body>
  <video autoplay muted loop id="bg-video">
    <source src="donkey-forest-night.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>  <div class="overlay">
    <div class="login-box">
      <h1>🐴 Donky TV</h1>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
      <p class="tagline">Enter the wild – Chat like a Donkey!</p>
    </div>
  </div>
</body>
</html>
