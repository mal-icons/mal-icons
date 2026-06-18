<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.88 0A9.6 9.6 0 0 0 2.4 9.48h4.8A4.81 4.81 0 0 1 11.88 4.8zm0.25 0v4.8A4.81 4.81 0 0 1 16.8 9.48h4.8A9.6 9.6 0 0 0 12.13 0zM2.4 9.73V24H12v-4.8H7.2V9.72zm9.6 9.47a9.6 9.6 0 0 0 9.6-9.47h-4.8A4.81 4.81 0 0 1 12 14.4z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
