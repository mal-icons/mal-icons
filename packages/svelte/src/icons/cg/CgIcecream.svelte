<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M15 17H19V8C19 4.13 15.87 1 12 1C8.13 1 5 4.13 5 8V17H9V20C9 21.66 10.34 23 12 23C13.66 23 15 21.66 15 20V17ZM17 15V8C17 5.24 14.76 3 12 3C9.24 3 7 5.24 7 8V15H11V20C11 20.55 11.45 21 12 21C12.55 21 13 20.55 13 20V15H17Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
