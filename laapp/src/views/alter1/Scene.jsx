import React from "react";
import ReactDOM from "react-dom";
import Matter from "matter-js";

class Scene extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var Engine = Matter.Engine,
            Render = Matter.Render,
            World = Matter.World,
            Bodies = Matter.Bodies,
            Body = Matter.Body,
            Runner = Matter.Runner,
            Composites = Matter.Composites,
            Constraint = Matter.Constraint,
            Mouse = Matter.Mouse,
            MouseConstraint = Matter.MouseConstraint;

        // create engine
        var engine = Engine.create();
        var world = engine.world;

        // create renderer
        var render = Render.create({
            element: this.refs.scene,
            engine: engine,
            options: {
                width: 475,
                height: 600,
                background: "transparent",
                wireframes: false
            }
        });

        Render.run(render);
        
        // create runner
        var runner = Runner.create();
        Runner.run(runner, engine);

        // add bodies
        var group = Body.nextGroup(true);
                
        var bridge = Composites.stack(160, 290, 13, 1, 0, 0, function (x, y) {
            return Bodies.rectangle(x - 20, y, 53, 20, {
                collisionFilter: { group: group },
                chamfer: 5,
                density: 0.005,
                frictionAir: 0.05,
                render: {
                    fillStyle: 'white'
                }
            });
        });

        Composites.chain(bridge, 0.3, 0, -0.3, 0, {
            stiffness: 1,
            length: 0,
            render: {
                visible: false
            }
        });

        function createImage($string, width, height) {

            let drawing = document.createElement("canvas");

            drawing.width = width;
            drawing.height = height;

            let ctx = drawing.getContext("2d");

            ctx.fillStyle = "#FF004D";
            ctx.fillRect(0, 0, width, height);
            ctx.fillStyle = "#fff";
            ctx.font = "24pt sans-serif";
            ctx.textAlign = "center";
            ctx.fillText($string, width / 2, height / 2 + 10);
            //ctx.strokeText("Canvas Rocks!", 5, 130);

            return drawing.toDataURL("image/png");
        }

        const areas = [
            { delay: 10, width: 300, height: 100, x: 400, name: "Patient Support" },
            { delay: 2000, width: 300, height: 100, x: 400, name: "Next Best Action" },
            { delay: 4000, width: 340, height: 100, x: 400, name: "Payer & Formulary" },
            { delay: 4500, width: 340, height: 100, x: 400, name: "Activity & Sampling" },
            { delay: 6000, width: 350, height: 100, x: 390, name: "Sales & Performance" },
            { delay: 7500, width: 600, height: 100, x: 380, name: "Omni-Channel & Speaker Programs" },
            { delay: 9000, width: 650, height: 100, x: 380, name: "Predictive & Prescriptive ML Models" },
        ];

        areas.forEach((area) => {
            setTimeout(() => {
                World.add(world, [
                        Bodies.rectangle(area.x, -300, area.width, area.height, {
                            render: {
                                sprite: {
                                    texture: createImage(area.name, area.width, area.height),
                                    xScale: 1,
                                    yScale: 1
                                }
                            }
                        })
                    ]);
                }, area.delay);
        });
        

        World.add(world, [
            bridge,
            Constraint.create({
                pointA: { x: 140, y: 600 },
                bodyB: bridge.bodies[0],
                pointB: { x: -25, y: 0 },
                length: 2,
                stiffness: 0.9
            }),
            Constraint.create({
                pointA: { x: 660, y: 600 },
                bodyB: bridge.bodies[bridge.bodies.length - 1],
                pointB: { x: 25, y: 0 },
                length: 2,
                stiffness: 0.9
            })
        ]);

        // add mouse control
        // var mouse = Mouse.create(render.canvas),
        //     mouseConstraint = MouseConstraint.create(engine, {
        //         mouse: mouse,
        //         constraint: {
        //             stiffness: 0.1,
        //             render: {
        //                 visible: false
        //             }
        //         }
        //     });

        // World.add(world, mouseConstraint);

        // keep the mouse in sync with rendering
        // render.mouse = mouse;

        // fit the render viewport to the scene
        Render.lookAt(render, {
            min: { x: 0, y: 0 },
            max: { x: 800, y: 600 }
        });
    }

    render() {
        return <div ref="scene" />;
    }
}
export default Scene;