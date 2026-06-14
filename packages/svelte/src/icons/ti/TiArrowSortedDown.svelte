<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5.8 9.7l6.2 6.3 6.2-6.3c0.2-0.20.3-0.50.3-0.7s-0.1-0.5-0.3-0.7c-0.2-0.2-0.4-0.3-0.7-0.3h-11c-0.3 0-0.50.1-0.70.3-0.20.2-0.30.4-0.30.7s0.10.50.30.7z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
