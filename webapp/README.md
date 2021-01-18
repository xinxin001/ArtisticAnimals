## Backend

The backend is written in Flask and requires a Python version of 3.8+

We provide below 3 different ways of installing the needed dependencies to run the Flask app. Please run the following commands from within the backend folder

- Using pip:
```
pip install -r requirements.txt
```

- Using Pipenv:
```
pip install pipenv
pipenv shell
pipenv install
```

- Using Conda: 
```
conda env create -f environment.yml
```
For more info about creating and managing Conda environments, please refer to this [link](https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html)

## Frontend

The frontend was instantiated using the following command
```
npm init react-app frontend
```

Since this has already been done here's what you need to do to run the frontend

```
cd frontend 
npm install
npm start
```
