function parseCount(number) {
    if (isNaN(parseFloat(number))) {
        throw new Error("Невалидное значение");
    } 
    else return parseFloat(number);
}

function validateCount(number) {
    try {
        parseCount(number);
    }
    catch (error) {
        return error;
    }
    return parseCount(number);
}

class Triangle {
    constructor (a, b, c) {
       if (a + b < c || a + c < b || b + c < a) {
        throw new Error("Треугольник с такими сторонами не существует")
       } 
       else {
        this.a = a;
        this.b = b;
        this.c = c;
        this.p = (a + b + c) / 2;
       }
    }
    get perimeter () {
        try {}
        catch (error) {
            return "Ошибка! Треугольник не существует"
        }
        finally {
            return this.a + this.b + this.c; 
        }
    };
    get area () {
        try {}
        catch (error) {
            return "Ошибка! Треугольник не существует"
        }
        finally {
            return parseFloat(Math.sqrt(this.p * (this.p - this.a) * (this.p - this.b) * (this.p - this.c)).toFixed(3))
        }

    };
};


function getTriangle (a, b, c) {
    if (!(a + b < c || a + c < b || b + c < a)) {
        const triangle = new Triangle (a, b, c);
        return triangle;
    }
    else {
        const triangle = {};
        Object.defineProperty(
            triangle,
            "area", 
            {
                value: "Ошибка! Треугольник не существует"
            }
        );
        Object.defineProperty(
            triangle,
            "perimeter", 
            {
                value: "Ошибка! Треугольник не существует"
            }
        );
        return triangle;
    }
};
