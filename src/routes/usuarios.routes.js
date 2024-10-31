import { json, Router } from "express";

const usuariosRoutes = Router();

let usuario = [];

usuariosRoutes.get("/", (req, res) => {
    return res.status(200).json({
        message: usuariosRoutes.length == 0 
        ? "Não há usuários cadastrados": `Total de usuários: ${usuarios.length}`,
        usuario,
    });
});

export default usuariosRoutes;