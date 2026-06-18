<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 14.5h-0.22c-1.53 0 -2.78 -1.12 -2.78 -2.5s1.24 -2.5 2.78 -2.5h0.22"}],["path",{"d":"M19 14.5h0.22c1.53 0 2.78 -1.12 2.78 -2.5s-1.24 -2.5 -2.78 -2.5h-0.22"}],["path",{"d":"M9 10h6"}],["path",{"d":"M9 14h6"}],["path",{"d":"M12.55 18.84l5 -1.43a2 2 0 0 0 1.45 -1.92v-6.98a2 2 0 0 0 -1.45 -1.92l-5 -1.43a2 2 0 0 0 -1.1 0l-5 1.43a2 2 0 0 0 -1.45 1.92v6.98a2 2 0 0 0 1.45 1.92l5 1.43a2 2 0 0 0 1.1 0"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
