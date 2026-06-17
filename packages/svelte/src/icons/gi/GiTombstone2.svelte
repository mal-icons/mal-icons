<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M256 46c-81.82 0-150 63.37-150 150v150c0 6.67-0.76 23.56 0 30h300c0.76-6.44 0-23.33 0-30V196c0-86.63-68.18-150-150-150zM16 406v60h480v-60H16z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
