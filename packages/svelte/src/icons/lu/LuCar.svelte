<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 17h2c0.6 0 1-0.4 1-1v-3c0-0.9-0.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-0.5-0.4-1.1-0.7-1.8-0.7H5c-0.6 0-1.10.4-1.40.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 0.60.4 1 1 1h2"}],["circle",{"cx":"7","cy":"17","r":"2"}],["path",{"d":"M9 17h6"}],["circle",{"cx":"17","cy":"17","r":"2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
