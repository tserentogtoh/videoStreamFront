import {
  Button,
  Icon,
  Input,
  Progress,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useState, ChangeEvent, useEffect } from "react";
import { Container } from "../Theme/common";
import { BsCloudUploadFill } from "react-icons/bs";

export default function DollarDeposits() {
  const toast = useToast();
  const [video, setVideo] = useState<any>();
  const [description, setDescription] = useState<any>("");
  const [progress, setProgress] = useState(0);
  const MediaChange = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    setVideo(file);
  };
  const handler = () => {
    console.log("clicked");
    const formData = new FormData();
    formData.append("file", video);
    console.log(video);
    formData.append("desc", description);
    axios.post("http://localhost:5000/", formData, {
      headers: { "Content-Type": "multipart/form-data" },
      onUploadProgress: (progressEvent) => {
        const t = progressEvent.total;
        const n = progressEvent.loaded;
        const a = Math.round((n / t) * 100);
        setProgress(a);
      },
    });
  };

  useEffect(() => {
    if (progress === 100) {
      setDescription("");
      setVideo("");
      setProgress(0);
      toast({
        title: "Video Uploaded",
        description: "We've upload your video for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      window.location.reload();
    }
  }, [progress]);
  console.log(progress);
  return (
    <Stack mt={20} mx="auto" w={Container}>
      <Stack spacing={4} w="40%" mx="auto">
        <Text fontSize="xl" color="white">
          File upload
        </Text>
        <label htmlFor="video">
          <Stack
            p={10}
            border="1px solid gray"
            borderStyle="dashed"
            alignSelf="center"
            justifyContent="center"
            alignItems="center"
            cursor="pointer"
          >
            <Icon fontSize="6xl" color="gray" as={BsCloudUploadFill} />
            <Text color="white">Video upload</Text>
            <Text color="white">{video?.name}</Text>
          </Stack>
        </label>
        <Input
          display="none"
          id="video"
          name="file"
          onChange={(e) => MediaChange(e)}
          color="white"
          type="file"
        />
        <Text fontSize="xl" color="white">
          Description
        </Text>

        <Input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          color="white"
        />
        <Progress colorScheme="green" value={progress} />
        <Button
          isDisabled={progress === 0 || progress === 100 ? false : true}
          onClick={handler}
          color="black"
          bg="#FFC226"
        >
          Upload
        </Button>
      </Stack>
    </Stack>
  );
}
