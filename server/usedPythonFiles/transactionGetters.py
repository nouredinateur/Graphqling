
from time import time
from websocket import create_connection
from orjson import loads,dumps
from concurrent.futures import ThreadPoolExecutor
from dataSetterToMongo import mongoDb
url = "wss://polygon-mainnet.g.alchemy.com/v2/p0Tqunv8aWA94L7Lqc_AKKJy0XDvlJV2"

filtre1 = {"jsonrpc":"2.0","method":"eth_newPendingTransactionFilter","params":[],"id":1}

json_filtre1 = str(dumps(filtre1), "utf-8")

ws = create_connection(url)
ws.send(json_filtre1)
flterResponse = loads(ws.recv())
filterID = flterResponse ["result"]
ws1 = create_connection(url)
filtre = {"jsonrpc":"2.0","id": 0,"method": "eth_getFilterChanges","params": [filterID]}

json_filtre = str(dumps(filtre), "utf-8")

# file = open("data.csv","w",newline='')
# writer = csv.writer(file,delimiter=' ',quotechar='|', quoting=csv.QUOTE_MINIMAL)
def transactionGetterByHash(data):

        array = []
        for i in data["result"]:
            array.append({"jsonrpc": "2.0","id": 1,"method": "eth_getTransactionByHash","params": [i]})

        ws1.send(str(dumps(array), "utf-8"))
        data = loads(ws1.recv())

        for i in data:
            if i["result"] != None:
                result = i['result']
                if 'maxPriorityFeePerGas' and 'maxFeePerGas' in result:
                    mongoDb({"hash":result['hash'],"toAdd":result['from'],"gas":int(result['gas'],16),"gasPrice":int(result['gasPrice'],16),"maxFeePerGas":int(result['maxFeePerGas'],16),"maxPriorityFeePerGas":int(result['maxPriorityFeePerGas'],16),"timing":int(time()*1000)})
                    # print(i["result"]["hash"], int(time()*1000))
                    print('data sent')

def loopWhile():
    while True:
            ws.send(json_filtre)
            data = loads(ws.recv())
            if data ["result"]:
                ThreadPoolExecutor().submit(transactionGetterByHash,data)

loopWhile()