if (localStorage.getItem('arr') == null) {
    localStorage.setItem('arr', '[0,0,0,0,0]');
}
if (localStorage.getItem('opt') == null) {
    localStorage.setItem('opt', '-Select-');
}
if (localStorage.getItem('arrSort') == null) {
    localStorage.setItem('arrSort', '[0,0,0,0,0]');
}
var option = localStorage.getItem('opt');
var item = JSON.parse(localStorage.getItem('arr'));
var itemSort = JSON.parse(localStorage.getItem('arrSort'));
const app = Vue.createApp({
    data() {
        return {
            v1: item[0],
            v2: item[1],
            v3: item[2],
            v4: item[3],
            v5: item[4],
            arr: itemSort,
            opt: option
        }
    },
    methods: {
        addItem() {
            var newItem = [];
            newItem.push(this.v1);
            newItem.push(this.v2);
            newItem.push(this.v3);
            newItem.push(this.v4);
            newItem.push(this.v5);
            localStorage.setItem('arr', JSON.stringify(newItem));
            console.log(newItem);
            console.log(this.opt);
        },
        orderItem() {
            var asc = item;
            if (this.opt == 'Ascending') {
                asc.sort()
            }
            else if (this.opt == 'Descending') {
                asc.sort()
                asc.reverse()
            }
            // else {
            //     asc = [];
            // }
            localStorage.setItem('opt', this.opt);
            localStorage.setItem('arrSort', JSON.stringify(asc));
        },

    }
});
app.mount("#app");