import Vue from 'vue'
import Test from '@/components/Test'

function getRenderedText (component, propsData, selector) {
  const Constructor = Vue.extend(component)
  const vm = (new Constructor({ propsData: propsData })).$mount()

  return selector ? vm.$el.querySelector(selector).textContent : vm.$el.textContent
}

console.log(getRenderedText(Test, {
  message: '>>>  test message <<<'
}))

describe('components/Test.vue', () => {
  it('测试Test.vue组件通过props渲染是否符合预期', () => {
    expect(getRenderedText(Test, {
      message: '>>>  test message <<<'
    }, 'p')).to.equal('>>>  test message <<<')

    expect(getRenderedText(Test, {
      message: '>>>  test message 吐吐吐 <<<'
    }, 'p')).to.equal('>>>  test message 吐吐吐 <<<')
  })
})
