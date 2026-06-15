<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M19.5 14.25v-2.62a3.38 3.38 0 0 0-3.37-3.37h-1.5A1.13 1.13 0 0 1 13.5 7.13v-1.5a3.38 3.38 0 0 0-3.37-3.37H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.63c-0.62 0-1.120.5-1.12 1.13v17.25c0 0.620.5 1.13 1.13 1.13h12.75c0.62 0 1.13-0.5 1.13-1.12V11.25a9 9 0 0 0-9-9Z"}]];
  const defaultAttr = {"fill":"none","stroke-width":1.5};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
