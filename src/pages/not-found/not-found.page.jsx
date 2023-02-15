import notFoundImg from "../../assets/images/404.svg";
import Header from "../../componants/Header/Header";
import "./not-found.css";

const NotFound = () => {
  return (
    <div className="notFoundbody">
      <Header />
      <div className="notfoundimgdiv">
        <img src={notFoundImg} alt="chats" width={500} />
      </div>
    </div>
  );
};

export default NotFound;
