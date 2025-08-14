# RTSP Overlay App API Documentation

Base URL: `/api/overlays/`

## Endpoints

### GET `/api/overlays/`
**Retrieve all overlay settings.**

Response:
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

### POST `/api/overlays/`
**Create and save a new overlay setting.**

Body Example:
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
Response:
```json
{ "_id": "string" }
```

---

### PUT `/api/overlays/<id>`
**Update an existing overlay.**

Body Example:
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
Response:
```json
{ "msg": "updated" }
```

---

### DELETE `/api/overlays/<id>`
**Delete an overlay.**

Response:
```json
{ "msg": "deleted" }
```