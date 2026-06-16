<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m9.4 10.5 4.77-8.26a9.98 9.98 0 0 0-8.49 2.01l3.66 6.350.06-0.1zM21.54 9c-0.92-2.92-3.15-5.26-6-6.34L11.88 9h9.66zm0.26 1h-7.49l0.290.5 4.76 8.25A9.91 9.91 0 0 0 22 12c0-0.69-0.07-1.35-0.2-2zM8.54 12l-3.9-6.75A9.96 9.96 0 0 0 2.2 14h7.49l-1.15-2zm-6.08 3c0.92 2.92 3.15 5.26 6 6.34L12.12 15H2.46zm11.27 0-3.9 6.76a9.98 9.98 0 0 0 8.49-2.01l-3.66-6.35-0.93 1.6z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
