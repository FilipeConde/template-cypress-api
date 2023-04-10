#language: pt

Funcionalidade: rota /rota

Contexto: rota /rota
  Dada a rota "/rota"

  Cenário: GET /rota
		Quando realizar uma requisição do tipo "GET"
    Então deve retornar statuscode 200
		E deve corresponder ao schema "get_rota" status 200

	Esquema do Cenário: GET "<complemento>"
		Dado o complemento de rota "<complemento>"
		Quando realizar uma requisição do tipo "GET"
		Então deve retornar statuscode 200

		Exemplos:
			| complemento      |
			| /complemento-1   |
			| /complemento-2   |
			| /complemento-3   |
			| /complemento-4   |
