<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11"}],["path",{"d":"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.13-1.8l7.95-3.97a2 2 0 0 1 1.84 0l7.95 3.97A2 2 0 0 1 22 8z"}],["path",{"d":"M6 13h12"}],["path",{"d":"M6 17h12"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
