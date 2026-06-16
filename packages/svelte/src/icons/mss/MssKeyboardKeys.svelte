<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M287-285v-60h387v60H287ZM123-450v-60h60v60h-60Zm164 0v-60h60v60h-60Zm163 0v-60h60v60h-60Zm164 0v-60h60v60h-60Zm163 0v-60h60v60h-60ZM123-615v-60h60v60h-60Zm164 0v-60h60v60h-60Zm163 0v-60h60v60h-60Zm164 0v-60h60v60h-60Zm163 0v-60h60v60h-60Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
