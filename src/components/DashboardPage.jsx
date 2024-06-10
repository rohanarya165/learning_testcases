import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../assets/Logo_white.png";
import CircularProgress from "@mui/material/CircularProgress";

function DashboardPage(props) {
  const navigate = useNavigate();
  const [masterData, setMasterData] = React.useState([]);
  const [isLoader, setIsLoader] = React.useState(false)
  let tokenData =
    props.token.length > 0 ? props.token : localStorage.getItem("token");

  React.useEffect(() => {
    if (!tokenData.length) {
      navigate("/login");
    }
    setIsLoader(true)
    axios
      .get("https://untitled-twkmuar27a-uc.a.run.app/api", {
        headers: { Authorization: `Token ${tokenData}` },
      })
      .then((res) => {
        setMasterData(res.data);
        setIsLoader(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="w-full bg-black p-14 text-white">
      {isLoader ? <CircularProgress color="inherit" /> : <div>
        <img src={Logo} alt="" className="w-[136px]" />
        <p className="text-[48px] font-[500] mt-10">
          Welcome <span className="underline">Test</span>
        </p>
        <p className="text-[24px] font-[600] mt-4">
          Hope you having a good day!
        </p>

        <div className="mt-10">
          <p className="text-[48px] font-[500] mt-10">Photography</p>
          <div className="flex gap-6 overflow-x-auto w-full mt-4">
            {masterData.map((data) => {
              if (data.prompt === "Photography") {
                return (
                  <img
                    key={data.id}
                    src={data.image_url}
                    className="h-[700px] w-[425px] rounded-[40px]"
                  />
                );
              }
            })}
          </div>
        </div>

        <div className="mt-10">
          <p className="text-[48px] font-[500] mt-10">Learning</p>
          <div className="flex gap-6 overflow-x-auto w-full mt-4">
            {masterData.map((data) => {
              if (data.prompt === "Learning") {
                return (
                  <img
                    key={data.id}
                    src={data.image_url}
                    className="h-[700px] w-[425px] rounded-[40px]"
                  />
                );
              }
            })}
          </div>
        </div>
      </div>}
    </div>
  );
}

export default DashboardPage;
