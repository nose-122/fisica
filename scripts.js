function calculateOhm() {
    const voltage = parseFloat(document.getElementById('voltage').value);
    const current = parseFloat(document.getElementById('current').value);
    const resistance = parseFloat(document.getElementById('resistance').value);
    const power = parseFloat(document.getElementById('power').value);
    let result = '';

    if (!isNaN(voltage) && !isNaN(current)) {
        result = `Resistencia (R): ${(voltage / current).toFixed(2)} Ω, Potencia (P): ${(voltage * current).toFixed(2)} W`;
    } else if (!isNaN(voltage) && !isNaN(resistance)) {
        result = `Corriente (I): ${(voltage / resistance).toFixed(2)} A, Potencia (P): ${(Math.pow(voltage, 2) / resistance).toFixed(2)} W`;
    } else if (!isNaN(current) && !isNaN(resistance)) {
        result = `Voltaje (V): ${(current * resistance).toFixed(2)} V, Potencia (P): ${(Math.pow(current, 2) * resistance).toFixed(2)} W`;
    } else if (!isNaN(voltage) && !isNaN(power)) {
        result = `Corriente (I): ${(power / voltage).toFixed(2)} A, Resistencia (R): ${(Math.pow(voltage, 2) / power).toFixed(2)} Ω`;
    } else if (!isNaN(current) && !isNaN(power)) {
        result = `Voltaje (V): ${(power / current).toFixed(2)} V, Resistencia (R): ${(power / Math.pow(current, 2)).toFixed(2)} Ω`;
    } else if (!isNaN(resistance) && !isNaN(power)) {
        result = `Voltaje (V): ${(Math.sqrt(power * resistance)).toFixed(2)} V, Corriente (I): ${(Math.sqrt(power / resistance)).toFixed(2)} A`;
    } else {
        result = 'Por favor, ingrese al menos dos valores.';
    }

    document.getElementById('ohmResult').innerText = result;
}

function clearOhm() {
    document.getElementById('voltage').value = '';
    document.getElementById('current').value = '';
    document.getElementById('resistance').value = '';
    document.getElementById('power').value = '';
    document.getElementById('ohmResult').innerText = '';
}

function cleanInput(input) {
    return input.replace(/[\s/]+/g, ',').replace(/,,+/g, ',');
}

function calculateKCL() {
    const kclEntrantes = cleanInput(document.getElementById('kclEntrantes').value).split(',').map(Number);
    const kclSalientes = cleanInput(document.getElementById('kclSalientes').value).split(',').map(Number);

    const sumaEntrantes = kclEntrantes.reduce((a, b) => a + b, 0);
    const sumaSalientes = kclSalientes.reduce((a, b) => a + b, 0);

    let result = '';
    if (sumaEntrantes === sumaSalientes) {
        result = `La ley de corrientes de Kirchhoff se cumple: ΣI (entrante) = ΣI (saliente) = ${sumaEntrantes.toFixed(2)} A`;
    } else {
        result = `La ley de corrientes de Kirchhoff no se cumple: ΣI (entrante) = ${sumaEntrantes.toFixed(2)} A, ΣI (saliente) = ${sumaSalientes.toFixed(2)} A`;
    }

    document.getElementById('kclResult').innerText = result;
}

function clearKCL() {
    document.getElementById('kclEntrantes').value = '';
    document.getElementById('kclSalientes').value = '';
    document.getElementById('kclResult').innerText = '';
}

function calculateKVL() {
    const kvlVoltajes = cleanInput(document.getElementById('kvlVoltajes').value).split(',').map(Number);
    const sumaVoltajes = kvlVoltajes.reduce((a, b) => a + b, 0);

    let result = '';
    if (sumaVoltajes === 0) {
        result = `La ley de voltajes de Kirchhoff se cumple: ΣV = 0 V`;
    } else {
        result = `La ley de voltajes de Kirchhoff no se cumple: ΣV = ${sumaVoltajes.toFixed(2)} V`;
    }

    document.getElementById('kvlResult').innerText = result;
}

function clearKVL() {
    document.getElementById('kvlVoltajes').value = '';
    document.getElementById('kvlResult').innerText = '';
}

function calculateFaraday() {
    const fluxChange = parseFloat(document.getElementById('fluxChange').value);
    const timeChange = parseFloat(document.getElementById('timeChange').value);
    const turns = parseFloat(document.getElementById('turns').value);
    let result = '';

    if (!isNaN(fluxChange) && !isNaN(timeChange) && !isNaN(turns) && timeChange !== 0) {
        result = `Fuerza Electromotriz (EMF): ${-(turns * fluxChange / timeChange).toFixed(2)} V`;
    } else {
        result = 'Por favor, ingrese valores válidos para el cambio de flujo, tiempo y número de espiras.';
    }

    document.getElementById('faradayResult').innerText = result;
}

