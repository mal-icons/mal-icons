<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 3H3c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h5v1c0 0.550.45 1 1 1h6c0.55 0 1-0.45 1-1v-1h5c1.1 0 1.99-0.9 1.99-2L23 5a2 2 0 0 0-2-2zm-1 14H4c-0.55 0-1-0.45-1-1V6c0-0.550.45-1 1-1h16c0.55 0 1 0.45 1 1v10c0 0.55-0.45 1-1 1zm-5.52-5.13-3.98 2.28c-0.670.38-1.5-0.11-1.5-0.87V8.72c0-0.770.83-1.25 1.5-0.87l3.98 2.28c0.670.390.67 1.35 0 1.74z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
