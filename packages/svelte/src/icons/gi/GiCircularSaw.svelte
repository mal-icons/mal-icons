<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M256 16v72H88l48 48L16 256h72v168l48-48 120 120v-72h168l-48-48 120-120h-72V88l-48 48L256 16zm0 120c66.27 0 120 53.73 120 120s-53.73 120-120 120-120-53.73-120-120 53.73-120 120-120zm1.41 72.03A48 48 0 0 0 208 256a48 48 0 0 0 96 0 48 48 0 0 0-46.59-47.97z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
