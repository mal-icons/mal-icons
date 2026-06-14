<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"#F57C00","d":"M40,41H8c-2.2,0-4-1.8-4-4V11c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v26C44,39.2,42.2,41,40,41z"}],["circle",{"fill":"#FFF9C4","cx":"35","cy":"16","r":"3"}],["polygon",{"fill":"#942A09","points":"20,16 9,32 31,32"}],["polygon",{"fill":"#BF360C","points":"31,22 23,32 39,32"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 48 48" {nodes} {...props} />
