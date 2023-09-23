class soloons {

    #data = {
            "candidateId": "69aff9e4-f05c-4b23-8b73-da047947faad",
            "row": 0,
            "column": 0,
            "color": ""
            }

    create(row, column, color) {
        this.#data.row = row
        this.#data.column = column
        this.#data.color = color
        return this.#data
    }

    check(item) {
        if (item === "BLUE_SOLOON") {
            return "blue"
        } else if (item === "RED_SOLOON") {
            return "red"
        } else if (item === "PURPLE_COMETH") {
            return "purple"           
        } else if (item === "WHITE_COMETH") {
            return "white"
        } else {
            return null
        }
    }

}

module.exports = soloons