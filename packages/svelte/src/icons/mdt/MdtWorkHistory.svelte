<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 8v11h7.08c-0.05-0.33-0.08-0.66-0.08-1 0-3.87 3.13-7 7-7 0.7 0 1.370.1 2 0.29V8H4z","opacity":".3"}],["path",{"d":"M4 19V8h16v3.29c0.720.22 1.40.54 2 0.97V8c0-1.11-0.89-2-2-2h-4V4c0-1.11-0.89-2-2-2h-4c-1.11 0-2 0.89-2 2v2H4c-1.11 0-1.990.89-1.99 2L2 19c0 1.110.89 2 2 2h7.68c-0.3-0.62-0.5-1.29-0.6-2H4zm6-15h4v2h-4V4z"}],["path",{"d":"M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm1.65 7.35L17.5 18.2V15h1v2.79l1.85 1.85-0.70.71z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
