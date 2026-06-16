<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M40-840h880L480-80 40-840Zm104 60 87 150h498l87-150H144Zm122 210 81 140h266l81-140H266Zm116 200 98 170 98-170H382Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
