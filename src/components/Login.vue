<template>
    <div class="ui five column grid">
        <div class="row">
            <div class="column"></div>
            <div class="column"></div>
            <div class="two column">
                <h1 class="ui header">Login</h1>
            </div>
        </div>
        <div class="row">
            <div class="column"></div>
            <div class="column"></div>
            <form class="ui form">
                <div class="field">
                    <label>Username</label>
                    <input type="text" name="username" placeholder="Username" class="ui input"
                        v-model="username" v-validate="'required'"
                    >
                    <span v-show="errors.has('username')">{{ errors.first('username') }}</span>
                </div>
                <div class="field">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Password" class="ui input"
                        v-model="password" v-validate="'password'"
                    >
                    <span v-show="errors.has('password')">{{ errors.first('password') }}</span>
                </div>
                <div class="field">
                    <div class="ui checkbox">
                        <input type="checkbox" tabindex="0" class="hidden">
                        <label>I agree to the Terms and Conditions</label>
                    </div>
                </div>
                <button class="ui button" type="submit" @click.prevent="onLogin">Login</button>
            </form>
        </div>
    </div>
</template>

<script>
import Vue from 'Vue'
import store from '../store/app'
import router from '../router/index'

export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        onLogin: (evt) => {
            store.commit('login')
            router.push('Main')
        }
    }
}
</script>
