<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M180-180h600v-371q-21 13-45.14 19T686-526q-66.82 0-114.41-47.59Q524-621.17 524-688q0-24.05 6-47.52Q536-759 549-780H180v600Zm0 60q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-660v600-600Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
