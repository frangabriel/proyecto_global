import '../../App.css'
import { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Identificacion } from './Identificacion';
import { Hallazgos } from './Hallazgos';
import { Diagnostico } from './Diagnostico';
import { Traslado } from './Traslado';
import { BtnExcel } from '../comunes/BtnExcel';
import { ComponenteProcedimiento } from './ComponenteProcedimiento';
import { EstadoGlobalProvider } from '../context/EstadoGlobalContext';
import { Tabs, Tab} from 'react-bootstrap';


function App() {

  return (
    <EstadoGlobalProvider>
      <section className='container_principal'>
        <h5>CREACION DE HISTORIA CLINICA</h5>
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
                    <Hallazgos/>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>DIAGNOSTICO</Accordion.Header>
                  <Accordion.Body>
                    <Diagnostico/>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>MEDIO DE SOLICITUD DEL TRASLADO</Accordion.Header>
                  <Accordion.Body>
                    <Traslado/>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>RESPONSABLE DE LA ATENCION</Accordion.Header>
                  <Accordion.Body>
                    ya casi
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Tab>
            <Tab eventKey="procedimiento" title="Procedimiento">
              <ComponenteProcedimiento/>
            </Tab>
          </Tabs>
          <BtnExcel />
        </div>
      </section>
    </EstadoGlobalProvider>
  )
}

export default App
