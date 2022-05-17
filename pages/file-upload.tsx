import { Button, Input, Progress, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import { useState, ChangeEvent } from "react";
import { Container } from "../Theme/common";

export default function DollarDeposits() {
  const [video, setVideo] = useState<any>();
  const [description, setDescription] = useState<any>();
  const [progress,setProgress] = useState(0)
  const MediaChange = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    setVideo(file);
  };
  const handler = () => {
    console.log("clicked")
    const formData = new FormData();
    formData.append("file", video);
    console.log(video)
    formData.append("desc", description);
    axios.post(
      "http://localhost:5000",
      formData,
      { headers: { "Content-Type": "multipart/form-data" },
      onUploadProgress: progressEvent => {
        const t = progressEvent.total
        const n = progressEvent.loaded
        const a = Math.round(n/t*100)
        setProgress(a)
      } }
    );
  };
  return (
    <Stack mt={20} mx="auto" w={Container}>
      <Stack w="40%" mx="auto">
        <Text color="white">File upload</Text>
        <Input onChange={(e) => MediaChange(e)} color="white" type="file" />
        <Input onChange={(e) => setDescription(e.target.value)} color="white" />
        <Progress hasStripe value={progress} />
        <Button onClick={handler} color="black" bg="#FFC226">
          Upload
        </Button>
      </Stack>
    </Stack>
  );
}
