<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0 8.82h2.02v6.36H0zm11.57 0h-3.47v2.02h1.45v4.34h2.02v-4.34h1.45V8.82zm5.49 0h-3.47v2.02h1.45v4.34h2.02v-4.34h1.45V8.82zm5.49 0h-3.47v2.02h1.45v4.34h2.02v-4.34H24V8.82zM7.52 10.84V8.82H2.89v6.36h2.02v-1.73H6.65v-2.02H4.92v-0.58z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
