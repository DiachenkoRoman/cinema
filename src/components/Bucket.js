class Bucket {
    constructor() {
        this.sales = []
        this.cartPrice = 0

    }

    buyAllCart = () =>{
        this.sales.map(ticket => {
            ticket.reserved= true
        })

        document.querySelector(".main__bucket").remove();
        this.sales= [];

        return alert("Enjoy watching!")
    }

    addTicket = (ticket) =>{
        this.sales.push(ticket)
        this.cartPrice += ticket.price
        this.render()
    }

    delFromCart = (ticket) =>{
        this.sales = this.sales.filter(elem => elem !== ticket);
        this.cartPrice = 0;
        this.sales.map(elem => {
            this.cartPrice = this.cartPrice + elem.price
        })

        this.render();
    }

    parseTickets = () =>{
        const prevCont = document.querySelector(".main__bucket")
        prevCont && prevCont.remove()

        const bucket = document.createElement("div");
        bucket.classList.add("main__bucket");

        const cartList = document.createElement("ul");
        cartList.classList.add("main__bucket_list");

        this.sales.map(elem => {
            const cartListItem = document.createElement("li");
            cartListItem.textContent= `Section: ${elem.section}, row: ${elem.row}, seat: ${elem.seat}, class: ${elem.kind}, price:${elem.price}`;

            const delButton = document.createElement("button");
            delButton.textContent= "Del";
            delButton.addEventListener("click", ()=>{this.delFromCart(elem)});
            cartListItem.append(delButton)

            cartList.append(cartListItem)
        });

        const buyCart = document.createElement("button");
        buyCart.textContent= `Buy: (${this.cartPrice})`;
        buyCart.addEventListener("click", this.buyAllCart);

        bucket.append(cartList, buyCart);
        document.body.append(bucket);
    }

    render () {
        this.sales.length > 0 && this.parseTickets()
    }

}

export default Bucket
