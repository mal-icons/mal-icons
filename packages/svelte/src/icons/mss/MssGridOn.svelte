<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M120-120v-720h720v720H120Zm60-60h160v-160H180v160Zm220 0h160v-160H400v160Zm220 0h160v-160H620v160ZM180-400h160v-160H180v160Zm220 0h160v-160H400v160Zm220 0h160v-160H620v160ZM180-620h160v-160H180v160Zm220 0h160v-160H400v160Zm220 0h160v-160H620v160Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
