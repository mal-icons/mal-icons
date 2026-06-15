<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.5 1H3.5C2.12 1 1 2.12 1 3.5V11.5C1 12.88 2.12 14 3.5 14H11.5C12.88 14 14 12.88 14 11.5V3.5C14 2.12 12.88 1 11.5 1ZM13 11.5C13 12.33 12.33 13 11.5 13H3.5C2.67 13 2 12.33 2 11.5V3.5C2 2.67 2.67 2 3.5 2H11.5C12.33 2 13 2.67 13 3.5V11.5ZM10.85 4.15C11.05 4.34 11.05 4.66 10.85 4.85L4.85 10.85C4.76 10.95 4.63 11 4.5 11C4.37 11 4.24 10.95 4.15 10.85C3.95 10.66 3.95 10.34 4.15 10.15L10.15 4.15C10.34 3.95 10.66 3.95 10.85 4.15Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
