<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M22.73 22.73 2.77 2.77 2 2l-0.73-0.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-0.160.28-0.250.61-0.250.96 0 1.10.9 2 2 2h7.46l1.38 1.38A2 2 0 0 0 17 22c0.67 0 1.26-0.33 1.62-0.84L21.46 24l1.27-1.27zM7.42 15c-0.14 0-0.25-0.11-0.25-0.25l0.03-0.120.9-1.63h2.36l2 2H7.42zm8.13-2c0.75 0 1.41-0.41 1.75-1.03l3.58-6.49A1 1 0 0 0 20 4H6.54l9.01 9zM7 18c-1.1 0-1.990.9-1.99 2S5.9 22 7 22s2-0.9 2-2-0.9-2-2-2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
