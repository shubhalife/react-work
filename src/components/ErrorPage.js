import { useRouteError } from "react-router";
import "./ErrorPage.css";

const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error-container">
      <h1 className="error-code">{err.status}</h1>
      <h2 className="error-message">{err.statusText}</h2>
      <p className="error-desc">
        The page you are looking for doesn’t exist or has been moved. Let’s get
        you back to delicious food 🍔🍕
      </p>
      <a href="/" className="error-btn">
        Go Back Home
      </a>
    </div>
  );
};

export default ErrorPage;
