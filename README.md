<br />
<p align="center">
  <h3 align="center">CHALLENGE</h3>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About Project](#about-project)
- [Starting](#starting)
  - [Installation](#installation)
  - [Language Used](#language-used)
  - [How to Use](#how-to-use)
  - [Responses](#responses)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About Project

This project aims make an integration between [RecipePuppy](http://www.recipepuppy.com/about/api/) and [Giphy](https://developers.giphy.com/).

## Starting

### Installation

#### Requirements for install

- NPM installed
- Docker installed

#### Commons Steps

Copy .env.example to .env
```
cp .env.example .env
```

Configure .env using PORT, HOST, RECIPE_PUPPY_URL_BASE, GIPHY_URL_BASE and GIPHY_API_KEY.

GIPHY_API_KEY can be created at https://developers.giphy.com/ to obtain an API_KEY that you must:
- Create an account
- Create an app and select API solution
- Copy your API_KEY :)

In project root execute below command and you can make requests in your ${HOST}:${ENV.PORT}. (Ps.: For the run in localhost use 0.0.0.0.0 in HOST)
```
make up
```

#### Others Commands
Run tests
```
make test
```

Stop container
```
make down
```

#### Observation (Only Windows)
To run on Windows some makefile commands may need to be updated.

### Language used

- Javascript

### How To Use

Below is a list of requests and your respective result. If service not is available  you receive a [Request Timeout Response](#request-timeout-response). (Ps.: All examples use GET method).

|         Request Example | Result                                                                        |
| ----------------------: | ----------------------------------------------------------------------------- |
| `PATH/recipes/?i=onion` | Status Code: 200 OK and receive an [correct response](#correct-response).      |
| `PATH/recipes/?i=` | Status Code: 400 Bad Request and receive an [bad request response](#bad-request-response)                   |
| `PATH/recipes/?i=i1,i2` | Status Code: 200 OK and receive an [correct response](#correct-response). |
| `PATH/recipes/?i=i1,i2,i3` | Status Code: 200 OK and receive an [correct response](#correct-response).           |
| `PATH/recipes/?i=i1,i2,i3,i4` | Status Code: 400 Bad Request and receive an [bad request response](#bad-request-response) |
| `PATH/recipes/?i=i1,i2,i3,` | Status Code: 400 Bad Request and receive an [bad request response](#bad-request-response) |
| `PATH/recipes/?i=i1,i2,` | Status Code: 400 Bad Request and receive an [bad request response](#bad-request-response) |
| `PATH/OTHER_URL` | Status Code: 404 Not Found and receive an [not found response](#not-found-response) |

### Responses

#### Correct Response
```
{
	"keywords": ["onion", "tomato"],
	"recipes": [{
		"title": "Greek Omelet with Feta",
		"ingredients": ["eggs", "feta cheese", "garlic", "red onions", "spinach", "tomato", "water"],
		"link": "http://www.kraftfoods.com/kf/recipes/greek-omelet-feta-104508.aspx",
		"gif": "https://media.giphy.com/media/xBRhcST67lI2c/giphy.gif"
	   },{
		"title": "Guacamole Dip Recipe",
		"ingredients": ["avocado", "onions", "tomato"],
		"link":"http://cookeatshare.com/recipes/guacamole-dip-2783",
		"gif":"https://media.giphy.com/media/I3eVhMpz8hns4/giphy.gif"
	   }
	]
}
```
#### Request Timeout Response
```
{
  "statusCode": 408,
  "error": "Request Timeout",
  "message": "Giphy Service is not available"
}
```
```
{
  "statusCode": 408,
  "error": "Request Timeout",
  "message": "RecipePuppy Service is not available"
}
```

#### Bad Request Response
```
{
  "statusCode": 400,
  "error": "Bad Request",
  "message": "Invalid request query input"
}
```

#### Not Found Response
```
{
  "statusCode": 404,
  "error": "Not Found",
  "message": "Not Found"
}
```

## Contributing

Contributions are what make the open source community an incredible place to learn, inspire and create. Any contribution you make will be **much appreciated**.
1. Make a project Fork
2. Create a Branch for your feature (`git checkout -b feature/amazing-feature`)
3. Insert your changes (`git add .`)
4. Make a commit with your changes (`git commit -m 'feat(<folder-name>): Inserting a Amazing Feature !`)
5. Push the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## License

Distributed under the MIT license. See `LICENSE` for more information.

## Contact

Yury Alencar - [Github](https://github.com/yuryalencar) - **yuryalencar19@gmail.com**
