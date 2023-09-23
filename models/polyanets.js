class polyanets{

    #data = {
        "candidateId": "69aff9e4-f05c-4b23-8b73-da047947faad",
        "row": 0,
        "column": 0
        }

    create(row, column) {
        this.#data.row = row
        this.#data.column = column
        return this.#data
    }

}

module.exports = polyanets