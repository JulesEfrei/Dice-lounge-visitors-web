import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import styles from "./styles/gameDetails.module.scss";
import { ErrorPage } from "./";
import { Loading } from "../Atoms/";
import { Header } from "../Sections/";
import useSwr from "swr";
import { formatDistanceStrict } from "date-fns";
import { generateToast, verifForm } from "../../utils/formVarification";
import { ToastContainer } from "react-toastify";

function GameDetails() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const textRef = useRef(null);

  let { gameId } = useParams();

  const user = JSON.parse(localStorage.getItem("userData"));

  const saveGame = async () => {
    try {
      const req = await fetch(
        `http://localhost:3000/api/v1/user/${user.id}/game-liked`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.accessToken}`,
          },
          body: JSON.stringify({ gameId }),
        }
      );

      const res = await req.json();

      if (!res.error) {
        generateToast("Game saved!", "success");
      } else {
        generateToast(res.error, "error");
      }
    } catch (err) {
      generateToast(err, "error");
    }
  };

  const unSaveGame = async () => {
    try {
      const req = await fetch(
        `http://localhost:3000/api/v1/user/${user.id}/game-liked/${gameId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      );

      const res = await req.json();

      if (!res.error) {
        generateToast("Game unsaved!", "success");
      } else {
        generateToast(res.error, "error");
      }
    } catch (err) {
      generateToast(err, "error");
    }
  };

  const save = () => {
    if (!isSaved) {
      saveGame();
      setIsSaved(true);
    } else if (isSaved) {
      unSaveGame();
      setIsSaved(false);
    }
  };

  const formVerification = async () => {
    const result = verifForm({
      name: textRef.current ? textRef.current.value : "",
    });

    if (result.success === true && rating !== 0) {
      const body = {
        content: textRef.current.value,
        userId: user.id,
        rating,
        gameId,
      };

      try {
        const req = await fetch("http://localhost:3000/api/v1/review/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.accessToken}`,
          },
          body: JSON.stringify(body),
        });

        const res = await req.json();

        if (!res.error) {
          generateToast("Review successfully added!", "success");
          ref.current.value = "";
          setRating(0);
        } else {
          generateToast(res.error, "error");
        }
      } catch (err) {
        generateToast(err, "error");
      }
    } else {
      generateToast("Invalid form!");
    }
  };

  const fetcher = (urls) => {
    const f = (url) => fetch(url).then((r) => r.json());
    return Promise.all(urls.map((url) => f(url)));
  };

  const { data, error, isLoading } = useSwr(
    [
      `http://localhost:3000/api/v1/game/${gameId}`,
      `http://localhost:3000/api/v1/user/${user.id}/game-liked/${gameId}`,
    ],
    fetcher
  );

  if (error) return <ErrorPage type="505" />;
  if (isLoading) return <Loading />;
  if (!isLoading && data.error) {
    return (
      <>
        <Header />
        <ErrorPage type="404" />
      </>
    );
  }
  return (
    <>
      <div className={styles.header}>
        <div className={styles.items} onClick={() => navigate(-1)}>
          <img src="/Arrow.svg" alt="Arrow" />
        </div>
        <div className={styles.items} onClick={() => save()}>
          <img src={!isSaved ? "/Save.svg" : "/filled-Save.svg"} alt="Arrow" />
        </div>
      </div>
      <div className={styles.gameImg}>
        <div
          className={styles.img}
          style={{
            backgroundImage: `url("${
              data[0].game.cover ? data[0].game.cover : "/LOGO_Black.png"
            }")`,
            backgroundSize: data[0].game.cover ? "100%" : "50%",
          }}
        ></div>
      </div>
      <div className={styles.mainContainer}>
        <h2>{data[0].game.name}</h2>
        <div className={styles.tags}>
          <div className={styles.items}>
            <img src="/Star.svg" alt="Star" />
            <p>{data[0].game.rating ? data[0].game.rating : "N/A"}</p>
          </div>
          <div className={styles.items}>
            <img src="/Livre.svg" alt="Price" />
            <p>{data[0].game.price ? data[0].game.price : "N/A"}</p>
          </div>
          <div className={styles.items}>
            <img src="/Calendar.svg" alt="Calendar" />
            <p>
              {data[0].game.releaseYear
                ? new Date(data[0].game.releaseYear).getFullYear()
                : "N/A"}
            </p>
          </div>
        </div>
        <p className={styles.description}>{data[0].game.description}</p>
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.button} onClick={() => navigate("/booking")}>
          <h2>Book the game</h2>
        </div>
      </div>

      <div className={styles.postReviewContainer}>
        <div className={styles.rating}>
          <p>Rate the game</p>
          <div className={styles.starContainer}>
            {new Array(5).fill(0, null).map((elm, index) => (
              <div
                className={styles.items}
                key={index}
                onClick={() => setRating(index + 1)}
              >
                <img
                  src={rating <= index ? "/rating.png" : "/filled-rating.png"}
                  alt="Rating icon"
                />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.content}>
          <p>Leave a comment</p>
          <textarea
            name="comment"
            id="comment"
            cols="60"
            rows="10"
            ref={textRef}
          ></textarea>
        </div>
      </div>
      <div className={styles.buttonContainer} onClick={formVerification}>
        <div className={styles.button}>
          <h2>Send review</h2>
        </div>
      </div>

      <div className={styles.reviewContainer}>
        {data[0].game.review.map((elm, index) => (
          <div className={styles.items} key={`${elm.id}-${index}`}>
            <div className={styles.top}>
              <img src="/UserIcon.svg" alt="Profile Picture" />
              <h3>{elm.user.userName}</h3>
            </div>
            <div className={styles.mid}>
              <p>{elm.content}</p>
            </div>
            <div className={styles.bottom}>
              <div className={styles.rating}>
                <div className={styles.imgContainer}>
                  <img src="/rating.png" alt="Rating Icon" />
                </div>
                <h4>{elm.rating}</h4>
              </div>
              <div className={styles.date}>
                <p>
                  {formatDistanceStrict(new Date(elm.date), new Date(), {
                    addSuffix: true,
                  })}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ToastContainer />
    </>
  );
}

export default GameDetails;
