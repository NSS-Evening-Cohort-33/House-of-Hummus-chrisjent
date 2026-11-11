# Events and State Self-Assessment

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Setup

1. Make sure you are in your `workspace` directory
1. `git clone {github repo SSH string}`
1. `cd` into the directory it creates
1. `code .` to open the project code
1. Use the `serve` command to start the web server
1. Open the URL provided in Chrome

## Requirements

### Initial Render

1. All 10 base dishes should be displayed as radio input options.
1. All 9 vegetables should be displayed as radio input options.
1. All 6 side dishes should be displayed as radio input options.

1. All previously purchases meals should be displayed below the meal options. Each purchase should display the primary key and the total cost of the purcahsed meal.

### State Management

1. When the user selects an item in any of the three columns, the choice should be stored as transient state.

1. When a user makes a choice for all three kinds of food, and then clicks the "Purchase Combo" button, a new sales object should be...
   1. Stored as permanent state in your local API.
   1. Represented as HTML below the **Monthly Sales** header in the following format **_exactly_**. Your output will not have zeroes, but the actual amount.

      ```html
      Receipt #1 = $00.00
      ```

   1. The user's choices should be cleared from transient state once the purchase is made.

## Design

Given the description and animation above...

1. Create an ERD for this application before you begin.

1. Make a list of what modules need to be created to make your application as modular as possible. Create a **Dependency Graph** for the project to be reviewed once you are complete with the assessment.

1. Create a **Sequence Diagram** that visualizes what your algorithm is for this project. We'll give you a minimal starting point.

