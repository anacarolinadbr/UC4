class Estoque {
    private livros: Livro[] = [];
  
    adicionar(livro: Livro) { this.livros.push(livro); }
    listar() { return this.livros; }
  }