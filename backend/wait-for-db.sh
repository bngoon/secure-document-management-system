#!/bin/sh

# Wait for PostgreSQL to be ready
until nc -z -v -w30 postgres 5432; do
  echo "Waiting for PostgreSQL to start..."
  sleep 1
done

echo "PostgreSQL is up and running!"
exec "$@"
