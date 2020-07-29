---
layout: layouts/post.njk
title: An example in using the Riemann package
author: jerem.
category: 'blog'
description: "I have written a Mathematica package to perform basic computations in Riemannian geometry. In this post, I share an example of computation that this code can be used for and a link to the package containing the instructions to reproduce the computation presented here."
tags: ['math']
---

I started a Mathematica package to performs computations of Riemannian geometry. As an exercise in using it, I present here the computation of the curvature of a 2-sphere embedded in the euclidean space. The package is in development and its content is not meant to be exhaustive. This suffices however to perform some of the most basic computations on (pseudo-)Riemannian real manifolds. The package is available in its own [git repository](https://github.com/jrekier/Riemann).

For something more general, I recommend you take a look at the excellent [SageManifolds](http://sagemanifolds.obspm.fr/).

let us start by defining a background 3-dimensional euclidean space by providing a set of coordinates $\{x,y,z\}$ and a metric in the form of a squared line-element:
$$
ds^2=dx^2+dy^2+dz^2~.
$$
$$
\begin{aligned}
g=\left(
\begin{array}{ccc}
 1 & 0 & 0 \\
 0 & 1 & 0 \\
 0 & 0 & 1
\end{array}
\right)~.
\end{aligned}
$$

One way to embed the 2-sphere in the 3-dimensional euclidean space is to impose that
$$
\Phi \equiv x^2+y^2+z^2 - R^2 = 0~,
$$
where $R>0$ denotes the Radius of the sphere. One parametrisation satisfying this constraint is
$$
\begin{aligned}
x&=R \sin{\theta}\cos{\phi}~,\\
y&=R \sin{\theta}\sin{\phi}~,& (1)\\
z&=R \cos{\theta}~,
\end{aligned}
$$
with $\{\theta, \phi\}$ taking up the role of local ordinates on the 2-sphere which we will denote as $S^2$.

The components of the one-form normal to $S^2$ are obtained as follows
$$
n_\alpha = \frac{\partial \Phi}{\partial x^\alpha}~.
$$
Once it has been normalised, this turns out to be

$$
\{\frac{x}{\sqrt{x^2+y^2+z^2}},\frac{y}{\sqrt{x^2+y^2+z^2}},\frac{z}{\sqrt{x^2+y^2+z^2}}\}
$$

The general expression of the projector onto $S_2$ is
$$
P_{\alpha\beta}=g_{\alpha\beta}-n_\alpha n_\beta~.
$$
Here this gives:

$$
\begin{aligned}
\left(
\begin{array}{ccc}
 \frac{y^2+z^2}{x^2+y^2+z^2} & -\frac{x y}{x^2+y^2+z^2} & -\frac{x
   z}{x^2+y^2+z^2} \\
 -\frac{x y}{x^2+y^2+z^2} & \frac{x^2+z^2}{x^2+y^2+z^2} & -\frac{y
   z}{x^2+y^2+z^2} \\
 -\frac{x z}{x^2+y^2+z^2} & -\frac{y z}{x^2+y^2+z^2} &
   \frac{x^2+y^2}{x^2+y^2+z^2} \\
\end{array}
\right)
\end{aligned}
$$

Finally, the extrinsic curvature is the Lie derivative of this tensor along the normal vector defined above:

$$
K_{\alpha\beta}=-\frac{1}{2}L_n P_{\alpha\beta}~.
$$
Here this gives:

$$
\begin{aligned}
\left(
\begin{array}{ccc}
 -\frac{y^2+z^2}{\left(x^2+y^2+z^2\right)^{3/2}} & \frac{x
   y}{\left(x^2+y^2+z^2\right)^{3/2}} & \frac{x
   z}{\left(x^2+y^2+z^2\right)^{3/2}} \\
 \frac{x y}{\left(x^2+y^2+z^2\right)^{3/2}} &
   -\frac{x^2+z^2}{\left(x^2+y^2+z^2\right)^{3/2}} & \frac{y
   z}{\left(x^2+y^2+z^2\right)^{3/2}} \\
 \frac{x z}{\left(x^2+y^2+z^2\right)^{3/2}} & \frac{y
   z}{\left(x^2+y^2+z^2\right)^{3/2}} &
   -\frac{x^2+y^2}{\left(x^2+y^2+z^2\right)^{3/2}} \\
\end{array}
\right)
\end{aligned}
$$

The mean curvature is given by the trace of this tensor. Here, it is found to be
$$
\begin{aligned}
&\text{Tr}~K=-\frac{2}{R} &(2)
\end{aligned}
$$

All the above was done using only vectors (and one-forms) belonging to the (co-)tangent bundle of the surrounding euclidean space without any explicit reference to the local coordinates on $S^2$. The extrinsic curvature also has a representation on $S^2$.

From (1), one constructs the *vielbein*:
$$
e^\alpha_a=\frac{\partial x^\alpha}{\partial y^a}~,
$$
where $x^\alpha$ denotes the coordinates on $\mathbb{R}^3$, $\{x,y,z\}$ and $y^a$ are the coordinates on $S^2$, $\{\theta,\phi\}$. In our case, this reads, in the matrix form :
$$
\begin{aligned}
\left(
\begin{array}{cc}
 R \cos (\theta ) \cos (\phi ) & -R \sin (\theta ) \sin (\phi ) \\
 R \cos (\theta ) \sin (\phi ) & R \cos (\phi ) \sin (\theta ) \\
 -R \sin (\theta ) & 0 \\
\end{array}
\right)
\end{aligned}
$$

The induced metric on $\Sigma$ can then be computed as
$$
\begin{aligned}
&\gamma_{ab} = e^\alpha_ae^\beta_bg_{\alpha\beta}~,&(3)
\end{aligned}
$$
which here gives:
$$
\begin{aligned}
\left(
\begin{array}{cc}
 R^2 & 0 \\
 0 & R^2 \sin ^2(\theta ) \\
\end{array}
\right)
\end{aligned}
$$
Applying a transformation similar to Eq.(3) to the extrinsic curvature gives
$$
\begin{aligned}
\left(
\begin{array}{cc}
 -R & 0 \\
 0 & -R \sin ^2(\theta )
\end{array}
\right)
\end{aligned}
$$
and so we recover Eq.(2) by taking the trace ($\gamma^{ab}K_{ab}$).