```drawio
<mxfile>
  <diagram id="ko0Iak6YuFuvhf7ok8cR" name="Page-1">
    <mxGraphModel dx="2297" dy="1960" grid="1" gridSize="10" guides="1" tooltips="0" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0">
      <root>
        <mxCell id="21sF3TPpEGOwn8YBXsh7-0" />
        <mxCell id="21sF3TPpEGOwn8YBXsh7-1" parent="21sF3TPpEGOwn8YBXsh7-0" />
        <UserObject label="" mermaidData="{&#xa;  &quot;data&quot;: &quot;sequenceDiagram\n    participant Main\n    Main-&gt;&gt;Vegetables: Generate vegetable options\n    Vegetables--&gt;&gt;Main: Here are some radio buttons\n    participant Vegetables\n    participant TransientState\n    TransientState-&gt;&gt;API: Save this dinner order\n    API--&gt;&gt;TransientState: Order saved\n    participant API&quot;,&#xa;  &quot;config&quot;: null&#xa;}" id="2c5CgBrXnft16BwyUL6v-0">
          <mxCell connectable="0" parent="21sF3TPpEGOwn8YBXsh7-1" style="group;transparentBounds=1;editIcon=1;lockedGroup=0;groupPadding=10;" vertex="1">
            <mxGeometry as="geometry" />
          </mxCell>
        </UserObject>
        <UserObject label="FoodTruck" mermaidId="n:Main" mermaidBaseStyle="html=1;shape=umlLifeline;perimeter=lifelinePerimeter;whiteSpace=wrap;container=1;dropTarget=0;collapsible=0;recursiveResize=0;outlineConnect=0;portConstraint=eastwest;newEdgeStyle={&quot;edgeStyle&quot;:&quot;sequenceEdgeStyle&quot;,&quot;libavoidRouting&quot;:0,&quot;curved&quot;:0,&quot;rounded&quot;:0};lifelineDashed=0;strokeWidth=2;rounded=1;absoluteArcSize=1;arcSize=6;lifelineColor=light-dark(#9370DB,#cccccc);size=65;lifelineMirror=1;fillColor=light-dark(#ECECFF,#1f2020);strokeColor=light-dark(#9370DB,#cccccc);fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;fontSize=16;" mermaidBaseValue="Main" id="21sF3TPpEGOwn8YBXsh7-2">
          <mxCell parent="2c5CgBrXnft16BwyUL6v-0" style="html=1;shape=umlLifeline;perimeter=lifelinePerimeter;whiteSpace=wrap;container=1;dropTarget=0;collapsible=0;recursiveResize=0;outlineConnect=0;portConstraint=eastwest;newEdgeStyle={&quot;edgeStyle&quot;:&quot;sequenceEdgeStyle&quot;,&quot;libavoidRouting&quot;:0,&quot;curved&quot;:0,&quot;rounded&quot;:0};lifelineDashed=0;strokeWidth=2;rounded=1;absoluteArcSize=1;arcSize=6;lifelineColor=light-dark(#9370DB,#cccccc);size=65;lifelineMirror=1;fillColor=light-dark(#ECECFF,#1f2020);strokeColor=light-dark(#9370DB,#cccccc);fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;fontSize=16;" vertex="1">
            <mxGeometry height="700" width="150" x="-390" as="geometry" />
          </mxCell>
        </UserObject>
        <UserObject label="Vegetables" mermaidId="n:Vegetables" mermaidBaseStyle="html=1;shape=umlLifeline;perimeter=lifelinePerimeter;whiteSpace=wrap;container=1;dropTarget=0;collapsible=0;recursiveResize=0;outlineConnect=0;portConstraint=eastwest;newEdgeStyle={&quot;edgeStyle&quot;:&quot;sequenceEdgeStyle&quot;,&quot;libavoidRouting&quot;:0,&quot;curved&quot;:0,&quot;rounded&quot;:0};lifelineDashed=0;strokeWidth=2;rounded=1;absoluteArcSize=1;arcSize=6;lifelineColor=light-dark(#9370DB,#cccccc);size=65;lifelineMirror=1;fillColor=light-dark(#ECECFF,#1f2020);strokeColor=light-dark(#9370DB,#cccccc);fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;fontSize=16;" mermaidBaseValue="Vegetables" id="21sF3TPpEGOwn8YBXsh7-3">
          <mxCell parent="2c5CgBrXnft16BwyUL6v-0" style="html=1;shape=umlLifeline;perimeter=lifelinePerimeter;whiteSpace=wrap;container=1;dropTarget=0;collapsible=0;recursiveResize=0;outlineConnect=0;portConstraint=eastwest;newEdgeStyle={&quot;edgeStyle&quot;:&quot;sequenceEdgeStyle&quot;,&quot;libavoidRouting&quot;:0,&quot;curved&quot;:0,&quot;rounded&quot;:0};lifelineDashed=0;strokeWidth=2;rounded=1;absoluteArcSize=1;arcSize=6;lifelineColor=light-dark(#9370DB,#cccccc);size=65;lifelineMirror=1;fillColor=light-dark(#ECECFF,#1f2020);strokeColor=light-dark(#9370DB,#cccccc);fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;fontSize=16;" vertex="1">
            <mxGeometry height="700" width="150" x="-110" as="geometry" />
          </mxCell>
        </UserObject>
        <UserObject label="TransientState" mermaidId="n:TransientState" mermaidBaseStyle="html=1;shape=umlLifeline;perimeter=lifelinePerimeter;whiteSpace=wrap;container=1;dropTarget=0;collapsible=0;recursiveResize=0;outlineConnect=0;portConstraint=eastwest;newEdgeStyle={&quot;edgeStyle&quot;:&quot;sequenceEdgeStyle&quot;,&quot;libavoidRouting&quot;:0,&quot;curved&quot;:0,&quot;rounded&quot;:0};lifelineDashed=0;strokeWidth=2;rounded=1;absoluteArcSize=1;arcSize=6;lifelineColor=light-dark(#9370DB,#cccccc);size=65;lifelineMirror=1;fillColor=light-dark(#ECECFF,#1f2020);strokeColor=light-dark(#9370DB,#cccccc);fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;fontSize=16;" mermaidBaseValue="TransientState" id="21sF3TPpEGOwn8YBXsh7-4">
          <mxCell parent="2c5CgBrXnft16BwyUL6v-0" style="html=1;shape=umlLifeline;perimeter=lifelinePerimeter;whiteSpace=wrap;container=1;dropTarget=0;collapsible=0;recursiveResize=0;outlineConnect=0;portConstraint=eastwest;newEdgeStyle={&quot;edgeStyle&quot;:&quot;sequenceEdgeStyle&quot;,&quot;libavoidRouting&quot;:0,&quot;curved&quot;:0,&quot;rounded&quot;:0};lifelineDashed=0;strokeWidth=2;rounded=1;absoluteArcSize=1;arcSize=6;lifelineColor=light-dark(#9370DB,#cccccc);size=65;lifelineMirror=1;fillColor=light-dark(#ECECFF,#1f2020);strokeColor=light-dark(#9370DB,#cccccc);fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;fontSize=16;" vertex="1">
            <mxGeometry height="690" width="150" x="465" as="geometry" />
          </mxCell>
        </UserObject>
        <UserObject label="API" mermaidId="n:API" mermaidBaseStyle="html=1;shape=umlLifeline;perimeter=lifelinePerimeter;whiteSpace=wrap;container=1;dropTarget=0;collapsible=0;recursiveResize=0;outlineConnect=0;portConstraint=eastwest;newEdgeStyle={&quot;edgeStyle&quot;:&quot;sequenceEdgeStyle&quot;,&quot;libavoidRouting&quot;:0,&quot;curved&quot;:0,&quot;rounded&quot;:0};lifelineDashed=0;strokeWidth=2;rounded=1;absoluteArcSize=1;arcSize=6;lifelineColor=light-dark(#9370DB,#cccccc);size=65;lifelineMirror=1;fillColor=light-dark(#ECECFF,#1f2020);strokeColor=light-dark(#9370DB,#cccccc);fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;fontSize=16;" mermaidBaseValue="API" id="21sF3TPpEGOwn8YBXsh7-5">
          <mxCell parent="2c5CgBrXnft16BwyUL6v-0" style="html=1;shape=umlLifeline;perimeter=lifelinePerimeter;whiteSpace=wrap;container=1;dropTarget=0;collapsible=0;recursiveResize=0;outlineConnect=0;portConstraint=eastwest;newEdgeStyle={&quot;edgeStyle&quot;:&quot;sequenceEdgeStyle&quot;,&quot;libavoidRouting&quot;:0,&quot;curved&quot;:0,&quot;rounded&quot;:0};lifelineDashed=0;strokeWidth=2;rounded=1;absoluteArcSize=1;arcSize=6;lifelineColor=light-dark(#9370DB,#cccccc);size=65;lifelineMirror=1;fillColor=light-dark(#ECECFF,#1f2020);strokeColor=light-dark(#9370DB,#cccccc);fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;fontSize=16;" vertex="1">
            <mxGeometry height="680" width="150" x="673" y="10" as="geometry" />
          </mxCell>
        </UserObject>
        <UserObject label="request vegetable options" mermaidId="e:Main-&gt;Vegetables#0" mermaidBaseStyle="endArrow=block;endSize=9;verticalAlign=bottom;spacingBottom=2;edgeStyle=sequenceEdgeStyle;libavoidRouting=0;curved=0;rounded=0;fontSize=16;labelBackgroundColor=none;strokeWidth=1.5;strokeColor=light-dark(#333333,#cccccc);fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;" mermaidBaseValue="Generate vegetable options" id="21sF3TPpEGOwn8YBXsh7-6">
          <mxCell edge="1" parent="2c5CgBrXnft16BwyUL6v-0" source="21sF3TPpEGOwn8YBXsh7-2" style="endArrow=block;endSize=9;verticalAlign=bottom;spacingBottom=2;edgeStyle=sequenceEdgeStyle;libavoidRouting=0;curved=0;rounded=0;fontSize=16;labelBackgroundColor=none;strokeWidth=1.5;strokeColor=light-dark(#333333,#cccccc);fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;" target="21sF3TPpEGOwn8YBXsh7-3">
            <mxGeometry relative="1" as="geometry">
              <Array as="points">
                <mxPoint x="-175.50000000000023" y="100" />
              </Array>
              <mxPoint x="85" y="100" as="sourcePoint" />
              <mxPoint x="340" y="100" as="targetPoint" />
            </mxGeometry>
          </mxCell>
        </UserObject>
        <UserObject label="return vegetable html" mermaidId="e:Vegetables-&gt;Main#0" mermaidBaseStyle="dashed=1;fixDash=1;dashPattern=3 3;endArrow=block;endSize=9;verticalAlign=bottom;spacingBottom=2;edgeStyle=sequenceEdgeStyle;libavoidRouting=0;curved=0;rounded=0;fontSize=16;labelBackgroundColor=none;strokeWidth=1.5;strokeColor=light-dark(#333333,#cccccc);fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;" mermaidBaseValue="Here are some radio buttons" id="21sF3TPpEGOwn8YBXsh7-7">
          <mxCell edge="1" parent="2c5CgBrXnft16BwyUL6v-0" source="21sF3TPpEGOwn8YBXsh7-3" style="dashed=1;fixDash=1;dashPattern=3 3;endArrow=blockThin;endSize=9;verticalAlign=bottom;spacingBottom=2;edgeStyle=sequenceEdgeStyle;libavoidRouting=0;curved=0;rounded=0;fontSize=16;labelBackgroundColor=none;strokeWidth=1.5;strokeColor=light-dark(#333333,#cccccc);fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;endFill=1;" target="21sF3TPpEGOwn8YBXsh7-2">
            <mxGeometry relative="1" as="geometry">
              <Array as="points">
                <mxPoint x="-175.50000000000023" y="130.99999999999977" />
              </Array>
              <mxPoint x="340" y="131" as="sourcePoint" />
              <mxPoint x="85" y="131" as="targetPoint" />
            </mxGeometry>
          </mxCell>
        </UserObject>
        <UserObject label="Save this dinner order" mermaidId="e:TransientState-&gt;API#0" mermaidBaseStyle="endArrow=block;endSize=9;verticalAlign=bottom;spacingBottom=2;edgeStyle=sequenceEdgeStyle;libavoidRouting=0;curved=0;rounded=0;fontSize=16;labelBackgroundColor=none;strokeWidth=1.5;strokeColor=light-dark(#333333,#cccccc);fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;" mermaidBaseValue="Save this dinner order" id="21sF3TPpEGOwn8YBXsh7-8">
          <mxCell edge="1" parent="2c5CgBrXnft16BwyUL6v-0" source="21sF3TPpEGOwn8YBXsh7-4" style="endArrow=block;endSize=9;verticalAlign=bottom;spacingBottom=2;edgeStyle=sequenceEdgeStyle;libavoidRouting=0;curved=0;rounded=0;fontSize=16;labelBackgroundColor=none;strokeWidth=1.5;strokeColor=light-dark(#333333,#cccccc);fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;" target="21sF3TPpEGOwn8YBXsh7-5">
            <mxGeometry relative="1" as="geometry">
              <Array as="points">
                <mxPoint x="644" y="213" />
              </Array>
              <mxPoint x="540" y="213" as="sourcePoint" />
              <mxPoint x="748" y="213" as="targetPoint" />
            </mxGeometry>
          </mxCell>
        </UserObject>
        <UserObject label="Order saved" mermaidId="e:API-&gt;TransientState#0" mermaidBaseStyle="dashed=1;fixDash=1;dashPattern=3 3;endArrow=block;endSize=9;verticalAlign=bottom;spacingBottom=2;edgeStyle=sequenceEdgeStyle;libavoidRouting=0;curved=0;rounded=0;fontSize=16;labelBackgroundColor=none;strokeWidth=1.5;strokeColor=light-dark(#333333,#cccccc);fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;" mermaidBaseValue="Order saved" id="21sF3TPpEGOwn8YBXsh7-9">
          <mxCell edge="1" parent="2c5CgBrXnft16BwyUL6v-0" source="21sF3TPpEGOwn8YBXsh7-5" style="dashed=1;fixDash=1;dashPattern=3 3;endArrow=block;endSize=9;verticalAlign=bottom;spacingBottom=2;edgeStyle=sequenceEdgeStyle;libavoidRouting=0;curved=0;rounded=0;fontSize=16;labelBackgroundColor=none;strokeWidth=1.5;strokeColor=light-dark(#333333,#cccccc);fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;" target="21sF3TPpEGOwn8YBXsh7-4">
            <mxGeometry relative="1" as="geometry">
              <Array as="points">
                <mxPoint x="644" y="259" />
              </Array>
              <mxPoint x="748" y="259" as="sourcePoint" />
              <mxPoint x="540" y="259" as="targetPoint" />
            </mxGeometry>
          </mxCell>
        </UserObject>
        <UserObject label="Main" mermaidId="n:Vegetables" mermaidBaseStyle="html=1;shape=umlLifeline;perimeter=lifelinePerimeter;whiteSpace=wrap;container=1;dropTarget=0;collapsible=0;recursiveResize=0;outlineConnect=0;portConstraint=eastwest;newEdgeStyle={&quot;edgeStyle&quot;:&quot;sequenceEdgeStyle&quot;,&quot;libavoidRouting&quot;:0,&quot;curved&quot;:0,&quot;rounded&quot;:0};lifelineDashed=0;strokeWidth=2;rounded=1;absoluteArcSize=1;arcSize=6;lifelineColor=light-dark(#9370DB,#cccccc);size=65;lifelineMirror=1;fillColor=light-dark(#ECECFF,#1f2020);strokeColor=light-dark(#9370DB,#cccccc);fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;fontSize=16;" mermaidBaseValue="Vegetables" id="Og8PDyAWCK4CIDVpYTX2-0">
          <mxCell parent="2c5CgBrXnft16BwyUL6v-0" style="html=1;shape=umlLifeline;perimeter=lifelinePerimeter;whiteSpace=wrap;container=1;dropTarget=0;collapsible=0;recursiveResize=0;outlineConnect=0;portConstraint=eastwest;newEdgeStyle={&quot;edgeStyle&quot;:&quot;sequenceEdgeStyle&quot;,&quot;libavoidRouting&quot;:0,&quot;curved&quot;:0,&quot;rounded&quot;:0};lifelineDashed=0;strokeWidth=2;rounded=1;absoluteArcSize=1;arcSize=6;lifelineColor=light-dark(#9370DB,#cccccc);size=65;lifelineMirror=1;fillColor=light-dark(#ECECFF,#1f2020);strokeColor=light-dark(#9370DB,#cccccc);fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;fontSize=16;" vertex="1">
            <mxGeometry height="690" width="150" x="-750" y="5" as="geometry" />
          </mxCell>
        </UserObject>
        <UserObject label="Entrees" mermaidId="n:Vegetables" mermaidBaseStyle="html=1;shape=umlLifeline;perimeter=lifelinePerimeter;whiteSpace=wrap;container=1;dropTarget=0;collapsible=0;recursiveResize=0;outlineConnect=0;portConstraint=eastwest;newEdgeStyle={&quot;edgeStyle&quot;:&quot;sequenceEdgeStyle&quot;,&quot;libavoidRouting&quot;:0,&quot;curved&quot;:0,&quot;rounded&quot;:0};lifelineDashed=0;strokeWidth=2;rounded=1;absoluteArcSize=1;arcSize=6;lifelineColor=light-dark(#9370DB,#cccccc);size=65;lifelineMirror=1;fillColor=light-dark(#ECECFF,#1f2020);strokeColor=light-dark(#9370DB,#cccccc);fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;fontSize=16;" mermaidBaseValue="Vegetables" id="Og8PDyAWCK4CIDVpYTX2-1">
          <mxCell parent="2c5CgBrXnft16BwyUL6v-0" style="html=1;shape=umlLifeline;perimeter=lifelinePerimeter;whiteSpace=wrap;container=1;dropTarget=0;collapsible=0;recursiveResize=0;outlineConnect=0;portConstraint=eastwest;newEdgeStyle={&quot;edgeStyle&quot;:&quot;sequenceEdgeStyle&quot;,&quot;libavoidRouting&quot;:0,&quot;curved&quot;:0,&quot;rounded&quot;:0};lifelineDashed=0;strokeWidth=2;rounded=1;absoluteArcSize=1;arcSize=6;lifelineColor=light-dark(#9370DB,#cccccc);size=65;lifelineMirror=1;fillColor=light-dark(#ECECFF,#1f2020);strokeColor=light-dark(#9370DB,#cccccc);fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;fontSize=16;" vertex="1">
            <mxGeometry height="700" width="150" x="60" as="geometry" />
          </mxCell>
        </UserObject>
        <UserObject label="request entree options" mermaidId="e:Main-&gt;Vegetables#0" mermaidBaseStyle="endArrow=block;endSize=9;verticalAlign=bottom;spacingBottom=2;edgeStyle=sequenceEdgeStyle;libavoidRouting=0;curved=0;rounded=0;fontSize=16;labelBackgroundColor=none;strokeWidth=1.5;strokeColor=light-dark(#333333,#cccccc);fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;" mermaidBaseValue="Generate vegetable options" id="Og8PDyAWCK4CIDVpYTX2-6">
          <mxCell edge="1" parent="2c5CgBrXnft16BwyUL6v-0" style="endArrow=block;endSize=9;verticalAlign=bottom;spacingBottom=2;edgeStyle=sequenceEdgeStyle;libavoidRouting=0;curved=0;rounded=0;fontSize=16;labelBackgroundColor=none;strokeWidth=1.5;strokeColor=light-dark(#333333,#cccccc);fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;" target="Og8PDyAWCK4CIDVpYTX2-1">
            <mxGeometry relative="1" x="-0.3805" as="geometry">
              <Array as="points" />
              <mxPoint x="-318" y="176.5" as="sourcePoint" />
              <mxPoint x="-39" y="176.5" as="targetPoint" />
            </mxGeometry>
          </mxCell>
        </UserObject>
        <UserObject label="return entree html" mermaidId="e:Main-&gt;Vegetables#0" mermaidBaseStyle="endArrow=block;endSize=9;verticalAlign=bottom;spacingBottom=2;edgeStyle=sequenceEdgeStyle;libavoidRouting=0;curved=0;rounded=0;fontSize=16;labelBackgroundColor=none;strokeWidth=1.5;strokeColor=light-dark(#333333,#cccccc);fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;" mermaidBaseValue="Generate vegetable options" id="Og8PDyAWCK4CIDVpYTX2-11">
          <mxCell edge="1" parent="2c5CgBrXnft16BwyUL6v-0" source="Og8PDyAWCK4CIDVpYTX2-1" style="endArrow=block;endSize=9;verticalAlign=bottom;spacingBottom=2;edgeStyle=sequenceEdgeStyle;libavoidRouting=0;curved=0;rounded=0;fontSize=16;labelBackgroundColor=none;strokeWidth=1.5;strokeColor=light-dark(#333333,#cccccc);fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;dashed=1;" target="21sF3TPpEGOwn8YBXsh7-2">
            <mxGeometry relative="1" x="0.3987" as="geometry">
              <mxPoint as="offset" />
              <Array as="points">
                <mxPoint x="-90.5" y="205.50000000000045" />
              </Array>
              <mxPoint x="-295" y="205.5" as="sourcePoint" />
              <mxPoint x="-395" y="205.5" as="targetPoint" />
            </mxGeometry>
          </mxCell>
        </UserObject>
        <UserObject label="Sides" mermaidId="n:Vegetables" mermaidBaseStyle="html=1;shape=umlLifeline;perimeter=lifelinePerimeter;whiteSpace=wrap;container=1;dropTarget=0;collapsible=0;recursiveResize=0;outlineConnect=0;portConstraint=eastwest;newEdgeStyle={&quot;edgeStyle&quot;:&quot;sequenceEdgeStyle&quot;,&quot;libavoidRouting&quot;:0,&quot;curved&quot;:0,&quot;rounded&quot;:0};lifelineDashed=0;strokeWidth=2;rounded=1;absoluteArcSize=1;arcSize=6;lifelineColor=light-dark(#9370DB,#cccccc);size=65;lifelineMirror=1;fillColor=light-dark(#ECECFF,#1f2020);strokeColor=light-dark(#9370DB,#cccccc);fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;fontSize=16;" mermaidBaseValue="Vegetables" id="Og8PDyAWCK4CIDVpYTX2-12">
          <mxCell parent="2c5CgBrXnft16BwyUL6v-0" style="html=1;shape=umlLifeline;perimeter=lifelinePerimeter;whiteSpace=wrap;container=1;dropTarget=0;collapsible=0;recursiveResize=0;outlineConnect=0;portConstraint=eastwest;newEdgeStyle={&quot;edgeStyle&quot;:&quot;sequenceEdgeStyle&quot;,&quot;libavoidRouting&quot;:0,&quot;curved&quot;:0,&quot;rounded&quot;:0};lifelineDashed=0;strokeWidth=2;rounded=1;absoluteArcSize=1;arcSize=6;lifelineColor=light-dark(#9370DB,#cccccc);size=65;lifelineMirror=1;fillColor=light-dark(#ECECFF,#1f2020);strokeColor=light-dark(#9370DB,#cccccc);fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;fontSize=16;" vertex="1">
            <mxGeometry height="690" width="150" x="230" as="geometry" />
          </mxCell>
        </UserObject>
        <UserObject label="request side options" mermaidId="e:Main-&gt;Vegetables#0" mermaidBaseStyle="endArrow=block;endSize=9;verticalAlign=bottom;spacingBottom=2;edgeStyle=sequenceEdgeStyle;libavoidRouting=0;curved=0;rounded=0;fontSize=16;labelBackgroundColor=none;strokeWidth=1.5;strokeColor=light-dark(#333333,#cccccc);fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;" mermaidBaseValue="Generate vegetable options" id="Og8PDyAWCK4CIDVpYTX2-13">
          <mxCell edge="1" parent="2c5CgBrXnft16BwyUL6v-0" style="endArrow=block;endSize=9;verticalAlign=bottom;spacingBottom=2;edgeStyle=sequenceEdgeStyle;libavoidRouting=0;curved=0;rounded=0;fontSize=16;labelBackgroundColor=none;strokeWidth=1.5;strokeColor=light-dark(#333333,#cccccc);fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;" target="Og8PDyAWCK4CIDVpYTX2-12">
            <mxGeometry relative="1" x="-0.544" as="geometry">
              <Array as="points">
                <mxPoint x="-3" y="252" />
              </Array>
              <mxPoint x="-310" y="252" as="sourcePoint" />
              <mxPoint x="142" y="251.5" as="targetPoint" />
            </mxGeometry>
          </mxCell>
        </UserObject>
        <UserObject label="return side html" mermaidId="e:Main-&gt;Vegetables#0" mermaidBaseStyle="endArrow=block;endSize=9;verticalAlign=bottom;spacingBottom=2;edgeStyle=sequenceEdgeStyle;libavoidRouting=0;curved=0;rounded=0;fontSize=16;labelBackgroundColor=none;strokeWidth=1.5;strokeColor=light-dark(#333333,#cccccc);fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;" mermaidBaseValue="Generate vegetable options" id="Og8PDyAWCK4CIDVpYTX2-14">
          <mxCell edge="1" parent="2c5CgBrXnft16BwyUL6v-0" source="Og8PDyAWCK4CIDVpYTX2-12" style="endArrow=block;endSize=9;verticalAlign=bottom;spacingBottom=2;edgeStyle=sequenceEdgeStyle;libavoidRouting=0;curved=0;rounded=0;fontSize=16;labelBackgroundColor=none;strokeWidth=1.5;strokeColor=light-dark(#333333,#cccccc);fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;dashed=1;">
            <mxGeometry relative="1" x="0.5581" as="geometry">
              <mxPoint as="offset" />
              <Array as="points">
                <mxPoint x="-2.0000000000004547" y="282" />
              </Array>
              <mxPoint x="141" y="282" as="sourcePoint" />
              <mxPoint x="-308" y="282" as="targetPoint" />
            </mxGeometry>
          </mxCell>
        </UserObject>
        <UserObject label="request app HTML" mermaidId="e:Main-&gt;Vegetables#0" mermaidBaseStyle="endArrow=block;endSize=9;verticalAlign=bottom;spacingBottom=2;edgeStyle=sequenceEdgeStyle;libavoidRouting=0;curved=0;rounded=0;fontSize=16;labelBackgroundColor=none;strokeWidth=1.5;strokeColor=light-dark(#333333,#cccccc);fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;" mermaidBaseValue="Generate vegetable options" id="Og8PDyAWCK4CIDVpYTX2-15">
          <mxCell edge="1" parent="2c5CgBrXnft16BwyUL6v-0" source="Og8PDyAWCK4CIDVpYTX2-0" style="endArrow=block;endSize=9;verticalAlign=bottom;spacingBottom=2;edgeStyle=sequenceEdgeStyle;libavoidRouting=0;curved=0;rounded=0;fontSize=16;labelBackgroundColor=none;strokeWidth=1.5;strokeColor=light-dark(#333333,#cccccc);fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;" target="21sF3TPpEGOwn8YBXsh7-2">
            <mxGeometry relative="1" x="0.0035" as="geometry">
              <mxPoint as="offset" />
              <Array as="points">
                <mxPoint x="-427.9999999999998" y="400" />
              </Array>
              <mxPoint x="-540" y="400" as="sourcePoint" />
              <mxPoint x="-261" y="400" as="targetPoint" />
            </mxGeometry>
          </mxCell>
        </UserObject>
        <UserObject label="return app HTML" mermaidId="e:Vegetables-&gt;Main#0" mermaidBaseStyle="dashed=1;fixDash=1;dashPattern=3 3;endArrow=block;endSize=9;verticalAlign=bottom;spacingBottom=2;edgeStyle=sequenceEdgeStyle;libavoidRouting=0;curved=0;rounded=0;fontSize=16;labelBackgroundColor=none;strokeWidth=1.5;strokeColor=light-dark(#333333,#cccccc);fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;" mermaidBaseValue="Here are some radio buttons" id="Og8PDyAWCK4CIDVpYTX2-18">
          <mxCell edge="1" parent="2c5CgBrXnft16BwyUL6v-0" source="21sF3TPpEGOwn8YBXsh7-2" style="dashed=1;fixDash=1;dashPattern=3 3;endArrow=blockThin;endSize=9;verticalAlign=bottom;spacingBottom=2;edgeStyle=sequenceEdgeStyle;libavoidRouting=0;curved=0;rounded=0;fontSize=16;labelBackgroundColor=none;strokeWidth=1.5;strokeColor=light-dark(#333333,#cccccc);fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;endFill=1;" target="Og8PDyAWCK4CIDVpYTX2-0">
            <mxGeometry relative="1" x="0.0251" as="geometry">
              <mxPoint as="offset" />
              <Array as="points">
                <mxPoint x="-452.9999999999998" y="450" />
              </Array>
              <mxPoint x="-311" y="450" as="sourcePoint" />
              <mxPoint x="-590" y="450" as="targetPoint" />
            </mxGeometry>
          </mxCell>
        </UserObject>
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>

```

