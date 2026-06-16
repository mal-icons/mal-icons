<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M120-120v-60h60v60h-60Zm330 0v-329H120v-60h330v-332h60v332h330v60H510v329h-60Zm-165 0v-60h60v60h-60Zm330 0v-60h60v60h-60Zm165 0v-60h60v60h-60ZM120-285v-60h60v60h-60Zm660 0v-60h60v60h-60ZM120-615v-60h60v60h-60Zm660 0v-60h60v60h-60ZM120-780v-60h60v60h-60Zm165 0v-60h60v60h-60Zm330 0v-60h60v60h-60Zm165 0v-60h60v60h-60Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
