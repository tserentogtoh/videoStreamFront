import { Button, Input, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import { useState, ChangeEvent } from "react";
import { Container } from "../Theme/common";

export default function DollarDeposits() {
  const [video, setVideo] = useState<any>();
  const [description, setDescription] = useState<any>();
  const MediaChange = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    setVideo(file);
  };
  const handler = () => {
    const formData = new FormData();
    formData.append("file", video);
    axios.post(
      "",
      { data: formData },
      { headers: { "Content-Type": "multipart/form-data" } }
    );
  };
  return (
    <Stack mt={20} mx="auto" w={Container}>
      <Stack w="40%" mx="auto">
        <Text color="white">File upload</Text>
        <Input onChange={(e) => MediaChange(e)} color="white" type="file" />
        <Input onChange={(e) => setDescription(e.target.value)} />
        <Button color="black" bg="#FFC226">
          Upload
        </Button>
      </Stack>
    </Stack>
  );
}
