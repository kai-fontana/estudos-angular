let alunos = ["Kai", "Jujuba", "Quenzo", "Rafinha"];

for (i = 0; i < alunos.length; i++) {
    let aluno = alunos[i];
    console.log("Aluno cadastrado: " + aluno);

    if (aluno.includes("a")) {
        console.log(alunos[i] + " seu nome tem A");
    } else {
        console.log("Você não tem A no nome")
    }
}