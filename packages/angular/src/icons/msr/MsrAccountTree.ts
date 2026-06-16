import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-account-tree",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrAccountTree {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M664-120q-24.75 0-42.37-17.62T604-180v-65h-94q-24.75 0-42.37-17.62T450-305v-350h-93v70q0 24.75-17.62 42.38T297-525H140q-24.75 0-42.37-17.62T80-585v-195q0-24.75 17.63-42.37T140-840h157q24.75 0 42.38 17.63T357-780v65h247v-65q0-24.75 17.63-42.37T664-840h156q24.75 0 42.38 17.63T880-780v195q0 24.75-17.62 42.38T820-525H664q-24.75 0-42.37-17.62T604-585v-70h-94v350h94v-70q0-24.75 17.63-42.37T664-435h156q24.75 0 42.38 17.63T880-375v195q0 24.75-17.62 42.38T820-120H664ZM140-780v195-195Zm524 405v195-195Zm0-405v195-195Zm0 195h156v-195H664v195Zm0 405h156v-195H664v195ZM140-585h157v-195H140v195Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrAccountTree;
