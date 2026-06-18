<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M23 12V14C23 17.32 18.08 20 12 20C6.04 20 1.18 17.41 1.01 14.18L1 14V12C1 15.32 5.93 18 12 18C18.08 18 23 15.32 23 12ZM12 4C18.08 4 23 6.69 23 10C23 13.32 18.08 16 12 16C5.93 16 1 13.32 1 10C1 6.69 5.93 4 12 4Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
