<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 3h8a2 2 0 0 1 2 2v1.82a5 5 0 0 0 0.53 2.24l0.94 1.89a5 5 0 0 1 0.53 2.24v5.82a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-5.82a5 5 0 0 1 0.53 -2.24l1.47 -2.94v-3a2 2 0 0 1 2 -2"}],["path",{"d":"M12 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M6 21a2 2 0 0 0 2 -2v-5.82a5 5 0 0 0 -0.53 -2.24l-1.47 -2.94"}],["path",{"d":"M11 7h2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
