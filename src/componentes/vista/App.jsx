import '../../App.css'
import {Container, Row, Tabs, Tab} from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { Identificacion } from './Identificacion';

function App() {
  
  return (
    <section className='container_principal'>
      <h3>CREACION DE HISTORIA CLINICA</h3>
      <div className='contenedor_acordeones'>
        <Tabs
        defaultActiveKey="informacion"
        id="uncontrolled-tab-example"
        className="mb-3">
          <Tab eventKey="informacion" title="Informacion">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>IDENTIFICACION</Accordion.Header>
                <Accordion.Body>
                  <Identificacion/>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>HALLAZGOS CLINICOS O DATOS POSITIVOS</Accordion.Header>
                <Accordion.Body>
                  osita sexy
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>DIAGNOSTICO</Accordion.Header>
                <Accordion.Body>
                  osita sexy
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>MEDIO DE SOLICITUD DEL TRASLADO</Accordion.Header>
                <Accordion.Body>
                  osita sexy
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>RESPONSABLE DE LA ATENCION</Accordion.Header>
                <Accordion.Body>
                  osita sexy
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Tab>
          <Tab eventKey="procedimiento" title="Procedimiento">
            este es el perfil
          </Tab>
        </Tabs>
      </div>
    </section>
  )
}

export default App
