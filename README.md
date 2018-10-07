# 🤖:bar_chart: roboSurvey
***
[![Github commit merge status](https://img.shields.io/github/commit-status/badges/shields/master/5d4ab86b1b5ddfb3c4a70a70bd19932c52603b8c.svg)](https://github.com/ofuen/roboSurvey)
[![GitHub contributors](https://img.shields.io/github/contributors/ofuen/roboSurvey.svg)](https://github.com/Dsalazar9/Project-2/)
[![GitHub last commit](https://img.shields.io/github/last-commit/ofuen/roboSurvey.svg)](https://github.com/Dsalazar9/Project-2/)
[![DUB](https://img.shields.io/dub/l/vibe-d.svg)](https://opensource.org/licenses/MIT)
***
![Alt Text](https://cdn.dribbble.com/users/37530/screenshots/2937858/drib_blink_bot.gif)
***
![image](https://user-images.githubusercontent.com/19554935/46582075-9f41a600-ca0f-11e8-9fca-caa81f0d27de.png)
***
| API | :couple: Users |  |
| :---         |     :---:      |          ---: |
|  :black_circle:GET   |  /api/users    | (list all users)    |
|  :black_circle:GET     | /api/users/:id       | (list one user)      |
|  :white_circle:POST     | /api/users       | (creates a new user)      |
|  :large_blue_circle:PUT     | /api/users/:id       | (edit an existing user)      |
|  :red_circle:DELETE     | /api/users/:id       | (delete a user)      |
***
|  API | :clipboard: Surveys  |  |
| :---         |     :---:      |          ---: |
|  :black_circle:GET   | /api/surveys     | (list all users)    |
|  :black_circle:GET     | /api/surveys/:id       |       |
|  :white_circle:POST     | /api/surveys       |       |
|  :large_blue_circle:PUT     | /api/surveys/:id       |       |
|  :red_circle:DELETE     | /api/surveys/:id       |       |
***
|  API | :heavy_exclamation_mark: Evaluations  |  |
| :---         |     :---:      |          ---: |
|  :black_circle:GET   | /api/evaluations     |     |
|  :black_circle:GET     | /api/evaluations/:id       |       |
|  :black_circle:GET     | /api/evaluations/user/:id       | (list all evaluation of a given user id)      |
|  :white_circle:POST     | /api/evaluations       |       |
|  :large_blue_circle:PUT     | /api/evaluations/:id       |       |
|  :red_circle:DELETE     | /api/evaluations/:id       |      
***
# JSON
```json
[
  {
    "answers": [
      2,
      1,
      3
    ],
    "date": "2018-10-06T20:41:57.916Z",
    "_id": "5bb82a36b1aaa66ec0016217",
    "userId": "5bb82a361aaa66ec0016210",
    "surveyName": "CSS",
    "points": 100
  },
  {
    "answers": [
      0,
      2,
      0
    ],
    "date": "2018-10-06T20:41:57.916Z",
    "_id": "5bb91a79b6642a0b26c115ae",
    "userId": "5bb82a361aaa66ec0016210",
    "surveyName": "HTML",
    "points": 100
  }
]
```
