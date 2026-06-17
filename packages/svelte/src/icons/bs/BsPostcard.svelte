<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm7.50.5a0.50.5 0 0 0-1 0v7a0.50.5 0 0 0 1 0zM2 5.5a0.50.5 0 0 1 0.5-0.5H6a0.50.5 0 0 1 0 1H2.5a0.50.5 0 0 1-0.5-0.5m0 2a0.50.5 0 0 1 0.5-0.5H6a0.50.5 0 0 1 0 1H2.5a0.50.5 0 0 1-0.5-0.5m0 2a0.50.5 0 0 1 0.5-0.5H6a0.50.5 0 0 1 0 1H2.5a0.50.5 0 0 1-0.5-0.5M10.5 5a0.50.5 0 0 0-0.50.5v3a0.50.5 0 0 0 0.50.5h3a0.50.5 0 0 0 0.5-0.5v-3a0.50.5 0 0 0-0.5-0.5zM13 8h-2V6h2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
