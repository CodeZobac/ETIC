CREATE TABLE Emprestimo(
    Codigo INT PRIMARY KEY,
    Data_Hora TIMESTAMP NOT NULL,
    Matricula_Usuario INT,
    Data_Devolucao DATE,
    FOREIGN KEY (Matricula_Usuario) REFERENCES Usuario(Matricula)

)