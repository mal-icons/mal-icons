<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M3 2.5C3 2.22 3.22 2 3.5 2H9.09C9.22 2 9.35 2.05 9.44 2.15L11.85 4.56C11.95 4.65 12 4.78 12 4.91V12.5C12 12.78 11.78 13 11.5 13H3.5C3.22 13 3 12.78 3 12.5V2.5ZM3.5 1C2.67 1 2 1.67 2 2.5V12.5C2 13.33 2.67 14 3.5 14H11.5C12.33 14 13 13.33 13 12.5V4.91C13 4.52 12.84 4.13 12.56 3.85L10.15 1.44C9.87 1.16 9.48 1 9.09 1H3.5ZM4.5 4C4.22 4 4 4.22 4 4.5C4 4.78 4.22 5 4.5 5H7.5C7.78 5 8 4.78 8 4.5C8 4.22 7.78 4 7.5 4H4.5ZM4.5 7C4.22 7 4 7.22 4 7.5C4 7.78 4.22 8 4.5 8H10.5C10.78 8 11 7.78 11 7.5C11 7.22 10.78 7 10.5 7H4.5ZM4.5 10C4.22 10 4 10.22 4 10.5C4 10.78 4.22 11 4.5 11H10.5C10.78 11 11 10.78 11 10.5C11 10.22 10.78 10 10.5 10H4.5Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 15 15" {nodes} {...props} />
