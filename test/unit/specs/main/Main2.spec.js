import Vue from 'vue'
import Main2 from '@/components/main/Main2'

describe('Main2.vue', () => {
    it('Placeholder', () => {
        const Constructor = Vue.extend(Main2)
        let vm = new Constructor().$mount()
    })
})
