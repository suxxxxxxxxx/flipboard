<template>
    <Hearder />

    <van-sticky>
        <div class="Toggle-left">
            <span class="left">
                <router-link to="/laibian/notice-board">公告栏</router-link>
            </span>
            <span class="right">
                <router-link to="/laibian/latest">来辩</router-link>  
            </span>
        </div>
        <div class="Toggle-right">
            <div class="left">
                <router-link to="/laibian/latest">最新</router-link>
            </div>
            <div class="right">
                <router-link to="/laibian/hot">最热</router-link>
            </div>
        </div>
    </van-sticky>

    <div class="content">
        <div class="pic">
            <img src="@/assets/img/1.png" alt="">
        </div>
        <div class="content-info">
            <div class="info-hd">
                <div class="icon1">
                    <img src="@/assets/icon/奖牌.png" alt="">
                </div>
                <p>1007人参与</p>
            </div>
            <div class="info-bd">
                <span class="author">LH: </span>
                <span class="comment"> 反人性的批评，非傻即坏</span>
            </div>
            <div class="link">
                <div class="icon2">
                    <img src="@/assets/icon/2.png" alt="">
                </div>
                <p>云台山妲己惹争议，美色营销界限在哪？</p>
            </div>
        </div>
    </div>
    <div class="feature">
        <div class="feature1">
            <img src="@/assets/icon/看过.png" alt="">
            <p>69.7K</p>
        </div>
        <div class="feature2">
            <img src="@/assets/icon/鼓掌.png" alt="">
            <p>485</p>
        </div>
        <div class="feature3">
            <img src="@/assets/icon/消息.png" alt="">
            <p>21</p>
        </div>
        <div class="feature4">
            <img src="@/assets/icon/转发.png" alt="">
        </div>
    </div>

    <div class="content">
        <div class="pic">
            <img src="@/assets/img/2.png" alt="">
        </div>
        <div class="content-info">
            <div class="info-hd">
                <div class="icon1">
                    <img src="@/assets/icon/奖牌.png" alt="">
                </div>
                <p>1523人参与</p>
            </div>
            <div class="info-bd">
                <span class="author">小阿北道: </span>
                <span class="comment"> 买壁纸月入十万不可思议啊</span>
            </div>
            <div class="link">
                <div class="icon2">
                    <img src="@/assets/icon/2.png" alt="">
                </div>
                <p>每周热文</p>
            </div>
        </div>
    </div>
    <div class="feature">
        <div class="feature1">
            <img src="@/assets/icon/看过.png" alt="">
            <p>1000K+</p>
        </div>
        <div class="feature2">
            <img src="@/assets/icon/鼓掌.png" alt="">
            <p>751</p>
        </div>
        <div class="feature3">
            <img src="@/assets/icon/消息.png" alt="">
            <p>5</p>
        </div>
        <div class="feature4">
            <img src="@/assets/icon/转发.png" alt="">
        </div>
    </div>

    <div class="content">
        <div class="pic">
            <img src="@/assets/img/3.png" alt="">
        </div>
        <div class="content-info">
            <div class="info-hd">
                <div class="icon1">
                    <img src="@/assets/icon/奖牌.png" alt="">
                </div>
                <p>1165人参与</p>
            </div>
            <div class="info-bd">
                <span class="author">椰子花: </span>
                <span class="comment"> 不是急迫情况我是不愿意的，消费还是根据自己的能力去进行。</span>
            </div>
            <div class="link">
                <div class="icon2">
                    <img src="@/assets/icon/2.png" alt="">
                </div>
                <p>消费贷利率“史上最低”，你愿意借钱买买吗？</p>
            </div>
        </div>
    </div>
    <div class="feature">
        <div class="feature1">
            <img src="@/assets/icon/看过.png" alt="">
            <p>69.7K</p>
        </div>
        <div class="feature2">
            <img src="@/assets/icon/鼓掌.png" alt="">
            <p>485</p>
        </div>
        <div class="feature3">
            <img src="@/assets/icon/消息.png" alt="">
            <p>21</p>
        </div>
        <div class="feature4">
            <img src="@/assets/icon/转发.png" alt="">
        </div>
    </div>

    <div class="content">
        <div class="pic">
            <img src="@/assets/img/4.png" alt="">
        </div>
        <div class="content-info">
            <div class="info-hd">
                <div class="icon1">
                    <img src="@/assets/icon/奖牌.png" alt="">
                </div>
                <p>2888人参与</p>
            </div>
            <div class="info-bd">
                <span class="author">伪大空想家: </span>
                <span class="comment"> 没有人喜欢路边摊的小食上国宴吧，就好像韩国申请世博会竞选用女团宣传。</span>
            </div>
            <div class="link">
                <div class="icon2">
                    <img src="@/assets/icon/2.png" alt="">
                </div>
                <p>你是否希望春晚看到科目三？</p>
            </div>
        </div>
    </div>
    <div class="feature">
        <div class="feature1">
            <img src="@/assets/icon/看过.png" alt="">
            <p>69.7K</p>
        </div>
        <div class="feature2">
            <img src="@/assets/icon/鼓掌.png" alt="">
            <p>485</p>
        </div>
        <div class="feature3">
            <img src="@/assets/icon/消息.png" alt="">
            <p>21</p>
        </div>
        <div class="feature4">
            <img src="@/assets/icon/转发.png" alt="">
        </div>
    </div>


