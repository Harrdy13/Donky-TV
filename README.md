<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>DonkeyTV Login</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Segoe UI', sans-serif;
    }
    body {
      background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEAAElEQVR4nFy90YIsuY0jClDZntn9/6...') no-repeat center center;
      background-size: cover;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .login-container {
      background-color: rgba(0, 0, 0, 0.6);
      padding: 2rem;
      border-radius: 16px;
      max-width: 400px;
      width: 100%;
      box-shadow: 0 8px 16px rgba(0,0,0,0.3);
    }
    .login-card {
      text-align: center;
      color: #fff;
    }
    .logo {
      width: 100px;
      margin-bottom: 1rem;
    }
    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    form input {
      width: 100%;
      padding: 0.75rem;
      margin: 0.5rem 0;
      border: none;
      border-radius: 8px;
    }
    form button {
      width: 100%;
      padding: 0.75rem;
      background-color: #4a90e2;
      border: none;
      border-radius: 8px;
      color: #fff;
      font-weight: bold;
      margin-top: 0.5rem;
      cursor: pointer;
      transition: background 0.3s;
    }
    form button:hover {
      background-color: #357ABD;
    }
    .forgot {
      text-align: right;
      font-size: 0.85rem;
    }
    .signup {
      margin-top: 1rem;
      font-size: 0.9rem;
      cursor: pointer;
      color: #aaddff;
    }
  </style>
</head>
<body>
  <div class="login-container">
    <div class="login-card">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAYACAIAAABn4K39AAEAAElEQVR4nFT927JkS24kCKoqzCNLpH..." alt="DonkeyTV Logo" class="logo" />
      <h1>DonkeyTV</h1>
      <form>
        <input type="email" placeholder="Email address" required />
        <input type="password" placeholder="Password" required />
        <div class="forgot">
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit">Log in</button>
        <p class="signup">Sign up</p>
      </form>
    </div>
  </div>
</body>
</html>
