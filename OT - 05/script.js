new Vue({
  el: "#app",
  data: {
    titulo: "Vue JS",

    // Criei a propriedade que faltava para o botão Limpar.
    // Usei o formato de objeto para as classes.
    btnClassLimpar: {
      "btn-danger": true, // Aplica a classe 'btn-danger'
      "btn-sm": false, // NÃO aplica a classe 'btn-sm'
    },

    // Movi esta propriedade para dentro de 'data'
    btnClassEnviar: ["btn-primary", { "btn-lg": true }],

    // Movi esta propriedade para dentro de 'data'
    btnStyleLimpar: "margin: 5px; font-size: 50px",

    // Movi esta propriedade para dentro de 'data'
    btnStyleEnviar: [
      { "font-size": "30px" },
      { "text-transform": "lowercase" },
    ],
  },
});
