<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m13 5 0.75-1.5H17V2H7v1.5h4.75L11 5c-3.130.09-6 0.73-6 3.5V17c0 1.5 1.11 2.73 2.55 2.95l-1.19 1.19c-0.320.32-0.10.860.350.86H7.8c0.13 0 0.26-0.050.35-0.15L10 20h4l1.85 1.85c0.090.090.220.150.350.15h1.09c0.45 0 0.67-0.540.35-0.85l-1.19-1.19C17.89 19.73 19 18.5 19 17V8.5c0-2.77-2.87-3.41-6-3.5zm-1 13.5c-0.83 0-1.5-0.67-1.5-1.5s0.67-1.5 1.5-1.5 1.50.67 1.5 1.5-0.67 1.5-1.5 1.5zm5-4.5H7V9h10v5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
