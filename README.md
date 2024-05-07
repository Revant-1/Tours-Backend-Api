# Hotel/Tour API

This project provides APIs for managing hotels/tours and user authentication.

## Endpoints

### Hotel/Tour Related APIs

- **Create Hotel/Tour**: `POST /api/hotels`
- **Update Hotel/Tour**: `PUT /api/hotels/{:hotel_id}`
- **Delete Hotel/Tour**: `DELETE /api/hotels/{:id}`
- **Get All Hotel/Tours**: `GET /api/hotels?featured=true&limit=1`
- **Get Hotel/Tour by ID**: `GET /api/hotels/:id`

### User Related APIs

- **Register User**: `POST /api/auth/register`
  - Example:
    ```json
    {
        "username": "adi1234",
        "email": "adi1234@gmail.com",
        "password": "000001"
    }
    ```

- **Login User**: `POST /api/auth/login`
  - Example:
    ```json
    {
        "username": "adi",
        "password": "00000"
    }
    ```

### Room Related APIs

- **Add Room**: `POST /api/rooms/{:Hotel-id}`
  - Example:
    ```json
    {
        "title": "X Room",
        "desc": "Kng bed, 1 bathroom, balcony",
        "price": 450,
        "maxPeople": 3,
        "roomNumbers": [{"number": 501}, {"number": 502}]
    }
    ```

- **Delete Room**: `DELETE /api/:id_room/:hotelid`

### Other APIs

- **Get Hotel Count by City**: `GET /api/hotels/countByCity?cities=vashi,nashik,mumbai`
- **Get Hotel Rooms**: `GET /api/hotels/room/:hotelid`

## Usage

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the server using `npm start`.

Make sure to replace `http://localhost:4040` with the actual base URL of your API server.

