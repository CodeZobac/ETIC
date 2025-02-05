CREATE TABLE Livro (
    Codigo INT PRIMARY KEY,
    Titulo VARCHAR(255) NOT NULL,
    Autor VARCHAR(100) NOT NULL,
    Codigo_Sessao INT,
    FOREIGN KEY (Codigo_Sessao) REFERENCES Sessao(Codigo)
)
