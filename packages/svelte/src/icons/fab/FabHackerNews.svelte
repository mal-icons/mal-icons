<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0 32v448h448V32H0zm21.2 197.2H21c0.1-0.10.2-0.30.3-0.4 0 0.1 0 0.3-0.10.4zm218 53.9V384h-31.4V281.3L128 128h37.3c52.5 98.3 49.2 101.2 59.3 125.6 12.3-27 5.8-24.4 60.6-125.6H320l-80.8 155.1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 448 512" {nodes} {...props} />
