const formatarData = (data) => {
    var partesData = data.split("-");
    var dataFormatada = partesData[2] + "/" + partesData[1] + "/" + partesData[0];
    return dataFormatada;
}

export default formatarData;
