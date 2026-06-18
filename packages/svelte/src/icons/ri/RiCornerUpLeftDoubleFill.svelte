<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 19 20 10 14.41 10V4.59L8 11 14.41 17.41V12L18 12 18 19 20 19ZM10.16 6.05 8.75 4.64 2.39 11 8.75 17.36 10.16 15.95 5.21 11 10.16 6.05Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
