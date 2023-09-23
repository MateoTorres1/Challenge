class comeths{

    #data = {
            "candidateId": "69aff9e4-f05c-4b23-8b73-da047947faad",
            "row": 0,
            "column": 0,
            "direction": ""
            }

    create(row, column, direction) {
        this.#data.row = row
        this.#data.column = column
        this.#data.direction = direction
        return this.#data
}

    check(item) {
        if (item === "UP_COMETH") {
            return "up"
        } else if (item === "DOWN_COMETH") {
            return "down"
        } else if (item === "RIGHT_COMETH") {
            return "right"
        } else if (item === "LEFT_COMETH") {
            return "left"
        } else { 
            return null
        }
    }

}

module.exports = comeths