function clearFaraday() {
    document.getElementById('fluxChange').value = '';
    document.getElementById('timeChange').value = '';
    document.getElementById('turns').value = '';
    document.getElementById('faradayResult').innerText = '';
}

function calculateGaussElectricIntegral() {
    const charge = parseFloat(document.getElementById('charge').value);
    const epsilon0 = parseFloat(document.getElementById('epsilon0').value);
    let result = '';

    if (!isNaN(charge) && !isNaN(epsilon0) && epsilon0 !== 0) {
        const electricFlux = charge / epsilon0;
        result = `El flujo eléctrico (∮ E · dA): ${electricFlux.toFixed(2)} N·m²/C`;
    } else {
        result = 'Por favor, ingrese valores válidos para la carga y la permisividad del vacío.';
    }

    document.getElementById('gaussElectricIntegralResult').innerText = result;
}

function clearGaussElectricIntegral() {
    document.getElementById('charge').value = '';
    document.getElementById('epsilon0').value = '8.85e-12';
    document.getElementById('gaussElectricIntegralResult').innerText = '';
}

function calculateGaussElectricDifferential() {
    const rho = parseFloat(document.getElementById('rho').value);
    const epsilon0 = parseFloat(document.getElementById('epsilon0Diff').value);
    let result = '';

    if (!isNaN(rho) && !isNaN(epsilon0) && epsilon0 !== 0) {
        const electricFieldDivergence = rho / epsilon0;
        result = `La divergencia del campo eléctrico (∇ · E): ${electricFieldDivergence.toFixed(2)} C/m³`;
    } else {
        result = 'Por favor, ingrese valores válidos para la densidad de carga y la permisividad del vacío.';
    }

    document.getElementById('gaussElectricDifferentialResult').innerText = result;
}

function clearGaussElectricDifferential() {
    document.getElementById('rho').value = '';
    document.getElementById('epsilon0Diff').value = '8.85e-12';
    document.getElementById('gaussElectricDifferentialResult').innerText = '';
}

function calculateAmpereMaxwellIntegral() {
    const current = parseFloat(document.getElementById('current').value);
    const epsilon0 = parseFloat(document.getElementById('epsilon0Ampere').value);
    const dPhiE = parseFloat(document.getElementById('dPhiE').value);
    const mu0 = parseFloat(document.getElementById('mu0').value);
    let result = '';

    if (!isNaN(current) && !isNaN(epsilon0) && !isNaN(dPhiE) && !isNaN(mu0)) {
        const magneticCirculation = mu0 * (current + epsilon0 * dPhiE);
        result = `La circulación del campo magnético (∮ B · dl): ${magneticCirculation.toFixed(2)} T·m`;
    } else {
        result = 'Por favor, ingrese valores válidos para la corriente, la permisividad del vacío, el cambio del flujo eléctrico y la permeabilidad del vacío.';
    }

    document.getElementById('ampereMaxwellIntegralResult').innerText = result;
}

function clearAmpereMaxwellIntegral() {
    document.getElementById('current').value = '';
    document.getElementById('epsilon0Ampere').value = '8.85e-12';
    document.getElementById('dPhiE').value = '';
    document.getElementById('mu0').value = '1.2566370614e-6';
    document.getElementById('ampereMaxwellIntegralResult').innerText = '';
}

function calculateAmpereMaxwellDifferential() {
    const currentDensity = parseFloat(document.getElementById('currentDensity').value);
    const epsilon0 = parseFloat(document.getElementById('epsilon0DiffAmpere').value);
    const dE = parseFloat(document.getElementById('dE').value);
    const mu0 = parseFloat(document.getElementById('mu0Diff').value);
    let result = '';

    if (!isNaN(currentDensity) && !isNaN(epsilon0) && !isNaN(dE) && !isNaN(mu0)) {
        const magneticFieldCurl = mu0 * (currentDensity + epsilon0 * dE);
        result = `La rotación del campo magnético (∇ × B): ${magneticFieldCurl.toFixed(2)} A/m²`;
    } else {
        result = 'Por favor, ingrese valores válidos para la densidad de corriente, la permisividad del vacío, el cambio del campo eléctrico y la permeabilidad del vacío.';
    }

    document.getElementById('ampereMaxwellDifferentialResult').innerText = result;
}

function clearAmpereMaxwellDifferential() {
    document.getElementById('currentDensity').value = '';
    document.getElementById('epsilon0DiffAmpere').value = '8.85e-12';
    document.getElementById('dE').value = '';
    document.getElementById('mu0Diff').value = '1.2566370614e-6';
    document.getElementById('ampereMaxwellDifferentialResult').innerText = '';
}
