<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M110-820q-12.75 0-21.37-8.68Q80-837.35 80-850.17 80-863 88.63-871.5T110-880h740q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T850-820H110Zm350 680q-12.75 0-21.37-8.62T430-170v-510q0-12.75 8.63-21.37T460-710h40q12.75 0 21.38 8.63T530-680v510q0 12.75-8.62 21.38T500-140h-40Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
