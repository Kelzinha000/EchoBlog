import { request, response } from "express";
import Blog from "../Models/blogsModel.js";

export const getTodosBlogs = async (request, response) => {
    const page = paserInt( request.query.page) || 1; 
    const limit = parseInt(request.query.limit || 10 )
    const offset = (page - 1) * limit; 

  try {
    const blogs = await Blog.findAndCountAll({
        limit,
        offset
    });
    const totalPaginas = Math.ceil(blogs.count / limit);
    response.status(200).json({
        totalPostagens: blogs.count, 
        totalPaginas, 
        paginaAtual: page, 
        intensPorPagina : limit, 
        proximaPagina:
            totalPaginas === 0 
            ? null 
            : `http://localhost:3333/tarefas?page=${page + 1}`, 
        blogs: blogs.rows
    })} catch (error) {
    response.status(500).json({ message: "erro ao buscar blogs" });
  }
};

// RF01 criar postagems

export const criarBlogs = async (request, response) => {
  const { titulo, conteudo, autor, dataPublicao, image } = request.body;

  const novoBlog = {
    titulo,
    conteudo,
    autor,
    dataPublicao,
    image,
  };
  try {
    await Blog.create(novoBlog);
    response.status(201).json({ message: "Blog Postado" });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Erro ao cadastrar blog" });
  }
};
