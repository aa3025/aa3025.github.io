// numerical simulation of the initial value problem of gravitationally interacting objects of the same mass
// integrated in time using RK4 numerical scheme
// Alex Pedcenko, 2020 (modified)
var n = 6;
var G = 1, i, j, theta = [], t=0, dx, dy, r_cube, v02 = [], X = [], Y = [], x = [], y = [], KE = [0], PE = [0], E = [];
var vx = [], vy = [], ax = [], ay = [], pe = [], ke = [], lines = [], coeff;
var k = 0; //iterations counter
var dt, dt2, t; // dt2 is unused by RK4 but set in init()

var T = []; // time array
var m = new Array(n);
var data = [];

var R = 1; //initial orbital radius
var v0 = []; // initial orbital speeds

//console.log('n='+oFormObject.elements["N"].value);
dt=0.01;
init();


requestAnimationFrame(update);

function update () { // update plot
	compute();

if( (k % 2) == 0) {
	Plotly.redraw('graph');
	Plotly.redraw('energy_plot');
}
	//setTimeout(function(){ requestAnimationFrame(update); }, 1);
	requestAnimationFrame(update);
	
if ( E[k] > 0) {
Plotly.relayout( "energy_plot", {
    yaxis: {autorange: true}
});
}

if(Math.max.apply(null, x.map(Math.abs)) > 2 ) {
Plotly.relayout( "graph", {
    xaxis: {constraint: 'domain'},
    yaxis: {scaleanchor: 'x'}
});
}

	if(Math.max.apply(null, x.map(Math.abs))>10 || Math.max.apply(null, y.map(Math.abs))>10) {
	init();
	}
}





///////////////////////////////////////////////////
function init () {

n = parseInt(document.getElementById('N').value, 10); // FIX: Convert string to number
dt = parseFloat(document.getElementById('timestep').value); // FIX: Convert string to number
coeff = parseFloat(document.getElementById('coeff').value); // FIX: Convert string to number
dt2=dt/2; // This is for Leapfrog, but we'll leave it. RK4 doesn't use it.

//console.log(dt);

x = [], y = [], KE = 0, PE = 0, E = [];
vx = [], vy = [], ax = [], ay = [], pe = [], ke = [], lines = [], X = [], Y = [];
KE = [0], PE = [0];
k = 0;

T = []; // time array
m = new Array(n);
X = new Array(n);
Y = new Array(n);

for (var i = 0; i < n; i++) { 
    X[i] = []; 
    Y[i] = [];
}



data = [];

R = 1; //initial orbital radius
v0 = []; // initial orbital speeds


for (i = 0; i < n; i++) {
     m[i] = 1;
     theta[i] = i * 2 * Math.PI/n;
     x[i]=R*Math.cos(theta[i]);
     y[i]=R*Math.sin(theta[i]);
     X[i][k]=x[i];
     Y[i][k]=y[i];

}
energy(); // Calculate initial PE

for (i = 0; i < n; i++) {	
	
     v0[i] = Math.sqrt(Math.abs(pe[i])/2) * coeff; // Keplerian speeds for each mass
     vx[i] = -v0[i] * Math.sin(theta[i]);
     vy[i] = v0[i] * Math.cos(theta[i]);
}

// Recalculate energy now that we have velocities
energy();

init_plot();
init_plot2();



}

/////////////////////////////////////////////////////////


function init_plot() {
Plotly.purge('graph');
var trace = {
    x: x,
    y: y,
    type: 'scatter',
    mode: 'markers',
    marker: { size: 12 }
};

data.push(trace);

for (i = 0; i < n; i++) {
var lines = {
    x: X[i],
    y: Y[i],
    mode: 'lines',
    line: {width: 1}
};

data.push(lines);
}


var layout = {
	xaxis: { range: [ -2, 2 ] },
	yaxis: { range: [-2, 2] },
	showlegend: false,
	height: 600,
	width: 600
};


Plotly.newPlot('graph', data, layout, {scrollZoom: true});
}
//////////////////////////////////////////////////////////
function init_plot2() {
Plotly.purge('energy_plot');
var trace2 = {
    x: T,
    y: KE,
    type: 'scatter',
    name: 'KE'
};

var trace3 = {
    x: T,
    y: PE,
    type: 'scatter',
    name: 'PE'
};

var trace4 = {
    x: T,
    y: E,
    type: 'scatter',
    name: 'KE+PE'
};


data2 = [ trace2, trace3, trace4 ];

var layout2 = {
	title:'Total Energy',
	xaxis: { autorange: true },
	yaxis: { autorange: true },
	//yaxis: { range: [-240, -220] },
	showlegend: true,
	height: 300,
	width: 600
};


Plotly.newPlot('energy_plot', data2, layout2, {scrollZoom: true});

}
//////////////////////////////////////////////////////////
//
// --- START OF RK4 MODIFICATIONS ---
//

/**
 * Helper function to calculate accelerations based on positions.
 * This is the core force calculation.
 * @param {number[]} in_x - Array of x positions
 * @param {number[]} in_y - Array of y positions
 * @returns {{ax: number[], ay: number[]}} - Object containing acceleration arrays
 */
function get_accelerations(in_x, in_y) {
    let out_ax = new Array(n).fill(0);
    let out_ay = new Array(n).fill(0);
    let dx, dy, r_cube;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                dx = in_x[i] - in_x[j];
                dy = in_y[i] - in_y[j];
                r_cube = Math.pow((dx * dx + dy * dy), (3 / 2));
                out_ax[i] -= G * m[j] * dx / r_cube;
                out_ay[i] -= G * m[j] * dy / r_cube;
            }
        }
    }
    return { ax: out_ax, ay: out_ay };
}

