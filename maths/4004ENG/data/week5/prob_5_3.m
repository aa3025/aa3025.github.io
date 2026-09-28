%% Problem 3: Numerical Integration - Template
% Description: Use the integral() function for numerical quadrature.

%% Part A: Define anonymous function
% Description: 
% Create a function handle 'f_num' for f(x) = exp(-x^2) * cos(x).
% Use element-wise operators (.^ and .*)!

% Code:
f_num =    % Your answer here

%% Part B: Perform numerical integration
% Description:
% Calculate the definite integral of f_num from x = 0 to x = 2.
% Use the integral() function.

% Code:
result_0_2 =

%% Part C: Improper Integrals (to infinity)
% Description:
% Use integral() to find the area under f_num from x = 0 to x = inf.

% Code:
result_inf =

%% Part D: Comparison
% Description:
% Calculate the same integral (Part B) using symbolic integration and 
% compare the results. Note: Numerical integration is often faster for 
% complex functions.

% Code:
syms x
f_sym =    % Your answer here
result_sym =    % Your answer here
diff_val =    % Your answer here
