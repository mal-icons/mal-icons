<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"stroke":"currentColor","stroke-width":"2","d":"M12 20v-5m0-6V4m-7 8h5m9 0h-5m-0.97-4.03L12 9.34l-1.03-1.37h2.06zm-2.06 8.07L12 14.66l1.03 1.38H10.97zM6 13.03L4.63 12 6 10.97v2.06zm12-2.06L19.38 12 18 13.03V10.97zM12 1c6.08 0 11 4.93 11 11s-4.92 11-11 11S1 18.08 1 12 5.93 1 12 1z"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
