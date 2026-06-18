<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18.36 17.36L12 23.73L5.64 17.36C2.12 13.85 2.12 8.15 5.64 4.64C9.15 1.12 14.85 1.12 18.36 4.64C21.88 8.15 21.88 13.85 18.36 17.36ZM12 15C14.21 15 16 13.21 16 11C16 8.79 14.21 7 12 7C9.79 7 8 8.79 8 11C8 13.21 9.79 15 12 15ZM12 13C10.9 13 10 12.1 10 11C10 9.9 10.9 9 12 9C13.1 9 14 9.9 14 11C14 12.1 13.1 13 12 13Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
