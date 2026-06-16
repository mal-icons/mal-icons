<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M260-242v92q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63-12.82 0-21.32-8.62T200-150v-278q0-26 17-43t43-17h60v-90h-60q-26 0-43-17t-17-43v-142q0-26 17-43t43-17h440q26 0 43 17t17 43v142q0 26-17 43t-43 17h-60v90h60q26 0 43 17t17 43v278q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63-12.82 0-21.32-8.62T700-150v-92H260Zm0-396h440v-142H260v142Zm120 150h200v-90H380v90ZM260-302h440v-126H260v126Zm0-336v-142 142Zm0 336v-126 126Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
