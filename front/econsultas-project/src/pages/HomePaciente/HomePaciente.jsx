import "../HomePaciente/assets/css/HomePaciente.css"
import nutricionista from './assets/img/nutricionista.png'

const HomePaciente = () => {
  return (
    <div className="container-especialidades">
      <div className="saudacao">
        <h5>Olá, Carlos</h5>
        <p>Selecione a especialidade do atendimento que você deseja.</p>
      </div>
      
      <div className="cards-especialidade">

        <div className="card-especialidade" style={{ width: '18rem' }}>
          <div className="card-body-especialidade">
            <h5 className="card-title-especialidade">Fisioterapeuta</h5>
            <p className="card-text-especialidade">Para reabilitação física e melhoria da mobilidade e funcionalidade do corpo.</p>
          </div>
          <div className="card-img-especialidade">
            <img src={nutricionista} className="card-img-center-especialidade" alt="Fisioterapeuta" />
          </div>
          <div className="card-button-especialidade">
            <a href="#" className="button-especialidade">Agendar consulta</a>
          </div>
        </div>

        <div className="card-especialidade" style={{ width: '18rem' }}>
          <div className="card-body-especialidade">
            <h5 className="card-title-especialidade">Nutricionista</h5>
            <p className="card-text-especialidade">Para orientar sobre hábitos e alimentação saudável.</p>
          </div>
          <div className="card-img-especialidade">
            <img src={nutricionista} className="card-img-center-especialidade" alt="Nutricionista" />
          </div>
          <div className="card-button-especialidade">
            <a href="#" className="button-especialidade">Agendar consulta</a>
          </div>
        </div>

        <div className="card-especialidade" style={{ width: '18rem' }}>
          <div className="card-body-especialidade">
            <h5 className="card-title-especialidade">Psiquiatria</h5>
            <p className="card-text-especialidade">Para diagnóstico e tratamento de transtornos mentais.</p>
          </div>
          <div className="card-img-especialidade">
            <img src={nutricionista} className="card-img-center-especialidade" alt="Psiquiatra" />
          </div>
          <div className="card-button-especialidade">
            <a href="#" className="button-especialidade">Agendar consulta</a>
          </div>
        </div>

        <div className="card-especialidade" style={{ width: '18rem' }}>
          <div className="card-body-especialidade">
            <h5 className="card-title-especialidade">Psicologia</h5>
            <p className="card-text-especialidade">Para apoiar o bem-estar mental e emocional, oferecendo terapias e conselhos.</p>
          </div>
          <div className="card-img-especialidade">
            <img src={nutricionista} className="card-img-center-especialidade" alt="Psicologo(a)" />
          </div>
          <div className="card-button-especialidade">
            <a href="#" className="button-especialidade">Agendar consulta</a>
          </div>
        </div>
      </div>
    </div>

  );
}

export default HomePaciente;