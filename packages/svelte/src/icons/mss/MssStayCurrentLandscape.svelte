<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M40-200v-560h880v560H40Zm90-60v-440h-30v440h30Zm60 0h580v-440H190v440Zm640 0h30v-440h-30v440ZM130-700h-30 30Zm700 0h30-30Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
