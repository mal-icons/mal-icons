<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M200-200v-680h680v680H200Zm60-60h560v-560H260v560ZM80-80v-680h60v620h620v60H80Zm180-740v560-560Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
