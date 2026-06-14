<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"}],["path",{"d":"M7 21h10"}],["path",{"d":"M19.5 12 22 6"}],["path",{"d":"M16.25 3c0.270.10.80.530.75 1.36-0.060.83-0.93 1.2-1 2.02-0.050.780.34 1.240.73 1.62"}],["path",{"d":"M11.25 3c0.270.10.80.530.74 1.36-0.050.83-0.93 1.2-0.98 2.02-0.060.780.33 1.240.72 1.62"}],["path",{"d":"M6.25 3c0.270.10.80.530.75 1.36-0.060.83-0.93 1.2-1 2.02-0.050.780.34 1.240.74 1.62"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
