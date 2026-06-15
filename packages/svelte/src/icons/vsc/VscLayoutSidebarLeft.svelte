<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12.5 1C13.88 1 15 2.12 15 3.5V12.5C15 13.88 13.88 15 12.5 15H3.5C2.12 15 1 13.88 1 12.5V3.5C1 2.12 2.12 1 3.5 1H12.5ZM12.5 14C13.33 14 14 13.33 14 12.5V3.5C14 2.67 13.33 2 12.5 2H7V14H12.5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
