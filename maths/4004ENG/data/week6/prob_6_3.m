%% Problem 3: Complex Roots and De Moivre's Theorem - Template
% Description: Find all 5 roots of z^5 = 32 and plot them on the Argand diagram.

%% Background:
% According to De Moivre's Theorem, the nnd roots of a complex number 
% w = r * exp(i * theta) are given by:
% z_k = r^(1/n) * exp(i * (theta + 2*pi*k) / n) for k = 0, 1, ..., n-1

%% Part A: Define the target number
% Description: 
% We want to find the roots of z^5 = 32. 
% 1. Set w = 32.
% 2. Find magnitude r_w and angle theta_w.

% Code:
w =    % Your answer here
r_w =
theta_w =

%% Part B: Calculate the 5 roots
% Description:
% Use a loop to calculate the 5 roots (k = 0 to 4).
% Formula: z(k+1) = r_w^(1/5) * exp(1i * (theta_w + 2*pi*k) / 5)

% Code:
z_roots =    % Pre-allocate space
for k = 0:4
    z_roots(k+1) =  
end

%% Part C: Visualize on Argand Diagram
% Description:
% Plot the roots as points on the complex plane.
% Use: plot(real(z_roots), imag(z_roots), 'ro')

% Code:
% plot(  ,  , 'ro');
% grid on; axis equal;
% xlabel('Real'); ylabel('Imaginary');
% title('5th Roots of 32');

%% Part D: Sum of Roots
% Description:
% A property of nth roots is that their sum is always zero.
% Calculate the sum of your 5 roots to verify.

% Code:
sum_roots =
