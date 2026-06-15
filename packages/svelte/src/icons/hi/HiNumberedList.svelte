<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M8.24 5.99h12m-12 6H20.24m-12 6h12M4.12 7.5v-3.75H2.99m1.13 3.75H2.99m1.13 0H5.24m-1.92 2.58a1.13 1.13 0 1 1 1.59 1.59l-1.83 1.83h2.16M2.99 15.75h1.13a1.13 1.13 0 0 1 0 2.25H3.74m00h0.38a1.13 1.13 0 0 1 0 2.25H2.99"}]];
  const defaultAttr = {"fill":"none","stroke-width":1.5};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
