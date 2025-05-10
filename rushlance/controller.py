import subprocess
import os

#Paths
frontend_path = "./frontend/"
backend_path = "./backend/"


#Starting the backend
backend_process = subprocess.Popen(
        "mvn spring-boot:run",
        cwd = backend_path,
        shell = True
        )

#Starting the frontend
frontend_process = subprocess.Popen(
        "npm run dev", 
        cwd = frontend_path, 
        shell = True
        )

try:
    backend_process.wait()
    frontend_process.wait()
except KeyboardInterrupt:
    backend_process.terminate()
    frontend_process.terminate()

