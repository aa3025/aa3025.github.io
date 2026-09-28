%% Problem 5: Engineering Optimization - Template
% Description: Use fminbnd to minimize a material cost function.

%% Background:
% You need to design an open-top cylindrical tank with a fixed volume of 10 m^3.
% The surface area (material used) is given by: A(r) = pi*r^2 + (2*V)/r
% where r is the radius and V = 10.

%% Part A: Define the cost function
% Description: 
% Define the surface area as an anonymous function 'A' of radius 'r'.
% Important: Use element-wise operators (.* and .^ and ./) for fminbnd.

% Code:
V =    % Your answer here
A =    % Your answer here

%% Part B: Perform numerical optimization
% Description:
% Use the fminbnd() solver to find the radius 'r_min' that minimizes 
% the surface area. Search in the range [0.1, 5] meters.

% Code:
r_min =

%% Part C: Calculate the minimum area
% Description:
% Calculate the surface area 'A_min' at the optimal radius.

% Code:
A_min =

%% Part D: Determine height
% Description:
% Given the optimal radius, calculate the corresponding height 'h_min'.
% Formula: h = V / (pi * r^2)

% Code:
h_min =

%% Part E: Visualisation (Optional Extension)
% Description:
% Plot A(r) over r in [0.1, 5] and mark (r_min, A_min).

% Code:
% r_vals = linspace(0.1, 5, 400);
% A_vals = A(r_vals);
% figure;
% plot(r_vals, A_vals, 'b', 'LineWidth', 1.5); hold on;
% plot(r_min, A_min, 'ro', 'MarkerFaceColor', 'r');
% grid on;
% xlabel('r (m)'); ylabel('A(r) (m^2)');
% legend('A(r)', 'Minimum');
% title('Surface Area vs Radius for Open-Top Cylinder');
