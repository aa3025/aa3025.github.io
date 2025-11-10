// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const canvas = document.getElementById('graphCanvas');
    const ctx = canvas.getContext('2d');
    const nodeCountInput = document.getElementById('nodeCount');
    const generateBtn = document.getElementById('generateBtn');
    const randomizeBtn = document.getElementById('randomizeBtn');
    const matrixDisplay = document.getElementById('matrixDisplay');
    const propertiesDisplay = document.getElementById('propertiesDisplay');
    const allowSelfLoopsCheckbox = document.getElementById('allowSelfLoops');
    const directedGraphCheckbox = document.getElementById('directedGraph');
    const curvedEdgesCheckbox = document.getElementById('curvedEdges');

    // Graph data
    let nodes = [];
    let adjacencyMatrix = [];
    let selectedNode = null;
    let offsetX = 0;
    let offsetY = 0;
    let isDragging = false;

    // Generate random adjacency matrix
    function generateAdjacencyMatrix(nodeCount, allowSelfLoops, isDirected) {
        const matrix = Array(nodeCount).fill().map(() => Array(nodeCount).fill(0));
        
        for (let i = 0; i < nodeCount; i++) {
            for (let j = 0; j < nodeCount; j++) {
                if (i === j) {
                    // Self-loops
                    if (allowSelfLoops && Math.random() < 0.1) {
                        matrix[i][j] = 2;
                    }
                } else {
                    // Regular connections
                    if (Math.random() < 0.3) {
                        matrix[i][j] = 1;
                        
                        // For undirected graphs, set symmetric connection
                        if (!isDirected) {
                            matrix[j][i] = 1;
                        }
                    }
                }
            }
        }
        
        return matrix;
    }

    // Create node objects with positions
    function createNodes(nodeCount) {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = Math.min(centerX, centerY) * 0.8;
        const nodes = [];
        
        for (let i = 0; i < nodeCount; i++) {
            const angle = (i / nodeCount) * 2 * Math.PI;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            
            // Generate a color based on node index
            const hue = (i * 137.5) % 360; // Golden angle for distribution
            const color = `hsl(${hue}, 70%, 65%)`;
            const textColor = `hsl(${hue}, 80%, 20%)`;
            
            nodes.push({
                id: i,
                label: String.fromCharCode(65 + i), // A, B, C, ...
                x: x,
                y: y,
                radius: 25,
                color: color,
                textColor: textColor,
                isDragging: false
            });
        }
        
        return nodes;
    }

    // Draw arrowhead for directed edges
    function drawArrowhead(x, y, angle, color) {
        const size = 10;
        
        ctx.save();
        ctx.fillStyle = color;
        ctx.translate(x, y);
        ctx.rotate(angle);
        
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-size, -size/2);
        ctx.lineTo(-size, size/2);
        ctx.closePath();
        ctx.fill();
        
        ctx.restore();
    }

    // Calculate graph properties
    function calculateGraphProperties() {
        const isDirected = directedGraphCheckbox.checked;
        const n = nodes.length;
        
        // Initialize properties object
        const properties = {
            basic: {},
            degrees: {},
            connectivity: {},
            clustering: {},
            special: {}
        };
        
        // Basic properties
        properties.basic.numNodes = n;
        let numEdges = 0;
        let numSelfLoops = 0;
        
        // Degree calculations
        const inDegrees = new Array(n).fill(0);
        const outDegrees = new Array(n).fill(0);
        const degrees = new Array(n).fill(0);
        
        // Count edges and degrees
        if (isDirected) {
            // For directed graphs
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) {
                    if (adjacencyMatrix[i][j] === 2) {
                        // Self-loop in directed graph
                        numSelfLoops++;
                        numEdges++;
                        outDegrees[i]++;
                        inDegrees[j]++;
                    } else if (adjacencyMatrix[i][j] === 1) {
                        // Regular directed edge
                        numEdges++;
                        outDegrees[i]++;
                        inDegrees[j]++;
                    }
                }
            }
            
            // For directed graphs, total degree = inDegree + outDegree
            for (let i = 0; i < n; i++) {
                degrees[i] = inDegrees[i] + outDegrees[i];
            }
        } else {
            // For undirected graphs
            for (let i = 0; i < n; i++) {
                for (let j = i; j < n; j++) {
                    if (i === j) {
                        // Self-loop
                        if (adjacencyMatrix[i][j] === 2) {
                            numSelfLoops++;
                            numEdges++;
                            degrees[i]++;
                        }
                    } else {
                        // Regular edge
                        if (adjacencyMatrix[i][j] === 1) {
                            numEdges++;
                            degrees[i]++;
                            degrees[j]++;
                        }
                    }
                }
            }
            
            inDegrees.fill(0);
            outDegrees.fill(0);
        }
        
        properties.basic.numEdges = numEdges;
        properties.basic.numSelfLoops = numSelfLoops;
        
        // Calculate density
        const maxEdges = isDirected ? n * (n - 1) : n * (n - 1) / 2;
        properties.basic.density = maxEdges > 0 ? (numEdges / maxEdges).toFixed(4) : 0;
        
        // Degree properties
        properties.degrees.list = [];
        let degreeSum = 0;
        let maxDegree = 0;
        let minDegree = n > 0 ? Infinity : 0;
        
        for (let i = 0; i < n; i++) {
            const nodeDegree = degrees[i];
            degreeSum += nodeDegree;
            maxDegree = Math.max(maxDegree, nodeDegree);
            minDegree = Math.min(minDegree, nodeDegree);
            
            properties.degrees.list.push({
                node: nodes[i].label,
                degree: nodeDegree,
                inDegree: isDirected ? inDegrees[i] : 'N/A',
                outDegree: isDirected ? outDegrees[i] : 'N/A'
            });
        }
        
        properties.degrees.average = n > 0 ? (degreeSum / n).toFixed(2) : '0';
        properties.degrees.max = maxDegree;
        properties.degrees.min = n > 0 ? minDegree : 0;
        
        // Connectivity
        properties.connectivity.connected = isGraphConnected();
        properties.connectivity.complete = isCompleteGraph(n, numEdges, isDirected);
        properties.connectivity.regular = isRegularGraph(degrees);
        
        // Eulerian properties
        properties.special.eulerian = isEulerian(degrees, isDirected, inDegrees, outDegrees, properties.connectivity.connected);
        properties.special.semiEulerian = isSemiEulerian(degrees, isDirected, inDegrees, outDegrees, properties.connectivity.connected);

        properties.special.hamiltonian = isHamiltonian();
        
        // Clustering coefficients
        const clusteringResults = calculateClusteringCoefficients();
        properties.clustering.global = clusteringResults.global.toFixed(4);
        properties.clustering.averageLocal = clusteringResults.averageLocal.toFixed(4);
        properties.clustering.local = clusteringResults.local;
        
        return properties;
    }
    
    // Check if graph is connected using BFS
    function isGraphConnected() {
        if (nodes.length === 0) return false;
        if (nodes.length === 1) return true;
        
        const visited = new Array(nodes.length).fill(false);
        const queue = [0];
        visited[0] = true;
        let visitedCount = 1;
        
        while (queue.length > 0) {
            const current = queue.shift();
            
            for (let i = 0; i < nodes.length; i++) {
                if (!visited[i] && (adjacencyMatrix[current][i] === 1 || adjacencyMatrix[i][current] === 1)) {
                    visited[i] = true;
                    visitedCount++;
                    queue.push(i);
                }
            }
        }
        
        return visitedCount === nodes.length;
    }
    
    // Check if graph is complete
    function isCompleteGraph(n, numEdges, isDirected) {
        if (n === 0) return false;
        
        // Check if there are any self-loops
        for (let i = 0; i < n; i++) {
            if (adjacencyMatrix[i][i] === 2) {
                return false;
            }
        }
        
        const expectedEdges = isDirected ? n * (n - 1) : n * (n - 1) / 2;
        return numEdges === expectedEdges;
    }

    // Check if graph is regular
    function isRegularGraph(degrees) {
        if (degrees.length === 0) return false;
        const firstDegree = degrees[0];
        return degrees.every(degree => degree === firstDegree);
    }
    
    // Check if graph is Eulerian
    function isEulerian(degrees, isDirected, inDegrees, outDegrees, connected) {
        if (!connected) return false;
        
        if (isDirected) {
            // For directed graphs: all vertices must have equal in and out degree
            for (let i = 0; i < inDegrees.length; i++) {
                if (inDegrees[i] !== outDegrees[i]) return false;
            }
            return true;
        } else {
            // For undirected graphs: all vertices must have even degree
            return degrees.every(degree => degree % 2 === 0);
        }
    }
    
    // Check if graph is semi-Eulerian
    function isSemiEulerian(degrees, isDirected, inDegrees, outDegrees, connected) {
        if (!connected) return false;
        
        if (isDirected) {
            // For directed graphs: exactly one vertex has outDegree = inDegree + 1,
            // exactly one vertex has inDegree = outDegree + 1, and all others have equal in/out degree
            let startCandidates = 0;
            let endCandidates = 0;
            
            for (let i = 0; i < inDegrees.length; i++) {
                const diff = outDegrees[i] - inDegrees[i];
                if (diff === 1) startCandidates++;
                else if (diff === -1) endCandidates++;
                else if (diff !== 0) return false;
            }
            
            return startCandidates === 1 && endCandidates === 1;
        } else {
            // For undirected graphs: exactly 0 or 2 vertices have odd degree
            const oddDegreeCount = degrees.filter(degree => degree % 2 !== 0).length;
            return oddDegreeCount === 0 || oddDegreeCount === 2;
        }
    }

    // Check if graph is Hamiltonian
    function isHamiltonian() {
        if (nodes.length === 0) return false;
        if (nodes.length === 1) return true;
        
        const n = nodes.length;
        
        // Use Dirac's theorem: if n ≥ 3 and every vertex has degree ≥ n/2, then Hamiltonian
        if (n >= 3) {
            const minDegreeRequired = Math.floor(n / 2);
            for (let i = 0; i < n; i++) {
                let degree = 0;
                for (let j = 0; j < n; j++) {
                    if (adjacencyMatrix[i][j] === 1 || adjacencyMatrix[j][i] === 1) {
                        degree++;
                    }
                }
                if (degree < minDegreeRequired) {
                    return "Unknown";
                }
            }
            return true;
        }
        
        return hasHamiltonianCycle() ? true : "Unknown";
    }

    // Check for Hamiltonian cycle using backtracking
    function hasHamiltonianCycle() {
        const n = nodes.length;
        if (n === 0) return false;
        
        const path = new Array(n).fill(-1);
        path[0] = 0;
        
        if (!hamiltonianUtil(path, 1)) {
            return false;
        }
        return true;
    }

    // Utility function for Hamiltonian cycle backtracking
    function hamiltonianUtil(path, pos) {
        const n = nodes.length;
        
        if (pos === n) {
            return adjacencyMatrix[path[pos - 1]][path[0]] === 1;
        }
        
        for (let v = 1; v < n; v++) {
            if (isSafe(v, path, pos)) {
                path[pos] = v;
                
                if (hamiltonianUtil(path, pos + 1)) {
                    return true;
                }
                
                path[pos] = -1;
            }
        }
        return false;
    }

    // Check if vertex can be added to Hamiltonian path
    function isSafe(v, path, pos) {
        if (adjacencyMatrix[path[pos - 1]][v] === 0) {
            return false;
        }
        
        for (let i = 0; i < pos; i++) {
            if (path[i] === v) {
                return false;
            }
        }
        
        return true;
    }

    // Calculate clustering coefficients
    function calculateClusteringCoefficients() {
        const n = nodes.length;
        const localCoefficients = [];
        let globalSum = 0;
        let totalTriangles = 0;
        let totalConnectedTriples = 0;

        for (let i = 0; i < n; i++) {
            const neighbors = [];
            
            for (let j = 0; j < n; j++) {
                if (i !== j && adjacencyMatrix[i][j] === 1) {
                    neighbors.push(j);
                }
            }
            
            const k = neighbors.length;
            
            if (k < 2) {
                localCoefficients.push({ node: nodes[i].label, coefficient: 0 });
                continue;
            }
            
            let triangles = 0;
            for (let a = 0; a < k; a++) {
                for (let b = a + 1; b < k; b++) {
                    if (adjacencyMatrix[neighbors[a]][neighbors[b]] === 1) {
                        triangles++;
                    }
                }
            }
            
            const maxPossibleTriangles = k * (k - 1) / 2;
            const localCoefficient = maxPossibleTriangles > 0 ? triangles / maxPossibleTriangles : 0;
            
            localCoefficients.push({ node: nodes[i].label, coefficient: localCoefficient });
            globalSum += localCoefficient;
            
            totalTriangles += triangles;
            totalConnectedTriples += k * (k - 1) / 2;
        }
        
        const globalCoefficient = totalConnectedTriples > 0 ? totalTriangles / totalConnectedTriples : 0;
        const averageLocalCoefficient = n > 0 ? globalSum / n : 0;
        
        return {
            global: globalCoefficient,
            averageLocal: averageLocalCoefficient,
            local: localCoefficients
        };
    }

    // Display graph properties
    function displayGraphProperties() {
        if (nodes.length === 0 || adjacencyMatrix.length === 0) {
            propertiesDisplay.innerHTML = '<p>Generate a graph to see its properties...</p>';
            return;
        }
        
        const properties = calculateGraphProperties();
        const isDirected = directedGraphCheckbox.checked;
        
        let html = `
            <div class="properties-grid">
                <div class="property-section">
                    <h3>Basic Properties</h3>
                    <div class="property-item">
                        <span class="property-name">Number of Nodes:</span>
                        <span class="property-value">${properties.basic.numNodes}</span>
                    </div>
                    <div class="property-item">
                        <span class="property-name">Number of Edges:</span>
                        <span class="property-value">${properties.basic.numEdges}</span>
                    </div>
                    <div class="property-item">
                        <span class="property-name">Number of Self-Loops:</span>
                        <span class="property-value">${properties.basic.numSelfLoops}</span>
                    </div>
                    <div class="property-item">
                        <span class="property-name">Graph Density:</span>
                        <span class="property-value">${properties.basic.density}</span>
                    </div>
                    <div class="property-item">
                        <span class="property-name">Graph Type:</span>
                        <span class="property-value">${isDirected ? 'Directed' : 'Undirected'}</span>
                    </div>
                </div>
                
                <div class="property-section">
                    <h3>Degree Information</h3>
                    <div class="property-item">
                        <span class="property-name">Average Degree:</span>
                        <span class="property-value">${properties.degrees.average}</span>
                    </div>
                    <div class="property-item">
                        <span class="property-name">Maximum Degree:</span>
                        <span class="property-value">${properties.degrees.max}</span>
                    </div>
                    <div class="property-item">
                        <span class="property-name">Minimum Degree:</span>
                        <span class="property-value">${properties.degrees.min}</span>
                    </div>
                    <div class="degree-list">
                        ${properties.degrees.list.map(item => `
                            <div class="degree-item">
                                <span>Node ${item.node}:</span>
                                <span>${isDirected ? `in=${item.inDegree}, out=${item.outDegree}` : `degree=${item.degree}`}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="property-section">
                    <h3>Connectivity</h3>
                    <div class="property-item">
                        <span class="property-name">Connected:</span>
                        <span class="property-value ${properties.connectivity.connected ? 'true-value' : 'false-value'}">
                            ${properties.connectivity.connected ? 'Yes' : 'No'}
                        </span>
                    </div>
                    <div class="property-item">
                        <span class="property-name">Complete Graph:</span>
                        <span class="property-value ${properties.connectivity.complete ? 'true-value' : 'false-value'}">
                            ${properties.connectivity.complete ? 'Yes' : 'No'}
                        </span>
                    </div>
                    <div class="property-item">
                        <span class="property-name">Regular Graph:</span>
                        <span class="property-value ${properties.connectivity.regular ? 'true-value' : 'false-value'}">
                            ${properties.connectivity.regular ? 'Yes' : 'No'}
                        </span>
                    </div>
                </div>
                
                <div class="property-section">
                    <h3>Special Properties</h3>
                    <div class="property-item">
                        <span class="property-name">Eulerian:</span>
                        <span class="property-value ${properties.special.eulerian ? 'true-value' : 'false-value'}">
                            ${properties.special.eulerian ? 'Yes' : 'No'}
                        </span>
                    </div>
                    <div class="property-item">
                        <span class="property-name">Semi-Eulerian:</span>
                        <span class="property-value ${properties.special.semiEulerian ? 'true-value' : 'false-value'}">
                            ${properties.special.semiEulerian ? 'Yes' : 'No'}
                        </span>
                    </div>
                    <div class="property-item">
                        <span class="property-name">Hamiltonian:</span>
                        <span class="property-value ${
                            properties.special.hamiltonian === true ? 'true-value' : 
                            properties.special.hamiltonian === false ? 'false-value' : 'unknown-value'
                        }">
                            ${
                                properties.special.hamiltonian === true ? 'Yes' : 
                                properties.special.hamiltonian === false ? 'No' : 'Unknown'
                            }
                        </span>
                    </div>
                </div>
                
                <div class="property-section">
                    <h3>Clustering Coefficients</h3>
                    <div class="property-item">
                        <span class="property-name">Global Coefficient:</span>
                        <span class="property-value">${properties.clustering.global}</span>
                    </div>
                    <div class="property-item">
                        <span class="property-name">Average Local Coefficient:</span>
                        <span class="property-value">${properties.clustering.averageLocal}</span>
                    </div>
                    <div class="degree-list">
                        ${properties.clustering.local.map(item => `
                            <div class="degree-item">
                                <span>Node ${item.node}:</span>
                                <span>${item.coefficient.toFixed(4)}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        
        propertiesDisplay.innerHTML = html;
    }

    // Draw the graph
    function drawGraph() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const isDirected = directedGraphCheckbox.checked;
        const useCurvedEdges = curvedEdgesCheckbox.checked;
        
        // Draw edges
        for (let i = 0; i < nodes.length; i++) {
            for (let j = 0; j < nodes.length; j++) {
                if (adjacencyMatrix[i][j] > 0) {
                    if (i === j && adjacencyMatrix[i][j] === 2) {
                        const node = nodes[i];
                        
                        ctx.strokeStyle = '#e74c3c';
                        ctx.lineWidth = 3;
                        
                        const startAngle = Math.PI * 0.2;
                        const endAngle = Math.PI * 1.8;
                        const loopRadius = node.radius * 2;
                        
                        const cp1x = node.x + loopRadius * Math.cos(startAngle);
                        const cp1y = node.y - loopRadius * Math.sin(startAngle);
                        const cp2x = node.x + loopRadius * Math.cos(endAngle);
                        const cp2y = node.y - loopRadius * Math.sin(endAngle);
                        
                        ctx.beginPath();
                        ctx.moveTo(node.x + node.radius * Math.cos(startAngle), 
                                  node.y - node.radius * Math.sin(startAngle));
                        ctx.bezierCurveTo(
                            cp1x, cp1y,
                            cp2x, cp2y,
                            node.x + node.radius * Math.cos(endAngle),
                            node.y - node.radius * Math.sin(endAngle)
                        );
                        ctx.stroke();
                        
                        const arrowAngle = Math.PI * 1.5;
                        const arrowX = node.x + node.radius * Math.cos(endAngle);
                        const arrowY = node.y - node.radius * Math.sin(endAngle);
                        drawArrowhead(arrowX, arrowY, arrowAngle, '#e74c3c');
                    } else if (i !== j) {
                        const node1 = nodes[i];
                        const node2 = nodes[j];
                        
                        const isBidirectional = !isDirected && adjacencyMatrix[j][i] === 1;
                        
                        if (isBidirectional) {
                            ctx.strokeStyle = '#4a6ee0';
                            ctx.lineWidth = 2;
                        } else {
                            ctx.strokeStyle = '#27ae60';
                            ctx.lineWidth = 2;
                        }
                        
                        const dx = node2.x - node1.x;
                        const dy = node2.y - node1.y;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        const unitX = dx / dist;
                        const unitY = dy / dist;
                        
                        const startX = node1.x + unitX * node1.radius;
                        const startY = node1.y + unitY * node1.radius;
                        const endX = node2.x - unitX * node2.radius;
                        const endY = node2.y - unitY * node2.radius;
                        
                        if (useCurvedEdges && !isBidirectional) {
                            const midX = (startX + endX) / 2;
                            const midY = (startY + endY) / 2;
                            
                            const perpX = -unitY;
                            const perpY = unitX;
                            
                            const curveMagnitude = dist * 0.1;
                            
                            const controlX = midX + perpX * curveMagnitude;
                            const controlY = midY + perpY * curveMagnitude;
                            
                            ctx.beginPath();
                            ctx.moveTo(startX, startY);
                            ctx.quadraticCurveTo(controlX, controlY, endX, endY);
                            ctx.stroke();
                            
                            if (isDirected) {
                                const arrowAngle = Math.atan2(endY - controlY, endX - controlX);
                                drawArrowhead(endX, endY, arrowAngle, '#27ae60');
                            }
                        } else {
                            ctx.beginPath();
                            ctx.moveTo(startX, startY);
                            ctx.lineTo(endX, endY);
                            ctx.stroke();
                            
                            if (isDirected) {
                                const arrowAngle = Math.atan2(dy, dx);
                                drawArrowhead(endX, endY, arrowAngle, '#27ae60');
                            }
                        }
                    }
                }
            }
        }
        
        // Draw nodes
        for (const node of nodes) {
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            ctx.fillStyle = node.color;
            ctx.fill();
            ctx.strokeStyle = '#333';
            ctx.lineWidth = 2;
            ctx.stroke();
            
            ctx.fillStyle = node.textColor;
            ctx.font = 'bold 18px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(node.label, node.x, node.y);
        }
        
        displayGraphProperties();
    }

    // Display adjacency matrix
    function displayMatrix(matrix) {
        const allowSelfLoops = allowSelfLoopsCheckbox.checked;
        const isDirected = directedGraphCheckbox.checked;
        
        let html = '<div class="matrix-container">';
        html += '<table class="matrix-table">';
        
        // Top header row
        html += '<tr><th></th>';
        for (let i = 0; i < matrix.length; i++) {
            html += `<th>${String.fromCharCode(65 + i)}</th>`;
        }
        html += '<th></th>';
        html += '</tr>';
        
        // Data rows with left and right labels
        for (let i = 0; i < matrix.length; i++) {
            html += `<tr>`;
            html += `<th>${String.fromCharCode(65 + i)}</th>`;
            
            for (let j = 0; j < matrix[i].length; j++) {
                const cellValue = matrix[i][j];
                let cellClass = 'matrix-cell';
                
                if (i === j) {
                    cellClass += ' diagonal';
                }
                
                if (cellValue === 2) {
                    cellClass += ' self-loop';
                } else if (cellValue === 1) {
                    cellClass += isDirected ? ' directed' : ' connected';
                }
                
                html += `<td><div class="matrix-cell-container">`;
                if (i === j) {
                    if (allowSelfLoops) {
                        html += `<div class="${cellClass}" data-row="${i}" data-col="${j}">${cellValue}</div>`;
                    } else {
                        html += `<div class="matrix-cell diagonal" style="cursor: not-allowed; opacity: 0.6;">0</div>`;
                    }
                } else {
                    html += `<div class="${cellClass}" data-row="${i}" data-col="${j}">${cellValue}</div>`;
                }
                html += `</div></td>`;
            }
            
            html += `<th>${String.fromCharCode(65 + i)}</th>`;
            html += '</tr>';
        }
        
        // Bottom labels row
        html += '<tr><th></th>';
        for (let i = 0; i < matrix.length; i++) {
            html += `<th>${String.fromCharCode(65 + i)}</th>`;
        }
        html += '<th></th></tr>';
        
        html += '</table></div>';
        matrixDisplay.innerHTML = html;
        
        const matrixCells = document.querySelectorAll('.matrix-cell:not([style*="cursor: not-allowed"])');
        matrixCells.forEach(cell => {
            cell.addEventListener('click', function() {
                const row = parseInt(this.getAttribute('data-row'));
                const col = parseInt(this.getAttribute('data-col'));
                const isDirected = directedGraphCheckbox.checked;
                
                if (row === col) {
                    adjacencyMatrix[row][col] = adjacencyMatrix[row][col] === 2 ? 0 : 2;
                } else {
                    adjacencyMatrix[row][col] = adjacencyMatrix[row][col] === 1 ? 0 : 1;
                    if (!isDirected) {
                        adjacencyMatrix[col][row] = adjacencyMatrix[row][col];
                    }
                }
                
                displayMatrix(adjacencyMatrix);
                drawGraph();
            });
        });
    }

    // Find node at coordinates
    function getNodeAt(x, y) {
        for (let i = nodes.length - 1; i >= 0; i--) {
            const node = nodes[i];
            const dx = node.x - x;
            const dy = node.y - y;
            if (dx * dx + dy * dy <= node.radius * node.radius) {
                return node;
            }
        }
        return null;
    }
    
    // Mouse event handlers
    canvas.addEventListener('mousedown', function(e) {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        
        const x = (e.clientX - rect.left) * scaleX;
        const y = (e.clientY - rect.top) * scaleY;
        
        selectedNode = getNodeAt(x, y);
        if (selectedNode) {
            isDragging = true;
            offsetX = x - selectedNode.x;
            offsetY = y - selectedNode.y;
            canvas.style.cursor = 'grabbing';
        }
    });
    
    canvas.addEventListener('mousemove', function(e) {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        
        const x = (e.clientX - rect.left) * scaleX;
        const y = (e.clientY - rect.top) * scaleY;
        
        if (isDragging && selectedNode) {
            selectedNode.x = x - offsetX;
            selectedNode.y = y - offsetY;
            
            selectedNode.x = Math.max(selectedNode.radius, Math.min(canvas.width - selectedNode.radius, selectedNode.x));
            selectedNode.y = Math.max(selectedNode.radius, Math.min(canvas.height - selectedNode.radius, selectedNode.y));
            
            drawGraph();
        } else {
            const node = getNodeAt(x, y);
            canvas.style.cursor = node ? 'grab' : 'default';
        }
    });
    
    canvas.addEventListener('mouseup', function() {
        isDragging = false;
        selectedNode = null;
        canvas.style.cursor = 'default';
    });
    
    canvas.addEventListener('mouseleave', function() {
        isDragging = false;
        selectedNode = null;
        canvas.style.cursor = 'default';
    });
    
    // Touch event handlers
    canvas.addEventListener('touchstart', function(e) {
        e.preventDefault();
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        
        const touch = e.touches[0];
        const x = (touch.clientX - rect.left) * scaleX;
        const y = (touch.clientY - rect.top) * scaleY;
        
        selectedNode = getNodeAt(x, y);
        if (selectedNode) {
            isDragging = true;
            offsetX = x - selectedNode.x;
            offsetY = y - selectedNode.y;
            canvas.style.cursor = 'grabbing';
        }
    });
    
    canvas.addEventListener('touchmove', function(e) {
        e.preventDefault();
        if (!isDragging || !selectedNode) return;
        
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        
        const touch = e.touches[0];
        const x = (touch.clientX - rect.left) * scaleX;
        const y = (touch.clientY - rect.top) * scaleY;
        
        selectedNode.x = x - offsetX;
        selectedNode.y = y - offsetY;
        
        selectedNode.x = Math.max(selectedNode.radius, Math.min(canvas.width - selectedNode.radius, selectedNode.x));
        selectedNode.y = Math.max(selectedNode.radius, Math.min(canvas.height - selectedNode.radius, selectedNode.y));
        
        drawGraph();
    });
    
    canvas.addEventListener('touchend', function(e) {
        e.preventDefault();
        isDragging = false;
        selectedNode = null;
        canvas.style.cursor = 'default';
    });
    
    canvas.addEventListener('touchcancel', function(e) {
        e.preventDefault();
        isDragging = false;
        selectedNode = null;
        canvas.style.cursor = 'default';
    });
    
    // Generate graph button handler
    generateBtn.addEventListener('click', function() {
        const nodeCount = parseInt(nodeCountInput.value);
        
        if (nodeCount < 1 || nodeCount > 26) {
            alert('Please enter a number between 1 and 26');
            return;
        }
        
        const allowSelfLoops = allowSelfLoopsCheckbox.checked;
        const isDirected = directedGraphCheckbox.checked;
        adjacencyMatrix = generateAdjacencyMatrix(nodeCount, allowSelfLoops, isDirected);
        nodes = createNodes(nodeCount);
        
        displayMatrix(adjacencyMatrix);
        drawGraph();
    });
    
    // Randomize matrix button handler
    randomizeBtn.addEventListener('click', function() {
        if (adjacencyMatrix.length > 0) {
            const allowSelfLoops = allowSelfLoopsCheckbox.checked;
            const isDirected = directedGraphCheckbox.checked;
            adjacencyMatrix = generateAdjacencyMatrix(adjacencyMatrix.length, allowSelfLoops, isDirected);
            
            displayMatrix(adjacencyMatrix);
            drawGraph();
        }
    });
    
    // Update matrix when options change
    allowSelfLoopsCheckbox.addEventListener('change', function() {
        if (adjacencyMatrix.length > 0) {
            displayMatrix(adjacencyMatrix);
            drawGraph();
        }
    });
    
    directedGraphCheckbox.addEventListener('change', function() {
        if (adjacencyMatrix.length > 0) {
            const isDirected = directedGraphCheckbox.checked;
            
            if (!isDirected) {
                for (let i = 0; i < adjacencyMatrix.length; i++) {
                    for (let j = i + 1; j < adjacencyMatrix.length; j++) {
                        const hasConnection = adjacencyMatrix[i][j] === 1 || adjacencyMatrix[j][i] === 1;
                        adjacencyMatrix[i][j] = hasConnection ? 1 : 0;
                        adjacencyMatrix[j][i] = hasConnection ? 1 : 0;
                    }
                }
            }
            
            displayMatrix(adjacencyMatrix);
            drawGraph();
        }
    });
    
    curvedEdgesCheckbox.addEventListener('change', function() {
        if (adjacencyMatrix.length > 0) {
            drawGraph();
        }
    });
    
    // Resize handler
    window.addEventListener('resize', function() {
        const canvas = document.getElementById('graphCanvas');
        const container = canvas.parentElement;
        
        const rect = container.getBoundingClientRect();
        
        if (canvas.width !== rect.width || canvas.height !== rect.height) {
            const oldWidth = canvas.width;
            const oldHeight = canvas.height;
            
            canvas.width = rect.width;
            canvas.height = rect.height;
            
            if (nodes && nodes.length > 0) {
                const scaleX = canvas.width / oldWidth;
                const scaleY = canvas.height / oldHeight;
                
                for (let i = 0; i < nodes.length; i++) {
                    nodes[i].x = nodes[i].x * scaleX;
                    nodes[i].y = nodes[i].y * scaleY;
                    
                    nodes[i].x = Math.max(nodes[i].radius, Math.min(canvas.width - nodes[i].radius, nodes[i].x));
                    nodes[i].y = Math.max(nodes[i].radius, Math.min(canvas.height - nodes[i].radius, nodes[i].y));
                }
                
                drawGraph();
            }
        }
    });
    
    // Initial size setup
    setTimeout(() => {
        const canvas = document.getElementById('graphCanvas');
        const container = canvas.parentElement;
        const rect = container.getBoundingClientRect();
        
        canvas.width = rect.width;
        canvas.height = rect.height;
        
        if (nodes && nodes.length > 0) {
            drawGraph();
        }
    }, 100);
    
    // Generate initial graph
    generateBtn.click();
});