import { useNavigate } from "react-router-dom";
import VideoUploadForm from "../VideoUploadForm/VideoUploadForm";
import VideoUploadSubmit from "../VideoUploadSubmit/VideoUploadSubmit";
import VideoUploadThumbnail from "../VideoUploadThumbnail/VideoUploadThumbnail";
import "./VideoUpload.scss";
import { useState } from "react";
import axios from "axios";
import { baseURL } from "../../common/Common";

const VideoUpload = () => {

  const  navigate  = useNavigate()

  const [data, setData] = useState({
    "channel": 'Local Testing', 
    "description":'',
    'title':''
  })


  const handleClick = async () => {
    console.log("form data: ", data);

    if (!data.description.length>0 && !data.title.length>0){
      alert("Required field not found");
      return;
    }
    try {
      const postVideosURL = `${baseURL}videos`;
      const res = await axios.post(postVideosURL, data);
      if(res.status === 201 || res.status === 200){
        alert("upload!!");
        navigate('/');
      }
    }catch (err){
      console.log()
    }
  }


  return (
    <div className="video-upload">
      <h1>Upload Video </h1>
      <div className="video-upload__divider" />
      <div className="video-upload__top">
        <div className="video-upload__left">
          <VideoUploadThumbnail />
        </div>
        <div className="video-upload__right">
          <VideoUploadForm  setData={setData} />
        </div>
      </div>
      <div className="video-upload__divider" />
      <div className="video-upload__buttom">
        <VideoUploadSubmit handleClick={handleClick} />
      </div>
    </div>
  );
};

export default VideoUpload;
