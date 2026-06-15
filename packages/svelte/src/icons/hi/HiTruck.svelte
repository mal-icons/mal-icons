<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.38a1.13 1.13 0 0 1-1.12-1.12V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.13c0.62 0 1.13-0.5 1.09-1.12a17.9 17.9 0 0 0-3.21-9.19 2.06 2.06 0 0 0-1.58-0.86H14.25M16.5 18.75h-2.25m0-11.18v-0.96c0-0.57-0.42-1.05-0.99-1.11a48.55 48.55 0 0 0-10.03 0 1.11 1.11 0 0 0-0.99 1.11v7.64m12-6.68v6.68m0 4.5v-4.5m0 0h-12"}]];
  const defaultAttr = {"fill":"none","stroke-width":1.5};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
