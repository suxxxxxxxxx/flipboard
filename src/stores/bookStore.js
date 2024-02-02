import { defineStore } from "pinia";
import { ref } from "vue";

export const useBookStore = defineStore('book', () => {
    const bookInfo = ref(
        [
            {
                sort: "工具百科",
                books: [
                    {
                        author: "尼古拉斯",
                        name: "《宇宙》",
                        detail: "《宇宙》是一本极具收藏价值的天文视觉图册,全书近200张精美图像全部由尖端技术拍摄,细致的后期处理更是科学与艺术的完美结合,带领我们踏入茫茫的宇宙。",
                        price: "117",
                        sorts: "工具百科",
                        img: "https://img01.yzcdn.cn/upload_files/2016/11/15/Firwz4RIcfrEj1Iae3w6xeEfYirK.jpg!large.webp"
                    },
                    {
                        author: "大卫格雷伯",
                        name: "《规则的悖论》",
                        detail: "本书挑战那些不合理的规章制度，旨在引发人们关于现代生活的讨论:我们能否走出规则的乌托邦，想象一个更美好的未来?",
                        price: "42.2",
                        sorts: "工具百科",
                        img: "https://img01.yzcdn.cn/upload_files/2023/04/21/Fkai3CBrhw4Aqp8pqaKPUYx5MEhN.png!large.webp"
                    }
                ]
            },
            {
                sort: "治愈绘本",
                books: [
                    {
                        author: "中信出版社",
                        name: "《蓝色星球》",
                        detail: "带孩子一起见证人类震撼人心的海洋探访纪录,感受海洋之美",
                        price: "49",
                        sorts: "治愈绘本",
                        img: "https://img01.yzcdn.cn/upload_files/2021/12/08/FsmVlcEccsJgmaxGcbHuNQRbNnvb.jpg!large.webp"
                    },
                    {
                        author: "娜塔莉·莱特",
                        name: "《我梦中的花园》",
                        detail: "堪比《爱丽丝梦游仙境》的奇幻想象,媲美《秘密花园》的暖心治愈。一个来了就不想离开的魔幻花园,献给所有爱做梦的人。",
                        price: "64",
                        sorts: "治愈绘本",
                        img: "https://img01.yzcdn.cn/upload_files/2021/11/01/FvM6eMGH1MfDWGR089bdGA8uX90k.png!large.webp"
                    }
                ]
            },
            {
                sort: "情感驿站",
                books: [
                    {
                        author: "王芳",
                        name: "《我们何以不同》",
                        detail: "我们是独一无二的我们自己。“人格”并不是一个名词，而是一个动词，我们永远都在“成为”可以被描述却无法被祯殆餐暗百八义。",
                        price: "68.1",
                        sorts: "情感驿站",
                        img: "https://img01.yzcdn.cn/upload_files/2023/07/17/FqNRXUpgS2Vc3VXShWYkApx6gF8z.jpg!large.webp"
                    },
                    {
                        author: "杜鲁门·卡波特",
                        name: "《圣诞忆旧集》",
                        detail: "爱与友善足以抵御风雨如晦的萧条世界",
                        price: "35.4",
                        sorts: "情感驿站",
                        img: "https://img01.yzcdn.cn/upload_files/2023/05/06/FkvjWrlzB54RgFffQK1OA8hQigAO.jpg!small.webp"
                    }
                ]
            },
            {
                sort: "职场提升",
                books: [
                    {
                        author: "冯唐",
                        name: "《冯唐成事心法》",
                        detail: "冯唐20年实战经验倾囊相授一本成事、持续成事、持续成大事的实践指南。",
                        price: "53.8",
                        sorts: "职场提升",
                        img: "https://img01.yzcdn.cn/upload_files/2020/12/03/FgQsvNQ2gX76hLR-ujubXfFxF9pO.jpeg"
                    },
                    {
                        author: "尼尔·布朗",
                        name: "《学会提问》",
                        detail: "批判性思维入门经典,真正授人以渔的智慧之书,畅销百万册,豆瓣万人评价8.3高分。",
                        price: "39",
                        sorts: "职场提升",
                        img: "https://img01.yzcdn.cn/upload_files/2023/03/27/FhoNUmuonib2ljO825RYr65yDbCg.jpg!large.webp"
                    }
                ]
            },
            {
                sort: "成长技能",
                books: [
                    {
                        author: "道格拉斯·斯通",
                        name: "《高难度谈话》",
                        detail: "哈佛谈判小组潜心研究成果:畅销10年,依然雄踞美国亚马逊书店语言沟通类畅销榜前列。",
                        price: "37.5",
                        sorts: "成长技能",
                        img: "https://img01.yzcdn.cn/upload_files/2019/10/10/FlHbI1sYetzKNznoHmeBcz5hWQEF.jpg!large.webp"
                    },
                    {
                        author: "彼得布朗",
                        name: "《认知天性》",
                        detail: "让学习轻而易举的心理学规律",
                        price: "39",
                        sorts: "成长技能",
                        img: "https://img01.yzcdn.cn/upload_files/2018/10/19/FpuHkE9HENl6KhMk-OUVGrton3_Z.jpg!large.webp"
                    }
                ]
            },
            {
                sort: "人文经典",
                books: [
                    {
                        author: "爱丽丝·门罗",
                        name: "《你以为你是谁》",
                        detail: "月经羞耻、容貌焦虑、性骚扰,阶层差异、亲密关系、婚姻困境、母职枷锁··....生命中的决定性时刻,叙写一个女人不断出走的一生。",
                        price: "40.1",
                        sorts: "人文经典",
                        img: "https://img01.yzcdn.cn/upload_files/2023/10/23/FpLzzV-si0_gUlkeep5s-PQLeQn2.jpg!small.webp"
                    },
                    {
                        author: "詹弗兰科",
                        name: "《虚掷的夏日》",
                        detail: "埋藏了半个多世纪的欧洲文学遗珠,部文学经典的再发现,一场浪漫感伤的citywalk。",
                        price: "24.5",
                        sorts: "人文经典",
                        img: "https://img01.yzcdn.cn/upload_files/2023/09/26/FvI4itGLyzTFt9Odl2RutyjH15t-.jpg"
                    }
                ]
            },
            {
                sort: "数字版画",
                books: [
                    {
                        author: "BBKK",
                        name: "《AOCTOR》",
                        detail: "限量艺术版画",
                        price: "249",
                        sorts: "数字版画",
                        img: "https://img01.yzcdn.cn/upload_files/2022/01/07/FkrkuC5DMsTmF4_8XWoxqnd6gxQR.jpg"
                    },
                    {
                        author: "黄霞",
                        name: "《冬》",
                        detail: "限量艺术版画",
                        price: "249",
                        sorts: "数字版画",
                        img: "https://img01.yzcdn.cn/upload_files/2022/02/23/FjFKLzLbGrp-WdrkoKm2JtULGuMk.jpg!large.webp"
                    }
                ]
            },
            {
                sort: "大师经典",
                books: [
                    {
                        author: "杨照",
                        name: "《经典里的中国》",
                        detail: "历史，应该让我们看到人类经验的多样性和生活的全幅可能,进而审视现实。重读千年经典,重逢诸子百家，重返历史现场，重识古代中国，一切，从这十部经典开始。",
                        price: "59.4",
                        sorts: "大师经典",
                        img: "	https://img01.yzcdn.cn/upload_files/2023/02/16/FhlIgeteof5vxY9lxP-GFLF9G2RV.jpg!large.webp"
                    },
                    {
                        author: "列夫·托尔斯泰",
                        name: "《战争与和平》",
                        detail: "作家以1812年拿破仑入侵俄国为中心,描写了俄国人民奋起抗击侵略者的英勇场景,同时也探索了贵族阶级的历史命运问题。",
                        price: "72.8",
                        sorts: "大师经典",
                        img: "https://img01.yzcdn.cn/upload_files/2022/07/22/FnT-9azlQWlqDDl7nchOfvTHQEBq.jpg!large.webp"
                    }
                ]
            },
        ]
    )
    return { bookInfo }
})

