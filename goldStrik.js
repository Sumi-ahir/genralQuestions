function goldStrik() {
    let workerHas = 0;
    let log = [];

    for (let day = 1; day <= 7; day++) {
        switch (day) {
            case 1:
                workerHas = 1;
                log.push(`Day ${day}: Give 1-unit. Worker has ${workerHas}`);
                break;
            case 2:
                workerHas = 2;
                log.push(`Day ${day}: Give 2-unit, take back 1-unit. Worker has ${workerHas}`);
                break;
            case 3:
                workerHas = 3;
                log.push(`Day ${day}: Give 1-unit again. Worker has ${workerHas}`);
                break;
            case 4:
                workerHas = 4;
                log.push(`Day ${day}: Give 4-unit, take back 1 & 2. Worker has ${workerHas}`);
                break;
            case 5:
                workerHas = 5;
                log.push(`Day ${day}: Give 1-unit again. Worker has ${workerHas}`);
                break;
            case 6:
                workerHas = 6;
                log.push(`Day ${day}: Give 2-unit again. Worker has ${workerHas}`);
                break;
            case 7:
                workerHas = 7;
                log.push(`Day ${day}: No action needed. Worker already has ${workerHas}`);
                break;
        }
    }

    return log;
}

const result=goldStrik();
result.forEach(entry=>console.log(entry));

