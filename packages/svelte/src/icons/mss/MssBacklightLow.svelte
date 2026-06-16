<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M80-370v-60h110v60H80Zm181-207-85-85 42-42 85 85-42 42Zm19 337v-100h400v100H280Zm170-440v-120h60v120h-60Zm248 104-42-43 85-85 42 43-85 85Zm72 206v-60h110v60H770Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
