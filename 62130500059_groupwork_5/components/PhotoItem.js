app.component('photo-item', {
    props: {
        conts: {
            type: Array
        }
    },
    template: 
    /*html*/
    `
    <ul v-for="(cont, index) in conts">
        <li class="py-4">
            <img class="inline" v-bind:src="cont.image" width="400" height="400" v-on:click="fullImage = true">
            <p class="inline pl-8" v-on:click="toggleHeart(index)">{{cont.text}}</p>
            <i class="material-icons" v-show="cont.heart">favorite</i>
        </li>
    </ul>
    `,
    methods: {
        toggleHeart(index) {
            this.$emit('toggle-heart', index)
        }
    }
})