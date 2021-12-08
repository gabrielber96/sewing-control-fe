export class Init {
  load() {
    if (
      localStorage.getItem("todos") === null ||
      localStorage.getItem("todos") == undefined
    ) {
      let todos = [
        {
          title: "Ahorro Wow",
          requerimiento:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          tip_pres: "Ahorros",
          entidad: "BCP",
          tasa: "0.14",
          des_cue: "lorem",
          url: "https://www.youtube.com/",
        },
        {
          title: "Cuenta millonaria",
          requerimiento:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          tip_pres: "Ahorros",
          entidad: "BBVA",
          tasa: "0.52",
          des_cue: "lorem",
          url: "https://twitter.com/",
        },
        {
          title: "Cuenta full ahorro",
          requerimiento:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          tip_pres: "Personal",
          entidad: "Interbank",
          tasa: "2.55",
          des_cue: "lorem",
          url: "twitch.tv",
        },
      ];

      localStorage.setItem("todos", JSON.stringify(todos));
      return;
    } else {
    }
  }
}
