import { Box } from "@mui/material";
import { Fragment } from "react";
import Post from "../post/Post";
import { data } from "./style";

const Feed = () => {
  return (
    <Fragment>
      <Box flex={4} p={2}>
        {data.map((data) => (
          <Post
            profile={data.profile}
            name={data.name}
            cover={data.cover}
            date={data.date}
            text={data.text}
          />
        ))}
      </Box>
    </Fragment>
  );
};

export default Feed;
