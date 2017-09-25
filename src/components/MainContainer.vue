<template>
    <div class="ui column grid">
        <div class="row">
            <h2>Welcome!</h2>
        </div>
        <router-link class="item" to="/main/board">Board</router-link>
        <router-link class="item" to="/main/main2">Main 2</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
import draggable from 'vuedraggable'
import Vue from 'Vue'

export default {
    components: {
        draggable
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>
