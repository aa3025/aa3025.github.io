from math import isclose

# boundary polygon of the L-shape with a square removed at lower right
# points in CCW order

def polygon_area(pts):
    a = 0
    n = len(pts)
    for i in range(n):
        x1, y1 = pts[i]
        x2, y2 = pts[(i + 1) % n]
        a += x1 * y2 - x2 * y1
    return abs(a) / 2


def poly_perimeter(pts):
    p = 0
    for i in range(len(pts)):
        x1, y1 = pts[i]
        x2, y2 = pts[(i + 1) % len(pts)]
        p += ((x1 - x2) ** 2 + (y1 - y2) ** 2) ** 0.5
    return p


def on_segment(a, b, p):
    (x1, y1), (x2, y2) = a, b
    (x, y) = p
    if min(x1, x2) <= x <= max(x1, x2) and min(y1, y2) <= y <= max(y1, y2):
        return (x2 - x1) * (y - y1) == (y2 - y1) * (x - x1)
    return False


def orientation(a, b, c):
    (x1, y1), (x2, y2), (x3, y3) = a, b, c
    val = (y2 - y1) * (x3 - x2) - (x2 - x1) * (y3 - y2)
    if val == 0:
        return 0
    return 1 if val > 0 else 2


def seg_intersect(a, b, c, d):
    o1 = orientation(a, b, c)
    o2 = orientation(a, b, d)
    o3 = orientation(c, d, a)
    o4 = orientation(c, d, b)
    if o1 != o2 and o3 != o4:
        return True
    if o1 == 0 and on_segment(a, b, c):
        return True
    if o2 == 0 and on_segment(a, b, d):
        return True
    if o3 == 0 and on_segment(c, d, a):
        return True
    if o4 == 0 and on_segment(c, d, b):
        return True
    return False


def point_in_poly(pt, poly):
    x, y = pt
    inside = False
    n = len(poly)
    for i in range(n):
        x1, y1 = poly[i]
        x2, y2 = poly[(i + 1) % n]
        if ((y1 > y) != (y2 > y)) and (x < (x2 - x1) * (y - y1) / (y2 - y1 + 0.0) + x1):
            inside = not inside
    return inside


def line_length(a, b):
    return ((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2) ** 0.5


def build_boundary(W, H, s):
    pts = [(0, 0), (W - s, 0), (W - s, s), (W, s), (W, H), (0, H)]
    return pts


def boundary_points(boundary):
    pts = []
    for i in range(len(boundary)):
        x1, y1 = boundary[i]
        x2, y2 = boundary[(i + 1) % len(boundary)]
        dx = x2 - x1
        dy = y2 - y1
        steps = max(abs(dx), abs(dy))
        for t in range(steps + 1):
            x = x1 + (dx // steps) * t if steps != 0 else x1
            y = y1 + (dy // steps) * t if steps != 0 else y1
            if not pts or pts[-1] != (x, y):
                pts.append((x, y))
    return pts


def valid_line_in_poly(a, b, boundary):
    seg = (a, b)
    # segment endpoints must be on the boundary
    if a not in boundary or b not in boundary:
        return False
    if a == b:
        return False
    # check length integer
    if not isclose(line_length(a, b), round(line_length(a, b)), abs_tol=1e-6):
        return False
    # check segment intersects boundary only at endpoints
    for i in range(len(boundary)):
        c = boundary[i]
        d = boundary[(i + 1) % len(boundary)]
        if c == a or d == a or c == b or d == b:
            continue
        if seg_intersect(a, b, c, d):
            return False
    # check midpoint lies inside polygon
    mid = ((a[0] + b[0]) / 2, (a[1] + b[1]) / 2)
    return point_in_poly(mid, boundary)


def split_polygons(a, b, boundary):
    idx_a = boundary.index(a)
    idx_b = boundary.index(b)
    if idx_a < idx_b:
        p1 = boundary[idx_a:idx_b+1]
        p2 = boundary[idx_b:] + boundary[:idx_a+1]
    else:
        p1 = boundary[idx_a:] + boundary[:idx_b+1]
        p2 = boundary[idx_b:idx_a+1]
    poly1 = p1 + [a]
    poly2 = p2 + [b]
    return poly1, poly2

solutions = []
max_dim = 40
for W in range(2, max_dim + 1):
    for H in range(2, max_dim + 1):
        for s in range(1, min(W, H) + 1):
            if W - s <= 0 or H - s <= 0:
                continue
            boundary = build_boundary(W, H, s)
            total_area = polygon_area(boundary)
            total_perim = poly_perimeter(boundary)
            if total_area != int(total_area):
                continue
            bpts = boundary_points(boundary)
            for i in range(len(bpts)):
                for j in range(i + 1, len(bpts)):
                    a = bpts[i]
                    b = bpts[j]
                    if not valid_line_in_poly(a, b, boundary):
                        continue
                    poly1, poly2 = split_polygons(a, b, boundary)
                    area1 = polygon_area(poly1)
                    area2 = polygon_area(poly2)
                    if not isclose(area1, area2, abs_tol=1e-6):
                        continue
                    perim1 = poly_perimeter(poly1)
                    perim2 = poly_perimeter(poly2)
                    if not isclose(perim1, perim2, abs_tol=1e-6):
                        continue
                    if not isclose(perim1, total_perim + 2 * line_length(a, b), abs_tol=1e-6):
                        continue
                    solutions.append((W, H, s, int(total_area), int(round(total_perim)), a, b, int(round(line_length(a, b)))))

solutions_sorted = sorted(solutions, key=lambda x: (x[3], x[0], x[1], x[2]))
print('TOTAL', len(solutions_sorted))
for sol in solutions_sorted[:20]:
    print(sol)
