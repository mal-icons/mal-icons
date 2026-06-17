<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.37 5.11h3.97v0.07L6.03 12H7.42l3.26-6.85V4H5.37v1.11Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
