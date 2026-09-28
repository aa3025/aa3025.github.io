%% Problem 4: Newton-Raphson Method - Template
% Description: Implement an iterative algorithm to find the root of a function.

%% Background:
% To find the root of f(x) = 0, the Newton-Raphson iteration is:
% x_next = x - f(x) / f'(x)

%% Part A: Define the function and its derivative
% Description: 
% Find the root of f(x) = x^2 - 2. (The root should be sqrt(2)).
% 1. Create function handle f = @(x) x^2 - 2
% 2. Create function handle df = @(x) 2*x

% Code:
f =    % Your answer here
df =    % Your answer here

%% Part B: Perform one iteration
% Description:
% Starting with an initial guess x0 = 1.5, calculate the next value x1.

% Code:
x0 =    % Your answer here
x1 =

%% Part C: Perform five iterations using a loop
% Description:
% Implement a loop to perform 5 iterations of the Newton-Raphson method.
% Store the final result in 'x_final'.

% Code:
x =    % Reset guess
for i = 1:5
    x =
end
x_final =

%% Part D: Check Error
% Description:
% Calculate the absolute error between your x_final and the true value sqrt(2).

% Code:
err =

%% Part E: Visualisation (Optional Extension)
% Description:
% Track iteration values and plot iteration number versus absolute error
% relative to sqrt(2) to visualize Newton-Raphson convergence.

% Code:
% x_hist = zeros(1, 6);
% x_hist(1) = x0;
% x_tmp = x0;
% for k = 1:5
%     x_tmp = x_tmp - f(x_tmp) / df(x_tmp);
%     x_hist(k+1) = x_tmp;
% end
% err_hist = abs(x_hist - sqrt(2));
% figure;
% semilogy(0:5, err_hist, 'o-', 'LineWidth', 1.5);
% grid on; xlabel('Iteration'); ylabel('|x_n - sqrt(2)|');
% title('Newton-Raphson Convergence');
