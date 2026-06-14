<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m10.8 5 2.11 4.22"}],["path",{"d":"M17.75 7 15 2.1"}],["path",{"d":"m4.87 14.65 2.12 4.24"}],["path",{"d":"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.46-2 2 2 0 1 0-3.46-2z"}],["path",{"d":"m7.91 9.71 2.01 4.41"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
