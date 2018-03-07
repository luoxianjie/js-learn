/**
 * 注意this 作用域
 * @type {{name: string, age: number, birth: number, getAge: xiaomin.getAge}}
 */
var xiaomin = {
    name:'xm',
    age:12,
    birth:2000,
    getAge:function (){
        var that = this;
        function test() {
            var y = new Date().getFullYear();
            return y - that.birth;
        }

        return test();
    }
};



console.log(xiaomin.getAge());