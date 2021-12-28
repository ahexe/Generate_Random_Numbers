const randomNumber = Vue.createApp({
    data() {
        return {
            randomNum: 'Result shown here',
        };
    },
    methods: {
        createIntNumber() {
            let Min = Math.ceil(intNum1.value);
            let Max = Math.floor(intNum2.value);
            if (intNum1.value === '' || intNum2.value === '') {
                this.randomNum = `Please Enter both numbers`;
            } else if (Min >= Max) {
                this.randomNum = 'Max should be bigger than Min!';
            } else {
                this.randomNum =
                    Math.floor(Math.random() * (Max - Min + 1) + Min);
            }
        },
        createFloatNumber() {
            let min = Number(floatNum1.value);
            let max = Number(floatNum2.value);
            if (floatNum1.value === '' || floatNum2.value === '') {
                this.randomNum = `Please Enter both numbers`;
            } else if (min >= max) {
                this.randomNum = 'Max should be bigger than Min!';
            } else {
                this.randomNum = Math.random() * (max - min) + min;
            }
        }
    }
});
randomNumber.mount('#randomNumber');