## Vocabulary and Understanding

> 🧨 Before you click the "Assessment Complete" button on the Learning Platform, add your answers below for each question and make a commit. It is your option to request a face-to-face meeting with a coach for a vocabulary review.

1. Should transient state be represented in a database diagram? Why, or why not?
   > No because it is not data that is actually "saved" anywhere yet. Only once it is saved into the permanent state would it be reflected in the ERD wherever that permanent state is being saved (in this case its in "purchases").
2. In the **FoodTruck** module, you are **await**ing the invocataion of all of the component functions _(e.g. sales, veggie options, etc.)_. Why must you use the `await` keyword there? Explain what happens if you remove it.
   > These functions return promises because they are async functions, so you must use await when invoking them.
3. When the user is making choices by selecting radio buttons, explain how that data is retained so that the **Purchase Combo** button works correctly.
   > Each module (entrees, vegetables, sides) imports a function from the transientState module that sets updates the transient state based on the choice. A handler function in each module checks to see if the change event had an id equal to that element, and if so it invokes the corresponding set function which then updates the transient state accoringly. THEN, inside the transientState module we have a placeOrder function which posts the transient state to the database inside the "purchases" object using a fetch call. Finally, to make all this work the order button module contains an event listener that listens for clicks on elements with the id of #purchase-btn which is our button. If thats clicked, placeOrder() runs.
4. You used the `map()` array method in the self assessment _(at least, you should have since it is a learning objective)_. Explain why that function is helpful as a replacement for a `for..of` loop.
   > Rather than looping through and concatenating the HTML each time we can return an array where we "do something" to each item of the original array. Both would work here.
