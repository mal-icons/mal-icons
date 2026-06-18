<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 4H6c-1.1 0-2 0.9-2 2v5h2V8l6.4 4.8a1 1 0 0 0 1.2 0L20 8v9h-8v2h8c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2zm-7 6.75L6.67 6h12.67L13 10.75z"}],["path",{"d":"M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
