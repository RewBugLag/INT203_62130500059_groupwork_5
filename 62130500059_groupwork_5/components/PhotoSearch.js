app.component('photo-search', {
    props: {
        search: Boolean
    },
    template: 
    /*html*/
    `
    <button class="material-icons" v-if="search==false" v-on:click="toggleSearch">search</button>
    <div class="flex" v-show="search">
        <input type="text" class="flex-1 border-2 border-blue-2" 
            v-model="input" @keyup.enter="searchPicture"
            placeholder="Please enter text for searching photos">
        <button class="bg-blue-400 text-white py-1 px-6 rounded" v-on:click="toggleSearch">Cancel</button>
    </div>
    `
    ,
    data() {
        return {
            input: ''
        }
    },
    methods: {
        toggleSearch() {
            // clear input
            this.input = ''
            this.$emit('toggle-search')
            // reset result
            this.$emit('search-picture', '')
        },
        searchPicture() {
            this.$emit('search-picture', this.input)
        }
    }
})