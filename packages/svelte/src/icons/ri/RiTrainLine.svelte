<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17.2 20L19 21.5V22H5V21.5L6.8 20H5C3.9 20 3 19.1 3 18V7C3 4.79 4.79 3 7 3H17C19.21 3 21 4.79 21 7V18C21 19.1 20.1 20 19 20H17.2ZM7 5C5.9 5 5 5.9 5 7V18H19V7C19 5.9 18.1 5 17 5H7ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM6 7H18V11H6V7Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
