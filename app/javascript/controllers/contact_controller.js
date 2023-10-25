import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="contact"
export default class extends Controller {
  static targets = ["nom", "prenom", "email", "telephone", "entreprise", "message", "text", "textPrenom", "textEmail", "textTel", "textEts", "textMessage"];

  handleBlur(event) {
    const inputTarget = event.target;
    const messageTarget = this.findMessageTarget(inputTarget);

    if (inputTarget.value === "") {
      inputTarget.classList.add("is-invalid");
      messageTarget.classList.remove("d-none");
    } else {
      inputTarget.classList.remove("is-invalid");
      messageTarget.classList.add("d-none");
    }
  }

  findMessageTarget(inputTarget) {
    // Méthode pour trouver le message d'erreur associé à l'élément de formulaire
    if (inputTarget.dataset.contactTarget === "nom") {
      return this.textTarget;
    } else if (inputTarget.dataset.contactTarget === "prenom") {
      return this.textPrenomTarget;
    } else if (inputTarget.dataset.contactTarget === "email") {
      return this.textEmailTarget;
    } else if (inputTarget.dataset.contactTarget === "telephone") {
      return this.textTelTarget;
    } else if (inputTarget.dataset.contactTarget === "entreprise") {
      return this.textEtsTarget;
    } else if (inputTarget.dataset.contactTarget === "message") {
      return this.textMessageTarget;
    }

    // Si aucune correspondance n'est trouvée, retourner null ou l'élément de message par défaut
    return this.textTarget;
  }
}

  // blur() {
  //   if (this.nomTarget.value === "") {
  //     this.nomTarget.classList.add("is-invalid");
  //     this.textTarget.classList.remove("d-none");
  //   } else {
  //     this.nomTarget.classList.remove("is-invalid");
  //     this.textTarget.classList.add("d-none");
  //   }

  //   if (this.prenomTarget.value === "") {
  //     this.prenomTarget.classList.add("is-invalid");
  //     this.textPrenomTarget.classList.remove("d-none");
  //   } else {
  //     this.prenomTarget.classList.remove("is-invalid");
  //     this.textPrenomTarget.classList.add("d-none");
  //   }

  //   if (this.emailTarget.value === "") {
  //     this.emailTarget.classList.add("is-invalid");
  //     this.textEmailTarget.classList.remove("d-none");
  //   } else {
  //     this.emailTarget.classList.remove("is-invalid");
  //     this.textEmailTarget.classList.add("d-none");
  //   }

  //   if (this.telephoneTarget.value === "") {
  //     this.telephoneTarget.classList.add("is-invalid");
  //     this.textTelTarget.classList.remove("d-none");
  //   } else {
  //     this.telephoneTarget.classList.remove("is-invalid");
  //     this.textTelTarget.classList.add("d-none");
  //   }

  //   if (this.entrepriseTarget.value === "") {
  //     this.entrepriseTarget.classList.add("is-invalid");
  //     this.textEtsTarget.classList.remove("d-none");
  //   } else {
  //     this.entrepriseTarget.classList.remove("is-invalid");
  //     this.textEtsTarget.classList.add("d-none");
  //   }

  //   if (this.messageTarget.value === "") {
  //     this.messageTarget.classList.add("is-invalid");
  //     this.textMessageTarget.classList.remove("d-none");
  //   } else {
  //     this.messageTarget.classList.remove("is-invalid");
  //     this.textMessageTarget.classList.add("d-none");
  //   }

  // }
