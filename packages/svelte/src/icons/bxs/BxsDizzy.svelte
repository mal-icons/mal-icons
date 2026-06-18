<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zM8 12.41l-1.29 1.29-1.41-1.41L6.59 11 5.29 9.71l1.41-1.41L8 9.59l1.29-1.29 1.41 1.41L9.41 11l1.29 1.29-1.41 1.41L8 12.41zM14 18h-4v-2h4v2zm4.71-5.71-1.41 1.41L16 12.41l-1.29 1.29-1.41-1.41L14.59 11l-1.29-1.29 1.41-1.41L16 9.59l1.29-1.29 1.41 1.41L17.41 11l1.29 1.29z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
