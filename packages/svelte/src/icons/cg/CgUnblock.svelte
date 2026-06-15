<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M5.64 18.36C9.15 21.88 14.85 21.88 18.36 18.36C21.88 14.85 21.88 9.15 18.36 5.64C14.85 2.12 9.15 2.12 5.64 5.64C2.12 9.15 2.12 14.85 5.64 18.36ZM7.81 17.61C10.55 19.66 14.46 19.44 16.95 16.95C19.44 14.46 19.66 10.55 17.61 7.81L14.83 10.59C14.44 10.98 13.8 10.98 13.41 10.59C13.02 10.2 13.02 9.56 13.41 9.17L16.19 6.39C13.45 4.34 9.54 4.56 7.05 7.05C4.56 9.54 4.34 13.45 6.39 16.19L9.17 13.41C9.56 13.02 10.2 13.02 10.59 13.41C10.98 13.8 10.98 14.44 10.59 14.83L7.81 17.61Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
