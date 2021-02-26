app.component('photo-item', {
    props: {
        conts: Array,
        fullimage: Boolean
    },
    template: 
    /*html*/
    `
    <ul v-for="(cont, index) in conts">
        <li class="py-4">
            <img class="inline" v-bind:src="cont.image" width="400" height="400" v-on:click="toggleFullImage(), setIndex(index)">
            <p class="inline pl-8" v-on:click="toggleHeart(index)">{{cont.text}}</p>
            <i class="material-icons" v-show="cont.heart">favorite</i>
        </li>
    </ul>
    `,
    methods: {
        toggleHeart(index) {
            this.$emit('toggle-heart', index)
        },
        setIndex(index) {
            this.$emit('set-index', index)
        },
        toggleFullImage(bool) {
            this.$emit('toggle-fullimage', true)
        }
    }
})