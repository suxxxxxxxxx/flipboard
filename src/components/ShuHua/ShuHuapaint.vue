<template>
    <div class="paints">
        <div class="left">
            <img src="https://img01.yzcdn.cn/upload_files/2021/11/03/FjeSrphnI7U8mA_OGK2eF-dPyR_M.jpg!large.webp " alt="">
        </div>
        <div class="right">
            <div class="hd">
                <img src="https://img01.yzcdn.cn/upload_files/2021/11/15/FkBWI7SFVf2F7svBxV8RXhnmV2TX.jpg!large.webp " alt="" style="border-right: 4px solid #D8D8DA; margin-right: 5px;">
                <img src="https://img01.yzcdn.cn/upload_files/2021/11/03/FpIKeqOarjRvkJ01-5Zjbi0cw5AK.jpg!large.webp " alt="" style="border-right: 4px solid #D8D8DA; margin-right: 5px;">
                <img src="https://img01.yzcdn.cn/upload_files/2021/11/03/FizxpHmZL8ANGnYMUzOhNGMsy8Ae.jpg!large.webp" alt="">
            </div>
            <div class="bd">
                <div class="red">
                    <span>
                        心&nbsp;梦&nbsp;如&nbsp;幻&nbsp;/&nbsp;心&nbsp;之&nbsp;向&nbsp;往
                    </span>
                </div>
                <div class="black">
                    <span>马英戈限量艺术版画</span>
                </div>
            </div>
            <div class="ft">
                <img src="@/common/img/1.png" alt="">
            </div>
            <div class="logo">
                <img src="@/common/img/2.png" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.paints {
    height: 170px;
    display: flex;

    .left {
        margin-left: 2px;

        img {
            height: 100%;
            border-bottom: 5px solid #D8D8DA;
            border-top: 5px solid #D8D8DA;
            border-right: 5px solid #D8D8DA;
            box-sizing: border-box;
        }
    }

    .right {
        flex: 1;
        margin-left: 5px;
        position: relative;
        .hd {
            display: flex;
            height: 65px;

            img {
                width: 33%;
                border-bottom: 4px solid #D8D8DA;
                border-top: 4px solid #D8D8DA;
                border-left: 4px solid #D8D8DA;
                box-sizing: border-box;
            }
        }
        .bd{
            .red{
                margin-top: 5px;
                color: #E63841;
                font-size: 14px;
                font-weight: 800;
            }
            .black{
                margin-top: 3px;
                color: #494949;
                font-size: 12px;
                font-weight: 800;
            }
        }
        .ft{
            margin-top: 5px;
            width: 40%;
            img{
                width: 100%;
                border: 4px solid #D8D8DA;
                box-sizing: border-box;
            }
        }
        .logo{
            position: absolute;
            right: 0;
            bottom: 0;
            img{
                width: 100px;
            }
        }
    }
}
</style>