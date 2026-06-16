<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M880-310q0 12.75-8.62 21.38T850-280H174q-12.75 0-21.37-8.62T144-310v-90h-34q-12.75 0-21.37-8.62T80-430v-100q0-12.75 8.63-21.37T110-560h34v-90q0-12.75 8.63-21.37T174-680h676q12.75 0 21.38 8.63T880-650v340Zm-368-30v-280H204v280h308Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
