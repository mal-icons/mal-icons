<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M451-331q-14 14-32.5 6.5T400-352v-256q0-20 18.5-27.5T451-629l128 128q5 5 7 10t2 11q0 6-2 11t-7 10L451-331Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
