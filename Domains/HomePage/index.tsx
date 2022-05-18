import axios from "axios";
import { useEffect, useState } from "react";
import { Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const A = dynamic(() => import("react-hls-player"), { ssr: false });

export const HomePage = () => {
  const [video, setVideo] = useState<any>("");
  const [data, setData] = useState<any>("");
  useEffect(() => {
    if (window) {
      console.log(typeof window);
    }
    axios
      .get("http://localhost:5000/allVideo")
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

  return (
    <>
      <Stack my={10} mx="auto" maxW="1300px" w={["70%"]}>
        {data && (
          <A
            url={`http://localhost:5000/public/${
              video ? video : data[0].fileName
            }`}
            autoplay={false}
            controls={true}
          />
        )}
        <SimpleGrid columns={4} spacing={10}>
          {data.map((el: any, ind: number) => {
            return (
              <Stack
                _hover={{
                  transform: "scale(1.85)",
                }}
                transition="ease .2s"
                bg="gray.900"
                cursor="pointer"
              >
                <Image
                  cursor={"pointer"}
                  w="100%"
                  className="test"
                  // bg={`url(${el.thubnail})`}
                  src={`${el.thubnail}`}
                  bgPos={"center"}
                  bgRepeat={"no-repeat"}
                  bgSize={"cover"}
                  key={ind}
                  onClick={() => setVideo(el.fileName)}
                />
                <Text fontSize="xl" textAlign="center" p={2} color="#c4c4c4">
                  {el.description}
                </Text>
              </Stack>
            );
          })}
        </SimpleGrid>
      </Stack>
    </>
  );
};