</template>

<script setup>
import Hearder from '@/components/LaiBian/LaiBianHearder.vue';

</script>

<style lang="less" scoped>
.Toggle-left{
    padding: 1rem 0 0.5rem 1rem;
    font-size: small;
    background-color: rgb(247, 247, 247);
    span{
        padding: 0 1rem 0 0;
    }
    a{
        text-decoration: none;
        color: #000;
    }
    .right{
        a{
            font-weight: 600;
            text-decoration: none;
            color: #000;
            border-bottom: 3px solid #000;
        }
    }
}
.Toggle-right{
    padding: 0 1rem 0.5rem 0;
    display: flex;
    justify-content: flex-end;
    background-color: rgb(247, 247, 247);
    .left{
        box-sizing: border-box;
        border-right: 1.5px solid rgb(168, 168, 168);
        font-size: small;
        padding: 0 0.5rem;
        a{
            text-decoration: none;
            color: #000;
            &.router-link-active{
                font-weight: 600;
            }
        }
    }
    .right{
        font-size: small;
        padding: 0 0.5rem;
        a{
            text-decoration: none;
            color: #000;
            &.router-link-active{
                font-weight: 600;
            }
        }
    }
}

.content{
    background-color: #fff;
    margin: 0 1rem 1rem 1rem;
    .pic{
        width: 100%;
        height: 20rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .content-info{
        .info-hd{
            height: 1.5rem;
            margin: 0.5rem 0.5rem 1rem 1rem;
            display: flex;
            justify-content: space-between;
            .icon1{
                img{
                    height: 2.5rem;
                }
            }
            p{
                font-size: small;
                padding: 10px 0;
            }
        }
        .info-bd{
            padding-left: 1rem;
            .author{
                font-size: small;
                font-weight: bold;
            }
            .comment{
                font-size: small;
            }
        }
        .link{
            padding-top: 1.5rem;
            padding-left: 1rem;
            .icon2{
                img{
                    background-color: #000;
                    width: 1.5rem;
                    height: 1.5rem;
                }
            }
            p{
                padding: 0.8rem 0;
                font-weight: bold;
                text-decoration-line: underline;
            }
        }
    }
}
.feature{
    margin: 0.5rem 1rem 2rem ;
    display: flex;
    .feature1{
        padding-left: 0.5rem;
        display: flex;
        flex:2;
        img{
            width: 1.2rem;
            height: 1.2rem;
        }
        p{
            padding-top: 4px;
            padding-left: 5px;
            font-size: small;
            color: rgb(152, 152, 152);
        }
    }
    .feature2{
        display: flex;
        padding-right: 1rem;
        img{
            width: 1.3rem;
            height: 1.3rem;
        }
        p{
            padding-top: 5px;
            padding-left: 3px;
            font-size: small;
            color: rgb(152, 152, 152);
        }
    }
    .feature3{
        display: flex;
        padding-right: 2rem;
        img{
            width: 1.4rem;
            height: 1.4rem;
        }
        p{
            padding-top: 4px;
            padding-left: 5px;
            font-size: small;
            color: rgb(152, 152, 152);
        }
    }
    .feature4{
        display: flex;
        padding-right: 1rem;
        img{
            padding-top: 2px;
            width: 1.0rem;
            height: 1.0rem;
        }
        p{
            padding-top: 2px;
            padding-left: 5px;
            font-size: small;
            color: rgb(152, 152, 152);
        }
    }
}
</style>