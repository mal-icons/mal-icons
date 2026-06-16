<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M480-277 277-480l203-203 203 203-203 203Zm1 219L59-481l421-421 421 421L481-58Zm-1-109 313-313-313-313-313 313 313 313Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
