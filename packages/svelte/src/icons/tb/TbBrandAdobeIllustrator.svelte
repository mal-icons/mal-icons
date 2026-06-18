<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 12c0 -4.24 0 -6.36 1.32 -7.68s3.44 -1.32 7.68 -1.32s6.36 0 7.68 1.32s1.32 3.44 1.32 7.68s0 6.36 -1.32 7.68s-3.44 1.32 -7.68 1.32s-6.36 0 -7.68 -1.32s-1.32 -3.44 -1.32 -7.68"}],["path",{"d":"M12.95 15.79l-0.82 -2.65m-4.86 2.65l0.82 -2.65m0 0l0.69 -2.22c0.56 -1.81 0.84 -2.71 1.34 -2.71c0.5 0 0.78 0.9 1.34 2.71l0.69 2.22m-4.04 0h4.04"}],["path",{"d":"M15.79 15.79v-4.74"}],["path",{"d":"M15.79 8.68v-0.47"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
