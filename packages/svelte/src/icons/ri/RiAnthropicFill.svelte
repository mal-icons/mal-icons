<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16.76 5H13.46L19.38 20H22.61L16.76 5ZM7.23 5L1.38 20H4.69L6 16.85H12.15L13.38 19.92H16.69L10.69 5H7.3H7.23ZM6.92 14.08L8.92 8.77L11 14.08H7H6.92Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
