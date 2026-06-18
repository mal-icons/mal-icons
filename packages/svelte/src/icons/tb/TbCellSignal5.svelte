<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 20h-15.27a0.73 0.73 0 0 1 -0.52 -1.25l14.54 -14.54a0.73 0.73 0 0 1 1.25 0.52v15.27"}],["path",{"d":"M16 7v13"}],["path",{"d":"M12 20v-9"}],["path",{"d":"M8 20v-5"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
