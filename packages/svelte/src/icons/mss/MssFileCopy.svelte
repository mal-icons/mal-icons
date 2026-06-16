<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M200-160v-760h408l232 232v528H200Zm378-502v-198H260v640h520v-442H578ZM80-40v-679h60v619h498v60H80Zm180-820v198-198 640-640Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
