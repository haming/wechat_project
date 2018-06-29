// components/lists/lists.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        propA: String,
        // propB: propB
        propB: { // 属性名
            type: null, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
            
        },
    },

    /**
     * 组件的初始数据
     */
    // data: {
    //   propB:[
    //     {name:'q_1'},
    //     {name:'q_2'},
    //     {name: 'q_3' },
    //     {name: 'q_4' },
    //     {name: 'q_5' },
    //     ]
    // },

    /**
     * 组件的方法列表
     */
    methods: {
        changeData: function () {
            this.setData({
                // 更新属性和数据的方法与更新页面数据的方法类似
                propA: 'Test',
            })

            this.triggerEvent("listsClicks",{})
        }
    },
    onLoad: function () {
        // 页面渲染后 执行

    },
})
