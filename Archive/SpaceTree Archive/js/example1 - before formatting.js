var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};


function init(){
    //init data
    var json = {
        id: "1",
        name: "You approach the border. How do you enter?",
        data: {},
        children: [{
            id: "21",
            name: "Go to a port of entry",
            data: {},
            children: [{
                id: "31",
                name: "Do you have a visa to enter the US?",
                data: {},
                children: [{
                    id: "31Y",
                    name: "Yes",
                    data: {},
                    children: [{
                        id: "41",
                        name: "Apply for asylum affirmatively with USCIS",
                        data: {},
                        children: []
                    }]
                }, {
                    id: "31N",
                    name: "No",
                    data: {},
                    children: [{
                        id: "42",
                        name: "Are you a vulnerable person in contact with an NGO or lawyer who can help you file a request for a Title 42 exemption?",
                        data: {},
                        children: [{
                            id: "42Y",
                            name: "Yes",
                            data: {},
                            children: [{
                                id: "51",
                                name: "Processed at port of entry by CBP OFO",
                                data: {},
                                children: [{
                                    id: "61",
                                    name: "Are you put on parole + ATD or issued a Notice to Appear?",
                                    data: {},
                                    children: [{
                                        id: "61Y",
                                        name: "Yes",
                                        data: {},
                                        children: [{
                                            id: "71",
                                            name: "Non-detained Immigration Court process",
                                            data: {},
                                            children: [{
                                                id: "81",
                                                name: "Did/Can you apply for asylum or other form of relief?",
                                                data: {},
                                                children: [{
                                                    id: "81Y",
                                                    name: "Yes",
                                                    data: {},
                                                    children: [{
                                                        id: "91",
                                                        name: "Did you win asylum or another form of relief?",
                                                        data: {},
                                                        children: [{
                                                            id: "91Y",
                                                            name: "Yes",
                                                            data: {},
                                                            children: [{
                                                                id: "101",
                                                                name: "Granted relief",
                                                                data: {},
                                                                children: []
                                                            }, {
                                                                id: "91N",
                                                                name: "No",
                                                                data: {},
                                                                children: [{
                                                                    id: "102",
                                                                    name: "Can you appeal?",
                                                                    data: {},
                                                                    children: [{
                                                                        id: "102Y",
                                                                        name: "Yes",
                                                                        data: {},
                                                                        children: [{
                                                                            id: "XX",
                                                                            name: "",
                                                                            data: {},
                                                                            children: []
                                                                        }, {
                                                                            id: "102N",
                                                                            name: "No",
                                                                            data: {},
                                                                            children: [{
                                                                                id: "XX",
                                                                                name: "",
                                                                                data: {},
                                                                                children: []
                                                                            }]
                                                                }]
                                                    }, {
                                                        id: "81N",
                                                        name: "No",
                                                        data: {},
                                                        children: [{
                                                            id: "92",
                                                            name: "Issued order of removal",
                                                            data: {},
                                                            children: []
                                                        }]
                                            }]
                                        }]
                                    }, {
                                        id: "61N",
                                        name: "No",
                                        data: {},
                                        children: [{
                                            id: "72",
                                            name: "14 - Title 8 ICE detention",
                                            data: {},
                                            children: []
                                        }]
                                    }]
                                }]
                            }]
                        }, {
                            id: "42N",
                            name: "No",
                            data: {},
                            children: [{
                                id: "42N??",
                                name: "[Unknown]",
                                data: {},
                                children: []
                            }]
                        }]
                    }]
                }, ]
            }, {
                id: "node222",
                name: "2.22",
                data: {},
                children: [{
                    id: "node323",
                    name: "3.23",
                    data: {},
                    children: [{
                        id: "node424",
                        name: "4.24",
                        data: {},
                        children: []
                    }]
                }]
            }]
        }, {
            id: "node1.2",
            name: "Cross the border between ports of entry",
            data: {},
            children: [{
                id: "node226",
                name: "2.26",
                data: {},
                children: [{
                    id: "node327",
                    name: "3.27",
                    data: {},
                    children: [{
                        id: "node428",
                        name: "4.28",
                        data: {},
                        children: []
                    }, {
                        id: "node429",
                        name: "4.29",
                        data: {},
                        children: []
                    }]
                }, {
                    id: "node330",
                    name: "3.30",
                    data: {},
                    children: [{
                        id: "node431",
                        name: "4.31",
                        data: {},
                        children: []
                    }]
                }, {
                    id: "node332",
                    name: "3.32",
                    data: {},
                    children: [{
                        id: "node433",
                        name: "4.33",
                        data: {},
                        children: []
                    }, {
                        id: "node434",
                        name: "4.34",
                        data: {},
                        children: []
                    }, {
                        id: "node435",
                        name: "4.35",
                        data: {},
                        children: []
                    }, {
                        id: "node436",
                        name: "4.36",
                        data: {},
                        children: []
                    }]
                }]
            }, {
                id: "node237",
                name: "2.37",
                data: {},
                children: [{
                    id: "node338",
                    name: "3.38",
                    data: {},
                    children: [{
                        id: "node439",
                        name: "4.39",
                        data: {},
                        children: []
                    }, {
                        id: "node440",
                        name: "4.40",
                        data: {},
                        children: []
                    }, {
                        id: "node441",
                        name: "4.41",
                        data: {},
                        children: []
                    }]
                }, {
                    id: "node342",
                    name: "3.42",
                    data: {},
                    children: [{
                        id: "node443",
                        name: "4.43",
                        data: {},
                        children: []
                    }]
                }, {
                    id: "node344",
                    name: "3.44",
                    data: {},
                    children: [{
                        id: "node445",
                        name: "4.45",
                        data: {},
                        children: []
                    }, {
                        id: "node446",
                        name: "4.46",
                        data: {},
                        children: []
                    }, {
                        id: "node447",
                        name: "4.47",
                        data: {},
                        children: []
                    }]
                }, {
                    id: "node348",
                    name: "3.48",
                    data: {},
                    children: [{
                        id: "node449",
                        name: "4.49",
                        data: {},
                        children: []
                    }, {
                        id: "node450",
                        name: "4.50",
                        data: {},
                        children: []
                    }, {
                        id: "node451",
                        name: "4.51",
                        data: {},
                        children: []
                    }, {
                        id: "node452",
                        name: "4.52",
                        data: {},
                        children: []
                    }, {
                        id: "node453",
                        name: "4.53",
                        data: {},
                        children: []
                    }]
                }, {
                    id: "node354",
                    name: "3.54",
                    data: {},
                    children: [{
                        id: "node455",
                        name: "4.55",
                        data: {},
                        children: []
                    }, {
                        id: "node456",
                        name: "4.56",
                        data: {},
                        children: []
                    }, {
                        id: "node457",
                        name: "4.57",
                        data: {},
                        children: []
                    }]
                }]
            }, {
                id: "node258",
                name: "2.58",
                data: {},
                children: [{
                    id: "node359",
                    name: "3.59",
                    data: {},
                    children: [{
                        id: "node460",
                        name: "4.60",
                        data: {},
                        children: []
                    }, {
                        id: "node461",
                        name: "4.61",
                        data: {},
                        children: []
                    }, {
                        id: "node462",
                        name: "4.62",
                        data: {},
                        children: []
                    }, {
                        id: "node463",
                        name: "4.63",
                        data: {},
                        children: []
                    }, {
                        id: "node464",
                        name: "4.64",
                        data: {},
                        children: []
                    }]
                }]
            }]
        }]
    };
    //end
    //init Spacetree
    //Create a new ST instance
    var st = new $jit.ST({
        //id of viz container element
        injectInto: 'infovis',
        //set duration for the animation
        duration: 800,
        //set animation transition type
        transition: $jit.Trans.Quart.easeInOut,
        //set distance between node and its children
        levelDistance: 50,
        //enable panning
        Navigation: {
          enable:true,
          panning:true
        },
        //set node and edge styles
        //set overridable=true for styling individual
        //nodes or edges
        Node: {
            height: 60,
            width: 100,
            type: 'rectangle',
            color: '#eef0dd',
            overridable: true
        },
        
        Edge: {
            type: 'bezier',
            overridable: true
        },
        
        onBeforeCompute: function(node){
            Log.write("You chose: " + node.name);
        },
        
        onAfterCompute: function(){
            Log.write(" " + node.name);
        },
        
        //This method is called on DOM label creation.
        //Use this method to add event handlers and styles to
        //your node.
        onCreateLabel: function(label, node){
            label.id = node.id;            
            label.innerHTML = node.name;
            label.onclick = function(){
            	if(normal.checked) {
            	  st.onClick(node.id);
            	} else {
                st.setRoot(node.id, 'animate');
            	}
            };
            //set label styles
            var style = label.style;
            style.width = 100 + 'px';
            style.height = 60 + 'px';            
            style.cursor = 'pointer';
            style.color = '#333';
            style.fontSize = '0.8em';
            style.textAlign= 'center';
            style.paddingTop = '3px';
        },
        
        //This method is called right before plotting
        //a node. It's useful for changing an individual node
        //style properties before plotting it.
        //The data properties prefixed with a dollar
        //sign will override the global node style properties.
        onBeforePlotNode: function(node){
            //add some color to the nodes in the path between the
            //root node and the selected node.
            if (node.selected) {
                node.data.$color = "#d8dac7";
            }
            else {
                delete node.data.$color;
                //if the node belongs to the last plotted level
                if(!node.anySubnode("exist")) {
                    //count children number
                    var count = 0;
                    node.eachSubnode(function(n) { count++; });
                    //assign a node color based on
                    //how many children it has
                    //node.data.$color = ['#aaa', '#baa', '#caa', '#daa', '#eaa', '#faa'][count];                    
                }
            }
        },
        
        //This method is called right before plotting
        //an edge. It's useful for changing an individual edge
        //style properties before plotting it.
        //Edge data proprties prefixed with a dollar sign will
        //override the Edge global style properties.
        onBeforePlotLine: function(adj){
            if (adj.nodeFrom.selected && adj.nodeTo.selected) {
                adj.data.$color = "#eed";
                adj.data.$lineWidth = 3;
            }
            else {
                delete adj.data.$color;
                delete adj.data.$lineWidth;
            }
        }
    });
    //load json data
    st.loadJSON(json);
    //compute node positions and layout
    st.compute();
    //optional: make a translation of the tree
    st.geom.translate(new $jit.Complex(0, 0), "current");
    //emulate a click on the root node.
    st.onClick(st.root);
    //end
    //Add event handlers to switch spacetree orientation.
    var top = $jit.id('r-top'), 
        left = $jit.id('r-left'), 
        bottom = $jit.id('r-bottom'), 
        right = $jit.id('r-right'),
        normal = $jit.id('s-normal');
        
    
    function changeHandler() {
        if(this.checked) {
            top.disabled = left.disabled = bottom.disabled = right.disabled = true;
            st.switchPosition(this.value, "animate", {
                onComplete: function(){
                    top.disabled = left.disabled = bottom.disabled = right.disabled = false;
                }
            });
        }
    };
    
    left.onchange = bottom.onchange = right.onchange = top.onchange = changeHandler;
    //end

}