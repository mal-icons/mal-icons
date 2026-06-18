<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 7V20H9V7H3V5H15V7H11ZM19.55 6.58C19.7 6.43 19.8 6.23 19.8 6C19.8 5.56 19.44 5.2 19 5.2C18.56 5.2 18.2 5.56 18.2 6C18.2 6.08 18.21 6.15 18.23 6.22L17.08 6.55C17.03 6.37 17 6.19 17 6C17 4.9 17.9 4 19 4C20.1 4 21 4.9 21 6C21 6.57 20.76 7.09 20.37 7.45L18.74 9H21V10H17V9L19.55 6.58V6.58Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
