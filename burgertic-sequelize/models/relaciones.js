import { Plato } from "./platos.model.js"
import { pedidosplatos } from "./pedidosplatos.model.js"
import { Usuario } from "./usuarios.model.js"
import { Pedidos } from "./pedidos.model.js"; 

Pedidos.belongsTo(Usuario, {foreignKey:"id_usuario"});
Usuario.hasMany(Pedidos, {foreignKey:"id_usuario"});
Plato.belongsToMany(Pedidos, { through: pedidosplatos, foreignKey: "id_plato"});
Pedidos.belongsToMany(Plato, { through: pedidosplatos, foreignKey: "id_pedido"});