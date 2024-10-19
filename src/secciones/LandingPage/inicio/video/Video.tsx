import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const Video = () => {
  return (
    <CardContent>
      <CardMedia
        component="video"
        image="public/videos/somnotech.mp4"
        title="SomnoTech"
        controls
      />
    </CardContent>
  );
};

export default Video;
