<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M220-360v-192h-60v-48h108v240h-48Zm132 0v-144h132v-48H352v-48h180v144H400v48h132v48H352Zm248 0v-48h132v-48h-92v-48h92v-48H600v-48h180v240H600Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
