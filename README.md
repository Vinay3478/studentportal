# Flask Student Portal

A simple Flask web application for a student portal.

## Project Structure

```
studentportal/
├── app.py                 # Main Flask application
├── config.py              # Configuration settings
├── requirements.txt       # Python dependencies
├── templates/
│   └── index.html         # HTML template
└── static/
    ├── css/
    │   └── style.css      # Styling
    └── js/
        └── main.js        # JavaScript functionality
```

## Installation

1. **Create a virtual environment:**
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

## Running the Application

```bash
python app.py
```

The application will be available at `http://localhost:5000`

## Features

- Home page with welcome message
- API endpoint for Hello API (`/api/hello`)
- API endpoint for data submission (`/api/data`)
- Responsive design with modern UI
- Static file serving (CSS, JavaScript)
- Configuration management for different environments

## API Endpoints

### GET /api/hello
Get a hello message.
- **Query Parameter:** `name` (optional, default: "World")
- **Response:** `{"message": "Hello, {name}!"}`

### POST /api/data
Submit data to the server.
- **Request Body:** `{"name": "...", "message": "..."}`
- **Response:** `{"status": "success", "received": {...}}`

## Modifying the Application

1. Edit `app.py` to add more routes
2. Add new HTML templates in `templates/`
3. Add CSS styles in `static/css/`
4. Add JavaScript functionality in `static/js/`

## Database Integration (Optional)

To add database support with SQLAlchemy:
```bash
pip install Flask-SQLAlchemy
```

Then update `app.py` and `requirements.txt` accordingly.

## Deployment

For production deployment:
1. Set `DEBUG = False` in `config.py`
2. Use a production WSGI server like Gunicorn:
   ```bash
   pip install gunicorn
   gunicorn app:app
   ```
