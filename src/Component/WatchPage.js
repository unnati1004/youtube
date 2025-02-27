import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import { LiveChat } from "./LiveChat";
import { Button } from "./Button";
import { Youtube_video_details, Google_Api_key } from "../utils/constants";
import ReplyIcon from "@mui/icons-material/Reply";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

export const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [videoData, setVideoData] = useState([]);

  let key = searchParams.get("v");
  const dispatch = useDispatch();
  const functionMenu = [
    { text: "Share", icon: ReplyIcon },
    { text: "Download", icon: DownloadOutlinedIcon },
    { text: "Clip", icon: ContentCutOutlinedIcon },
    { text: "Save", icon: BookmarkBorderOutlinedIcon },
  ];
  const getVideos = async () => {
    const data = await fetch(
      `${Youtube_video_details}${key}&key=${Google_Api_key}`
    );
    const json = await data.json();
    setVideoData(json.items[0]);
  };
  const { snippet } = videoData;

  useEffect(() => {
    getVideos();
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex-flex-col w-full">
      <div className="absolute top-[6rem] px-5 flex w-full">
        <div>
          <iframe
            width="1000"
            height="600"
            src={`https://www.youtube.com/embed/${key}`}
            title="Exploring Bandra with Raghav Juyal | Tere Gully Mein Ep 79 | Curly Tales"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullscreen
          ></iframe>
          <h1 className="text-2xl font-bold p-2">{snippet?.title}</h1>
          <div className="flex justify-between align-middle">
            <div>
              <ul>
                {" "}
                <li>{snippet?.channelTitle}</li>{" "}
              </ul>
            </div>
            <div className="flex">
              {functionMenu.map((data) => (
                <Button key={data?.text} name={data?.text} />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <CommentContainer />
    </div>
  );
};
