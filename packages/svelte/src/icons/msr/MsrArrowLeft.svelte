<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M509-331 381-459q-5-5-7-10t-2-11q0-6 2-11t7-10l128-128q14-14 32.5-6.5T560-608v256q0 20-18.5 27.5T509-331Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
