%% Problem 4: Area Under and Between Curves - Template
% Description: Calculate the geometric area using integration.

%% Part A: Area under a single curve
% Description: 
% Find the area under y = x * sin(x) from x = 0 to x = pi.

% Code:
syms x
y1 =    % Your answer here
area_y1 =

%% Part B: Area between two curves
% Description:
% Find the area bounded by y = x^2 and y = x.
% 1. Find the intersection points using solve(y_top == y_bottom).
% 2. Integrate the difference: (y_top - y_bottom) between those points.

% Code:
y_top =    % Your answer here
y_bottom =    % Your answer here
intersection_pts =  % Find when x == x^2
area_between =

%% Part C: Absolute Area
% Description:
% If a curve goes below the x-axis, the integral gives a negative value.
% Calculate the TOTAL area (absolute) under y = sin(x) from 0 to 2*pi.
% Hint: Integrate abs(sin(x)) or split the integral.

% Code:
area_total =

%% Part D: Visualisation (Optional Extension)
% Description:
% 1) Plot y = x and y = x^2 and shade the bounded region between intersections.
% 2) Plot y = sin(x) on [0, 2*pi] and shade the absolute area used in Part C.

% Code:
% xx = linspace(0, 1, 300);
% figure;
% subplot(1,2,1);
% plot(xx, xx, 'b', xx, xx.^2, 'r', 'LineWidth', 1.5); hold on;
% fill([xx, fliplr(xx)], [xx, fliplr(xx.^2)], [0.9 0.9 1], 'EdgeColor', 'none', 'FaceAlpha', 0.5);
% grid on; xlabel('x'); ylabel('y'); legend('y=x', 'y=x^2');
% title('Area Between y=x and y=x^2');
%
% subplot(1,2,2);
% x2 = linspace(0, 2*pi, 600);
% y2 = sin(x2);
% plot(x2, y2, 'k', 'LineWidth', 1.5); hold on;
% area(x2, abs(y2), 'FaceAlpha', 0.3, 'LineStyle', 'none');
% grid on; xlabel('x'); ylabel('y');
% title('Absolute Area Under sin(x) on [0, 2\pi]');
