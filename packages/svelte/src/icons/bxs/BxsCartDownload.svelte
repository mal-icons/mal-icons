<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["circle",{"cx":"10.5","cy":"19.5","r":"1.5"}],["circle",{"cx":"17.5","cy":"19.5","r":"1.5"}],["path",{"d":"M21 7H7.33L6.18 4.23A2 2 0 0 0 4.33 3H2v2h2.33l4.74 11.39c0.160.370.520.620.920.62h8c0.42 0 0.79-0.260.94-0.65l3-8A1 1 0 0 0 21 7zm-7 8-3-3h2V9h2v3h2l-3 3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
