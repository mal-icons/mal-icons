<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m15.95 7-0.59-0.65L14.12 5H9.88L8.65 6.35l-0.60.65H4v12h16V7h-4.05zM12 18c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z","opacity":".3"}],["path",{"d":"m12 10-0.94 2.06L9 13l2.060.94L12 16l0.94-2.06L15 13l-2.06-0.94zm8-5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V7c0-1.1-0.9-2-2-2zm0 14H4V7h4.05l0.59-0.65L9.88 5h4.24l1.24 1.350.590.65H20v12zM12 8c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
