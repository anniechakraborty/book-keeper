import os # read from env files
from flask import Flask, request, jsonify
import psycopg2
from datetime import datetime, timezone
from dotenv import load_dotenv
from flask_cors import CORS
from collections import defaultdict

# SQL Codes
CREATE_BOOK_TABLE = (
    """CREATE TABLE IF NOT EXISTS books 
    (id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL, 
    author TEXT NOT NULL, 
    review TEXT, 
    bookType TEXT,
    startDate TIMESTAMP,
    endDate TIMESTAMP
    );"""
)

INSERT_BOOK_RETURN_ID = (
    """INSERT INTO books (name, author, review, bookType, startDate, endDate)
    VALUES (%s, %s, %s, %s, %s, %s) RETURNING id ;"""
)

GET_ALL_BOOKS = ("SELECT * FROM books;")

GET_BOOK_BY_ID = ("SELECT * FROM books WHERE id = %s;")

load_dotenv()

app = Flask(__name__)
CORS(app)

url = os.getenv('DATABASE_URL')
connection = psycopg2.connect(url)

@app.route('/api/post', methods=['POST'])
def create_new_book():
    data = request.get_json()
    print(data)
    # getting the data
    name = data['name']
    author = data['author']
    review = data['review']
    bookType = data['bookType']
    try:
        startDate = datetime.strptime(data['startDate'], "%m-%d-%Y %H:%M:%S")
        endDate = datetime.strptime(data['endDate'], "%m-%d-%Y %H:%M:%S")
    except KeyError:
        startDate = datetime.now(timezone.utc)
        endDate = startDate
    
    with connection:
        with connection.cursor() as cursor:
            cursor.execute(CREATE_BOOK_TABLE)
            cursor.execute(INSERT_BOOK_RETURN_ID, (name, author, review, bookType, startDate, endDate))
            book_id = cursor.fetchone()[0]
    results = {
        "id" : book_id,
        "startDate" : startDate,
        "endDate" : endDate,
        "review" : review,
        "bookType" : bookType,
        "message" : f"Book {name} by {author} has been created successfully"
    }
    print(results)
    return results, 201

@app.route('/api/allBooks', methods=['GET'])
def allBooks():
    with connection:
        with connection.cursor() as cursor:
            cursor.execute(GET_ALL_BOOKS)
            record = cursor.fetchall()
            print(record, type(record))
    # for i in record:
    #     result = {
    #         "id": record[i][0],
    #         "name": record[i][1],
    #         "author" : record[i][2],
    #         "description" : record[i][3],
    #         "bookType" : record[i][4],
    #         "startDate" : record[i][5],
    #         "endDate" : record[i][6]
    #     }
    # print(result)

    e = defaultdict(list)
    for element in record:
        e[element[0]].append({
            'id': element[0],
            'name': element[1], 
            'author': element[2], 
            'review': element[3], 
            'bookType': element[4],
            'startDate': element[5],
            'endDate': element[6]
            })

    return jsonify(e)

@app.route('/api/book/<int:book_id>', methods=['GET'])
def get_book(book_id):
    with connection:
        with connection.cursor() as cursor:
            cursor.execute(GET_BOOK_BY_ID, (book_id,))
            record = cursor.fetchone()
            print(record)
    return jsonify(record)

if __name__ == '__main__':
    app.run(debug=True)