// Função para salvar o email na base de dados Airtable
const saveToAirtable = async email => {
  // Chave API da Airtable
  const API_KEY = "patdAlCG05QalWvef.cb6c8e56db0ced6eef00dfbb4bef8584f47580c406329f09ab5285bad997189a";
  // ID da base de dados na Airtable
  const BASE_ID = "appKsJIDtvJAcc8Pg";
  // Nome da tabela na base de dados da Airtable
  const TABLE_NAME = "newsletter";

  try {
    // Faz a requisição POST à API da Airtable
    const response = await fetch(
      `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fields: {
            email: email
          }
        })
      }
    );

    // Converte a resposta da API para JSON
    const data = await response.json();
    // Exibe a mensagem de sucesso no console
    console.log("Success:", data);
    // Exibe o toast de sucesso
    $("#toast-success").toast("show");
    // Oculta o toast depois de 5 segundos
    setTimeout(function() {
      $("#toast-success").toast("hide");
    }, 5000);
  } catch (error) {
    // Exibe a mensagem de erro no console
    console.error("Error:", error);
    // Exibe o toast de falha
    $("#toast-fail").toast("show");
    // Oculta o toast depois de 5 segundos
    setTimeout(function() {
      $("#toast-fail").toast("hide");
    }, 5000);
  }
};
