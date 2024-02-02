<template>
    <div class="book">
        <div class="book-hd">
            <div class="left">
                <span>书画</span>
                <div class="lab"></div>
            </div>
            <div class="right">
                <i class="iconfont icon-dingdan_dingdanliebiao"></i>
                <i class="iconfont icon-gouwuche"></i>
            </div>
        </div>
        <div class="book-bd">
            <div class="column">
                <div class="top">
                    <div class="left">
                        <span 
                            :class="{ both: checked === 9}"
                            @click="checkedAll"
                        >全部</span>
                    </div>
                    <div class="right">
                        <div 
                            v-for="(book, index) in bookInfo"
                            :key="index"
                            :class="{ active: checked === index }"
                            @click="checkedBook(index)"
                            class="sort"
                        >
                            {{ book.sort }}
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <hr>
                </div>
            </div>
            <div class="paint">
                <paint />
            </div>
        </div>
        <div class="book-ft">
            <template v-if="checked === 9">
                <bookDetail
                    v-for="book in bookAll"
                    :key="book.id"
                    :book="book"
                />
            </template>

            <template v-else>
                <bookDetail
                    v-for="(book, index) in bookInfo[checked].books"
                    :key="index"
                    :book="book"
                />
            </template>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useBookStore, useBookStoreAll } from '@/stores/bookStore'
import paint from '@/components/ShuHua/ShuHuapaint.vue'
import bookDetail from '@/components/ShuHua/bookDetail.vue'
import { storeToRefs } from 'pinia';
const book = useBookStore()
const bookInfo = ref(book.bookInfo)
const useBookStoreall = useBookStoreAll() 
const { bookAll } = storeToRefs(useBookStoreall)


let checked = ref(0)

const checkedBook = (index) => {
    checked.value = index
}
const checkedAll = () => {
    checked.value = 9
}
</script>

<style lang="less" scoped>
.book-hd {
    z-index: 1000;
    background-color: #F7F7F7;
    height: 70px;
    width: 100%;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;

    .left {
        margin: 30px 0 0 15px;
        font-weight: 700;
        font-size: 20px;
        position: relative;

        .lab {
            position: absolute;
            height: 4px;
            width: 25px;
            background-color: black;
            bottom: 5px;
            left: 7px;
        }
    }

    .right {
        margin: 30px 0 0 15px;

        i {
            font-size: 30px;
            margin-right: 15px;
        }
    }
}

.book-bd {background-color: #fff;
    margin-top: 80px;

    .column {
        background-color: #F7F7F7;
        height: 95px;
        padding-top: 15px;
        .top {
            display: flex;
            height: 70px;
            padding: 0 0 15px 0;
            box-sizing: border-box;
            .left {
                width: 25%;
                text-align: center;
                padding-top: 3px;
                span {
                    color: #0F0F0F;
                    font-weight: 600;
                    padding: 5px;
                }
                .both{
                    background-color: #D7D7D7;
                    border-radius: 5px;
                }
            }
            .right {
                flex: 1;
                display: flex;
                flex-wrap: wrap;
                .sort {
                    color: #818080;
                    width: 25%;
                    font-size: 14px;
                    line-height: 27.5px;
                    text-align: center;
                }
                .active{
                    background-color: #D7D7D7;
                    border-radius: 5px;
                    color: black;
                }
            }
        }
        .bottom{
            hr {
            border: 0; /* 移除默认的边框 */
            height: 1px; /* 设置高度为1像素，即细线的高度 */
            background-color: #E9E9E9; /* 设置背景颜色为灰色 */
            }
        }
    }
    .paint{
        margin-top: 15px;
    }
}
</style>