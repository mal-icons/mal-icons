<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M242-280v-340h-82v-60h142v400h-60Zm195 0 127-213-113-187h70l79 130 75-130h69L636-493l124 213h-69l-91-156-93 156h-70Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
