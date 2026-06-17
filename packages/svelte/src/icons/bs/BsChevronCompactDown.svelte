<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M1.55 6.78a0.50.5 0 0 1 0.67-0.22L8 9.44l5.78-2.89a0.50.5 0 1 1 0.450.89l-6 3a0.50.5 0 0 1-0.45 0l-6-3a0.50.5 0 0 1-0.22-0.67"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
