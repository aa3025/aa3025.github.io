// numerical simulation of the initial value problem of gravitationally interacting objects of the same mass
// integrated in time using leapfrog (DKD) numerical scheme
// Alex Pedcenko, 2020
var n = 6;
var G = 1, i, j, theta = [], t=0, dx, dy, r_cube, v02 = [], X = [], Y = [], x = [], y = [], KE = [0], PE = [0], E = [];
var vx = [], vy = [], ax = [], ay = [], pe = [], ke = [], lines = [], coeff;
var k = 0; //iterations counter
var dt, dt2, t;

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

n = document.getElementById('N').value;
dt = document.getElementById('timestep').value;
coeff = document.getElementById('coeff').value;
dt2=dt/2;

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

function compute () {

k += 1;
t = k * dt;
// Lepfrog (Leapfrog)

// Leapfrog 1st half-step (Drift)
for (i = 0; i < n; i++) {
	x[i] = x[i] + vx[i]*dt2;
	y[i] = y[i] + vy[i]*dt2;
}

// forces (Kick)
for (i = 0; i < n; i++) {
	ax[i]=0;
	ay[i]=0;
for (j = 0; j < n; j++) {
      if (j !== i) {
         dx = x[i] - x[j];
         dy = y[i] - y[j];
	 r_cube = Math.pow((dx*dx + dy*dy),(3/2));
         ax[i] = ax[i] - G*m[j]*dx/r_cube; 
         ay[i] = ay[i] - G*m[j]*dy/r_cube; 
      		}
	}
}

// Leapfrog 2nd half-step (Drift)
for (var i = 0; i < n; i++) {
	vx[i] = vx[i] + ax[i]*dt;
	vy[i] = vy[i] + ay[i]*dt;

	x[i] = x[i] + vx[i]*dt2;
	y[i] = y[i] + vy[i]*dt2;

	X[i][k] = x[i];
	Y[i][k] = y[i];
}

energy(); // calculate energies

T[k]=t;
//console.log(t);
document.getElementById("E").innerHTML = 'Total Energy: ' + E[k];
//document.getElementById("time").innerHTML = t;

} 


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
