<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10.62 19.89V8.75L2.87 19.89H0V4.11h2.76v11.11l7.75-11.11h2.87v11.14L21.16 4.11H24v15.78h-2.73V8.75l-7.75 11.14Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
