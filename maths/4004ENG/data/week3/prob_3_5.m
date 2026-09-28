%% Problem 5: Geometric Transformations - Template
% Description: Apply transformation matrices to 2D geometric shapes.

%% Part A: Define a shape
% Description: 
% Define a triangle with vertices at (0,0), (2,0), and (1,2).
% Store the vertices as columns in a matrix P = [x1, x2, x3; y1, y2, y3].

% Code:
P = [  ,  ,  ;  ,  ,  ]

%% Part B: Scaling Transformation
% Description:
% Create a scaling matrix S that doubles the size of the shape in both x and y.
% Formula: S = [sx, 0; 0, sy] where sx=sy=2.
% Apply the transformation: P_scaled = S * P.

% Code:
S =    % Your answer here
P_scaled =

%% Part C: Rotation Transformation
% Description:
% Create a rotation matrix R to rotate the original shape P by 45 degrees counter-clockwise.
% Formula: R = [cos(theta), -sin(theta); sin(theta), cos(theta)]
% Note: Use deg2rad(45) to convert to radians.

% Code:
theta =    % Your answer here
R =    % Your answer here
P_rotated =

%% Part D: Visualization (Conceptual)
% Description:
% To plot the original triangle, we use: plot([P(1,:) P(1,1)], [P(2,:) P(2,1)], 'b-')
% Plot the rotated triangle P_rotated in red.

% Code:
% hold on
% plot([P(1,:) P(1,1)], [P(2,:) P(2,1)], 'b-') % Original blue
% plot([P_rotated(1,:) P_rotated(1,1)], [P_rotated(2,:) P_rotated(2,1)], 'r-') % Rotated red
% axis equal
