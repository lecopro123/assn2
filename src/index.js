let inpu = [
    ["machine_name", "machine_id", "current", "voltage", "power_factor", "active_power", "apparent_power", "reactive_power", "daily_energy", "monthly_energy", "yearly_energy", "idle_daily", "idle_monthly", "idle_yearly"],
    ["Auto_Winding_Machine", "machine001", 0, 0, 0, 0.0, 0.0, 0.0, 0, 0, 0, 0, 0, 0],
    ["BoilerMachine", "machine004", 0, 0, 0, 0.0, 0.0, 0.0, 0, 0, 0, 0, 0, 0],
];

window.onload = () => {
    Dytable(inpu);
};

function Dytable(input) {
    const tablehead = document.getElementById('header');
    const tablebody = document.getElementById('data');
    let data = "";
    let bdata = "";
    let k = "";
    let l = "";
    for (let i = 0; i < input.length; i++) {
        if (i == 0) {
            for (let j in input[i]) {
                data += `<th>${input[i][j]}</th>`
                //console.log(input[i][j])
            }
            l += `<tr>${data}</tr>`
            tablehead.innerHTML = l;
        }
        else {
            for (let j in input[i]) {
                bdata += `<td>${input[i][j]}</td>`

            }
            //console.log(bdata)

            k += `<tr>${bdata}</tr>`;
            tablebody.innerHTML = k;
            console.log(k);
            bdata = "";
        }

    }


}
