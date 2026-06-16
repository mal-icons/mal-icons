<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M480-457ZM270-108q-9 7-17.50.5T247-125l79-259-208-149q-9-6-5.5-16.5T127-560h257l82-272q2-5 5.5-8t8.5-3q5 0 8.5 3t5.5 8l82 272h257q11 0 14.5 10.5T842-533L634-384l79 259q3 11-5.5 17.5T690-108L480-268 270-108Zm73-135 137-104 137 104-55-173 126-82H537l-57-173-57 173H272l126 82-55 173Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
