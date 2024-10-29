const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

exports.createUsuario = async (req, res) => {
  const { usuario_login, usuario_senha } = req.body;
  const hashedSenha = await bcrypt.hash(usuario_senha, 10);
  
  try {
    const usuario = await Usuario.create({ usuario_login, usuario_senha: hashedSenha });
    res.json(usuario);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
};

exports.listarUsuarios = async (req, res) => {
    
    try {
        const usuarios = await Usuario.findAll()
        res.status(200).json(usuarios)    
    } catch (error) {
        res.status(500).json({error: 'Erro ao consultar usuarios'})
    }
}
