<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 14V11H13V14H18C18.55 14 19 14.45 19 15V21C19 21.55 18.55 22 18 22H6C5.45 22 5 21.55 5 21V15C5 14.45 5.45 14 6 14H11ZM2.51 8.84C3.83 4.86 7.58 2 12 2C16.42 2 20.17 4.86 21.49 8.84L19.59 9.47C18.53 6.29 15.53 4 12 4C8.47 4 5.47 6.29 4.41 9.47L2.51 8.84ZM6.31 10.1C7.1 7.72 9.35 6 12 6C14.65 6 16.9 7.72 17.69 10.1L15.8 10.73C15.27 9.15 13.77 8 12 8C10.23 8 8.73 9.15 8.2 10.73L6.31 10.1ZM7 16V20H17V16H7Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
