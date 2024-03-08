import random
from tkinter import messagebox
import tkinter as tk
import datetime


class Euromilhões:
    def __init__(self, tkinter):
        self.tkinter = tkinter
        self.tkinter.title("Gerador de chaves Euromilhões")

        self.num_chaves_frame = tk.Frame(self.tkinter)
        self.num_chaves_frame.pack(side=tk.TOP, padx=10, pady=10)
        tk.Label(self.num_chaves_frame, text="Quantidade de chaves:").grid(
            row=0, column=0, padx=5
        )
        self.num_chaves_entry = tk.Entry(self.num_chaves_frame, width=20)
        self.num_chaves_entry.insert(0, "1")
        self.num_chaves_entry.grid(row=0, column=1, padx=5)

        self.btn_frame = tk.Frame(self.tkinter)
        self.btn_frame.pack(side=tk.TOP, padx=10, pady=10)
        self.gerar_btn = tk.Button(
            self.btn_frame, text="Gerar chave do Euromilhões", command=self.gerar_chaves
        )
        self.gerar_btn.pack(side=tk.LEFT, padx=5)
        self.ver_btn = tk.Button(
            self.btn_frame, text="Ver todas as Chaves", command=self.ver_chaves
        )
        self.ver_btn.pack(side=tk.LEFT, padx=5)
        self.limpar_btn = tk.Button(
            self.btn_frame, text="Limpar Chaves", command=self.limpar_chaves
        )
        self.limpar_btn.pack(side=tk.LEFT, padx=5)

        self.chaves = []
        self.load_chaves()

        self.chaves_frame = tk.Frame(self.tkinter)
        self.chaves_frame.pack(side=tk.TOP, padx=10, pady=10)
        tk.Label(self.chaves_frame, text="Chaves geradas:").pack(side=tk.TOP)
        self.lista_chaves = tk.Listbox(self.chaves_frame, width=80)
        self.lista_chaves.pack(side=tk.TOP)
        self.update_chaves_lista()

    def gerar_chaves(self):
        num_chaves = int(self.num_chaves_entry.get())
        for i in range(num_chaves):
            numeros = []
            while len(numeros) < 5:
                n = random.randint(1, 50)
                if n not in numeros:
                    numeros.append(n)
            estrelas = []
            while len(estrelas) < 2:
                e = random.randint(1, 12)
                if e not in estrelas:
                    estrelas.append(e)
            chave = {"numeros": numeros, "estrelas": estrelas}
            self.chaves.append(chave)
        self.guardar_chaves()
        self.update_chaves_lista()

    def update_chaves_lista(self):
        self.lista_chaves.delete(0, tk.END)
        for i, chave in enumerate(self.chaves):
            data_hora = datetime.datetime.now().strftime("%d/%m/%Y %H:%M:%S")
            self.lista_chaves.insert(i, f"Chave {i+1} ({data_hora}): {chave}")

    def guardar_chaves(self):
        with open("chaves.txt", "a") as f:
            for chave in self.chaves[-1:]:
                data_hora = datetime.datetime.now().strftime("%d/%m/%Y %H:%M:%S")
                f.write(f"{data_hora}: {chave}\n")

    def load_chaves(self):
        try:
            with open("chaves.txt", "r") as f:
                for linha in f:
                    linha = linha.strip()
                    if ":" not in linha:
                        continue
                    data_hora, chave_str = linha.split(": ", 1)
                    chave = eval(chave_str)
                    self.chaves.append((data_hora, chave))
        except FileNotFoundError:
            pass

    def ver_chaves(self):
        if not self.chaves:
            messagebox.showinfo("Nenhuma chave", "Nenhuma chave foi gerada ainda.")
        else:
            chaves_text = "\n".join(
                [
                    f"{i+1}: {numeros} - {estrelas}"
                    for i, (numeros, estrelas) in enumerate(self.chaves)
                ]
            )
            messagebox.showinfo(
                "Chaves geradas",
                f"Total de chaves geradas: {len(self.chaves)}\n\n{chaves_text}",
            )

    def limpar_chaves(self):
        self.chaves = []
        self.guardar_chaves()
        self.update_chaves_lista()


tkinter = tk.Tk()
Euromilhões(tkinter)
tkinter.mainloop()