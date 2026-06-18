<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 6h16"}],["path",{"d":"M6 12h12"}],["path",{"d":"M9 18h3"}],["path",{"d":"M17 21l4 -4m-5 2c0 0.8 0.32 1.56 0.88 2.12c0.56 0.56 1.33 0.88 2.12 0.88c0.8 0 1.56 -0.32 2.12 -0.88c0.56 -0.56 0.88 -1.33 0.88 -2.12c0 -0.8 -0.32 -1.56 -0.88 -2.12c-0.56 -0.56 -1.33 -0.88 -2.12 -0.88c-0.8 0 -1.56 0.32 -2.12 0.88c-0.56 0.56 -0.88 1.33 -0.88 2.12l1 2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
