<template>
    <v-container id="comments">
        <v-row justify="end" class="mb-2">
            <v-btn v-on:click="show=!show" text>
                COMMENTS
                <v-icon v-show="show==false" right>fas fa-caret-down</v-icon>
                <v-icon v-show="show==true" right>fas fa-caret-up</v-icon>
                </v-btn>
        </v-row>
        <!-- <div style=""> -->
            <v-container v-show="show==true" style="overflow:auto; max-height:170px">
                <v-row v-for="cmnt in comment_array" :key="cmnt._id">
                    <v-card class="rounded-pill pa-2 mb-1 d-flex" flat width="100%" height="50px" id="comment" color="grey lighten-4">
                        <v-card-text class="d-flex justify-start pa-0 pb-0 align-content-end">
                                <!-- <v-avatar size="36">
                                    <v-img v-bind:src=cmnt.user_avatar></v-img>
                                </v-avatar> -->
                                <v-col  class="text-left pa-1">
                                    <v-row class="pt-1 pb-1 pl-1">
                                        <strong id="user_name" v-html=cmnt.creator  style="color:teal"></strong>
                                    </v-row >
                                    <v-row class="ma-1">
                                        <p id="comm_text">{{cmnt.comm.content}}</p>
                                    </v-row>
                                </v-col>
                                <v-col class="justify-end">
                                </v-col>
                        </v-card-text>
                    </v-card>
                </v-row>
            </v-container>
        <!-- </div> -->
    </v-container>
</template>

<script>
import {mapActions} from 'vuex'

export default({
    name: 'CommentsComp',
    props: {
        comm_list: Array,
    },
    data() {
        return {
            empty: true,
            show: false,
            comment_array: []
        }
    },
    methods: {
        ...mapActions(['getComment', 'getUser']),
        async loadComms(){
            for(let comm of this.comm_list) {
                let obj = {};
                let c, cr ;
                    await this.getComment(comm)
                    .then(res => {c = res.comment;})
                    await this.getUser(c.creator)
                    .then(res => {cr = res.user.name})
                obj['comm'] = c;
                obj['creator'] = cr;
                // console.log('obj', obj)
                this.comment_array.push(obj);
            }
        }
    },
    async beforeMount(){
        // console.log('list: ', this.comm_list)
        this.loadComms()
    },
    watch:{
        async comm_list(){
            // console.log('val: ', val)
            this.comment_array = [];
            await this.loadComms();
        }
    }
})
</script>

<style>

#comments {
    padding-top: 2%;
    padding-bottom: 2%;
    padding-left: 5%;
    padding-right: 5%;
}

#comm_text {
    padding-left: 5%;
    padding-right: 5%;
    font-family: 'Gowun Dodum', sans-serif;
}

/*----------------------- scrollbars -----------------------*/
        /* for chrome-safari-edge */
    *::-webkit-scrollbar {
    width: 4px;
    }
    *::-webkit-scrollbar-track {
        background: white;
    }
    *::-webkit-scrollbar-thumb {
        /* size: thin; */
    background-color: teal;
    border-radius: 20px;
    /* border: 3px solid lightgray; */
    }

        /* for firefox */
    * {
    scrollbar-width: thin;
    scrollbar-color: teal white;
    }
/*----------------------- scrollbars -----------------------*/

</style>


