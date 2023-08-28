
import { Link } from "react-router-dom"
import './ContaInfo.css'

const ContaInfo = () => {
  return (
    <>
        <section>
            <h1>Informações da conta</h1>
            <Link to='/conta/1'>
                Visualizar Saldo
            </Link>
        </section>
    </>
  )
}

export default ContaInfo