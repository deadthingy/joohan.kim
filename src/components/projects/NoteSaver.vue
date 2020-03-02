<template>
    <div class="notes">
        <form class="input-container" v-on:submit="addNote">
            <div class="input-text-container"><textarea v-model="newNote.text" placeholder="Text eingeben"></textarea></div>

            <div class="input-submit-container"><input type="submit" value="Submit"></div>
        </form>
        <hr>
        <input type="hidden" value="" id="clipboardCopy">
        <ul class="text-container">
            <li v-for="note in notes" class="snippet">
                <div>
                    <span v-on:click="copyToClipboard(note)" v-bind:title="note.date"> {{note.text}} </span><button v-on:click="deleteNote(note)">x</button>
                </div>
            </li>
        </ul>
    </div>
            <!-- <input type="text" v-model="title">
            <h2>{{title}}</h2>
            <p v-if="showName">{{user.firstName}}'s Seite.</p>
            <p v-else>Nobody</p>
            <ul>
                <li v-for="item in items"> {{item.title}} </li>
            </ul>
            <button v-on:click="greet('Hello world')">Say Greeting</button>
            <label>First Name:</label><input type="text" v-model="user.firstName">
            <br>
            <label>Last Name:</label><input type="text" v-model="user.lastName">
            <h3>{{ fullName }}</h3>
            <h2>{{ msg }}</h2> -->
</template>

<script>
    export default {
        name: 'NoteSaver',
        data() {
            return {
                newNote: {},
                notes: [
                    {
                        date: "Created: " + formatDate(new Date()),
                        text: "asdsa"
                    }
                ]
            }
        },
        methods: {
            addNote: function(e) {
                    if(this.newNote.text) {
                        this.notes.push({
                            text: this.newNote.text,
                            date: formatDate(new Date())
                        })
                    }
                    this.newNote.text = "";
                    e.preventDefault();
            },
            copyToClipboard: function(el) {
                document.getElementById("clipboardCopy").select();
                document.execCommand('copy');
            },
            deleteNote: function(el) {
                this.notes.splice(this.notes.indexOf(el), 1);
            }
        },
        // created: function() {
        //     this.$http.get('https://jsonplaceholder.typicode.com/posts')
        //         .then(function(response) {
        //             console.log(response);
        //         })
        // },
    }

    function formatDate(date) {
        // var monthNames = [
        //     "Januar", "Februar", "März",
        //     "April", "Mai", "Juni", "Juli",
        //     "August", "September", "Oktober",
        //     "November", "Dezember"
        // ];
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
 
        return date.getHours() + ":" + date.getMinutes() + " " + day + '.' + monthIndex + '.' + year;
    }
</script>

<style lang="scss" scoped>
    @import "../../scss/main.scss";
    .notes {
        width: 100%;
    }
    .snippet {
        display: grid;
        grid-template-columns: 2;
        padding: 10px;
    }
    .text-container span {
        text-align: left;
    }
    .input-container {
        width: 100%;
        display: flex;
    }
    .input-text-container {
        flex-grow: 1;
        padding: 5px;
        
    }
    .input-text-container > textarea {
        padding: 5px;
        width: 100%;
        box-sizing: border-box;
        text-align: left;
    }
    .input-submit-container {
        flex-shrink: 0;
        padding: 5px;
        width: 100px;
        > input {
            padding: 10px;
            min-width: 100px;
            background-color: black;
            border: 2px solid white;
        }
    }
</style>
