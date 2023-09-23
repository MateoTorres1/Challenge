const axios = require('axios')

const polyanetsController = require('../Challenge/controllers/polyanetsController')
const comethsController = require('../Challenge/controllers/comethsController')
const soloonsController = require('../Challenge/controllers/soloonsController')

const polyanets = new polyanetsController
const soloons = new soloonsController
const comeths = new comethsController

const polyanet = require("../Challenge/models/polyanets")
const cometh = require("../Challenge/models/comeths")
const soloon = require("../Challenge/models/soloons")

class MegaVerseApp {

async megaverseAutomatedPOST() {
    let apiGoal = await axios.get("https://challenge.crossmint.io/api/map/69aff9e4-f05c-4b23-8b73-da047947faad/goal")
    let api = JSON.stringify(apiGoal.data.goal)
    let apiArray = await JSON.parse(api)

    let verse = await axios.get("https://challenge.crossmint.io/api/map/69aff9e4-f05c-4b23-8b73-da047947faad")
    let get = JSON.stringify(verse.data.map.content)
    let arrayIncomplete = await JSON.parse(get)

    for (let i = 0; i < apiArray.length; i++)
        for (let j=0; j < apiArray[i].length; j++) {
            let item = await apiArray[i][j]
            if (!(item === "SPACE")) {
                if (!(arrayIncomplete[i][j] != null)) {
                    let json = await this.checkItem(item, i, j)
                    await this.checkControllerAndSend(item, json)  
                }
            }
        }

}

async megaverseAutomatedDELETE() {
    let apiGoal = await axios.get("https://challenge.crossmint.io/api/map/69aff9e4-f05c-4b23-8b73-da047947faad/goal")
    let api = JSON.stringify(apiGoal.data.goal)
    let apiArray = await JSON.parse(api)

    let verse = await axios.get("https://challenge.crossmint.io/api/map/69aff9e4-f05c-4b23-8b73-da047947faad")
    let get = JSON.stringify(verse.data.map.content)
    let arrayIncomplete = await JSON.parse(get)

    for (let i = 0; i < arrayIncomplete.length; i++)
        for (let j=0; j < arrayIncomplete[i].length; j++) {
            let item = await arrayIncomplete[i][j]
            if (item != null) {
                let itemApiComplete = apiArray[i][j]
                if (itemApiComplete === "SPACE") {
                    let json = await this.convertItemAndCreate(i, j, item.type, item)
                    await this.checkControllerAndDelete(item.type, json)
                }
            }
        }

}

async convertItemAndCreate(row, column, item, value) {
    let itemCometh = new cometh
    let itemSoloon = new soloon
    let itemPolyanet = new polyanet

    if (item == 0) {
        return itemPolyanet.create(row, column)
    } else if (item == 1) {
        return itemSoloon.create(row, column, value.color)
    } else {
        return itemCometh.create(row, column, value.direction)
    }
}

async checkControllerAndDelete(item, json) {
    if (item == 0) {
        return await polyanets.delete(json)
    } else if (item == 1) {
        return await soloons.delete(json)
    } else {
        return await comeths.delete(json)
    }
}

async checkControllerAndSend(item, json) {
    let itemCometh = new cometh
    let itemSoloon = new soloon

    let valueSoloon = itemSoloon.check(item)
    let valueCometh = itemCometh.check(item)

    if (item === "POLYANET") {
        return await polyanets.create(json)
    } else if (valueSoloon != null) {
        return await soloons.create(json)
    } else if (valueCometh != null) {
        return await comeths.create(json)
    }
}

async checkItem(item, row, column) {
    let itemCometh = new cometh
    let itemSoloon = new soloon
    let itemPolyanet = new polyanet
    
    let valueSoloon = itemSoloon.check(item)
    let valueCometh = itemCometh.check(item)

    if (item === "POLYANET") {
        return itemPolyanet.create(row, column)
    } else if (valueSoloon != null) {
        return itemSoloon.create(row, column, valueSoloon)
    } else if (valueCometh != null) {
        return itemCometh.create(row, column, valueCometh)
    }
}

}

module.exports = MegaVerseApp

