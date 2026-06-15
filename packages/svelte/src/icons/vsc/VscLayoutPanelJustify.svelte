<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M12.5 1H3.5C2.12 1 1 2.12 1 3.5V12.5C1 13.88 2.12 15 3.5 15H12.5C13.88 15 15 13.88 15 12.5V3.5C15 2.12 13.88 1 12.5 1ZM14 3.5V10H12V2H12.5C13.33 2 14 2.67 14 3.5ZM5 10H11V2H5V10ZM4 2V10H2V3.5C2 2.67 2.67 2 3.5 2H4Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
