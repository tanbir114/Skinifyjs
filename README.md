
### Backend Repository README

```markdown
# Skin Disease Detection Backend

This repository contains the backend code for the Skin Disease Detection project. The backend is built using Nodesjs and Python for handling image analysis and prediction.

## Features

- Receive image uploads from the frontend
- Analyze and classify skin diseases
- Provide disease type back to the frontend

## Technologies Used

- Python
- Nodejs
- ExpressJS
- Spawn
- TensorFlow / Keras (for the prediction model)

## Getting Started

### Prerequisites

- Python 3.7 or higher: [Install Python](https://www.python.org/downloads/)
- Virtual environment (optional but recommended)
- Nodejs

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/skin-disease-backend.git
cd skin-disease-backend
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
pip install -r requirements.txt
npm install
npm start
