%% Problem 4: Cross Product and Orthogonality - Template
% Description: Calculate cross products of vectors and verify orthogonality properties.

%% Part A: Calculate cross product using MATLAB's cross() function
% Description: 
% Given two vectors representing edges of a parallelogram a = [2, 3, -1] and b = [-1, 4, 2] (in meters),
% calculate the cross product c_cross = a x b using the cross() function.

% Code:
a =    % Your answer here
b =    % Your answer here
c_cross =  % Your answer here using cross() function

%% Part B: Verify orthogonality
% Description:
% Verify that c_cross is perpendicular to both a and b.
% The dot product of c_cross with either a or b should be zero.

% Code:
verify_a =  % Calculate dot(c_cross, a)
verify_b =  % Calculate dot(c_cross, b)

%% Part C: Find normal vector to a plane
% Description:
% Given three points on a plane: P1 = [0, 0, 0], P2 = [3, 0, 0], P3 = [0, 4, 2]:
% 1. Create vector v1 from P1 to P2
% 2. Create vector v2 from P1 to P3
% 3. Calculate normal vector n_normal = v1 x v2

% Code:
P1 =    % Your answer here
P2 =    % Your answer here
P3 =    % Your answer here
v1 =
v2 =
n_normal =

%% Part D: Calculate area of parallelogram
% Description:
% Calculate the area of the parallelogram spanned by vectors a and b.
% Formula: Area = |a x b| (magnitude of the cross product)

% Code:
area_parallelogram =  % Use norm() on your cross product result

%% Part E: Visualisation (Optional Extension)
% Description:
% Plot vectors a, b, and c_cross in 3D from the origin (for example, with quiver3)
% to show that c_cross is perpendicular to both a and b.

% Code:
% figure;
% quiver3(0,0,0,a(1),a(2),a(3),0,'b','LineWidth',1.5); hold on;
% quiver3(0,0,0,b(1),b(2),b(3),0,'r','LineWidth',1.5);
% quiver3(0,0,0,c_cross(1),c_cross(2),c_cross(3),0,'k','LineWidth',1.5);
% grid on; axis equal;
% xlabel('x'); ylabel('y'); zlabel('z');
% legend('a', 'b', 'a x b');
% title('Cross Product and Orthogonality in 3D');
