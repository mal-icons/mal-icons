<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["circle",{"cx":"12","cy":"20","r":"2"}],["circle",{"cx":"12","cy":"4","r":"2"}],["circle",{"cx":"6.34","cy":"17.66","r":"2"}],["circle",{"cx":"17.66","cy":"6.34","r":"2"}],["circle",{"cx":"4","cy":"12","r":"2"}],["circle",{"cx":"20","cy":"12","r":"2"}],["circle",{"cx":"6.34","cy":"6.34","r":"2"}],["circle",{"cx":"17.66","cy":"17.66","r":"2"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
