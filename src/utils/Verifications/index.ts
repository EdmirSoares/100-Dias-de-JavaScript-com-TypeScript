export default function Verifications(){
    
    const isNullOrNan = (value : number | null)=>{
        if (value === null) {
            console.error('Entrada Cancelada')
            return true
        }

        if (isNaN(value)) {
            console.error("Entrada inválida!")
            return true
        }
    }

    return{
        isNullOrNan
    }
}