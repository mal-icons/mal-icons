<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M21.75 17.25v-0.23a4.5 4.5 0 0 0-0.12-1.03l-2.27-9.64a3.38 3.38 0 0 0-3.28-2.6H7.92a3.38 3.38 0 0 0-3.28 2.6l-2.27 9.64a4.5 4.5 0 0 0-0.12 1.03v0.23m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h0.01v0.01h-0.01v-0.01Zm-3 0h0.01v0.01h-0.01v-0.01Z"}]];
  const defaultAttr = {"fill":"none","stroke-width":1.5};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
