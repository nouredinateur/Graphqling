
from pymongo import MongoClient

client = MongoClient('localhost', 27017)
db = client.polygonTransactions
db.segment.drop()
collect = db.transactions
def mongoDb(data):
    collect.insert_one(data)
    
    
# test = mongoimport("data.csv","polygonTransactions","pendingTransactions")