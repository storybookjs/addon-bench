# Storybook Addon-bench

Addon-bench is a tiny utility to help benchmark Storybook. It's only meant to be used in conjunction with `sb-bench`, Storybook's benchmarking tool.

It installs a one-line script that runs in both the **manager** and **preview** iframes that calls back to the `sb-bench` server to notify it that the iframe has loaded.
