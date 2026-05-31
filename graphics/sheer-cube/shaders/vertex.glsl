uniform float shear;

void main()
{
    //position comes form geometry
    vec3 pos = position;

    // X-shear by Y
    pos.x += shear * pos.y;

    //projectionMatrix comes form camera
    //modelMatrix comes form (position * rotation * scale) of cube
    //viewMatrix comes form position of camera
    //modelViewMatrix = viewMatrix × modelMatrix
    gl_Position =
        projectionMatrix *
        modelViewMatrix *
        vec4(pos, 1.0);
}
