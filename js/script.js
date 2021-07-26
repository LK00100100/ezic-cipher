
class EzicCipher {

    constructor() {
        this.numRows = 13;
        this.numCols = 22;

        this.candidateLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    }

    init() {
        this.initCipherTable();
        //this.initDecoderTable();
    }

    initCipherTable() {
        let table = $("#cipher-table");

        //create rows of letters
        for (let r = 0; r < this.numRows; r++) {
            let rowElem = $("<tr></tr>");
            for (let c = 0; c < this.numCols; c++) {
                let dataElem = $("<td></td>");

                let char = this.getRandomCandidateLetter();
                dataElem.text(char);

                rowElem.append(dataElem);
            }

            table.append(rowElem);
        }


    }

    /**
     * @returns {String} random candidate letter
     */
    getRandomCandidateLetter() {
        let randomIdx = Math.floor(Math.random() * this.candidateLetters.length);    //[0 - length)

        return this.candidateLetters.charAt(randomIdx);
    }


}