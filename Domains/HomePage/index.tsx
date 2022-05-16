import axios from "axios";
import { useEffect } from "react";
import { Stack, Text } from "@chakra-ui/react";
import { Container } from "../../Theme/common";
import ReactHlsPlayer from "react-hls-player";

export const HomePage = () => {
  //   useEffect(() => {
  //     axios
  //       .get("http://192.168.1.6:5000/44c8bee9.mp4.m3u8")
  //       .then((res) => {
  //         console.log(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);
  return (
    <Stack mx="auto" w={Container}>
      <Text>home page</Text>
      <ReactHlsPlayer
        url={"http://192.168.1.6:5000/44c8bee9.mp4.m3u8"}
        autoplay={true}
        controls={true}
      />
    </Stack>
  );
};
