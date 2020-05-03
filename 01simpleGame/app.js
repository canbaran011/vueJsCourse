new Vue({
    el: '#app',
    data: {
        playerHeal: 100,
        monsterHeal: 100,
        gameIsOn: false,
        attackMultiple: 10,
        specialAttackMultiple: 25,
        healUpMultiple: 20,
        monsterAttackMultiple: 15,
        logText: {
            attack: "Oyuncu Atagi : ",
            specialAttack: "Ozel Oyuncu Atagi :",
            monsterAttack: "Canavar Atagi :",
            healUp: "Oyuncu Pot Aldi :",
            giveUp: "Oyuncu Pes Etti ..."

        },
        logs: [
            { turn: "", text: "" }
        ]
    },
    methods: {
        startGame: function () {
            this.gameIsOn = true
        },
        attack: function () {
            var point = Math.ceil(Math.random() * this.attackMultiple)
            this.monsterHeal -= point;
            this.addToLog({
                turn: "p",
                text: this.logText.attack + point + ")"
            });
            this.monsterAttack();

        },
        specialAttack: function () {
            var point = Math.ceil(Math.random() * this.specialAttackMultiple)
            this.monsterHeal -= point;
            this.addToLog({
                turn: "p",
                text: this.logText.specialAttack + point + ")"
            });
            this.monsterAttack();
        },
        healUp: function () {
            var point = Math.ceil(Math.random() * this.healUpMultiple)
            this.playerHeal += point;
            this.addToLog({
                turn: "p",
                text: this.logText.healUp + point + ")"
            });
            this.monsterAttack();
        },
        giveUp: function () {
            this.playerHeal = 0;
            this.addToLog({
                turn: "p",
                text: this.logText.giveUp
            });

        },
        monsterAttack() {
            var point = Math.ceil(Math.random() * this.monsterAttackMultiple)
            this.playerHeal -= point;
            this.addToLog({
                turn: "m",
                text: this.logText.monsterAttack + point + ")"
            });

        },
        addToLog: function (log) {
            this.logs.push(log);
        }
    },
    watch: {
        playerHeal: function (value) {
            if (value <= 0) {
                this.playerHeal = 0
                if (confirm("oyunu Kaybettin! TekrarDene?")) {
                    this.playerHeal = 100;
                    this.monsterHeal = 100;
                    this.logs = []
                }
            } else if (value >= 100) {
                this.playerHeal = 100
            } else {

            }
        },
        monsterHeal: function (value) {
            if (value <= 0) {
                this.monsterHeal = 0;
                if (confirm("oyunu Kazandin! TekrarDene?")) {
                    this.playerHeal = 100;
                    this.monsterHeal = 100;
                    this.logs = []
                }
            }
        }
    },
    computed: {
        playerProgress: function () {

            return {
                width: this.playerHeal + "%"
            }

        },
        monsterProgress: function () {
            return{
                width: this.monsterHeal + "%"
                
            }
        }
    }
})