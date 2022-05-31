import Reactive from "./Reactive.js"

export default function ReactiveVanila(selector) {
  return Reactive(selector, getHtml)

  function getHtml(create_tree_js) {
    return (`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <title>my-family-chart</title>
  <script src="https://unpkg.com/d3@6"></script>
  <script src="https://unpkg.com/family-chart"></script>
  <link rel="stylesheet" href="./family-chart.css">  <!-- create file 'family-chart.css' in same directory, copy/paste css from examples/create-tree -->
</head>
<body>
  <div id="FamilyChart" class="f3"></div>
  <script type="module">
    
    const store = f3.createStore({
        data: data(),
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
        card_display: [d => `${d.data["first name"]} ${d.data["maiden name"]} ${d.data["last name"]}`,d => `${d.data["birthday"]}`],
        mini_tree: true,
        link_break: false
      })
  
    view.setCard(Card)
    store.setOnUpdate(props => view.update(props || {}))
    store.update.tree({initial: true})
    
    function data() {
      return [
  {
    "id": "0",
    "rels": {
      "father": "70526502-2361-42ab-9478-d60595ea4701",
      "mother": "59e158f7-168e-44f9-8da7-c7d7ae1ba865",
      "spouses": [
        "9793f5de-83b3-4e3b-a9ef-6b0e47ff9222"
      ]
    },
    "data": {
      "first name": "Maria",
      "last name": "Nelson",
      "birthday": "6/20/1995",
      "avatar": "marianelson.jpg",
      "gender": "F",
      "maiden name": "(Olwine)"
    }
  },
  {
    "id": "70526502-2361-42ab-9478-d60595ea4701",
    "data": {
      "gender": "M",
      "first name": "Jim",
      "last name": "Olwine",
      "birthday": "5/1/1963",
      "avatar": "jimolwine.jpg",
      "maiden name": ""
    },
    "rels": {
      "children": [
        "0",
        "acf85cf9-5f46-44c3-907a-98262dfd8313",
        "44458db8-2128-4be0-a9af-5d46466481a0"
      ],
      "spouses": [
        "59e158f7-168e-44f9-8da7-c7d7ae1ba865"
      ]
    }
  },
  {
    "id": "59e158f7-168e-44f9-8da7-c7d7ae1ba865",
    "data": {
      "gender": "F",
      "first name": "Lisa",
      "last name": "Olwine",
      "birthday": "10/30/1963",
      "avatar": "lisaolwine.jpg",
      "maiden name": "(Neumann)"
    },
    "rels": {
      "spouses": [
        "70526502-2361-42ab-9478-d60595ea4701"
      ],
      "children": [
        "0",
        "acf85cf9-5f46-44c3-907a-98262dfd8313",
        "44458db8-2128-4be0-a9af-5d46466481a0"
      ]
    }
  },
  {
    "id": "9793f5de-83b3-4e3b-a9ef-6b0e47ff9222",
    "data": {
      "gender": "M",
      "first name": "Ryan",
      "last name": "Nelson",
      "birthday": "7/7/1995",
      "avatar": "ryannelson.jpg",
      "maiden name": ""
    },
    "rels": {
      "spouses": [
        "0"
      ]
    }
  },
  {
    "id": "acf85cf9-5f46-44c3-907a-98262dfd8313",
    "data": {
      "gender": "M",
      "first name": "Evan",
      "last name": "Olwine",
      "birthday": "3/11/1997",
      "avatar": "evanolwine.jpg",
      "maiden name": ""
    },
    "rels": {
      "father": "70526502-2361-42ab-9478-d60595ea4701",
      "mother": "59e158f7-168e-44f9-8da7-c7d7ae1ba865"
    }
  },
  {
    "id": "44458db8-2128-4be0-a9af-5d46466481a0",
    "data": {
      "gender": "M",
      "first name": "Evan",
      "last name": "Olwine",
      "birthday": "8/22/2008",
      "avatar": "evanolwine.jpg",
      "maiden name": ""
    },
    "rels": {
      "father": "70526502-2361-42ab-9478-d60595ea4701",
      "mother": "59e158f7-168e-44f9-8da7-c7d7ae1ba865"
    }
  }
]
    }
  
  </script>
</body>
</html>
   `)
  }
}