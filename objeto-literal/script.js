const sistemaBancario = {
    cuentas: [],

    crearCuenta: function (nombre, apellido, saldoInicial = 0) {
        const numeroCuenta = Date.now().toString();
        const cuenta = {
            numeroCuenta,
            nombre,
            apellido,
            saldo: saldoInicial,
            historialTransacciones: [],
            fechaCreacion: new Date()
        };
        this.cuentas.push(cuenta);
        return numeroCuenta;
    },

    depositar: function (numeroCuenta, monto) {
        const cuenta = this.cuentas.find(c => c.numeroCuenta === numeroCuenta);
        if (cuenta && monto > 0) {
            cuenta.saldo += monto;
            cuenta.historialTransacciones.push({
                tipo: 'deposito',
                monto,
                fecha: new Date()
            });
            return true;
        }
        return false;
    },

    retirar: function (numeroCuenta, monto) {
        const cuenta = this.cuentas.find(c => c.numeroCuenta === numeroCuenta);
        if (cuenta && monto > 0 && cuenta.saldo >= monto) {
            cuenta.saldo -= monto;
            cuenta.historialTransacciones.push({
                tipo: 'retiro',
                monto,
                fecha: new Date()
            });
            return true;
        }
        return false;
    },

    consultarSaldo: function (numeroCuenta) {
        const cuenta = this.cuentas.find(c => c.numeroCuenta === numeroCuenta);
        return cuenta ? cuenta.saldo : null;
    },

    transferir: function (cuentaOrigen, cuentaDestino, monto) {
        if (this.retirar(cuentaOrigen, monto)) {
            if (this.depositar(cuentaDestino, monto)) {
                return true;
            }
            this.depositar(cuentaOrigen, monto);
        }
        return false;
    },

    obtenerHistorial: function (numeroCuenta) {
        const cuenta = this.cuentas.find(c => c.numeroCuenta === numeroCuenta);
        return cuenta ? cuenta.historialTransacciones : [];
    }
};
