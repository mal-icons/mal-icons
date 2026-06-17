<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M15.53 2.97a0.750.75 0 0 1 0.470.7v8.66a0.750.75 0 0 1-0.470.7l-7.25 2.9a0.750.75 0 0 1-0.56 0l-7.25-2.9A0.750.75 0 0 1 0 12.33V3.67a0.750.75 0 0 1 0.47-0.7L7.440.18l000.27-0.11a0.750.75 0 0 1 0.56 0l0.270.1100zm-1.370.53L8 5.96 1.85 3.5 1 3.84v0.4l6.5 2.6v7.92l0.50.20.5-0.2V6.84l6.5-2.6v-0.4l-0.85-0.34Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
