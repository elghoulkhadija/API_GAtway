# 🛍️ TP — Gestion des Produits & Order 

## 📋 Description

Application web de gestion de produits et de Order développée en **ExpressJs** avec une architecture **microservices**. Elle permet de créer, modifier, supprimer des produits et d'y associer des Order (quantités).

---

## 🏗️ Architecture du Projet

```
API_Gateway/
├── gateway/
│   ├── index.js              # Point d'entrée du gateway
│   ├── URLs.js               # URLs des services
│   └── package.json
│
└── services/
    ├── controller/
    │   ├── productController.js   # Logique métier produits
    │   └── ordersController.js    # Logique métier commandes
    │
    ├── models/
    │   ├── product.js             # Schéma Mongoose produit
    │   └── Order.js               # Schéma Mongoose commande
    │
    ├── route/
    │   ├── ProductRouter.js       # Routes produits
    │   └── orderRouter.js         # Routes commandes
    │
    ├── orders/
    │   └── index.js               # Service Orders (port 5001)
    │
    ├── products/
    │   └── index.js               # Service Products (port 5002)
    │
    ├── view/
    │   ├── index.ejs              # Liste des produits
    │   ├── Addproduct.ejs         # Formulaire ajout produit
    │   ├── Editproduct.ejs        # Formulaire modification produit
    │   ├── Addorders.ejs          # Formulaire ajout commande
    │   └── EditOrders.ejs         # Formulaire modification commande
    │
    ├── database/                  # Configuration MongoDB
    └── .env                       # Variables d'environnement
```

---

## ⚙️ Technologies Utilisées

| Technologie | Rôle |
|---|---|
| Node.js |  JavaScript |
| Express.js | Framework web |
| MongoDB | Base de données NoSQL |
| Mongoose | ODM pour MongoDB |
| EJS | Moteur de templates |
| Tailwind CSS | Framework CSS |
| method-override | Support PUT/DELETE en HTML |
| nodemon | redémarer serveur auto |
| doenv | charger variable environnement |

---
---

## 🔌 Routes

### Produits — `ProductRouter.js`

| Méthode | Route | Description |
|---|---|---|
| GET | `/products` | Liste tous les produits avec leur quantité |
| GET | `/products/add` | Formulaire ajout produit |
| POST | `/products/create` | Créer un produit |
| GET | `/products/edit/:id` | Formulaire modification produit |
| PUT | `/products/update/:id` | Modifier un produit |
| DELETE | `/products/:id` | Supprimer un produit + sa commande |

### Commandes — `orderRouter.js`

| Méthode | Route | Description |
|---|---|---|
| GET | `/orders/create?product=:id` | Formulaire ajout commande |
| POST | `/orders/create` | Créer une commande |
| GET | `/orders/edit/:id` | Formulaire modification commande |
| PUT | `/orders/:id` | Modifier une commande |
| DELETE | `/orders/:id` | Supprimer une commande |

---

## 🚀 Installation & Lancement

### 1. Cloner le projet
```bash
git clone https://github.com/elghoulkhadija/API_GAtway.git
cd API_Gateway
```

### 3. Configurer les variables d'environnement
Créer un fichier `.env` dans `services/` :
```env
MONGO_URI=mongodb://localhost:27017/gestion_produits
PORT=5000
PORT_PRODUCTS=5002
PORT_ORDERS=5001
```

### 4. Démarrer les services
```bash

# Service Principale (port 5000)
nodemon gateway/index.js

# Service Products (port 5002)
nodemon services/products/index.js

# Service Orders (port 5001)
nodemon services/orders/index.js
```

### 5. Accéder à l'application
```
http://localhost:5000/products
```

---

## 🔄 Flux Fonctionnel

```
Utilisateur
    │
    ├── Voir les produits    → GET /products
    │       └── Affiche produits + quantité des commandes associées
    │
    ├── Ajouter un produit   → GET /products/add → POST /products/create
    │
    ├── Modifier un produit  → GET /products/edit/:id → PUT /products/update/:id
    │
    ├── Ajouter une commande → GET /orders/create?product=:id → POST /orders/create
    │       └── Le produit est pré-sélectionné automatiquement
    │
    ├── Modifier une commande → GET /orders/edit/:id → PUT /orders/:id
    │
    └── Supprimer un produit  → DELETE /products/:id
            └── Supprime aussi la commande liée automatiquement
```

---

## 👨‍💻 Auteur

Développé dans le cadre d'un **TP API Gatway / MongoDB**.
