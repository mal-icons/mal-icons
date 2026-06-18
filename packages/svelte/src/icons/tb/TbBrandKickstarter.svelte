<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 9l2.98 -4.65c0.62 -0.9 1.41 -1.35 2.38 -1.35c0.79 0 1.47 0.29 2.05 0.86c0.58 0.57 0.87 1.26 0.87 2.05c0 0.59 -0.15 1.11 -0.46 1.56l-2.81 4.03l3.47 4.91c0.36 0.46 0.54 1 0.54 1.61a2.92 2.92 0 0 1 -0.84 2.1c-0.56 0.58 -1.24 0.88 -2.04 0.88c-0.88 0 -1.54 -0.29 -2 -0.87l-4.11 -5.7v3.07c0 0.88 -0.31 1.69 -0.61 2.17c-0.54 0.88 -1.35 1.33 -2.39 1.33c-0.94 0 -1.75 -0.33 -2.27 -0.97c-0.49 -0.6 -0.73 -1.39 -0.73 -2.38v-11.37c0 -0.93 0.25 -1.71 0.74 -2.31c0.51 -0.64 1.35 -0.96 2.26 -0.96c0.87 0 1.82 0.32 2.4 0.96c0.32 0.36 0.52 0.71 0.6 1.08c0.05 0.22 0 0.64 0 1.26v2.7l0 0"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
