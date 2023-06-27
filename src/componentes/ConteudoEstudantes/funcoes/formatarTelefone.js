const formatarTelefone = (telefone) => {
    const digitos = telefone.replace(/\D/g, '');

    const codigoArea = digitos.slice(0, 2);

    const parteUm = digitos.slice(2, 7);

    const parteDois = digitos.slice(7);

    const telefoneFormatado = `(${codigoArea}) ${parteUm}-${parteDois}`;

    return telefoneFormatado;
}

export default formatarTelefone;
