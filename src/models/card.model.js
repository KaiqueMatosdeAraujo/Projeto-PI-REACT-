const idcliente = parseInt(localStorage.getItem("UserId"));

const card = {
    numeroCartao: "",
	nomeTitular: "",
	validade: "",
	bandeira: 1,
    cliente: `${idcliente}`
}

export default card