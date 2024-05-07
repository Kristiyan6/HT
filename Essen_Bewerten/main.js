
// function berechne() {
//     let input_Element = document.getElementById("kosten");
//     let input_Wert = input_Element.value;
    
//     let kosten = parseFloat(input_Wert);
//     let result;


//     let x = document.getElementById("raiting");
//     let x_value = x.value;
//     if (x_value === '1') {
//         result = kosten * 0.12; 
//     } else if (x_value === '2') {
//         result = kosten * 0.1; 
//     }
//     else if (x_value === '3') {
//         result = kosten * 0.07; 
//     }
//     else if (x_value === '4') {
//         result = kosten * 0.03; 
//     }
//     else if (x_value === '5') {
//         result = kosten * 0; 
//     }

//     result = result.toFixed(2);
    
//     let output_Element = document.getElementById("trinkgeld");
//     output_Element.textContent = result + "€";
// }
function berechne() {
    let input_Element = document.getElementById("kosten");
    let input_Wert = input_Element.value;
    
    let kosten = parseFloat(input_Wert);
    let result;

    let x = document.getElementById("raiting");
    let x_value = x.value;

    switch (x_value) {
        case '1':
            result = kosten * 0.12;
            break;
        case '2':
            result = kosten * 0.1;
            break;
        case '3':
            result = kosten * 0.07;
            break;
        case '4':
            result = kosten * 0.03;
            break;
        case '5':
            result = kosten * 0;
            break;
        default:
            break;
    }

    result = result.toFixed(2);
    
    let output_Element = document.getElementById("trinkgeld");
    output_Element.textContent = result + "€";
}