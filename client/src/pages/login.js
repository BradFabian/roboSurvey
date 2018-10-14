import Login from "../components/Login";
import image from "../assets/img/bg7.jpg";

class LoginPage extends React.Component {
  render() {
    return (
      <div
        className="container-fluid"
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          paddingBottom: "30%",
          paddingTop: "10%"
        }}
      >
        <div className="row">
          <Login />
        </div>
      </div>
    );
  }
}

export default LoginPage;
