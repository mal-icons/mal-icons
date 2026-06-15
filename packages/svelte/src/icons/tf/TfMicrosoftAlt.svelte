<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0 2.34l6.97-0.96v6.73h-6.97v-5.77zM0 14.66l6.97 0.96v-6.65h-6.97v5.69zM7.73 1.28v6.84h9.27v-8.11l-9.27 1.28zM7.73 15.72l9.27 1.28v-8.03h-9.27v6.75z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
