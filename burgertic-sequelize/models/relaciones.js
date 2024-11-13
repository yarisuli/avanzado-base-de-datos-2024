import {Pedidos} from "./pedidos.model"
import {Platos} from "./platos.model"
import { pedidosplatos } from "./pedidosplatos.model"
import { Usuario } from "./usuarios.model"

import sequelize, { Sequelize } from "sequelize"

Pedidos.belongsTo(Usuario,{foreignKey:"id_usuario"});
Usuarios.hasMany(Pedidos,{foreignKey:"id_usuario"});
Platos.belongsToMany(Pedido, { through: pedidosplatos, foreignKey: "id_plato"});
Pedidos.belongsToMany(Platos, { through: pedidosplatos, foreignKey: "id_pedido"});

sequelize.sync({force: true}).then(() => {
    console.log("Las tablas están relacionadas");
});
