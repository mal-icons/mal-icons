<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 7L11.45 1.37C11.79 1.15 12.22 1.15 12.56 1.37L21 7V21C21 21.55 20.56 22 20 22H4C3.45 22 3 21.55 3 21V7ZM5 8.07V20H19V8.07L12 3.4L5 8.07ZM12 11C10.9 11 10 10.1 10 9C10 7.9 10.9 7 12 7C13.11 7 14 7.9 14 9C14 10.1 13.11 11 12 11Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
