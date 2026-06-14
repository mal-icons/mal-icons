<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2.2 9.4c0 1.30.2 3.3 2 5.1 1.6 1.6 6.9 5.2 7.1 5.40.20.10.40.20.60.2s0.4-0.10.6-0.2c0.2-0.2 5.5-3.7 7.1-5.4 1.8-1.8 2-3.8 2-5.1 0-3-2.4-5.4-5.4-5.4-1.6 0-3.20.9-4.2 2.3-1-1.4-2.6-2.3-4.4-2.3-2.9 0-5.4 2.4-5.4 5.4zm9.8 1c0.6 0 1-0.4 1-1 0-1.9 1.5-3.4 3.4-3.4s3.4 1.5 3.4 3.4c0 1.1-0.2 2.4-1.5 3.7-1.2 1.2-4.9 3.8-6.3 4.7v-7.4z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
