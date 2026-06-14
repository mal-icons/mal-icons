<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10.17 4.19a2 2 0 0 1 3.670.01"}],["path",{"d":"M14 21h2"}],["path",{"d":"m15.87 7.74 1 1.73"}],["path",{"d":"m18.85 12.95 1 1.73"}],["path",{"d":"M21.82 18.18a2 2 0 0 1-1.83 2.82"}],["path",{"d":"M4.02 21a2 2 0 0 1-1.84-2.84"}],["path",{"d":"m5.14 12.95-1 1.73"}],["path",{"d":"M8 21h2"}],["path",{"d":"m8.1 7.74-1 1.73"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
