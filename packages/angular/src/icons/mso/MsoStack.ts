import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-stack",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoStack {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M260-380v60H140q-24.75 0-42.37-17.62T80-380v-440q0-24.75 17.63-42.37T140-880h440q24.75 0 42.38 17.63T640-820v120h-60v-120H140v440h120ZM380-80q-24.75 0-42.37-17.62T320-140v-440q0-24.75 17.63-42.37T380-640h440q24.75 0 42.38 17.63T880-580v440q0 24.75-17.62 42.38T820-80H380Zm0-60h440v-440H380v440Zm220-220Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoStack;
