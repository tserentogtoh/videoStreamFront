import axios from "axios";
import { useEffect, useState } from "react";
import { Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Container } from "../../Theme/common";
import dynamic from "next/dynamic";

const A = dynamic(()=>import("react-hls-player"),{ssr:false})

export const HomePage = () => {
  const [video, setVideo] = useState<any>("");
  const [data, setData] = useState<any>("");
  useEffect(() => {
    if (window) {
      console.log(typeof window);
    }
    axios
      .get("http://192.168.1.6:5000/allVideo")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (!data) {
    return null;
  }
  console.log("dsa", video);

  return (
    <>
      <Stack mb={10} mx="auto" w={Container}>
        <Text>home page</Text>
        {data && (
          <A
            url={`http://192.168.1.6:5000/public/${
              video ? video : data[0].fileName
            }`}
            autoplay={false}
            controls={true}
          />
        )}
        <SimpleGrid columns={5} spacing={10}>
          {data.map((el: any, ind: number) => {
            return (
              <>
                <Flex
                  cursor={"pointer"}
                  h="300px"
                  w="100%"
                  bg={`url(${el.thubnail})`}
                  bgPos={"center"}
                  bgRepeat={"no-repeat"}
                  bgSize={"cover"}
                  key={ind}
                  onClick={() => setVideo(el.fileName)}
                >
                  <Text p={3} bg="gray" h="40px" color="#c4c4c4">
                    {el.description}
                  </Text>
                </Flex>
              </>
            );
          })}
        </SimpleGrid>
      </Stack>
    </>
  );
};
