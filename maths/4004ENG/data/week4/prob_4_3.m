%% Problem 3: Gradients and Tangent Lines - Template
% Description: Calculate the gradient at a point and find the equation of the tangent line.

%% Background:
% The equation of a tangent line to a curve f(x) at point x = a is:
% y = f(a) + f'(a) * (x - a)

%% Part A: Calculate the Gradient
% Description: 
% Given f(x) = x^3 - 4*x^2 + 5, calculate the gradient (derivative) at x = 3.

% Code:
syms x
f =    % Your answer here
df =
m_gradient =  % Substitute x=3 into df and convert to double

%% Part B: Evaluate the Function
% Description:
% Calculate the y-coordinate of the function at x = 3.

% Code:
y_coord =  % Substitute x=3 into f and convert to double

%% Part C: Equation of the Tangent Line
% Description:
% Using the formula y = y_coord + m_gradient * (x - 3), 
% create the symbolic expression for the tangent line 'y_tangent'.

% Code:
y_tangent =

%% Part D: Find the Normal Gradient
% Description:
% The gradient of the normal line is the negative reciprocal of the tangent gradient.
% m_normal = -1 / m_gradient. Calculate m_normal.

% Code:
m_normal =

%% Part E: Visualisation (Optional Extension)
% Description:
% Plot f(x), the tangent line, and the normal line around x = 3,
% and mark the point of tangency (3, y_coord).

% Code:
% x_vals = linspace(0, 6, 300);
% y_func = double(subs(f, x, x_vals));
% y_tan_vals = double(subs(y_tangent, x, x_vals));
% y_norm_vals = m_normal * (x_vals - 3) + y_coord;
% figure;
% plot(x_vals, y_func, 'b', 'LineWidth', 1.5); hold on;
% plot(x_vals, y_tan_vals, 'r--', 'LineWidth', 1.5);
% plot(x_vals, y_norm_vals, 'k-.', 'LineWidth', 1.5);
% plot(3, y_coord, 'mo', 'MarkerFaceColor', 'm');
% grid on;
% xlabel('x'); ylabel('y');
% legend('f(x)', 'Tangent line', 'Normal line', 'Tangency point');
% title('Function, Tangent, and Normal at x = 3');
