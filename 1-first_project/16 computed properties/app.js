const vm = Vue.createApp({
        data() {
            return {
                wage: 0,
                tax: 0
            }

        },

        methods: {
            tax_calculator_method() {
                return this.wage + this.wage *( this.tax/100);
            }
        },
        computed: {
            tax_calculator_computed() {
                return this.wage + this.wage *( this.tax/100);
            }
        }


    }
).mount('#jasem')


