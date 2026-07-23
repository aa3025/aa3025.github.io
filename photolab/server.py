#!/usr/bin/env python3
import http.server
import base64
import sys

PORT = 8000
REQUIRE_AUTH = False
USERNAME = "user"
PASSWORD = "photolab335"  # Change this to your desired password!

class BasicAuthHandler(http.server.SimpleHTTPRequestHandler):
    def do_AUTHHEAD(self):
        self.send_response(401)
        self.send_header('WWW-Authenticate', 'Basic realm="LIGHTBOX"')
        self.send_header('Content-type', 'text/html')
        self.end_headers()

    def do_GET(self):
        if not REQUIRE_AUTH:
            super().do_GET()
            return
            
        auth_header = self.headers.get('Authorization')
        expected_auth = 'Basic ' + base64.b64encode(f"{USERNAME}:{PASSWORD}".encode()).decode()
        
        if auth_header is None:
            self.do_AUTHHEAD()
            self.wfile.write(b'Authentication required.')
        elif auth_header == expected_auth:
            super().do_GET()
        else:
            self.do_AUTHHEAD()
            self.wfile.write(b'Invalid credentials.')

if __name__ == '__main__':
    port = PORT
    if len(sys.argv) > 1:
        try:
            port = int(sys.argv[1])
        except ValueError:
            pass
            
    if REQUIRE_AUTH:
        print(f"Starting password-protected server on http://localhost:{port}")
        print(f"Credentials: {USERNAME} / {PASSWORD}")
    else:
        print(f"Starting server on http://localhost:{port} (Auth Disabled)")
    
    server_address = ('', port)
    httpd = http.server.ThreadingHTTPServer(server_address, BasicAuthHandler)
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
