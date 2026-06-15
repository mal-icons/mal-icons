<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M12 3c2.76 0 5.460.23 8.080.680.530.090.920.560.92 1.1v1.04a2.25 2.25 0 0 1-0.66 1.59l-5.43 5.43a2.25 2.25 0 0 0-0.66 1.59v2.93a2.25 2.25 0 0 1-1.24 2.01L9.75 21v-6.57a2.25 2.25 0 0 0-0.66-1.59L3.66 7.41A2.25 2.25 0 0 1 3 5.82V4.77c0-0.540.38-1.010.92-1.1A48.32 48.32 0 0 1 12 3Z"}]];
  const defaultAttr = {"fill":"none","stroke-width":1.5};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
