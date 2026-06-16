<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M200-160v-130h-80v-60h80v-130H80l400-360 400 360H760v130h80v60h-80v130h-60v-130H510v130h-60v-130H260v130h-60Zm60-190h190v-382L260-562v212Zm250 0h190v-212L510-732v382Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
