interface Rect {
    readonly id:string()
    color?: string
    size: {
        width: number
        height: number
    }
}

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea



// Использование в классах
class Clock implements IClock