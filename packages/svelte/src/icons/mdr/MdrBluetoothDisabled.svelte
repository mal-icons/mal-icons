<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19.29 17.89 6.11 4.7A11 0 1 0 4.7 6.11L10.59 12 5.7 16.89a11 0 1 0 1.41 1.41L11 14.41v6.18c0 0.89 1.08 1.34 1.710.71l3.59-3.59 1.59 1.59c0.390.39 1.020.39 1.41 0 0.38-0.390.38-1.03-0.01-1.41zm-6.290.28v-3.76l1.88 1.88L13 18.17zm0-12.34 1.88 1.88-1.47 1.47 1.41 1.41L17 8.42c0.39-0.390.39-1.02 0-1.42l-4.29-4.29c-0.63-0.63-1.71-0.19-1.710.7v3.36l2 2V5.83z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
