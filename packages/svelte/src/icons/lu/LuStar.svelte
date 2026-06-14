<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.53 2.3a0.530.53 0 0 1 0.95 0l2.31 4.68a2.12 2.12 0 0 0 1.6 1.16l5.170.76a0.530.53 0 0 1 0.290.9l-3.74 3.64a2.12 2.12 0 0 0-0.61 1.88l0.88 5.14a0.530.53 0 0 1-0.770.56l-4.62-2.43a2.12 2.12 0 0 0-1.97 0L6.4 21.01a0.530.53 0 0 1-0.77-0.56l0.88-5.14a2.12 2.12 0 0 0-0.61-1.88L2.16 9.8a0.530.53 0 0 1 0.29-0.91l5.17-0.75a2.12 2.12 0 0 0 1.6-1.16z"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
