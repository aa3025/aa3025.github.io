%% Problem 5: Physics Simulation - Free Fall with Drag - Template
% Description: Implement Euler's method to simulate velocity in free fall.

%% Background:
% A skydiver (m = 80 kg) falls under gravity (g = 9.81 m/s^2).
% Air resistance provides a drag force Fd = -c*v, where c = 15 kg/s.
% The equation of motion is: dv/dt = g - (c/m)*v
% The terminal velocity is reached when dv/dt = 0.

%% Part A: Set physical parameters
% Description: 
% Set m = 80, g = 9.81, c = 15.
% Set initial velocity v0 = 0, step size h = 0.1, and total time T = 20.
% Calculate the number of steps: N = T / h.

% Code:
m =    % Your answer here
g =    % Your answer here
c =    % Your answer here
v0 =    % Your answer here
h =    % Your answer here
T =    % Your answer here
N =

%% Part B: Define the ODE function handle
% Description:
% Define the function handle f(t, v) = g - (c/m) * v.

% Code:
f =    % Your answer here

%% Part C: Implement Euler's Method
% Description:
% Use a loop to calculate the velocity 'v' over N steps.
% Store the final velocity at T = 20 in 'v_final'.

% Code:
v =    % Your answer here
t =    % Your answer here
for i = 1:N
    v =
    t =    % Your answer here
end
v_final =

%% Part D: Compare with Terminal Velocity
% Description:
% Calculate the theoretical terminal velocity v_term = (m * g) / c.
% Calculate the difference between v_final and v_term.

% Code:
v_term =
diff_terminal =

%% Part E: Visualisation (Optional Extension)
% Description:
% Store velocity over time and plot v(t) with a horizontal line at v_term
% to show approach to terminal velocity.

% Code:
% t_vals = 0:h:T;
% v_vals = zeros(size(t_vals));
% v_vals(1) = v0;
% for k = 1:N
%     v_vals(k+1) = v_vals(k) + h * f(t_vals(k), v_vals(k));
% end
% figure;
% plot(t_vals, v_vals, 'b', 'LineWidth', 1.5); hold on;
% yline(v_term, 'r--', 'LineWidth', 1.5);
% grid on; xlabel('Time (s)'); ylabel('Velocity (m/s)');
% legend('Euler velocity', 'Terminal velocity');
% title('Skydiver Velocity Approaching Terminal Speed');
