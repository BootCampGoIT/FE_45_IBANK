import React, { Component } from "react";
// import { LoanFormWrapper } from "./LoanFormStyled";

const banksCase = [
  { key: "Alfa", name: "Альфа" },
  { key: "Mono", name: "Моно" },
  { key: "Privat", name: "Приват" },
];

const loanProducts = [
  { key: "new", name: "первичка" },
  { key: "used", name: "вторичка" },
];

const loanSubProducts = [
  {
    subProductId: "1",
    subProductName: "property",
    name: "недвижимость",
    properties: {
      terms: [6, 12, 24, 36, 48],
    },
  },
  {
    subProductId: "2",
    subProductName: "transport",
    name: "транспорт",
    properties: {
      terms: [6, 12, 24, 36, 48],
    },
  },
];

class LoanForm extends Component {
  state = {
    price: "",
    product: loanProducts[1].key,
    subProduct: loanSubProducts[0].subProductName,
    bankName: [banksCase[0].key],
  };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    if (e.target.type === "checkbox") {
      const index = this.state[name].indexOf(value);
      if (index === -1) {
        this.setState((prev) => ({ [name]: [...prev[name], value] }));
      } else {
        this.setState((prev) => {
          return { [name]: prev[name].filter((bank) => bank !== value) };
        });
      }
      return;
    }
    this.setState({ [name]: value });
  };
  render() {
    const { price } = this.state;
    return (
      <form>
        <label>
          Цена
          <input
            type='text'
            name='price'
            value={price}
            onChange={this.onHandleChange}
            placeholder='0'
          />
        </label>

        {/* ======= checkbox ============= */}
        {banksCase.map(({ key, name }) => (
          <label key={key}>
            {name}
            <input
              type='checkbox'
              name='bankName'
              value={key}
              onChange={this.onHandleChange}
              checked={this.state.bankName.includes(key)}
            />
          </label>
        ))}
        {/* ======= radio ============= */}

        {loanProducts.map(({ key, name }) => (
          <label key={key}>
            {name}
            <input
              type='radio'
              value={key}
              checked={key === this.state.product}
              onChange={this.onHandleChange}
              name='product'
            />
          </label>
        ))}

        {/* ================ select ===================== */}
        <label>
          Субпродукт
          <select onChange={this.onHandleChange} name='subProduct'>
            {loanSubProducts.map(({ subProductId, subProductName, name }) => (
              <option key={subProductId} value={subProductName}>
                {name}
              </option>
            ))}
          </select>
        </label>
      </form>
    );
  }
}

export default LoanForm;
