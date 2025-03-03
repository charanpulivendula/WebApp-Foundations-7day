import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { Container, Typography, Button, Card, CardContent } from "@mui/material";

const socket = io("http://localhost:5000"); // Connect to the backend

export default function App() {
  const [speed, setSpeed] = useState(0);
  const [brake, setBrake] = useState(false);
  const [streaming, setStreaming] = useState(false);

  useEffect(() => {
    if (streaming) {
      socket.on('connection',()=>{
        console.log("connected");
      })
      socket.on("carData", (data) => {
        setSpeed(data.speed);
        setBrake(data.brake);
      });
    } else {
      socket.off("carData");
    }

    return () => socket.off("carData");
  }, [streaming]);

  const handleStreaming = () => {
    setStreaming((prev) => !prev);
    socket.emit(streaming ? "stopStreaming" : "startStreaming");
  };

  return (
    <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "50px" }}>
      <Card variant="outlined" sx={{ padding: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>Car Dashboard</Typography>
          <Typography variant="h5">Speed: <strong>{speed} km/h</strong></Typography>
          <Typography variant="h5" color={brake ? "error" : "success"}>
            Brake: {brake ? "ON" : "OFF"}
          </Typography>
          <Button
            variant="contained"
            color={streaming ? "secondary" : "primary"}
            onClick={handleStreaming}
            sx={{ marginTop: 2 }}
          >
            {streaming ? "Stop Streaming" : "Start Streaming"}
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}