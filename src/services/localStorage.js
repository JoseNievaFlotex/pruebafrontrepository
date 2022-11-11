const ALMACENAMIENTO_DE_AUTORIZACION = 'ALMACENAMIENTO_DE_AUTORIZACION_FLOTEX';

export const guardarAutorizacion= data => {
    sessionStorage.setItem(ALMACENAMIENTO_DE_AUTORIZACION, JSON.stringify(data));
    sessionStorage.setItem('typeuser', data?.typeuser);
}

export const obtenerTokenAcceso = () => {
    const autorizacion = sessionStorage.getItem(ALMACENAMIENTO_DE_AUTORIZACION);

    if (autorizacion !== null) {
        const usuario = JSON.parse(autorizacion);

        return usuario.tokenAcceso;
    }

    throw new Error('Se requiere iniciar sesión');
};

export default{guardarAutorizacion}