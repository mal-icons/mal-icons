<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18.63 12.08a6.65 6.65 0 0 0 -0.56 -1.2l-4.89 -7.26c-0.42 -0.62 -1.29 -0.8 -1.94 -0.4a1.38 1.38 0 0 0 -0.41 0.4l-4.89 7.26c-1.69 2.84 -1.03 6.44 1.57 8.55c1.7 1.38 3.91 1.85 5.96 1.43"}],["path",{"d":"M19 16l-2 3h4l-2 3"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
