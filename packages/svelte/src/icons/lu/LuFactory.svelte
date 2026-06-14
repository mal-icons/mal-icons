<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 16h0.01"}],["path",{"d":"M16 16h0.01"}],["path",{"d":"M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a0.50.5 0 0 0-0.77-0.42l-4.46 2.84A0.50.5 0 0 1 15 10.5v-2a0.50.5 0 0 0-0.77-0.42L9.77 10.92A0.50.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"}],["path",{"d":"M8 16h0.01"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
