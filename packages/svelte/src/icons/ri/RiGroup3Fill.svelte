<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2.5 7C2.5 9.21 4.29 11 6.5 11C8.71 11 10.5 9.21 10.5 7C10.5 4.79 8.71 3 6.5 3C4.29 3 2.5 4.79 2.5 7ZM2 21V16.5C2 14.01 4.01 12 6.5 12C8.99 12 11 14.01 11 16.5V21H2ZM17.5 11C15.29 11 13.5 9.21 13.5 7C13.5 4.79 15.29 3 17.5 3C19.71 3 21.5 4.79 21.5 7C21.5 9.21 19.71 11 17.5 11ZM13 21V16.5C13 14.01 15.01 12 17.5 12C19.99 12 22 14.01 22 16.5V21H13Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
