from http.server import BaseHTTPRequestHandler, HTTPServer
from pathlib import Path
import mimetypes
from urllib.parse import urlparse

class SimpleAPIHandler(BaseHTTPRequestHandler):
    ##testing my server
    def do_GET(self):
        parsed = urlparse(self.path)
        print(f"Received request for path: {parsed.path}")

        # If path is root "/", serve index.html
        if parsed.path == "/" or parsed.path == "":
            requested_file = "index.html"
        else:
            # Remove leading slash and get the file path
            requested_file = parsed.path.lstrip("/")

        file_path = Path(requested_file).resolve()

        # Prevent directory traversal
        if not file_path.exists() or not file_path.is_file():
            print(f"File not found: {file_path}")
            self.send_response(404)
            self.end_headers()
            return

        # Guess content type
        mime_type, _ = mimetypes.guess_type(str(file_path))
        self.send_response(200)
        self.send_header("Content-Type", mime_type or "application/octet-stream")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()

        # Serve the file
        with open(file_path, "rb") as f:
            self.wfile.write(f.read())

if __name__ == "__main__":
    server = HTTPServer(('0.0.0.0', 8002), SimpleAPIHandler)
    print("API server running on http://0.0.0.0:8002")
    server.serve_forever()
