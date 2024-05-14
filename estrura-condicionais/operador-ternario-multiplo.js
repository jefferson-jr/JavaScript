let quartosDisponsiveis = 5;
let reservaConfirmada = true;

let statusReserva = (reservaConfirmada && quartosDisponsiveis > 0) ? "Reserva confirmada"
                  :(quartosDisponsiveis > 0) ? "Aguardando confirmacao"
                  :"sem quartos disponiveis";

                  console.log(statusReserva); // saida: "reserva confirmada"