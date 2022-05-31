import f3 from '../../src/index.js'
import {setupWikiSearch} from "./wiki-data.search.js"


(() => {
  const store = f3.createStore({
      data: null,
      node_separation: 250,
      level_separation: 150
    }),
    view = f3.d3AnimationView({
      store,
      cont: document.querySelector("#FamilyChart")
    }),
    Card = f3.elements.Card({
      store,
      svg: view.svg,
      card_dim: {w:220,h:70,text_x:75,text_y:15,img_w:60,img_h:60,img_x:5,img_y:5},
      card_display: [d => d.data.label || '', d => d.data.desc || ''],
      mini_tree: true,
      link_break: true
    })

  view.setCard(Card)
  setupWikiSearch(store, document.querySelector("#FamilyChart"))
  store.setOnUpdate(props => {
    addWikiIdToURL(store.state.main_id)
    view.update(props || {})
  })

  function addWikiIdToURL(wiki_id){
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('wiki_id', wiki_id);
    window.history.pushState('page2', 'Title', location.pathname+"?wiki_id="+wiki_id);
    document.title = "wiki tree - " + store.getData().find(d => d.id === store.state.main_id).data.label
  }
})();
