import socket
import vehicle_pb2  # Generated from vehicle.proto
import random
import time

UDP_IP = "127.0.0.1"
UDP_PORT = 5005

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

while True:
    # Generate random vehicle data
    vehicle = vehicle_pb2.VehicleData(
        location=vehicle_pb2.Location(
            x=random.randint(0, 100),  # Random x-coordinate (0 to 100)
            y=random.randint(0, 100)   # Random y-coordinate (0 to 100)
        ),
        speed=random.uniform(0, 120),  # Random speed (0 to 120 km/h)
        brake=random.choice([True, False])  # Random brake status
    )

    # Serialize the message
    message_bytes = vehicle.SerializeToString()

    # Send the message over UDP
    sock.sendto(message_bytes, (UDP_IP, UDP_PORT))

    print(f"Sent vehicle data: x={vehicle.location.x}, y={vehicle.location.y}, speed={vehicle.speed}, brake={vehicle.brake}")

    time.sleep(1)
