# RTSP Livestream Overlay App – User Guide

## Overview

This app lets you stream an RTSP video feed to your browser and add overlays (such as text or images) to your livestream. You do not need to manually edit any code or files, only supply your RTSP stream and MongoDB configuration in a simple `.env` file.

---

## Setup Instructions

### 1. Clone or Download the Project

Copy all the files provided in the directory structure, or download the project as a ZIP from your repository.

### 2. Configure Environment Variables

Open the `.env` file in the root directory. Update the following:
- `RTSP_URL`: Your RTSP stream address (e.g. `rtsp://youripcamera/stream` or a demo from [rtsp.me](https://rtsp.me/)).
- `MONGO_URI`: Your MongoDB connection string (local or cloud).
- `SECRET_KEY`: Any random secret key (used for Flask sessions).
- `DOMAIN`: Set this to your local domain (`localhost`) or your production domain.

**Example `.env`:**
```dotenv
MONGO_URI=mongodb://mongo:27017/rtsp_overlay
RTSP_URL=rtsp://rtsp.me/your_stream
SECRET_KEY=supersecretkey
DOMAIN=localhost
```

### 3. Build and Start the App

Open a terminal in the project root and run:
```sh
docker-compose up --build
```
This command will:
- Start MongoDB, backend API, frontend React app, FFmpeg RTSP-to-HLS streaming, and Nginx reverse proxy.

### 4. Access the App

Open your browser and go to:
```
http://localhost
```
Or, use your domain if configured.

---

## Usage Instructions

### Viewing the Livestream

- The main page displays your RTSP video feed, streamed in real-time using HLS technology.

### Inputting the RTSP URL

- The RTSP URL is set in the `.env` file before starting the app.
- To change the stream source, edit the `RTSP_URL` value and restart the app (`docker-compose restart ffmpeg-hls` or `docker-compose up --build`).

### Managing Overlays

#### Add a New Overlay

1. Use the overlay editor form below the video player.
2. Choose overlay type (`Text` or `Image`).
3. For text, enter your desired label/message.
4. For image/logo, enter the image URL.
5. Set the position (`x`, `y`) and size (`width`, `height`) as needed.
6. Click **Save Overlay**.

Your overlay appears instantly on the video.

#### Edit or Delete Overlays

- Overlays are listed and shown live.
- To edit or delete overlays, you can use the API endpoints directly (see `API_DOC.md`), or extend the frontend as needed.

---

## Troubleshooting

- **Stream not playing:** Check your RTSP URL, network connectivity, and camera permissions.
- **Overlays not showing:** Verify MongoDB connection, backend logs, and frontend API calls.
- **HLS files missing:** Make sure the `stream/` folder exists and is writable, and that FFmpeg is running.

Check logs for each service using:
```sh
docker-compose logs backend
docker-compose logs ffmpeg-hls
docker-compose logs frontend
docker-compose logs nginx
```

---

## Production Deployment

- Set up HTTPS termination in Nginx or a cloud provider.
- Use a managed MongoDB service for scalability.
- Harden API endpoints (authentication, CORS settings).
- Monitor service health and logs.

---

## Support

For advanced usage, customization, or troubleshooting, refer to the README and API documentation files, or contact your system administrator.
