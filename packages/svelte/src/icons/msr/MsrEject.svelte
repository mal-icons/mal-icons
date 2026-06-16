<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M230-200q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T230-260h500q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T730-200H230Zm35-152q-18.38 0-27.19-16Q229-384 240-399l215-323q9.11-14 25.06-14Q496-736 505-722l215 323q11 15 2.19 31-8.81 16-27.19 16H265Zm216-60Zm-162 0h322L480-650 319-412Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
