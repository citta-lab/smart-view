## Smart View 

The project is aimed to better understand available development time based on outlook scheduled meeting for sprint (two weeks). 

Data needs to be served from the backend service (NodeJS) & we are listening are incominng blog on port 4001 using socket.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Tech Stack Used 
- [ReactJS](https://reactjs.org/)
- [D3.JS](https://d3js.org/)
- [React Material UI](https://material-ui.com/)
- [Microsoft Graph](https://developer.microsoft.com/en-us/graph/graph-explorer#)

## Example Data Blob 
```javascript 
[
    {
        "name": "Bob S",
        "address": "bobs123@outlook.com",
        "personal": {
            "hours": 20,
            "events": [
                {
                    "subject": "doc appointment",
                    "duration": 3
                },
                {
                    "subject": "gym",
                    "duration": 1
                }
            ]
        },
        "work": {
            "hours": 10,
            "events": [
                {
                    "subject": "1-1",
                    "duration": 2
                },
                {
                    "subject": "scrum",
                    "duration": 1
                },
                {
                    "subject": "code review",
                    "duration": 2
                },
                {
                    "subject": "design review",
                    "duration": 2
                },
                {
                    "subject": "book club",
                    "duration": 2
                }
            ]
        },
        "others": {
            "hours": 10,
            "events": [
                {
                    "subject": "baasassdsd",
                    "duration": 3
                },
                {
                    "subject": "gsdsdym",
                    "duration": 1
                }
            ]
        }
    }
]
```


