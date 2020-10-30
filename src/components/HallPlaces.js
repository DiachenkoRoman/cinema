import HallScheme from "../store/HallScheme";
import Bucket from "./Bucket";

class HallPlaces {
    scheme = HallScheme;

    render () {
        const MainHall = document.createElement("div");
        MainHall.classList.add("main__hall");

        const Cart = new Bucket();
        Cart.render();

        this.scheme.seats.map(sector => {
            const hallSector = document.createElement("div");
            hallSector.classList.add("main__hall_sector");
            hallSector.id = sector.section;

            const sectorTitle = document.createElement("h3");
            sectorTitle.textContent= `Sec: ${sector.section}`;

            hallSector.append(sectorTitle);

            for (let i = 0; i < sector.rows; i++) {
                const row = document.createElement("div");

                for (let k = 0; k < sector.places; k++) {
                    const place = document.createElement("button");
                    place.textContent = `${k+1}`;
                    row.append(place);

                    //Зробити одним класом з Ticket одразу і не використовувати Object.assign?
                    const placeObj = {
                        section: sector.section,
                        row: `${i+1}`,
                        seat: `${k+1}`,
                        reserved: false
                    }

                    place.addEventListener("click", function () {
                        //ВИнести Ticket в окремий компонент?

                        class Ticket {
                            constructor(place) {
                                if (place.section === "A" || place.section === "B" || place.section === "C" || place.section === "D") {
                                    if (place.row == 1 || place.row == 2) {
                                        this.kind = "economy"
                                        this.price = 85
                                    } else {
                                        this.kind = "regular"
                                        this.price = 100
                                    }
                                } else {
                                    if (place.row == 5 || place.row == 6) {
                                        this.kind = "premium"
                                        this.price = 115
                                    } else {
                                        this.kind = "regular"
                                        this.price = 100
                                    }
                                }
                            }
                        }

                        const ReadyTicket = new Ticket(placeObj);
                        Object.assign(ReadyTicket, placeObj);

                        Cart.addTicket(ReadyTicket);

                    })

                    HallScheme.seatsList.push(placeObj)
                }
                hallSector.append(row);
            }
            MainHall.append(hallSector);
        });

        return MainHall
    }
}

export default HallPlaces
