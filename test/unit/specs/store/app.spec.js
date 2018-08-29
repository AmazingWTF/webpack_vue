import types from '@/store/mutation-types'
import {
  mutations
} from '@/store/modules/app'

describe('store/modules/shop.js', () => {
  it('控制页面顶部tab切换', () => {
    let state = {active: 'index'}
    mutations[types.HOME_TAB_ACTIVED](state, 'songs')
    expect(state.active).to.equal('songs')
  })

  it('控制sidebar显示', () => {
    let state = {mask_show: false}
    mutations[types.MASK_SHOW](state, true)
    expect(state.mask_show).to.equal(true)
  })
})
