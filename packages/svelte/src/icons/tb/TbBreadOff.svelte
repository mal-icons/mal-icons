<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 4l10 0.01v0a3 3 0 0 1 2 5.24v6.77m-0.59 3.42c-0.36 0.36 -0.86 0.58 -1.41 0.58h-12a2 2 0 0 1 -2 -2v-8.76a3 3 0 0 1 0.42 -4.78"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
