<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.98 1.74l3.11-1.38A1 1 0 0 1 16 4.27v7.46a1 1 0 0 1-1.410.91l-3.11-1.38A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.18 3.5 1.56V4.27l-3.5 1.56zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
