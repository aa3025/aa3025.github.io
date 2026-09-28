%% Problem 3: Dot Product and Angle Between Vectors - Template
% Description: Calculate dot products of vectors and find the angle between them.

%% Part A: Calculate dot product using MATLAB's dot() function
% Description: 
% Given two force vectors F1 = [10, 5, -2] and F2 = [3, -4, 6] (in Newtons),
% calculate the dot product F1 . F2 using the dot() function.

% Code:
F1 =    % Your answer here
F2 =    % Your answer here
dot_F1F2 =  % Your answer here using dot() function

%% Part B: Manual dot product calculation
% Description:
% Given position vectors A = [2, -3, 1] and B = [-1, 4, 5] (in meters),
% calculate dot product manually using the formula: A.B = Ax*Bx + Ay*By + Az*Bz

% Code:
A =    % Your answer here
B =    % Your answer here
dot_AB_manual =  % Your answer here (sum of products)

%% Part C: Find angle between two vectors
% Description:
% Given velocity vectors v1 = [4, -2, 3] and v2 = [-1, 5, 2] (in m/s):
% 1. Calculate dot product dot_v1v2
% 2. Calculate magnitudes mag_v1 and mag_v2
% 3. Use formula: cos(theta) = (v1.v2) / (|v1| * |v2|)
% 4. Find theta_rad using acos()

% Code:
v1 =    % Your answer here
v2 =    % Your answer here
dot_v1v2 =
mag_v1 =
mag_v2 =
theta_rad =  % Use acos()

%% Part D: Convert angle to degrees
% Description:
% Convert the angle from radians to degrees.

% Code:
theta_deg =  % Use rad2deg() or multiply by (180/pi)

%% Part E: Visualisation (Optional Extension)
% Description:
% Plot v1 and v2 on the same 2D axes using their x and y components
% (for example, with quiver), then add labels, legend, grid, and axis equal.

% Code:
% figure;
% quiver(0, 0, v1(1), v1(2), 0, 'b', 'LineWidth', 1.5); hold on;
% quiver(0, 0, v2(1), v2(2), 0, 'r', 'LineWidth', 1.5);
% grid on; axis equal;
% xlabel('x'); ylabel('y');
% legend('v1', 'v2');
% title('2D Projection of Vectors v1 and v2');
