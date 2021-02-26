app.component('photo-view', {
    props: {
        fullimage: Boolean,
        conts: Array,
        index: Number
    },
    template: 
    /*html*/
    `
    <div v-if="fullimage" class="bg-black h-1/2 w-1/2 ml-auto mr-auto">
        <h1>XXXX</h1>
        <i class="material-icons text-white float-right" v-on:click="toggleFullImage()">clear</i>
        <img v-bind:src="conts[index].image" class="h-auto w-auto mr-auto ml-auto"/>
    </div>
    `,
    methods: {
        toggleFullImage() {
            this.$emit('toggle-fullimage')
        },
        toggleFullImage(bool) {
            this.$emit('toggle-fullimage', false)
        }
    }
})