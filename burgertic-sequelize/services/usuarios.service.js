import { Usuario } from "../models/usuarios.model.js";
import { config } from "../db.js";
import pkg from "pg";
const { Client } = pkg;

const getUsuarioByEmail = async (email) => 
    await Usuario.findAll({
        where: {
            email: email,
        },
    });

const getUsuarioById = async (id) => 
    await Usuario.findAll({
        where: {
            id: id,
        },
    });

const createUsuario = async (usuario) => 
    Usuario.create({
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        password: usuario.password,
        email: usuario.email,
        admin: usuario.admin,
    });
export default { getUsuarioByEmail, getUsuarioById, createUsuario };
