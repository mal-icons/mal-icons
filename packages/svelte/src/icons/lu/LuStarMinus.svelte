<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15 18h6"}],["path",{"d":"M17.69 14a2.1 2.1 0 0 1 0.42-0.57l3.74-3.64a0.530.53 0 0 0-0.29-0.9l-5.17-0.75a2.1 2.1 0 0 1-1.59-1.16l-2.31-4.68a0.530.53 0 0 0-0.950L9.22 6.97a2.1 2.1 0 0 1-1.6 1.16l-5.160.76a0.530.53 0 0 0-0.290.91l3.74 3.64a2.1 2.1 0 0 1 0.61 1.88l-0.88 5.14a0.530.53 0 0 0 0.770.56l4.62-2.430.03-0.01"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
