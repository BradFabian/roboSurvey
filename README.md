<div align="center">
 🤖:bar_chart: roboSurvey
</div>

<div align="center">
<br>
<a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/d24f2f8414437a9491ea3145cafd373167315d50/68747470733a2f2f666f7274686562616467652e636f6d2f696d616765732f6261646765732f6275696c742d776974682d6c6f76652e737667"><img src="https://camo.githubusercontent.com/d24f2f8414437a9491ea3145cafd373167315d50/68747470733a2f2f666f7274686562616467652e636f6d2f696d616765732f6261646765732f6275696c742d776974682d6c6f76652e737667" data-canonical-src="https://forthebadge.com/images/badges/built-with-love.svg" style="max-width:100%;"></a>
<a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/fd5718136c433ef04e3b2e9f7a66ae27dc023191/68747470733a2f2f666f7274686562616467652e636f6d2f696d616765732f6261646765732f6d6164652d776974682d6a6176617363726970742e737667"><img src="https://camo.githubusercontent.com/fd5718136c433ef04e3b2e9f7a66ae27dc023191/68747470733a2f2f666f7274686562616467652e636f6d2f696d616765732f6261646765732f6d6164652d776974682d6a6176617363726970742e737667" data-canonical-src="https://forthebadge.com/images/badges/made-with-javascript.svg" style="max-width:100%;"></a>
<a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/9de09295bb0ddc631e7180c44110bcbe31f7f179/68747470733a2f2f666f7274686562616467652e636f6d2f696d616765732f6261646765732f666f722d796f752e737667"><img src="https://camo.githubusercontent.com/9de09295bb0ddc631e7180c44110bcbe31f7f179/68747470733a2f2f666f7274686562616467652e636f6d2f696d616765732f6261646765732f666f722d796f752e737667" data-canonical-src="https://forthebadge.com/images/badges/for-you.svg" style="max-width:100%;"></a>
</div>

<br>
<div align="center">
[![Github commit merge status](https://img.shields.io/github/commit-status/badges/shields/master/5d4ab86b1b5ddfb3c4a70a70bd19932c52603b8c.svg)](https://github.com/ofuen/roboSurvey)
[![GitHub contributors](https://img.shields.io/github/contributors/ofuen/roboSurvey.svg)](https://github.com/Dsalazar9/Project-2/)
[![GitHub last commit](https://img.shields.io/github/last-commit/ofuen/roboSurvey.svg)](https://github.com/Dsalazar9/Project-2/)
[![DUB](https://img.shields.io/dub/l/vibe-d.svg)](https://opensource.org/licenses/MIT)
 </div>

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
|  :black_circle:GET   | /api/surveys     | (list all surveys)    |
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
***
<h1 align="center">
<a id="user-content---------------------------------------" class="anchor" aria-hidden="true" href="#--------------------------------------"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><p>
  <a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/6c4b61b98b09a9efcc88de029774598d43c9f7bc/687474703a2f2f7777772e616e616d757365722e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031372f30332f6c6f676f2d353738783237302e706e67"><img alt="React.js" src="https://camo.githubusercontent.com/6c4b61b98b09a9efcc88de029774598d43c9f7bc/687474703a2f2f7777772e616e616d757365722e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031372f30332f6c6f676f2d353738783237302e706e67" height="40" data-canonical-src="http://www.anamuser.com/wp-content/uploads/2017/03/logo-578x270.png" style="max-width:100%;"></a>
<a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/87f498d3c853fa9d090b8db290264301c20bff9e/68747470733a2f2f63646e2e61757468302e636f6d2f626c6f672f74657374696e672d72656163742d776974682d6a6573742f6c6f676f2e706e67"><img alt="jest" src="https://camo.githubusercontent.com/87f498d3c853fa9d090b8db290264301c20bff9e/68747470733a2f2f63646e2e61757468302e636f6d2f626c6f672f74657374696e672d72656163742d776974682d6a6573742f6c6f676f2e706e67" height="40" data-canonical-src="https://cdn.auth0.com/blog/testing-react-with-jest/logo.png" style="max-width:100%;"></a>
<a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/8757d6dcf389abbcd5753b41204d9fc66a77ff92/68747470733a2f2f7777772e6272616d2e75732f776f726470726573732f77702d636f6e74656e742f75706c6f6164732f323031362f31302f7961726e2d6b697474656e2d66756c6c2e706e67"><img alt="yarn" src="https://camo.githubusercontent.com/8757d6dcf389abbcd5753b41204d9fc66a77ff92/68747470733a2f2f7777772e6272616d2e75732f776f726470726573732f77702d636f6e74656e742f75706c6f6164732f323031362f31302f7961726e2d6b697474656e2d66756c6c2e706e67" height="40" data-canonical-src="https://www.bram.us/wordpress/wp-content/uploads/2016/10/yarn-kitten-full.png" style="max-width:100%;"></a>
    <a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/2cb875349c306c72e5f6bbc63dff6ebb3379fbe6/68747470733a2f2f6c632d6d686b65306b75762e636e2d6e312e6c6366696c652e636f6d2f33633230306232366166323937353135343965652e706e67"><img alt="webpack" src="https://camo.githubusercontent.com/2cb875349c306c72e5f6bbc63dff6ebb3379fbe6/68747470733a2f2f6c632d6d686b65306b75762e636e2d6e312e6c6366696c652e636f6d2f33633230306232366166323937353135343965652e706e67" height="40" data-canonical-src="https://lc-mhke0kuv.cn-n1.lcfile.com/3c200b26af29751549ee.png" style="max-width:100%;"></a>
    <a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/77746c15b988a5f1b3f2579bd02f57f1e41444e1/68747470733a2f2f6d6174657269616c2d75692e636f6d2f7374617469632f696d616765732f6d6174657269616c2d75692d6c6f676f2e737667"><img alt="Material UI" src="https://camo.githubusercontent.com/77746c15b988a5f1b3f2579bd02f57f1e41444e1/68747470733a2f2f6d6174657269616c2d75692e636f6d2f7374617469632f696d616765732f6d6174657269616c2d75692d6c6f676f2e737667" height="40" data-canonical-src="https://material-ui.com/static/images/material-ui-logo.svg" style="max-width:100%;"></a>   
</p>
</h1>
