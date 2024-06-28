# C# SignIn Project

## Introduction

This project is a simple C$ application that demonstrates a sign-in functionality. It creates a backend to provide a sign-in interface for the users.

## Installation

To set up this project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `dotnet restore "backend.csproj"` to install the necessary dependencies.
4. Run `dotnet build "backend.csproj" -c Release -o /app/build` to build the application.
5. Run `dotnet publish "backend.csproj" -c Release -o /app/publish` to start the development server. The app will be available at `http://localhost:8080`.

## Usage

The application presents an API with the sign-in endpoint `/Auth/login`. Users can interact with the endpoint using cURL or Postman to simulate a sign-in process.

```shell
curl -X POST \                                                                                                               v1.5.7
  http://localhost:7175/Auth/login \
  -H 'Content-Type: application/json' \
  -d '{
    "Email": "test@example.com",
    "Password": "password"
  }'
```

## Contributing

Contributions to this project are welcome. Please fork the repository and submit a pull request with your changes.

## License

This project is released under the MIT License. See the LICENSE file for details.
