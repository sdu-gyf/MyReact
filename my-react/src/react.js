import {ELEMENT_TEXT} from './constants'

/**
 * 创建虚拟dom
 * 
 * @param {*} type 元素类型
 * @param {*} config 配置对象  key ref
 * @param  {...any} children 子元素
 */
function createElement(type, config, ...children) {
    delete config.__self;
    delete config.__source; 
    return {
        type,
        props: {
            ...config,
            // react元素返回自己，是字符串返回自定义对象
            children:children.map(child=>{
                return typeof child === 'object' ? child:{
                    type: ELEMENT_TEXT,
                    props:{
                        text:child, children: []
                    }
                }
            })
        }
    }
}

const React = {
    createElement
}

export default React;