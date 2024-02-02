<template>
    <div class="books">
        <div class="content">
            <div class="author">
                <div class="authorName">
                    {{ book.author }}
                </div>
                <div class="bookName">{{ book.name }}</div>
            </div>
            <div class="book-img">
                <img :src= "book.img" alt="">
            </div>
            <div class="price">
                <div class="heart">
                    报友心动价
                </div>
                <div class="dollars">￥{{ book.price }}</div>
            </div>
        </div>
        <div class="detail">
            <div class="hd">
                {{  book.detail }}
            </div>
            <div class="bd">#{{ book.sorts }}</div>
            <div class="ft"></div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps(['book'])
</script>

<style lang="less" scoped>
.books{
    margin-top: 10px;
    background-color: #F7F7F7;
    // height: 360px;
    padding: 15px;
    .content{
        background-color: #FFFFFF;
        height: 300px;
        position: relative;
        .author{
            height: 45px;
            width: 130px;
            background-color: #210DFC;
            color: #FFFFFF;
            box-sizing: border-box;
            padding: 5px 0;
            .authorName{
                font-size: 13px;   
                margin-left: 10px;             
            }
            .bookName{
                font-size: 14px;
                font-weight: 600;
                margin-left: 5px;
            }
        }
        .book-img{
            height: 200px;
            position: absolute;
            bottom: 30px;
            left: 50%;
            transform: translate(-50%, 0);
            img{
                height: 100%;
            }
        }
        .price{
            position: absolute;
            bottom: 20px;
            right: 0;

            .heart{
                color: #210DFC;
                font-weight: 600;
                font-size: 14px;
            }
            .dollars{
                background-color: #210DFC;
                color: #FFFFFF;
                padding-left: 5px;
                height: 30px;
                font-size: 18px;
                line-height: 30px;
            }
        }
    }
    .detail{
        position: relative;
        padding-left: 10px;
        margin-top: 10px;
        .hd{
            font-size: 12px;
        }
        .bd{
            margin-top: 5px;
            font-size: 12px;
            color: #3621BB;
        }
        .ft{
            position: absolute;
            background-color: #270cf3e6;
            height: 12px;
            width: 6px;
            top: 2px;
            left: 0;
        }
    }
}
</style>