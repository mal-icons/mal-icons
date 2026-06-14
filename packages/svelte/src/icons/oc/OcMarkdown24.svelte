<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M22.29 4.5A1.71 1.71 0 0 1 24 6.23v11.56c0 0.95-0.77 1.73-1.73 1.73H1.73A1.74 1.74 0 0 1 0 17.77V6.23C0 5.280.78 4.5 1.73 4.5Zm-8.78 12.01V7.5h-3l-2.25 3-2.25-3H3v9.01h3v-4.5l2.25 2.88 2.25-2.88v4.5Zm4.490.75 3.77-5.25h-2.25V7.5h-3v4.5h-2.25Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
