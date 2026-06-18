<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18 17c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2h-12c-1.1 0-2 0.9-2 2v10c0 1.10.9 2 2 2h12zm-12-12h12l0 10H6V5zm-2 14h16v2h-16z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
