<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m12 2-5.5 9h11z"}],["circle",{"cx":"17.5","cy":"17.5","r":"4.5"}],["path",{"d":"M3 13.5h8v8H3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
