<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.97 10.11v4L13.5 12.5a5 5 0 0 1 8 1.5"}],["path",{"d":"M11.97 14.11h4"}],["path",{"d":"M17.97 18.11h4L20.43 19.71a5 5 0 0 1-8-1.5"}],["path",{"d":"M2 8.82a15 15 0 0 1 20 0"}],["path",{"d":"M21.97 22.11v-4"}],["path",{"d":"M5 12.86a10 10 0 0 1 3-2.03"}],["path",{"d":"M8.5 16.43h0.01"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