/**
 * Helper function for vector addition: arr1 + arr2 * scalar
 * @param {number[]} arr1 - Base array
 * @param {number[]} arr2 - Array to add (scaled)
 * @param {number} scalar - Scalar to multiply arr2 by
 * @returns {number[]} - The resulting new array
 */
function array_add(arr1, arr2, scalar) {
    let res = new Array(n);
    for (let i = 0; i < n; i++) {
        res[i] = arr1[i] + arr2[i] * scalar;
    }
    return res;
}

/**
 * Helper function to compute the final RK4 weighted average.
 * arr + (dt/6) * (k1 + 2*k2 + 2*k3 + k4)
 * @param {number[]} arr - The base array (e.g., x)
 * @param {number[]} k1 - The k1 array (e.g., k1_x)
 * @param {number[]} k2 - The k2 array
 * @param {number[]} k3 - The k3 array
 * @param {number[]} k4 - The k4 array
 * @param {number} dt - The time step
 * @returns {number[]} - The resulting new array
 */
function array_update(arr, k1, k2, k3, k4, dt) {
    let res = new Array(n);
    let h_over_6 = dt / 6.0;
    for (let i = 0; i < n; i++) {
        res[i] = arr[i] + h_over_6 * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i]);
    }
    return res;
}


function compute () {
    k += 1;
    t = k * dt;

    // The state is (x, y, vx, vy)
    // The derivative of the state is (vx, vy, ax, ay)
    
    // --- k1 step ---
    // Derivatives at the current state
    let k1_x = vx;
    let k1_y = vy;
    let accel1 = get_accelerations(x, y);
    let k1_vx = accel1.ax;
    let k1_vy = accel1.ay;

    // --- k2 step ---
    // State at t + dt/2, using k1
    let temp_x2 = array_add(x, k1_x, dt / 2.0);
    let temp_y2 = array_add(y, k1_y, dt / 2.0);
    let temp_vx2 = array_add(vx, k1_vx, dt / 2.0);
    let temp_vy2 = array_add(vy, k1_vy, dt / 2.0);
    
    // Derivatives at the k2 state
    let k2_x = temp_vx2;
    let k2_y = temp_vy2;
    let accel2 = get_accelerations(temp_x2, temp_y2);
    let k2_vx = accel2.ax;
    let k2_vy = accel2.ay;

    // --- k3 step ---
    // State at t + dt/2, using k2
    let temp_x3 = array_add(x, k2_x, dt / 2.0);
    let temp_y3 = array_add(y, k2_y, dt / 2.0);
    let temp_vx3 = array_add(vx, k2_vx, dt / 2.0);
    let temp_vy3 = array_add(vy, k2_vy, dt / 2.0);

    // Derivatives at the k3 state
    let k3_x = temp_vx3;
    let k3_y = temp_vy3;
    let accel3 = get_accelerations(temp_x3, temp_y3);
    let k3_vx = accel3.ax;
    let k3_vy = accel3.ay;

    // --- k4 step ---
    // State at t + dt, using k3
    let temp_x4 = array_add(x, k3_x, dt);
    let temp_y4 = array_add(y, k3_y, dt);
    let temp_vx4 = array_add(vx, k3_vx, dt);
    let temp_vy4 = array_add(vy, k3_vy, dt);

    // Derivatives at the k4 state
    let k4_x = temp_vx4;
    let k4_y = temp_vy4;
    let accel4 = get_accelerations(temp_x4, temp_y4);
    let k4_vx = accel4.ax;
    let k4_vy = accel4.ay;

    // --- Final Update ---
    // Combine all k-values to get the new state
    x = array_update(x, k1_x, k2_x, k3_x, k4_x, dt);
    y = array_update(y, k1_y, k2_y, k3_y, k4_y, dt);
    vx = array_update(vx, k1_vx, k2_vx, k3_vx, k4_vx, dt);
    vy = array_update(vy, k1_vy, k2_vy, k3_vy, k4_vy, dt);

    // --- FIX: Tell the plot data to use the NEW x and y arrays ---
    data[0].x = x;
    data[0].y = y;
    // --- END FIX ---

    // --- Store history and update plots (same as before) ---
    for (var i = 0; i < n; i++) {
        X[i][k] = x[i];
        Y[i][k] = y[i];
    }

    energy(); // calculate energies

    T[k]=t;
    //console.log(t);
    document.getElementById("E").innerHTML = 'Total Energy: ' + E[k];
    //document.getElementById("time").innerHTML = t;
} 

//
// --- END OF RK4 MODIFICATIONS ---
//
//////////////////////////////////////////

function energy () { // energy
    var ke_sum = 0;
    var pe_sum = 0;
    var r;
    
    for (i = 0; i < n; i++) {
        pe[i] = 0;
        ke[i] = 0;
        
        // This loop calculates the potential energy for particle 'i'
        // which is needed for the init() function.
        for (j = 0; j < n; j++) {
            if (j !== i) {
                dx = x[i] - x[j];
                dy = y[i] - y[j];
                r = Math.pow(dx*dx + dy*dy, 0.5);
                pe[i] = pe[i] - G*m[i]*m[j]/r;
            }
        }
        
        // ***FIX 1:*** Kinetic Energy formula is 0.5 * m * v^2
        ke[i] = 0.5 * m[i]*(vx[i]*vx[i]+vy[i]*vy[i]);
        
        ke_sum += ke[i];
        pe_sum += pe[i]; // This sum double-counts the potential energy
    }

    KE[k] = ke_sum;
    
    // ***FIX 2:*** Divide the summed PE by 2 to correct for double-counting
    // (e.g., it counted PE(1,2) and PE(2,1) separately)
    PE[k] = pe_sum / 2.0; 

    E[k]=KE[k]+PE[k];	
}
///////////////////////////////////////////