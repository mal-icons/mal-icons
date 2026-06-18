<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21.82 7.43A1 1 0 0 0 21 7H7.33L6.18 4.23A1.99 1.99 0 0 0 4.33 3H2v2h2.33l4.74 11.39A1 1 0 0 0 10 17h8c0.42 0 0.79-0.260.94-0.65l3-8a1 1 0 0 0-0.11-0.92z"}],["circle",{"cx":"10.5","cy":"19.5","r":"1.5"}],["circle",{"cx":"17.5","cy":"19.5","r":"1.5"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