export const useBookStoreAll = defineStore('bookAll', () => {
    const bookAll = ref(
        [
            {
                author: "尼古拉斯",
                name: "《宇宙》",
                detail: "《宇宙》是一本极具收藏价值的天文视觉图册,全书近200张精美图像全部由尖端技术拍摄,细致的后期处理更是科学与艺术的完美结合,带领我们踏入茫茫的宇宙。",
                price: "117",
                sorts: "工具百科",
                img: "https://img01.yzcdn.cn/upload_files/2016/11/15/Firwz4RIcfrEj1Iae3w6xeEfYirK.jpg!large.webp"
            },
            {
                author: "大卫格雷伯",
                name: "《规则的悖论》",
                detail: "本书挑战那些不合理的规章制度，旨在引发人们关于现代生活的讨论:我们能否走出规则的乌托邦，想象一个更美好的未来?",
                price: "42.2",
                sorts: "工具百科",
                img: "https://img01.yzcdn.cn/upload_files/2023/04/21/Fkai3CBrhw4Aqp8pqaKPUYx5MEhN.png!large.webp"
            },
            {
                author: "中信出版社",
                name: "《蓝色星球》",
                detail: "带孩子一起见证人类震撼人心的海洋探访纪录,感受海洋之美",
                price: "49",
                sorts: "治愈绘本",
                img: "https://img01.yzcdn.cn/upload_files/2021/12/08/FsmVlcEccsJgmaxGcbHuNQRbNnvb.jpg!large.webp"
            },
            {
                author: "娜塔莉·莱特",
                name: "《我梦中的花园》",
                detail: "堪比《爱丽丝梦游仙境》的奇幻想象,媲美《秘密花园》的暖心治愈。一个来了就不想离开的魔幻花园,献给所有爱做梦的人。",
                price: "64",
                sorts: "治愈绘本",
                img: "https://img01.yzcdn.cn/upload_files/2021/11/01/FvM6eMGH1MfDWGR089bdGA8uX90k.png!large.webp"
            },
            {
                author: "王芳",
                name: "《我们何以不同》",
                detail: "我们是独一无二的我们自己。“人格”并不是一个名词，而是一个动词，我们永远都在“成为”可以被描述却无法被祯殆餐暗百八义。",
                price: "68.1",
                sorts: "情感驿站",
                img: "https://img01.yzcdn.cn/upload_files/2023/07/17/FqNRXUpgS2Vc3VXShWYkApx6gF8z.jpg!large.webp"
            },
            {
                author: "杜鲁门·卡波特",
                name: "《圣诞忆旧集》",
                detail: "爱与友善足以抵御风雨如晦的萧条世界",
                price: "35.4",
                sorts: "情感驿站",
                img: "https://img01.yzcdn.cn/upload_files/2023/05/06/FkvjWrlzB54RgFffQK1OA8hQigAO.jpg!small.webp"
            },
            {
                author: "冯唐",
                name: "《冯唐成事心法》",
                detail: "冯唐20年实战经验倾囊相授一本成事、持续成事、持续成大事的实践指南。",
                price: "53.8",
                sorts: "职场提升",
                img: "https://img01.yzcdn.cn/upload_files/2020/12/03/FgQsvNQ2gX76hLR-ujubXfFxF9pO.jpeg"
            },
            {
                author: "尼尔·布朗",
                name: "《学会提问》",
                detail: "批判性思维入门经典,真正授人以渔的智慧之书,畅销百万册,豆瓣万人评价8.3高分。",
                price: "39",
                sorts: "职场提升",
                img: "https://img01.yzcdn.cn/upload_files/2023/03/27/FhoNUmuonib2ljO825RYr65yDbCg.jpg!large.webp"
            },
            {
                author: "道格拉斯·斯通",
                name: "《高难度谈话》",
                detail: "哈佛谈判小组潜心研究成果:畅销10年,依然雄踞美国亚马逊书店语言沟通类畅销榜前列。",
                price: "37.5",
                sorts: "成长技能",
                img: "https://img01.yzcdn.cn/upload_files/2019/10/10/FlHbI1sYetzKNznoHmeBcz5hWQEF.jpg!large.webp"
            },
            {
                author: "彼得布朗",
                name: "《认知天性》",
                detail: "让学习轻而易举的心理学规律",
                price: "39",
                sorts: "成长技能",
                img: "https://img01.yzcdn.cn/upload_files/2018/10/19/FpuHkE9HENl6KhMk-OUVGrton3_Z.jpg!large.webp"
            },
            {
                author: "爱丽丝·门罗",
                name: "《你以为你是谁》",
                detail: "月经羞耻、容貌焦虑、性骚扰,阶层差异、亲密关系、婚姻困境、母职枷锁··....生命中的决定性时刻,叙写一个女人不断出走的一生。",
                price: "40.1",
                sorts: "人文经典",
                img: "https://img01.yzcdn.cn/upload_files/2023/10/23/FpLzzV-si0_gUlkeep5s-PQLeQn2.jpg!small.webp"
            },
            {
                author: "詹弗兰科",
                name: "《虚掷的夏日》",
                detail: "埋藏了半个多世纪的欧洲文学遗珠,部文学经典的再发现,一场浪漫感伤的citywalk。",
                price: "24.5",
                sorts: "人文经典",
                img: "https://img01.yzcdn.cn/upload_files/2023/09/26/FvI4itGLyzTFt9Odl2RutyjH15t-.jpg"
            },
            {
                author: "BBKK",
                name: "《AOCTOR》",
                detail: "限量艺术版画",
                price: "249",
                sorts: "数字版画",
                img: "https://img01.yzcdn.cn/upload_files/2022/01/07/FkrkuC5DMsTmF4_8XWoxqnd6gxQR.jpg"
            },
            {
                author: "黄霞",
                name: "《冬》",
                detail: "限量艺术版画",
                price: "249",
                sorts: "数字版画",
                img: "https://img01.yzcdn.cn/upload_files/2022/02/23/FjFKLzLbGrp-WdrkoKm2JtULGuMk.jpg!large.webp"
            },
            {
                author: "杨照",
                name: "《经典里的中国》",
                detail: "历史，应该让我们看到人类经验的多样性和生活的全幅可能,进而审视现实。重读千年经典,重逢诸子百家，重返历史现场，重识古代中国，一切，从这十部经典开始。",
                price: "59.4",
                sorts: "大师经典",
                img: "	https://img01.yzcdn.cn/upload_files/2023/02/16/FhlIgeteof5vxY9lxP-GFLF9G2RV.jpg!large.webp"
            },
            {
                author: "列夫·托尔斯泰",
                name: "《战争与和平》",
                detail: "作家以1812年拿破仑入侵俄国为中心,描写了俄国人民奋起抗击侵略者的英勇场景,同时也探索了贵族阶级的历史命运问题。",
                price: "72.8",
                sorts: "大师经典",
                img: "https://img01.yzcdn.cn/upload_files/2022/07/22/FnT-9azlQWlqDDl7nchOfvTHQEBq.jpg!large.webp"
            }
        ]
    )
    return { bookAll }
})
