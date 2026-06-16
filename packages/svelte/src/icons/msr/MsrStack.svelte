<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M140-320q-24.75 0-42.37-17.62T80-380v-440q0-24.75 17.63-42.37T140-880h440q24.75 0 42.38 17.63T640-820v90q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63-12.82 0-21.32-8.62T580-730v-90H140v440h90q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T230-320h-90ZM380-80q-24.75 0-42.37-17.62T320-140v-440q0-24.75 17.63-42.37T380-640h440q24.75 0 42.38 17.63T880-580v440q0 24.75-17.62 42.38T820-80H380Zm0-60h440v-440H380v440Zm220-220Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
