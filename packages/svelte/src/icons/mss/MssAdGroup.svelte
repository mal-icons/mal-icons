<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M260-260h560v-500H260v500Zm-60 60v-680h680v680H200ZM80-80v-680h60v620h620v60H80Zm180-180v-560 560Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
