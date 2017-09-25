import Vue from 'vue'
import board from '@/components/main/BoardView'

describe('BoardView.vue', () => {
    let vm;
    let tasklist;

    describe('Test init', () => {
        beforeEach(() => {
            const Constructor = Vue.extend(board)
            vm = new Constructor().$mount()
        });

        it('Model init: newListTitle', () => {
            expect(vm.newListTitle).to.be.a('string').that.is.empty
        })

        it('Model init: tasklists', () => {
            expect(vm.tasklists).to.be.an('array').that.is.empty
        })
    })

    describe('Testing list', () => {
        beforeEach(() => {
            const Constructor = Vue.extend(board)
            vm = new Constructor().$mount()
            tasklist = vm.tasklists
        });

        it('Adding a new list to the bottom of the board', () => {
            expect(() => {vm.addList(tasklist, 'test')}).to.increase(tasklist, 'length').by(1)
        })

        it('Call add list event handler', () => {
            expect(() => {vm.onAddNewListClick(tasklist, 'test')}).to.increase(tasklist, 'length').by(1)
        })

        it('Adding a new list does not overwrite existing lists', () => {
            vm.addList(tasklist, 'test')
            expect(() => {vm.addList(tasklist, 'test')}).to.increase(tasklist, 'length').by(1)
            vm.addList(tasklist, 'test')
            vm.addList(tasklist, 'test')
            expect(() => {vm.addList(tasklist, 'test')}).to.increase(tasklist, 'length').by(1)
            expect(() => {vm.addList(tasklist, 'test')}).to.increase(tasklist, 'length').by(1)
        })

        it('Added list has the correct title', () => {
            vm.addList(tasklist, 'test')
            expect(tasklist[0].title).to.be.equal('test')

            expect(tasklist[0].group).to.be.a('string').that.equal('any')
            expect(tasklist[0].newItemTitle).to.be.a('string').that.is.empty
            expect(tasklist[0].list).to.be.an('array')
        })

        it('List title is clearable', () => {
            vm.newListTitle = 'test'
            vm.clearListTitleInput()
            expect(vm.newListTitle).to.be.empty
        })
    })

    describe('Testing list items', () => {
        let testList;
        beforeEach(() => {
            const Constructor = Vue.extend(board)
            vm = new Constructor().$mount()
            vm.addList(vm.tasklists, 'test')
            testList = vm.tasklists[0]
        });

        it('Adding a new item to the bottom of the board', () => {
            expect(() => {vm.addItem(testList, 'test')}).to.increase(testList.list, 'length').by(1)
        })

        it('Call add item event handler', () => {
            expect(() => {vm.onAddNewItemClick(testList, 'test')}).to.increase(testList.list, 'length').by(1)
        })

        it('Adding a new item does not overwrite existing lists', () => {
            vm.addItem(testList, 'test')
            expect(() => {vm.addItem(testList, 'test')}).to.increase(testList.list, 'length').by(1)
            vm.addItem(testList, 'test')
            vm.addItem(testList, 'test')
            expect(() => {vm.addItem(testList, 'test')}).to.increase(testList.list, 'length').by(1)
        })

        it('Added item has the correct label', () => {
            let mockList = {newItemTitle: 'test'}
            vm.clearItemTitleInput(mockList)
            expect(mockList.newItemTitle).to.be.empty
        })
    })
})
