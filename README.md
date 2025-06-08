<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Donky TV - Login</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="background">
    <div class="overlay"></div>
    <div class="login-box">
      <h1>Donky TV</h1>
      <p>Welcome to the Jungle at Night</p>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <p class="signup-link">Don't have an account? <a href="#">Create New Account</a></p>
      </form>
    </div>
  </div>
</body>
</html>* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html {
  height: 100%;
  font-family: 'Segoe UI', sans-serif;
}

.background {
  background: url('https://i.imgur.com/XCln4wO.jpg') no-repeat center center/cover;
  height: 100vh;
  position: relative;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}

.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  backdrop-filter: blur(8px);
  color: white;
  width: 90%;
  max-width: 350px;
}

.login-box h1 {
  font-size: 32px;
  margin-bottom: 10px;
}

.login-box p {
  margin-bottom: 20px;
  font-size: 14px;
}

.login-box input {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border: none;
  border-radius: 8px;
}

.login-box button {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

.login-box .signup-link {
  margin-top: 10px;
}

.login-box a {
  color: #ffcc00;
  text-decoration: none;
}
