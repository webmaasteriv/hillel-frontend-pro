"use strict";

const temperature = +prompt('Значення температури в Цельсіях (число)', '');
const scale = prompt('Цільову шкалу: F, K або R (рядок)', '');

if(temperature === null || scale === null){
    alert('Введіть температуру та цільову шкалу!');
} else {

    const scaleName = scale.toLowerCase();

    if(temperature >= -273.15){
        console.group("Switch");
        switch(scaleName){
            case 'f':
                console.log(Math.round(((temperature*9/5) + 32)*100) / 100, ' Фаренгейт');
                break;
            case 'k':
                console.log(Math.round((temperature + 273.15) * 100) /100, ' Кельвін');
                break;
            case 'r':
                console.log(Math.round((temperature + 273.15) * 9/5 * 100) / 100, ' Ранкін');
                break;
            default:
                console.log('Невідома шкала');
                break;
        }
        console.groupEnd();

        const scaleNames = {
            f: 'Фаренгейт',
            k: 'Кельвін',
            r: 'Ранкін',
        };

        const realFeel = temperature <= -10 ? 'мороз' :
                            temperature >= -10 && temperature < 0 ? 'холодно' :
                                 temperature >= 0 && temperature < 15 ? 'прохолодно' :
                                    temperature >= 15 && temperature <= 25 ? 'комфортно' : 'спека';

        console.group("Object map");
        if(Object.hasOwn(scaleNames,scaleName)){
            if(scaleNames[scaleName] === 'Фаренгейт'){
                console.log(`${temperature}°C = ${Math.round(((temperature*9/5) + 32)*100) / 100} (${scaleNames[scaleName]}) - ${realFeel}`);
            } else if(scaleNames[scaleName] === 'Кельвін'){
                console.log(`${temperature}°C = ${Math.round((temperature + 273.15) * 100) /100} (${scaleNames[scaleName]}) - ${realFeel}`);
            } else if(scaleNames[scaleName] === 'Ранкін'){
                console.log(`${temperature}°C = ${Math.round((temperature + 273.15) * 9/5 * 100) / 100} (${scaleNames[scaleName]}) - ${realFeel}`);
            }
        } else {
            console.log('Невідома шкала');
        }
        console.groupEnd();

    } else {
        console.log('Нижче абсолютного нуля');
    }
}
