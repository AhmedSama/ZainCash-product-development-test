
# ZainCash product development test




## file structure

```bash
Coding/
|-- code_mvc_solution/
|   |-- controllers/
|   |-- models/
|   |-- views/
|   |-- index.js
|-- code_simple_solution/
|   |-- format.js
|   |-- format.py
Database/
|   |-- query.sql
README.md
ZainCash Product Development Test.postman_collection.json
```
- inside `Coding` folder I have two folders:
    - `code_mvc_solution` for the mvc solution that was requested
    - `code_simple_solution` for just a simple implementation of the example using python `format.py` and javascript `format.js` to solve the same problem in two languages
- and inside the `Database` folder I have the solution for the database problem

## Usage

after cloning the repo
```
git clone https://github.com/AhmedSama/ZainCash-product-development-test.git
```
cd to ZainCash-product-development-test
```
cd ZainCash-product-development-test
```

### using mvc solution
first go to Code/code_mvc_solution
```
cd Code/code_mvc_solution
```
and install the dependencies
```
npm install
```
then start the server
```
npm start
```
in your browser go to `http://localhost:3000` and use the UI to upload *.txt or *.json file

### using simple solution

first go to Code/code_simple_solution
```
cd Code/code_simple_solution
```
and either run the python code 

```
python format.py
```

or run javascript code

```
node format.js
```



### using postman
#### API Reference
make sure the server is running first go to Code/code_simple_solution and start the server if it is not running
```
npm start
```

http `POST` method
```http
 http://localhost:3000/reformat
```
body as form-data
| key | value     |
| :-------- | :------- |
| `file` | `Select files` |

if you want to automatically get the correct collection sample inside postman
you can import the collection file `ZainCash Product Development Test.postman_collection.json` inside postman 







