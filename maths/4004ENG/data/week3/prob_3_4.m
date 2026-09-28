%% Problem 4: Solving Systems of Equations - Template
% Description: Solve systems of linear equations using matrix methods.

%% Part A: Solving a 2x2 system
% Description: 
% Solve the following system:
% 2x + 3y = 8
% 4x - y = 2
% 1. Create coefficient matrix A
% 2. Create constant vector b
% 3. Solve for x_sol using the backslash operator (\)

% Code:
A = [  ,  ;  ,  ]
b = [  ;  ]
x_sol_2x2 =

%% Part B: Solving a 3x3 system
% Description:
% Solve the following system:
% x + y + z = 6
% 2y + 5z = -4
% 2x + 5y - z = 27
% Use the linsolve() function.

% Code:
A3 = [  ,  ,  ;  ,  ,  ;  ,  ,  ]
b3 = [  ;  ;  ]
x_sol_3x3 =

%% Part C: Verification by multiplication
% Description:
% Verify your 3x3 solution by calculating A3 * x_sol_3x3.
% This should equal b3.

% Code:
b3_check =

%% Part D: Matrix Inversion Method
% Description:
% Solve the 2x2 system from Part A again, but this time using the formula:
% x = A^-1 * b

% Code:
x_sol_inv =

%% Part E: Visualisation (Optional Extension)
% Description:
% Plot the two Part A equations as lines and mark the intersection point
% from x_sol_2x2 to confirm the solution graphically.

% Code:
% x_plot = linspace(-2, 4, 200);
% y_eq1 = (8 - 2*x_plot) / 3;    % 2x + 3y = 8
% y_eq2 = 4*x_plot - 2;          % 4x - y = 2  => y = 4x - 2
% figure;
% plot(x_plot, y_eq1, 'b', 'LineWidth', 1.5); hold on;
% plot(x_plot, y_eq2, 'r', 'LineWidth', 1.5);
% plot(x_sol_2x2(1), x_sol_2x2(2), 'ko', 'MarkerFaceColor', 'k');
% grid on;
% xlabel('x'); ylabel('y');
% legend('2x + 3y = 8', '4x - y = 2', 'Intersection');
% title('Graphical Verification of 2x2 Linear System');
