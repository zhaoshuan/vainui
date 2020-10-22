<template>
    <div class="kkmh-loading">
        <div class="kkmh-loading_content" :style='setWrapStyle'>
            <div :class='setClass' :style='setScale'>
                <p v-for='n in setList' :key='n' :style="setColor">
                    <span 
                        v-if='setType == "spot"' 
                        :style="{'background':color}">
                    </span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
const list = [{
    type:'spinner',
    count:12
},{
    type:'beat',
    count:6
},{
    type:'spot',
    count:5
},];
export default {
    name: 'kkmhLoading',
    data(){
        return {
            base:100,
            scale:0.25,
            list,
        }
    },
    props:{
        color:{
            type:String,
            default:'#FDE23D'
        },
        size:{
            type:[String, Number],
            default:'50px'
        },
        type:{
            type:String,
            default:'spinner',
            validator(value) {
                return list.some(item => item.type == value)
            }
        }
    },
    computed:{
        setList(){
            const obj = this.list.find(item => {
                return item.type == this.setType
            })
            return obj.count
        },
        setType(){
            const flag = list.some(item => item.type == this.type);
            return flag ? this.type : 'spinner'
        },
        setClass(){
            return `kkmh-loading_${this.setType}`
        },
        setScale(){
            return `transform:scale(${this.scale}) translate(-50%,-50%);`
        },
        setColor(){
            const color = this.setType == 'spot' ? 'none' : this.color;
            return `background:${color}`
        },
        setWrapStyle(){
            return `width:${this.scale*this.base}px;height:${this.scale*this.base}px`;
        }
    },
    created(){

        this.getSize();

    },
    methods:{
        // 设置缩放比例
        getSize(){
            
            // 数字类型
            if (typeof this.size == 'number') {
                this.scale = this.size/this.base;
                return false;
            }

            // 字符串类型
            if (typeof this.size == 'string'){

                const size = this.size.replace(/(^\s*)|(\s*$)/g, '');
                const number = parseFloat(size);
                
                if (number <= 150 && number >= 12 ) {
                    this.scale = number/this.base;
                }
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.kkmh-loading{
    display: inline-block;
    &_content{
        position: relative;
        overflow: hidden;
    }
    &_spinner {
        position: absolute;
        left:50%;
        top:50%;
        transform-origin:left top;
        background: none;
        width: 100px;
        height: 100px;
        p{
            top:40px;
            left:46.5px;
            width:7px;
            height:20px;
            background:#959199;
            border-radius:5px;
            position:absolute;
            span{
                display: none;
            }
        }
        & > p:nth-of-type(1) {
            animation: ant-default-opacity 1s linear infinite;
            animation-delay: -0.5s;
            transform:rotate(0deg) translate(0,-30px);
        }
        & > p:nth-of-type(2) {
            animation: ant-default-opacity 1s linear infinite;
            animation-delay: -0.4166666666666667s;
            transform:rotate(30deg) translate(0,-30px);
        }

        & > p:nth-of-type(3) {
            animation: ant-default-opacity 1s linear infinite;
            animation-delay: -0.33333333333333337s;
            transform:rotate(60deg) translate(0,-30px);
        }

        & > p:nth-of-type(4) {
            animation: ant-default-opacity 1s linear infinite;
            animation-delay: -0.25s;
            transform:rotate(90deg) translate(0,-30px);
        }

        & > p:nth-of-type(5) {
            animation: ant-default-opacity 1s linear infinite;
            animation-delay: -0.16666666666666669s;
            transform:rotate(120deg) translate(0,-30px);
        }

        & > p:nth-of-type(6) {
            animation: ant-default-opacity 1s linear infinite;
            animation-delay: -0.08333333333333331s;
            transform:rotate(150deg) translate(0,-30px);
        }

        & > p:nth-of-type(7) {
            animation: ant-default-opacity 1s linear infinite;
            animation-delay: 0s;
            transform:rotate(180deg) translate(0,-30px);
        }

        & > p:nth-of-type(8) {
            animation: ant-default-opacity 1s linear infinite;
            animation-delay: 0.08333333333333337s;
            transform:rotate(210deg) translate(0,-30px);
        }

        & > p:nth-of-type(9) {
            animation: ant-default-opacity 1s linear infinite;
            animation-delay: 0.16666666666666663s;
            transform:rotate(240deg) translate(0,-30px);
        }

        & > p:nth-of-type(10) {
            animation: ant-default-opacity 1s linear infinite;
            animation-delay: 0.25s;
            transform:rotate(270deg) translate(0,-30px);
        }

        & > p:nth-of-type(11) {
            animation: ant-default-opacity 1s linear infinite;
            animation-delay: 0.33333333333333337s;
            transform:rotate(300deg) translate(0,-30px);
        }

        & > p:nth-of-type(12) {
            animation: ant-default-opacity 1s linear infinite;
            animation-delay: 0.41666666666666663s;
            transform:rotate(330deg) translate(0,-30px);
        }
    }
    &_beat{
        width: 100px;
        height: 100px;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left:50%;
        top:50%;
        transform-origin:left top;
        p{
            width: 5px;
            height: 40px;
            margin: 0 5px;
            background: #acd8e4;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
            span{
                display: none;
            }
            &:nth-of-type(1) {
                animation: ant-default-beat 0.5s 0s infinite;
            }
            &:nth-of-type(2) {
                animation: ant-default-beat 0.5s 0.1s infinite;
            }
            &:nth-of-type(3) {
                animation: ant-default-beat 0.5s 0.2s infinite;
            }
            &:nth-of-type(4) {
                animation: ant-default-beat 0.5s 0.3s infinite;
            }
            &:nth-of-type(5) {
                animation: ant-default-beat 0.5s 0.4s infinite;
            }
            &:nth-of-type(6) {
                animation: ant-default-beat 0.5s 0.5s infinite;
            }
        }
    }
    &_spot {
        width: 100px;
        height: 30px;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left:50%;
        top:50%;
        transform-origin:left top;
        p{
            width: 15px;
            height: 15px;
            padding: 0 2px;
            display: flex;
            align-items: center;
            justify-content: center;
            span{
                display: inline-block;
                width: 5px;
                height: 5px;
                border-radius: 50%;
                background: #acd8e4;
            }
            &:nth-of-type(1) span {
                animation: ant-default-spot 0.5s 0s infinite;
            }
            &:nth-of-type(2) span {
                animation: ant-default-spot 0.5s 0.1s infinite;
            }
            &:nth-of-type(3) span {
                animation: ant-default-spot 0.5s 0.2s infinite;
            }
            &:nth-of-type(4) span {
                animation: ant-default-spot 0.5s 0.3s infinite;
            }
            &:nth-of-type(5) span {
                animation: ant-default-spot 0.5s 0.4s infinite;
            }
        }
        
    }
}

@keyframes ant-default-spot {
    0% {
        width: 5px;
        height: 5px;
    }
    25% {
        width: 10px;
        height: 10px;
    }
    50% {
        width: 15px;
        height: 15px;
    }
    75% {
        width: 10px;
        height: 10px;
    }
    100% {
        width: 5px;
        height: 5px;
    }
}

@keyframes ant-default-opacity {
    0% {
        opacity: 1
    }
    100% {
        opacity: 0
    }
}

@keyframes ant-default-beat {
    0% {
      height: 60px;
    }
    50% {
      height: 30px;
    }
    100% {
      height: 60px;
    }
}
 
</style>
