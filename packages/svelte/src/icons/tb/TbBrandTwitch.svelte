<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 5v11a1 1 0 0 0 1 1h2v4l4 -4h5.58c0.27 0 0.52 -0.1 0.71 -0.29l2.42 -2.41c0.19 -0.19 0.29 -0.44 0.29 -0.71v-8.59a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1l0 0"}],["path",{"d":"M16 8l0 4"}],["path",{"d":"M12 8l0 4"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
