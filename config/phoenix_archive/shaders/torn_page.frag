// Default "corrupted data" effect for Archive's torn/missing-page placeholder.
// Edit or replace this file freely -- it's only written once, on first launch.
vec2 hash2(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return fract(sin(p) * 43758.5453);
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;

    vec3 col = vec3(0.02, 0.02, 0.03);

    float bandY = floor(uv.y * 24.0);
    float bandTime = floor(iTime * 6.0 + bandY * 3.7);
    float glitch = step(0.94, fract(sin(bandTime) * 43758.5453));
    float shift = (fract(sin(bandTime * 1.37) * 12345.6) - 0.5) * 0.06 * glitch;
    uv.x += shift;

    float n = hash2(floor(uv * iResolution.xy * 0.5) + iTime * 60.0).x;
    col += vec3(0.05) * n;

    col *= 0.9 + 0.1 * sin(uv.y * iResolution.y * 3.14159);

    float vig = smoothstep(0.9, 0.2, length(uv - 0.5));
    col *= mix(0.4, 1.0, vig);

    float alertFlicker = step(0.985, fract(sin(floor(iTime * 2.0)) * 91.7));
    col = mix(col, vec3(0.6, 0.08, 0.08), alertFlicker * 0.15);

    fragColor = vec4(col, 1.0);
}
