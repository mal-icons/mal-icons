<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19.97 6.43 12 2 4.03 6.43 9.1 9.24C9.83 8.48 10.86 8 12 8s2.170.48 2.9 1.24l5.07-2.81zM10 12c0-1.10.9-2 2-2s2 0.9 2 2-0.9 2-2 2-2-0.9-2-2zm1 9.44L3 17V8.14l5.13 2.85c-0.090.32-0.130.66-0.13 1.01 0 1.86 1.27 3.43 3 3.87v5.57zm2 0v-5.57c1.73-0.44 3-2.01 3-3.87 0-0.35-0.04-0.69-0.13-1.01L21 8.14V17l-8 4.44z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
