<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m12 14-1 1"}],["path",{"d":"m13.75 18.25-1.25 1.42"}],["path",{"d":"M17.77 5.65a15.68 15.68 0 0 0-12.12 12.12"}],["path",{"d":"M18.8 9.3a1 1 0 0 0 2.1 7.7"}],["path",{"d":"M21.96 20.73a1 1 0 0 1-1.23 1.23l-18-5a1 1 0 0 1-0.69-1.23A19.68 19.68 0 0 1 15.73 2.04a1 1 0 0 1 1.230.7z"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
