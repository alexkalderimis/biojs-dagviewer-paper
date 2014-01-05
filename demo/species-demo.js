var species = [
  {name: "H. sapiens", status: "extant"},
  {name: "H. neanderthalensis", status: "extinct"},
  {name: "H. heidelbergensis", status: "extinct"},
  {name: "H. erectus", status: "extinct"},
  {name: "H. ergaster", status: "extinct"},
  {name: "H. habilis", status: "extinct"}
];
var relationships = [
  {subject: species[0], ancestor: species[2]},
  {subject: species[1], ancestor: species[2]},
  {subject: species[2], ancestor: species[4]},
  {subject: species[3], ancestor: species[4]},
  {subject: species[4], ancestor: species[5]}
];
$(function () {
  var viewer = new Biojs.DAGViewer({
    target: "element-id",
    nodeLabels: ["name"],
    nodeKey: function (n) { return n.name; },
    edgeProps: ['ancestor', 'subject']
  });
  viewer.setGraph({
    nodes: species,
    edges: relationships
  });
  viewer.addGlobalListener(function () {
    console.log(arguments);
  });
  viewer.addListener(
    "click:node",
    function (name, species) {
      alert(name + " is " + species.get("status"));
    }
  );
});
