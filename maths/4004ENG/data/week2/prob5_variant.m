%% Problem 5 Variant: Engineering Application - Work Done by a Force - Template
% Description: Apply vector operations to calculate work done in engineering scenarios.
% Formula: W = F . d

%% Part A: Simple case - Force parallel to displacement
% Description:
% A technician pushes a tool cart with a constant horizontal force of 65 N.
% The cart moves 12 meters in the same direction as the push.
% 1. Create force vector F_cart = [65, 0]
% 2. Create displacement vector d_cart = [12, 0]
% 3. Calculate work_A = F_cart . d_cart

% Code:
F_cart =    % Your answer here
d_cart =    % Your answer here
work_A =    % Your answer here using dot() function

%% Part B: Force at an angle to displacement
% Description:
% A student pulls lab equipment with a force of 90 N at 25 deg above horizontal.
% The equipment moves 18 meters horizontally.
% 1. Convert angle to radians (theta_rad)
% 2. Resolve force into components: F_x = |F|*cos(theta), F_y = |F|*sin(theta)
% 3. Create force vector F_pull = [F_x, F_y]
% 4. Create displacement vector d_move = [18, 0]
% 5. Calculate work_B = F_pull . d_move

% Code:
F_mag =    % Your answer here
theta_deg =    % Your answer here
dist =    % Your answer here
theta_rad =
F_x =
F_y =
F_pull = [ , ]
d_move =    % Your answer here
work_B =

%% Part C: 3D case - Drone lifting a package
% Description:
% A drone applies force F = [180, -120, 650] N to move a package
% through displacement d = [4, 6, 9] m.
% Calculate work_C_3D.

% Code:
F_drone =    % Your answer here
d_package =    % Your answer here
work_C_3D =

%% Part D: Negative work case - Friction
% Description:
% A kinetic friction force of 30 N acts opposite to the direction of motion (11 meters).
% 1. Create friction force vector F_friction = [-30, 0] (negative x-direction)
% 2. Create displacement vector d_block = [11, 0] (positive x-direction)
% 3. Calculate work_D_friction

% Code:
F_friction =    % Your answer here
d_block =    % Your answer here
work_D_friction =
