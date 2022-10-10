<template>
    <div class="container">
        <div class="todo-wrap">
            <h1 class="todo-title">TO DO LIST</h1>

            <div class="input-wrap">
                <input 
                    type="text" 
                    class="c-input input-apply" 
                    v-model="comment" 
                    placeholder="comment를 입력해주세요"
                    ref="input_ref"
                >
                <button class="c-btn btn-ok btn-apply" @click="apply">등록</button>
            </div>


            <ul 
                class="todos"
            >
                <li
                    class="todo-li" 
                    :class="{editMode:todo.isEditMode}"
                    v-for="(todo, index) in todoList" 
                    :key="index"
                >  
                <!-- 1000ms (1초) * 10 = 10초 -->

                    <div 
                        class="read-wrap"
                        v-if="todo.isEditMode===false" 
                    >
                        <span 
                            class="icon-new"
                            v-show="todo.createdAt.getTime() + 1000 * 10 > new Date().getTime()"
                        >
                            NEW
                        </span>
                        <p class="read-text">
                            {{todo.comment}}
                        </p>
                        <div class="btn-wrap">
                            <button
                            class="c-btn btn-del"
                            @click="deleteTodo(index)"
                            >
                                <!-- <img src="../assets/delete_icon.png"> -->
                                삭제
                            </button>
                            <button
                                class="c-btn btn-edit"
                                @click="todo.isEditMode=true"
                            >
                                수정하기
                            </button>
                        </div>
                    </div>

                

                    <!-- 수정모드일때만 show -->
                    <div
                        class="edit-wrap"
                        v-if="todo.isEditMode===true"
                    >
                        <input 
                            class="c-input"
                            type="text" 
                            name="" 
                            id=""
                            v-model="todo.comment"
                        />
                        <div class="btn-wrap">
                            <button
                                class="c-btn btn-del"
                                @click="todo.isEditMode = false"
                            >
                            취소
                            </button>
                            <button
                                class="c-btn btn-ok"
                                @click="todo.isEditMode = false"
                            >
                            수정완료
                            </button>
                        </div>
                    </div>
                </li>

                <li 
                    class="todo-li empty" 
                    v-if="todoList.length === 0"
                >
                작성된 할일이 없습니다.
                </li>

            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                comment: "",
                todoList: [],
            }
        },
        methods: {
            apply() {
                if(!this.comment) {
                    alert('comment를 입력해주세요');
                    // 알럿 이후 해당하는 input에 focus잡고싶다면 $ref 를 사용하면 된다.
                    this.$refs.input_ref.focus();
                    return;
                }
                // 배열에 요소를 삽입할때 : push 사용
                this.todoList.push({comment: this.comment, createdAt: new Date(), isEditMode: false,});
                this.comment = "";
            },
            deleteTodo(index) {
                // splice : start / end index 를 넣어준다.
                this.todoList.splice(index, 1);
            },
        },
        created() {
            setInterval(() => {
                this.todoList = this.todoList.map((todo) => todo);
            }, 2000);
        }
    }
</script>

<style scoped>
/* common css */
.icon-new {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    color: red;
    font-weight: 500;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 0 20px; 
    font-size: 14px;   
}
.btn-wrap {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
}
.btn-wrap .c-btn {
    margin-right: 5px;
}
.btn-wrap .c-btn:last-child {
    margin-right: 0;
}
.c-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 40px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 14px;
}
.btn-del {
    background-color: #ddd;
    border-color: #ddd;
}
.btn-edit {
    background-color: #fff;
}
.btn-ok {
    color: #fff;
    background: #4242d9;
    border-color: #4242d9;
}
.c-input {
    width: 100%;
    border-radius: 5px;
    height: 40px;
    padding: 0 20px;
    border: 1px solid #ddd;
}

/* only todos */
.container {   
    min-height: 100vh;
    background-color: #f9f9f9;
}
.todo-wrap {
    width: calc(100% - 40px);
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px 0;
}
.todo-title {
    font-size: 30px;
    margin-bottom: 50px;
}
.input-wrap {
    width: 100%;
    display: flex;
}
.input-apply {
    width: calc(100% - 120px);
    border-color: #fff;  
    box-shadow: 0 5px 15px rgb(0 0 0 / 10%);
}
.btn-apply {
    width: 120px;
    margin-left: 5px;
    box-shadow: 0 5px 15px rgb(0 0 0 / 10%);  
}
.todos {
    margin-top: 50px;
}
.todo-li {
    margin-top: 10px;
    background: #fff;
    padding: 30px;
    border-radius: 10px;
    width: 100%;
    box-shadow: 0 5px 15px rgb(0 0 0 / 10%);
}
.todo-li.empty {
    text-align: center;
}
.todo-li:first-child {
    margin-top: 0;
}

.read-wrap .icon-new {
    margin-bottom: 20px;
}
.edit-wrap .c-input {
    display: flex;
    margin-right: 10px;
}
</style>