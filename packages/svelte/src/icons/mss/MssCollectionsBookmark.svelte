<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M260-260h560v-560h-60v278l-93-57-93 57v-278H260v560Zm-60 60v-680h680v680H200ZM80-80v-680h60v620h620v60H80Zm180-740v560-560Zm314 278 93-57 93 57-93-57-93 57Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
