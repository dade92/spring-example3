echo "Setting up environment"
cp ./local-env/1.sql ./deploy

cd deploy

echo "Pulling the latest images..."

docker compose up -d db

docker compose pull app

echo "Starting app..."
docker compose up -d app

docker ps

echo "App seems up and running. Enjoy!"


