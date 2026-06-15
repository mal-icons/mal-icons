<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15.54 0.5l-1.28 14.38-5.78 1.62-5.74-1.62-1.28-14.38h14.08zM12.92 3.44h-8.84l0.47 5.34h6.12l-0.22 2.28-1.97 0.53-1.96-0.53-0.13-1.4h-1.75l0.22 2.78 3.62 1h0.04v-0.01l3.59-0.99 0.5-5.44h-6.44l-0.15-1.81h6.74l0.16-1.75z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
