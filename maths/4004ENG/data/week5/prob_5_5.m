%% Problem 5: Engineering Application - Work Done - Template
% Description: Use integration to calculate work done by a variable force.

%% Background:
% Work (W) is the integral of force (F) over distance (x):
% W = integral from x1 to x2 of F(x) dx

%% Part A: Symbolic Calculation
% Description: 
% A spring exerts a force F(x) = k*x, where k = 500 N/m.
% Calculate the work done to compress the spring from x = 0 to x = 0.2 meters.

% Code:
syms x
k =    % Your answer here
F_spring =    % Your answer here
work_spring =

%% Part B: Variable Force (Atmospheric Pressure)
% Description:
% A piston moves against a force that varies with position: F(x) = 100 / (1 + x).
% Calculate the work done as the piston moves from x = 1 to x = 5 meters.

% Code:
F_piston =    % Your answer here
work_piston =

%% Part C: Numerical Approach
% Description:
% For a more complex force function F_ext = exp(x) * cos(x^2),
% calculate the work done from x = 0 to x = 2 using numerical integration.

% Code:
F_ext =    % Your answer here
work_ext =

%% Part D: Result Conversion
% Description:
% Convert all results to numeric values (double).

% Code:
W_spring_num =
W_piston_num =
W_ext_num =
