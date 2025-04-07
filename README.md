# Simdex Web – Angular UI for Simulated DEX Platform

**Simdex Web** is the frontend application for the [Simdex](https://github.com/sbrunomello/simdex) platform – a simulation of a decentralized cryptocurrency exchange. Built with Angular, it offers a responsive dashboard where users can register, log in, view real-time prices, and interact with coin data in a realistic exchange layout.

---

## 🌐 Live Features

- 🧾 **Login and Registration** (connected to Spring Boot backend)
- 📈 **Coin Price Tracker** with live data
- 🪙 **Coin Table** for top market pairs
- 🔄 Modular UI structure with dashboard, sidebar, and components
- 🧪 Designed for realistic crypto UI simulation

---

## 🛠 Technologies Used

- Angular `^16`
- TypeScript
- SCSS / CSS
- RxJS (reactive state)
- Angular Routing
- Capacitor-ready (for mobile builds)
- RESTful communication with backend API

---

## 🧩 Project Structure Highlights

```
/src/app
│
├── core/services
│   ├── auth.service.ts        → Login/registration logic
│   └── coin.service.ts        → Fetches coin price data
│
├── modules/dashboard
│   ├── dashboard.component.ts
│   └── sidebar/               → App navigation
│
├── shared/components
│   ├── coin-price/            → Displays price from API
│   ├── coin-table/            → Lists crypto pairs
│   ├── login/                 → Login form
│   ├── register/              → Registration form
│   ├── navbar/                → Top navigation
│   ├── footer/                → Footer content
│
├── directives/
│   └── outside-click.directive.ts → Detects external click (e.g. dropdown)
```

> Components follow modular and testable Angular best practices.

---

## ▶️ How to Run Locally

### Prerequisites

- Node.js (v18+ recommended)
- Angular CLI (`npm install -g @angular/cli`)
- Backend API running ([Simdex Backend](https://github.com/sbrunomello/simdex))

### Steps

```bash
git clone https://github.com/sbrunomello/simdex-web.git
cd simdex-web
npm install
ng serve
```

Access the app at:  
`http://localhost:4200`

---

## 💡 API Integration

All data is fetched from the Spring Boot backend running at `http://localhost:8080`. It includes:

- `POST /auth/register`
- `POST /auth/login`
- `GET /api/v2/price` → Real-time BTC price (via CMC)

---

## 🧪 Development Notes

- Supports component unit testing with Karma + Jasmine
- Includes styles split per component (CSS or SCSS)
- Easy to extend with lazy-loaded modules

---

## 🚀 Future Roadmap

- [ ] Wallet simulation with fake balance
- [ ] Token buy/sell interaction (demo only)
- [ ] Visual charts with TradingView or Chart.js
- [ ] Internationalization (i18n)
- [ ] PWA support and mobile build via Capacitor

---

## 📬 Contact

- [GitHub](https://github.com/sbrunomello)  
Developed with by Mello
