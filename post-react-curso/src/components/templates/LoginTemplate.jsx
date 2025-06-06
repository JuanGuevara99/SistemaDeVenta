import styled from "styled-components";
import {
    Btnsave,
    Footer,
    InputText2,
    Linea,
    Title,
    useAuthStore
} from "../../index";
import { v } from "../../styles/variables";
import { Device } from "../../styles/breakpoints";

export function LoginTemplate() {
    const { loginGoogle } = useAuthStore();

    return (
        <Container>
            <div className="card">
                <ContentLogo>
                    <img src={v.logo} alt="Logo" />
                    <span>Sistema de Venta</span>
                </ContentLogo>

                <Title $paddingBottom="20px">Ingresar</Title>

                <form>
                    <InputText2>
                        <input
                            className="form__field"
                            placeholder="Correo"
                            type="text"
                        />
                    </InputText2>

                    <InputText2>
                        <input
                            className="form__field"
                            placeholder="Contraseña"
                            type="password"
                        />
                    </InputText2>

                    <Btnsave
                        titulo="INGRESAR"
                        bgcolor="#ffa53b"
                        color="255,255,255"
                        width="100%"
                    />
                </form>

                <Linea>
                    <span>0</span>
                </Linea>

                <Btnsave
                    funcion={loginGoogle}
                    titulo="Iniciar sesión con Google"
                    bgcolor="#fff"
                    icono={<v.iconogoogle />}
                />
            </div>

            <Footer />
        </Container>
    );
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 0 10px;
  color: ${({ theme }) => theme.text};

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 400px;
    padding: 30px 20px;
    box-sizing: border-box;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.card || "#fff"};
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);


    @media ${Device.tablet} {
      width: 600px;
    }
  }
`;

const ContentLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 110px;
    height: 110px;
    object-fit: contain;
  }

  span {
    margin-top: 10px;
    font-weight: bold;
    font-size: 13px;
  }
`;
