<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18.41 9L12 2.59L5.59 9H11V16H13V9H18.41ZM3 14V18C3 19.66 4.34 21 6 21H18C19.66 21 21 19.66 21 18V14H19V18C19 18.55 18.55 19 18 19H6C5.45 19 5 18.55 5 18V14H3Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
