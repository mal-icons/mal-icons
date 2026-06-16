<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M479.88-80Q434-80 402-112.12q-32-32.12-32-78Q370-236 402.12-268q32.12-32 78-32Q526-300 558-267.88q32 32.12 32 78Q590-144 557.88-112q-32.12 32-78 32ZM450-525v-324q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T510-849v324l92-92q9-9 21.16-9 12.16 0 21 8.61Q653-608 653-595.53q0 12.47-9 21.53L501-431q-9 9-21 9t-21-9L315-575q-9-9-9-21t9-21q9-9 21-9t21 9l93 92Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
