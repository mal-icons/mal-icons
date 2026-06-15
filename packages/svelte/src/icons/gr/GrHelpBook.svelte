<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","d":"M11.94 12.14v-0.86c0-0.86 0-1.30.8-1.730.8-0.43 1.6-0.86 1.6-2.16 0-0.86-0.8-2.16-2.39-2.16-1.59 0-2.39 1.09-2.39 2.59","stroke-width":"2"}],["path",{"stroke":"currentColor","d":"M11.94 13v1.73","stroke-width":"2"}],["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M5.5 18a2.5 2.5 0 1 0 0 5H22M3 20.5v-17A2.5 2.5 0 0 1 5.5 1H21v17.01H5.49M20.5 18a2.5 2.5 0 1 0 0 5"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
