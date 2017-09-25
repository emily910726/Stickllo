<template>
    <div id="app" style="min-height: 100%; position: relative;">
        <main>
            <div class="ui inverted segment">
                <div class="ui inverted menu">
                    <router-link class="item" to="/login">Login</router-link>
                    <router-link class="item" to="/main">Main</router-link>
                    <router-link class="item" to="/logout">Sign out</router-link>
                </div>
            </div>
            <p></p>
            <div class="ui container" style="padding-bottom: 100px;">
                <router-view></router-view>
            </div>
            <div class="ui inverted segment" style="width:100%; height:100px; position:absolute; bottom:0; left:0;">
                <p>Footer</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus lectus vitae ex maximus, nec tempus mi condimentum. Cras ligula est, ultricies non mollis quis, gravida venenatis leo. Aliquam iaculis libero et massa varius pretium. Aenean a odio a sapien dictum molestie. Donec hendrerit bibendum ex et hendrerit. Sed sed sagittis lacus, sed pretium urna. Fusce varius rhoncus est.
                </p>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'app',
    data: () => {
        return {

        }
    }
}
</script>
