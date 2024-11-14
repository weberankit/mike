import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addShowLatestStatus, addVideoDescData } from "../utils/generalSlice";
import liveImg from "../image/live-img.png";
import YouTube from "react-youtube";
import { Play } from "react-bootstrap-icons";
import Header from "./Header";
import CustomShimmerBox from "./CustomShimmerBox";
import { XCircle } from "react-bootstrap-icons";
import OpenMsgbox from "./OpenMsgbox";
//import { Behance } from "react-bootstrap-icons"
const LatestVideosPlay = () => {
  let latestEventData; // Variable to store the latest event data
  let timeID1, timeID2; 
  const { id } = useParams();
  const [idValue, setIdValue] = useState(id);
  const [videoStop, setVideoStop] = useState(null);
  const [showMsg, setShowMsg] = useState(null);
  //if user refersh page then get data from local storage
  const selectOnlyVideos =
    useSelector((store) => store.dataSliced.onlyVideos) ||
    JSON.parse(localStorage.getItem("dataFor"));
  const dispatch = useDispatch();

  const navigate = useNavigate();
  function scroll() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  const selectDescData = useSelector(
    (store) => store.generalData.videoDescData
  );
  const selectIframeStatus = useSelector(
    (store) => store.generalData.showLatestVideoStatus
  );
  //console.log(selectDescData)
  const slectError = useSelector((store) => store.generalData.ErrorData);
  //using this if local stoarge is full and user refersh page so we will naviagte them to home page
  useEffect(() => {
    dispatch(addShowLatestStatus(true));

    if (performance.navigation.type === 1 && !selectOnlyVideos) {
      alert("your browser storage is full so moving to home page");
      navigate("/");
    }
  }, []);

  const onEnd = (event) => {
    event.target.seekTo(0); // Seek to the beginning of the video
    clearTimeout(timeID1);clearTimeout(timeID2)
  };
  const opts = {
    height: "100%",
    width: "100%",

    playerVars: {
      // Hide video title and related video info
      modestbranding: 1, // Reduces YouTube branding
      autoPlay: 0,
      mute: 0,
      rel: 0,
      controls: 1,
    },
  };

  useEffect(() => {
    dispatch(addShowLatestStatus(true));
  }, [idValue]);

  const onMessage = useCallback(() => {
    setShowMsg(null);
  }, []);

  const onbanner = useCallback(() => {
    setVideoStop(false);
  }, []);

  return (
    <>
      {showMsg && (
        <OpenMsgbox
          className="bg-black absolute w-full "
          videoIdval={idValue}
          setShowMsg={() => onMessage()}
          setVideoStop={() => onbanner()}
        />
      )}
      <Header hideTopUp={"hidden"} />
      {!selectOnlyVideos && (
        <div>
          <CustomShimmerBox value={1} />
        </div>
      )}

      <div className="p-2 sm:mt-12 ">
        <div className="flex flex-col sm:flex-row ">
          <div className=" w-full sm:w-[60%] ">
            <div className="w-full ">
              <div className="video-container sm:mt-12">
                {selectIframeStatus && (
                  <div className=" z-[100] relative flex justify-center flex-row ">
                    <div className="loader  absolute"> </div>{" "}
                    <span
                      className="z-[300]"
                      onClick={() => dispatch(addShowLatestStatus(null))}
                    >
                      {" "}
                      <XCircle color="gray" size={28} />
                    </span>{" "}
                  </div>
                )}
                {
                  //using for banner to stop video
                  videoStop && (
                    <div className="relative z-[10]">
                      <div className="absolute bg-red-500 w-full h-[1000px] animate-slide-down">
                        <div className="mt-4 sm:mt-40 text-center ">
                          <div className=" w-1/2 bg-white rounded-md p-9 m-auto">
                            Moving to Youtube .. in 1seconds..
                            {/*showMsg&&<p className="text-red-700">please check  pop up in browser</p>*/}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }

                <YouTube
                  className="topvideo"
                  videoId={idValue}
                  loading="loading...."
                  title="THE REDMIKE"
                  opts={opts}
                  onReady={(event) => {
                    // You can access the player here if needed
                    /* event.target.playVideo();*/
                    dispatch(addShowLatestStatus(null));
                  }}
                  onPlay={() => {
                    dispatch(addShowLatestStatus(null));
                  }}
                  onStateChange={(event) => {
                    //  console.log(event.data, "this is event", event.target.getCurrentTime());
                    latestEventData = event.data;  
                    if (event.data === 1) {
                   timeID1= setTimeout(() => {

                    if (latestEventData === 2) { 
                      console.log("Video stopped, clearing first timeout.");
                      clearTimeout(timeID1);
                      return;
                  }
                        event.target.pauseVideo();
                        setVideoStop(true);

                   timeID2= setTimeout(() => {
                          const allowed = window.open(
                            `https://www.youtube.com/watch?v=${idValue}`,
                            "_blank"
                          );

                          if (!allowed) {
                            setShowMsg(true);
                          }
                          //video stopper remove
                          allowed ? setVideoStop(false) : setVideoStop(true);
                        }, 2000);
                      }, 10000);
                    }
                  }}
                  onEnd={onEnd}
                />
              </div>
            </div>

            <div className="pt-2 mt-2">
              <h2 className="text-3xl p-1 m-2 font-extrabold w-4/5">
                {" "}
                {selectDescData && selectDescData?.snippet?.title}
              </h2>
              <p className="p-1 text-xl m-1 font-semibold w-4/5">
                {" "}
                {selectDescData &&
                  selectDescData?.snippet?.description
                    ?.split(" ")
                    ?.slice(0, 15)
                    ?.join(" ")}
              </p>

              {slectError && (
                <p className="text-red-500 w-1/2"> ${slectError} </p>
              )}
            </div>
          </div>

          <div className="w-full sm:w-[35%] sm:overflow-y-scroll sm:h-[900px] m-auto">
            <h2 className="text-lg font-extrabold p-1 m-1">
              Recommended video
            </h2>
            <div className="m-auto">
              {selectOnlyVideos &&
                selectOnlyVideos.map((item, index) => {
                  //skip the playinf video and upcoming here and opertion think like T T = T, T F = F ,F T = F
                  if (
                    item.id.videoId !== idValue &&
                    item?.snippet?.liveBroadcastContent !== "upcoming"
                  ) {
                    console.log(item);

                    return (
                      <div className="flex xs:flex-col flex-row sm:flex-col ">
                        <div
                          className="topvideo "
                          onClick={() => {
                            setIdValue(item.id.videoId);
                            dispatch(addVideoDescData(item));
                            scroll();
                          }}
                          key={item.id.videoId}
                        >
                          <div className="  relative ">
                            <img
                              key={item.snippet.thumbnails.medium.url}
                              className={` m-auto p-2 rounded-3xl ${
                                item?.snippet?.liveBroadcastContent ===
                                  "live" &&
                                "border border-dotted border-black w-full"
                              } `}
                              src={
                                item?.snippet?.liveBroadcastContent === "live"
                                  ? liveImg
                                  : item.snippet.thumbnails.medium.url
                              }
                              alt={item.snippet.title}
                            ></img>
                            <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-40 animate-spin-outline bg-red-500 w-10 rounded-xl m-auto hidden sm:block">
                              <Play className="ml-1" size={35} />
                            </div>
                          </div>

                          <h1>
                            {/*item?.snippet?.liveBroadcastContent === "live"?"live":""*/}
                          </h1>
                        </div>
                        <div className=" p-1  w-1/2 xs:w-full xs:text-base text-xl sm:w-[70%] sm:m-auto  sm:text-sm lg:font-semibold">
                          {" "}
                          {item.snippet.title}
                        </div>
                      </div>
                    );
                  }
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestVideosPlay;
