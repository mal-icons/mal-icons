<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 2.02c-5.51 0-9.98 4.47-9.98 9.98s4.47 9.98 9.98 9.98 9.98-4.47 9.98-9.98S17.51 2.02 12 2.02zm-0.52 15.86v-4.14H8.82c-0.37 0-0.62-0.4-0.44-0.73l3.68-7.17c0.23-0.470.94-0.30.940.23v4.19h2.54c0.37 0 0.610.390.450.72l-3.56 7.12c-0.240.48-0.950.31-0.95-0.22z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
