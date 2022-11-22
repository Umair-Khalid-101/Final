import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";

const Details = ({ details }) => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="container">
          <div>
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <img src={details.picture} style={{ width: "50%" }} />
            </div>
            <div>
              <p style={{ color: "#242f9b", fontWeight: "bold" }}>
                Campaign Owner:
              </p>
              <p>{details.posterName}</p>
            </div>
            <div>
              <p style={{ color: "#242f9b", fontWeight: "bold" }}>Title:</p>
              <p>{details.title}</p>
            </div>
            <div>
              <p style={{ color: "#242f9b", fontWeight: "bold" }}>Category:</p>
              <p>{details.category}</p>
            </div>
            <div>
              <p style={{ color: "#242f9b", fontWeight: "bold" }}>
                Total Amount:
              </p>
              <p>{details.campaignGoal}</p>
            </div>
            <div>
              <p style={{ color: "#242f9b", fontWeight: "bold" }}>
                Raised Amount:
              </p>
              <p>2 ETH</p>
            </div>
            <div>
              <p style={{ color: "#242f9b", fontWeight: "bold" }}>End Date:</p>
              <p>{details.enddate}</p>
            </div>
            <div>
              <p style={{ color: "#242f9b", fontWeight: "bold" }}>
                Description:
              </p>
              <p>{details.description}</p>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <div style={{ cursor: "pointer" }}>
                <ShareIcon style={{ fontSize: 40, color: "#242F9B" }} />
              </div>
              <div style={{ cursor: "pointer" }}>
                <FavoriteIcon
                  style={{ fontSize: 40, color: "#242F9B", marginLeft: 20 }}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "50%",
                  height: "10%",
                  backgroundColor: "#242F9B",
                  borderRadius: "50px",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <button
                  type="submit"
                  className="btn btn-lg btn-block"
                  style={{
                    backgroundColor: "#242F9B",
                    color: "white",
                  }}
                  onClick={() => navigate(`/Donate/${details.walletAddress}`)}
                >
                  Donate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
