<template>
    <div class="row">
        <div class="four wide column field" v-for="list in tasklists" :key="list.title">
            <div>{{list.title}}</div>
            <draggable class="ui relaxed divided list" v-model="list.list" :options="{animation:150, group:list.group}" @start="drag=true" @end="drag=true">
                <div class="item" style="background-color: #21BA45;" v-for="task in list.list" :key="task.title">
                    <div class="header">{{task.title}}</div>
                    <div class="description">Lorem ipsum</div>
                </div>
                <div slot="footer" class="ui form">
                    <p></p>
                    <div class="field"><input type="text" placeholder="Add an item ..." class="ui input" v-model="list.newItemTitle"></input></div>
                    <button class="ui button" @click="onAddNewItemClick(list, list.newItemTitle)">Add</button>
                </div>
            </draggable>
        </div>
        <div class="four wide column field">
            <div class="ui form">
                <div class="field">
                    <input type="text" name="new-list" placeholder="Add a list ..." class="ui input" v-model="newListTitle"> </input>
                </div>
                <button class="ui green button" @click="onAddNewListClick(tasklists, newListTitle)">Save</button>
                <a>
                    <i class="remove icon"></i>
                </a>
            </div>
        </div>
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
            newListTitle: '',
            tasklists: [

            ]
        }
    },
    methods: {
        clearListTitleInput() {
            this.newListTitle = ''
        },
        addList(tasklists, title) {
            tasklists.push({
                title: title,
                group: 'any',
                newItemTitle: '',
                list: [
                    { title: 'Placeholder' }
                ]
            })
        },
        onAddNewListClick(tasklists, title) {
            this.addList(tasklists, title)
            this.clearListTitleInput()
        },
        clearItemTitleInput(itemlist) {
            itemlist.newItemTitle = ''
        },
        addItem(itemlist, title) {
            itemlist.list.push({
                title: title
            })
        },
        onAddNewItemClick(itemlist, title) {
            this.addItem(itemlist, title)
            this.clearItemTitleInput(itemlist)
        }
    }
}
</script>
