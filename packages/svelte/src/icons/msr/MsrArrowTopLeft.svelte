<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m275-570 132 132q9 9 9 21.16 0 12.16-8.61 21Q398-387 385.9-387t-20.9-9L181-579q-9-9-9-21t9-21l184-184q9-9 21-9t21 9q9 9 8.5 21t-8.5 21L275-630h425q24.75 0 42.38 17.63T760-570v380q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63-12.82 0-21.32-8.62T700-190v-380H275Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
