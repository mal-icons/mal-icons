<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 3h4v4"}],["path",{"d":"M18.58 11.08a13 13 0 0 1 1.05 9.03 1.17 1.17 0 0 1-1.910.6L14 17"}],["path",{"d":"M7 10 3.29 6.29a1.17 1.17 0 0 1 0.6-1.91 13 13 0 0 1 9.03 1.05"}],["path",{"d":"M7 14a1.7 1.7 0 0 0-1.210.5l-2.65 2.65A0.50.5 0 0 0 3.5 18H5a1 1 0 0 1 1 1v1.5a0.50.5 0 0 0 0.850.35L9.5 18.21A1.7 1.7 0 0 0 10 17v-2a1 1 0 0 0-1-1z"}],["path",{"d":"M9.71 14.29 21 3"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
