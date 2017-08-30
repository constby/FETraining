import React from 'react';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Clearfix } from 'react-bootstrap';
import './app.css';

var Dashboard = React.createClass({
  getInitialState() {
    return {
      counter: 0,
      items: [{text: "Non via nia sex praemissae spectentur contingere respondeam. Has scriptis usu corporis physicae. Existentia lor perspicuum sub mutationum agnoscerem vis advertatur. Multo in entis ad rebus tactu oculi ad. Ii in innatis viderer me hominem at ipsemet. Vitro errem im is anima famam se istas. Mea credendas ero persuasum sanguinem vox. Sequeretur uti aut frequenter vul commendare describere. Ex superare aeternum ob connivet ac earumque co. Physicae fenestra obturabo ii is se."},
              {text: "Etc eas mem ignosci vestiri conatum habenas nunquid. Ut in me attendo aliquid advenit aliquot insanis ex. Atque in volui ad porro. To ea mutentur supponit rationem ad profecta perfecti. Nihili primas quanta minuta tur negare hoc cui. Timeo mirum falsa omnis in et pauci vi is primo. Me at chimaeram se tangantur venientia reliquiae complexus. Illos multa ii libet re acies semel debeo. "},
              {text: "Cerebella ii du attingere alligatus ac suspicari id eminenter. Ac in remotis exsolvi dicamne proxime ad an. Quam ei inge ea isti data soni ex duce. Tollentur co an im tantumque videlicet. Naturae viderer propria co an se is. Repugnemus ei an ob distinguit propositio id facultatem percipimus. Dubitare cur lor experiar extensum. "}
             ]
    }
  },
  render(){
    return (<Grid className="dashboard">
              <Row className="show-grid">
                {this.state.items.map(this.indexItem)}
                <Clearfix visibleSmBlock></Clearfix>
              </Row>
            </Grid>)
  },
  indexItem(item) {
    this.state.counter++;
    var text = "Item " + this.state.counter;
    return (<Col sm={6} md={3} className="bg-info column"><h4>{text}</h4><p>{item.text}</p></Col>)
  }
})

export default Dashboard;
