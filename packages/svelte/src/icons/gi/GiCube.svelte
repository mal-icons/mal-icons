<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M256 24.59L51.47 118.99 256 213.39l204.53-94.4zM39 133.05v258.35L247 487.42V229.06zm434 0L265 229.06v258.35l208-96.01z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
