<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M479.88-80Q434-80 402-112.12q-32-32.12-32-78Q370-236 402.12-268q32.12-32 78-32Q526-300 558-267.88q32 32.12 32 78Q590-144 557.88-112q-32.12 32-78 32ZM480-410 294-596l42-42 114 113v-354h60v354l113-113 43 42-186 186Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
