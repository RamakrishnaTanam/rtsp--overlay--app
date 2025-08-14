# RTSP Overlay App API Documentation

Base URL: `/api/overlays/`

---

## Endpoints

### 1. GET `/api/overlays/`
**Description:** Retrieve all overlay settings.

**Response Example:**
```json
[
  {
    "_id": "string",
    "type": "text | image",
    "content": "string",
    "x": 50,
    "y": 50,
    "width": 100,
    "height": 40
  }
]
```

---

### 2. POST `/api/overlays/`
**Description:** Create and save a new overlay setting.

**Request Body Example:**
```json
{
  "type": "text",
  "content": "Live!",
  "x": 50,
  "y": 50,
  "width": 100,
  "height": 40
}
```
**Response Example:**
```json
{ "_id": "string" }
```

---

### 3. PUT `/api/overlays/<id>`
**Description:** Update an existing overlay.

**Request Body Example:**
```json
{
  "type": "image",
  "content": "https://yourdomain.com/logo.png",
  "x": 10,
  "y": 20,
  "width": 80,
  "height": 80
}
```
**Response Example:**
```json
{ "msg": "updated" }
```

---

### 4. DELETE `/api/overlays/<id>`
**Description:** Delete an overlay.

**Response Example:**
```json
{ "msg": "deleted" }
```

---

## Notes

- All endpoints accept and return JSON.
- Overlays created or edited via the API are displayed live on the RTSP stream via the frontend.
- No authentication is required by default, but consider adding it for production.
- For troubleshooting, consult backend service logs (`docker-compose logs backend`).
