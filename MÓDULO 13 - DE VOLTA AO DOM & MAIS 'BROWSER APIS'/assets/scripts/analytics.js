



console.log('Sending analytics...');









/*setInterval(
    () => {
        console.log('Sending Analytics Data...');
    }, 

    2000


);

*/



const intervalId = setInterval(
    () => {
        console.log('Sending Analytics Data...')
    }, 2000
);




document.getElementById('stop-analytics-btn').addEventListener('click', () => {clearInterval(intervalId)});  