import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-pause",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrPause {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M585-200q-24.75 0-42.37-17.62T525-260v-440q0-24.75 17.63-42.37T585-760h115q24.75 0 42.38 17.63T760-700v440q0 24.75-17.62 42.38T700-200H585Zm-325 0q-24.75 0-42.37-17.62T200-260v-440q0-24.75 17.63-42.37T260-760h115q24.75 0 42.38 17.63T435-700v440q0 24.75-17.62 42.38T375-200H260Zm325-60h115v-440H585v440Zm-325 0h115v-440H260v440Zm0-440v440-440Zm325 0v440-440Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrPause;
