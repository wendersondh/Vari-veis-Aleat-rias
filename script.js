function pmf(x, a, b) {
    if (x < a || x > b) {
        return 0;
    }
    return 1 / (b - a + 1);
}

function cdf(x, a, b) {
    if (x < a) {
        return 0;
    } else if (x > b) {
        return 1;
    }
    return (x - a + 1) / (b - a + 1);
}

function atualizarGraficos() {
    const a = parseInt(document.getElementById('inputA').value);
    const b = parseInt(document.getElementById('inputB').value);

    const dataPoints = [];
    const pmfValues = [];
    const cdfValues = [];

    for (let x = a; x <= b; x++) {
        dataPoints.push(x);
        pmfValues.push(pmf(x, a, b));
        cdfValues.push(cdf(x, a, b));
    }

    // Atualizar dados dos gráficos
    pmfChart.data.labels = dataPoints;
    pmfChart.data.datasets[0].data = pmfValues;
    pmfChart.update();

    cdfChart.data.labels = dataPoints;
    cdfChart.data.datasets[0].data = cdfValues;
    cdfChart.update();
}

const aInicial = parseInt(document.getElementById('inputA').value);
const bInicial = parseInt(document.getElementById('inputB').value);

const pmfChart = new Chart(document.getElementById('pmfChart').getContext('2d'), {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Função de massa de probabilidade',
            data: [],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom'
            },
            y: {
                beginAtZero: true
            }
        }
    }
});

const cdfChart = new Chart(document.getElementById('cdfChart').getContext('2d'), {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Função de distribuição cumulativa',
            data: [],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            fill: false
        }]
    },
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom'
            },
            y: {
                beginAtZero: true,
                max: 1
            }
        }
    }
});

// Inicializar gráficos com parâmetros iniciais
atualizarGraficos();