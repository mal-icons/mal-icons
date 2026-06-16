<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M80-120v-60h80v-660h640v660h80v60H80Zm140-60h85v-600h-85v600Zm145 0h85v-600h-85v600Zm145 0h85v-600h-85v600Zm145 0h85v-600h-85v600Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
