import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-view-column",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrViewColumn {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M120-260v-440q0-24.75 17.63-42.37T180-760h600q24.75 0 42.38 17.63T840-700v440q0 24.75-17.62 42.38T780-200H180q-24.75 0-42.37-17.62T120-260Zm60 0h160v-440H180v440Zm220 0h160v-440H400v440Zm220 0h160v-440H620v440Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrViewColumn;
