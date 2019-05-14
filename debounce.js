//debounce(防抖)

//首先是为什么防抖，当我们持续反复触发时间的时候，会加重浏览器的负担，用户体验会很少，
//所以我们可以采用debounce(防抖)和throttle(节流)来减少频繁使用的频率 但是不影响功能

//直接上代码吧 

function debounce(self, func, immediate) {
    return function() {
        var context = self;
        var args = arguments;
        if (self.timeout) clearTimeout(self.timeout);
        if (immediate) {
            //如果已经执行过，不在执行
            var callNow = !self.timeout;
            self.timeout = setTimeout(function() {
                self.timeout = null
            }, 500)
            if (callNow) func.apply(context, args)
        } else {
            self.timeout = setTimeout(function() {
                func.apply(context, args)
            }, 500)
        }
    }
}

//@click="debounce(self,sumbitCustomerMessage,'immediate')()"


//self 记得在data里面声明等于this