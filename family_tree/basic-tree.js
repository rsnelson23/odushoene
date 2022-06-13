import f3 from '../../src/index.js'

fetch("./data.json").then(r => r.json()).then(data => {
  const store = f3.createStore({
      data,
      node_separation: 300,
      level_separation: 150
    }),
    view = f3.d3AnimationView({
      store,
      cont: document.querySelector("#FamilyChart")
    }),
    Card = f3.elements.Card({
      store,
      svg: view.svg,
      card_dim: {w:260,h:70,text_x:75,text_y:15,img_w:60,img_h:60,img_x:5,img_y:5},
      card_display: [d => `${d.data["first name"]} ${d.data["maiden name"]} ${d.data["last name"]}`,d => `${d.data["birthday"]} ${d.data["death date"]}`,d => `${d.data["location"]}`],
      mini_tree: true,
      link_break: false
    })

  view.setCard(Card)
  store.setOnUpdate(props => view.update(props || {}))
  store.update.tree({initial: true})
})
