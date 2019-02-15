export const controller = {
    data() {
        return {
            count: 0,
            transitionName: 'slide-right',
        }
    },
    watch: {
        count(newValue, oldValue) {
            if (newValue  > oldValue) this.transitionName = 'slide-right'
            else this.transitionName = 'slide-left'
        }
    },
    methods: {
        next(max) {
            if (this.count >= max) {
                this.count = max
            }
            else {
                this.count++
            }
            
        },
        prev(name) {
            if (this.count <=0 ) {
                this.$router.push({name: name})
            }
            else {
                this.count--
            }
            
        },
    }
}