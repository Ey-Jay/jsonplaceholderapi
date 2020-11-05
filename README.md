[![Build Status](https://travis-ci.com/Ey-Jay/jsonplaceholderapi-js.svg)](https://travis-ci.com/Ey-Jay/jsonplaceholderapi-js)

# JSONPlaceholder JS client 🚧(in development)

JavaScript client to facilitate the use of the [JSON Placeholder API](https://jsonplaceholder.typicode.com).

## Installation

`npm i jsonphapi`

## Usage

jsonphapi supports ES6 imports and CommonJS require.

```js
// ES6
import { getUser } from 'jsonphapi';
// CommonJS
const { getUser } = require('jsonphapi');
```

Methods:

- `getUser()`
- `getPost()`
- `getComment()`
- `getPhoto()`
- `getAlbum()`
- `getTodo()`

## Examples

```js
import { getUser } from 'jsonphapi';

const userOne = await getUser(1); // returns user with ID 1
```

### Filtering

```js
import { getUser } from 'jsonphapi';

const antonette = getUser({ username: 'Antonette' });
```
