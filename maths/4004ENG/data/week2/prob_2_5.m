%% Problem 5: Engineering Application - Work Done by a Force - Template
% Description: Apply vector operations to calculate work done in engineering scenarios.
% Formula: W = F . d

%% Part A: Simple case - Force parallel to displacement
% Description: 
% A worker pushes a crate with a constant horizontal force of 50 N.
% The crate moves 10 meters in the same direction as the push.
% 1. Create force vector F_push = [50, 0]
% 2. Create displacement vector d_crate = [10, 0]
% 3. Calculate work_A = F_push . d_crate

% Code:
F_push =    % Your answer here
d_crate =    % Your answer here
work_A =  % Your answer here using dot() function

%% Part B: Force at an angle to displacement
% Description:
% A person pulls a suitcase with a force of 80 N at 30 deg above horizontal.
% The suitcase moves 15 meters horizontally.
% 1. Convert angle to radians (theta_rad)
% 2. Resolve force into components: F_x = |F|*cos(theta), F_y = |F|*sin(theta)
% 3. Create force vector F_suitcase = [F_x, F_y]
% 4. Create displacement vector d_suitcase = [15, 0]
% 5. Calculate work_B = F_suitcase . d_suitcase

% Code:
F_mag =    % Your answer here
theta_deg =    % Your answer here
dist =    % Your answer here
theta_rad =
F_x =
F_y =
F_suitcase = [ ,  ]
d_suitcase =    % Your answer here
work_B =

%% Part C: 3D case - Crane lifting a load
% Description:
% A crane exerts force F = [200, 150, 800] N to move a load d = [5, -3, 10] m.
% Calculate work_C_3D.

% Code:
F_crane =    % Your answer here
d_load =    % Your answer here
work_C_3D =

%% Part D: Negative work case - Friction
% Description:
% A kinetic friction force of 25 N acts opposite to the direction of motion (8 meters).
% 1. Create friction force vector F_friction = [-25, 0] (negative x-direction)
% 2. Create displacement vector d_block = [8, 0] (positive x-direction)
% 3. Calculate work_D_friction

% Code:
F_friction =    % Your answer here
d_block =    % Your answer here
work_D_friction =
