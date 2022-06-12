function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        let textArr = JSON.parse(document.querySelector('#inputs textarea').value);

        let avgSalary = 0;
        let totalSalary = 0;
        let currAvgSalary = 0;
        let bestRest = '';
        let output = {};

        for (let el of textArr) {
            let restInfo = el.split(' - ');
            let restName = restInfo.shift();
            let workerInfo = restInfo[0].split(', ');

            for (let worker of workerInfo) {
                let [name, salary] = worker.split(' ');

                if (!output.hasOwnProperty(restName)) {
                    output[restName] = {};
                }
                if (output.hasOwnProperty(restName)) {
                    output[restName][name] = Number(salary);
                }
            }
        }

        let entries = Object.entries(output);

        for (let entry of entries) {
            let key = entry[0];
            let values = Object.entries(entry[1])

            for (let [name, salary] of values) {
                totalSalary += salary;
            }

            avgSalary = totalSalary / values.length;

            if (avgSalary > currAvgSalary) {
                currAvgSalary = avgSalary;
                bestRest = key;
                totalSalary = 0;
            }
        }
        
        let result = Object.entries(output[bestRest]).sort((a, b) => b[1] - a[1]);
        let print = '';

        result.forEach(wor => print += `Name: ${wor[0]} With Salary: ${wor[1]} `);

        document.querySelector('#bestRestaurant p')
            .textContent = `Name: ${bestRest} Average Salary: ${currAvgSalary.toFixed(2)} Best Salary: ${result[0][1].toFixed(2)}`;

        document.querySelector('#workers p').textContent = print;
    }
}