<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M148-770q-12 0-20.5-8.68-8.5-8.68-8.5-21.5 0-12.82 8.63-21.32T149-830h662q12 0 20.5 8.68 8.5 8.68 8.5 21.5 0 12.83-8.62 21.33T810-770H148Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
