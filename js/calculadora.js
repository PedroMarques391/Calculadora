function calc(tipo, valor) {
    if (tipo === 'acao') {
        if (valor === 'c') {
            document.getElementById('result').value = '' 
        }

        else if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
                document.getElementById("result").value += valor
        }

        else if (valor === '=') {
           var valor_campo = eval(document.getElementById('result').value)
           document.getElementById('result').value = valor_campo 
        }

    }
    else if (tipo === 'valor') {
        var valorCampo =  document.getElementById('result').value
        document.getElementById('result').value = valorCampo + valor
    }
}

function alterarCor(cor, letras) {
    document.getElementById("corCalc").style.background = cor
    document.getElementById("corCalc").style.color = letras
}

function mudarTema(tema, botoes) {
    document.getElementById("tema").style.background = tema
    document.getElementById("tema").style.color = botoes
}