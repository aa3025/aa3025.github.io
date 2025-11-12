// numerical simulation of the initial value problem of Lennard-Jones's-potential-interacting-objects of the same mass
// integrated in time using leapfrog (DKD) numerical scheme
// Alex Pedcenko, 2020
var n = 9;
var G = 1, i, j, theta = [], t=0, dx, dy, r_cube, v02 = [], X = [], Y = [], x = [], y = [], KE = [0], PE = [0], E = [];
var vx = [], vy = [], ax = [], ay = [], pe = [], ke = [], lines = [], coeff;
var k = 0; //iterations counter
var dt, dt2, t;

var T = []; // time array
var m = new Array(n);
var data = [];

var s = 1;
var e;

slider = document.getElementById("sliderbar");
e = slider.value;

var sigma6=Math.pow(s,6);
var sigma12=Math.pow(s,12);
var step=s*Math.pow(2,(1/6));

var v0 = []; // initial orbital speeds

var k1=0;
var loss=0.005;

//console.log('n='+oFormObject.elements["N"].value);
dt=0.001;
init();


requestAnimationFrame(update);

function update () { // update plot
	compute();

//if( (k % 2) == 0) {
	Plotly.redraw('graph');
//	Plotly.redraw('energy_plot');
//}
	//setTimeout(function(){ requestAnimationFrame(update); }, 1);


//if ( E[k] > 0) {
//Plotly.relayout( "energy_plot", {
//    yaxis: {autorange: true}
//});
//}

if(Math.max.apply(null, x.map(Math.abs)) > 15 ) {
Plotly.relayout( "graph", {
    xaxis: {constraint: 'domain'},
    yaxis: {scaleanchor: 'x'}
});


}
	requestAnimationFrame(update);

	
}





///////////////////////////////////////////////////
function init () {
N = document.getElementById('N').value;
n = N * N;
dt = document.getElementById('timestep').value;

dt2=dt/2;

slider = document.getElementById("sliderbar");
e = slider.value;



//console.log(e);

x = [], y = [], KE = 0, PE = 0, E = [];
vx = [], vy = [], ax = [], ay = [], pe = [], ke = [], lines = [], X = [], Y = [];
KE = [0], PE = [0];
k = 0;
k1=0;

T = []; // time array
m = new Array(n);
x = new Array(n);
y = new Array(n);

for (var i = 0; i < N; i++) { 
    X[i] = []; 
    Y[i] = [];
}

data = [];
v0 = []; // initial orbital speeds

s = 1;
//e = 2;
sigma6=Math.pow(s,6);
sigma12=Math.pow(s,12);
step=s*Math.pow(2,(1/6));

var l = 0; // l is particle index

for (i = 0; i < N; i++) {
	for (j = 0; j < N; j++) {
		x[l]=(i-(N-1)/2)*step; // arranging particles on 2D rectangular grid
		y[l]=(j-(N-1)/2)*step;
		
		v0[l]=0;
		vx[l]=0;
		vy[l]=0;
		m[l]=1;
		l++;
	}
}

//energy();
init_plot();
//init_plot2();

}

/////////////////////////////////////////////////////////


function init_plot() {
Plotly.purge('graph');
var trace = {
    x: x,
    y: y,
    type: 'scatter',
    mode: 'markers',
    marker: { size: 10 }
};

data.push(trace);


var layout = {
	xaxis: { range: [ -15, 15 ] },
	yaxis: { range: [-15, 15] },
	showlegend: false,
	height: 600,
	width: 600
};


Plotly.newPlot('graph', data, layout, {scrollZoom: true});
}
//////////////////////////////////////////////////////////

function init_plot2() {
Plotly.purge('energy_plot');
E=[]; T=[];
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


//data2 = [ trace2, trace3, trace4 ];
data2 = [ trace4 ];

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

//console.log(e);
if (document.getElementById("damping").checked == true) {
    damp = 1; 
    }else{
    damp = 0;
}

k += 1;
//console.log(k);
t = k * dt;
// Leapfrog 

// Leapfrog 1st half-step
for (i = 0; i < n; i++) {
	x[i] = x[i] + vx[i]*dt2;
	y[i] = y[i] + vy[i]*dt2;
}

// forces
for (i = 0; i < n; i++) {
	ax[i]=0;
	ay[i]=0;
for (j = 0; j < n; j++) {
      if (j !== i) {
         dx = x[i] - x[j];
         dy = y[i] - y[j];

	 r = Math.pow((dx*dx + dy*dy), 0.5);
	 r13 = Math.pow(r, 13);
	 r7 = Math.pow(r, 7);

        // F = -24 * e * ( 2*sigma12 / r13 -  sigma6 / r7);
	 F = -e*24*(sigma6/r7 - 2*sigma12/r13);

	Fx = F * dx / r;
	Fy = F * dy / r;

         ax[i] = ax[i] + Fx/m[i]; 
         ay[i] = ay[i] + Fy/m[i]; 

      		}
	}
//console.log(m);
}

// Leapfrog 2nd half-step
for (var i = 0; i < n; i++) {
	vx[i] = vx[i] + ax[i]*dt;
	vy[i] = vy[i] + ay[i]*dt;

	x[i] = x[i] + vx[i]*dt2;
	y[i] = y[i] + vy[i]*dt2;

	v0[i] = Math.pow((vx[i]*vx[i]+vy[i]*vy[i]),0.5);
	var sinus = vy[i]/v0[i];
	var cosinus = vx[i]/v0[i];
	v0[i] = v0[i]*(1 - loss*damp);
	vx[i] = v0[i]*cosinus;
	vy[i] = v0[i]*sinus;
}
//if( (k % 100) == 0) {
//	energy(); // calculate energies
//}


//document.getElementById("time").innerHTML = t;

} 


//////////////////////////////////////////

function energy () { // energy
// P.E.
//PE = 0;
//KE = 0;
for (i = 0; i < n; i++) {
pe[i] = 0;
ke[i] = 0;
	for (j = 0; j < n; j++) {
		if (j !== i) {
			dx = x[i] - x[j];
		        dy = y[i] - y[j];
			r = Math.pow(dx*dx + dy*dy, 0.5);
			r6=Math.pow(r,6);
			r12=Math.pow(r,12);
			pe[i] = pe[i] -(4*e*sigma6*(sigma6 - x^6))/x^12;
			//console.log(pe[i]);
		}
	}
ke[i] = m[i]*(vx[i]*vx[i]+vy[i]*vy[i])/2;

}

// K.E. and sum of P.E.

KE[k1] = ke.reduce((a, b) => a + b, 0);
PE[k1] = pe.reduce((a, b) => a + b, 0);

E[k1]=KE[k1]+PE[k1];
T[k1]=t;
document.getElementById("E").innerHTML = 'Total Energy: ' + E[k1];
k1++;
	
}
///////////////////////////////////////////
