# RTSP Livestream Overlay App

## Features

- Live stream RTSP to browser (via HLS)
- Overlay editor (text, images, position/size)
- CRUD overlays (Flask + MongoDB)
- Full Docker Compose stack with Nginx reverse proxy

## Setup

1. Clone this repo or copy all files as shown.
2. Edit `.env` and set your MongoDB connection, RTSP URL, and domain.
3. Run:

    ```sh
    docker-compose up --build
    ```

4. Access the app at [http://localhost](http://localhost) (or your domain).

## How it Works

- FFmpeg converts RTSP stream to HLS (`/stream/stream.m3u8`)
- React frontend plays `/stream/stream.m3u8`, overlays user-saved elements
- Flask backend serves overlay CRUD API
- MongoDB stores overlays
- Nginx reverse proxies API, frontend, and HLS stream

## Production Deployment

- Use cloud MongoDB, update `MONGO_URI`.
- Harden security (API keys, secrets, firewall, CORS).
- Use HTTPS for your domain.
- Monitor and scale as needed.