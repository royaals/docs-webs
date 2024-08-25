# Docs WebApp

## Overview

This project is a Docs web application that allows users to create, edit, and collaborate on rich text documents in real-time. It leverages modern web technologies, including **React** for the frontend, **Node.js** for the backend, **MongoDB** for data storage, **Socket.io** for real-time communication, **Material UI** for UI components, and **Quill** as the rich text editor.

## Features

- **Real-time Collaboration:** Multiple users can edit a document simultaneously, with changes synced in real-time across all connected clients.
- **Rich Text Editing:** The app features a rich text editor powered by Quill, allowing users to format their documents with ease.
- **Document Management:** Users can create, view, and manage multiple documents.
- **Persistent Storage:** Documents are stored in a MongoDB database, ensuring that changes are saved and retrievable.
- **Responsive Design:** The application is built with Material UI, ensuring a responsive and user-friendly interface on various devices.

## Tech Stack

- **Frontend:**
  - React: A JavaScript library for building user interfaces.
  - Material UI: A popular React UI framework for building sleek and responsive interfaces.
  - Quill: A rich text editor for formatting content.
  
- **Backend:**
  - Node.js: A JavaScript runtime used for server-side programming.
  - Express: A web application framework for Node.js, used to build the API.
  - Socket.io: A library for enabling real-time, bidirectional communication between clients and servers.
  
- **Database:**
  - MongoDB: A NoSQL database used to store document data.

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (v14.x or later)
- MongoDB
- npm (Node Package Manager)

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/royaals/docs-webs.git
   ```
2. Navigate to the backend directory and install the dependencies:
    ```bash
    cd backend
    npm install
    
    ```
3. Rename `.env.example` to `.env` in the backend folder and update the following values:

    - `DB_URL`: This should be your MongoDB database URL. For example, if you're using Docker, it would look something like this: `mongodb://localhost:27017/mydatabase`. If you're using a Cloud Mongodb Atlas use the URL they provide. 

4. Navigate to the frontend directory and install the dependencies:
    ```bash
    cd frontend
    npm install
    ```
5. Start the backend server:
    ```bash
    cd backend
    node index.js
    ```
6. Start the frontend server:
    ```bash
    cd frontend
    npm start
    ```    
