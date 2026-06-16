<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M162-80v-60h636v60H162Zm320-90L330-322l43-43 79 79v-388l-79 79-43-43 152-152 152 152-43 43-79-79v388l79-79 43 43-152 152ZM162-820v-60h636v60H162Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
