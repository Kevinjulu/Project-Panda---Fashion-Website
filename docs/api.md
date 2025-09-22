# API

This document defines the public API surface used by the frontend.

Base URL
- Development (unified): http://localhost:3000
- Development (split): API remains at http://localhost:3000 while the frontend may run elsewhere; enable CORS (already enabled) or proxy /api accordingly.

Health
- GET /api/health → 200 OK

```http path=null start=null
GET /api/health HTTP/1.1
Host: localhost:3000
```

```json path=null start=null
{ "ok": true }
```

Contact
- POST /api/contact → 201 Created
- Purpose: Persist a contact/booking inquiry.
- Request body

```json path=null start=null
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "service": "Design Consult",
  "message": "Looking to explore neon couture concepts."
}
```

- Responses
  - 201

```json path=null start=null
{
  "ok": true,
  "contact": {
    "id": 1,
    "name": "Jane Doe",
    "email": "jane@example.com",
    "service": "Design Consult",
    "message": "Looking to explore neon couture concepts."
  }
}
```

  - 400

```json path=null start=null
{ "error": "Missing required fields" }
```

  - 500

```json path=null start=null
{ "error": "Server error" }
```

Payouts (sample data)
- GET /api/payouts → 200 OK
- Purpose: Provide rotating social-proof notifications (non-persistent sample data).

```http path=null start=null
GET /api/payouts HTTP/1.1
Host: localhost:3000
```

```json path=null start=null
[
  { "name": "Aisha N.", "amount": 8500, "city": "Nairobi", "minutesAgo": 2 },
  { "name": "Brian K.", "amount": 12200, "city": "Mombasa", "minutesAgo": 7 },
  { "name": "Wanjiru L.", "amount": 5600, "city": "Kisumu", "minutesAgo": 12 },
  { "name": "Omondi P.", "amount": 9800, "city": "Nakuru", "minutesAgo": 20 }
]
```