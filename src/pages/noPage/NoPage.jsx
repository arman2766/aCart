import { useNavigate } from "react-router-dom";
import noPage from "../../assets/images/png/404.png";
import CustomButton from "../../components/customButton/CustomButton";
import { Layout } from "../../components/layout/Layout";
import "./noPage.scss";
const NoPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Layout>
        <div className="no-page">
          <img src={noPage} alt="404" />
          <h2>
            We could not locate what you were searching for. Please give it
            another try.
          </h2>
          <CustomButton
            text="Go to Homepage"
            type="button"
            onClick={() => navigate("/")}
          />
        </div>
      </Layout>
    </>
  );
};

export default NoPage;
