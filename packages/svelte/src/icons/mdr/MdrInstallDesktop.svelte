<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 17H4V5h8V3H4c-1.1 0-2 0.9-2 2v12a2 2 0 0 0 2 2h4v1c0 0.550.45 1 1 1h6c0.55 0 1-0.45 1-1v-1h4c1.1 0 2-0.9 2-2v-3h-2v3z"}],["path",{"d":"M17.71 13.29 21.3 9.7a11 0 1 0-1.41-1.41L18 10.17V4c0-0.55-0.45-1-1-1s-1 0.45-1 1v6.17l-1.89-1.88A11 0 1 0 12.7 9.7l3.59 3.59c0.40.39 1.030.39 1.42 0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
