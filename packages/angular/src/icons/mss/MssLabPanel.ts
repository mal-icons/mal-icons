import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-lab-panel",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssLabPanel {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M40-120v-360h80v-160H80v-200h360v200h-40v160h160v-160h-40v-200h360v200h-40v160h80v360H40Zm540-580h240v-80H580v80Zm-440 0h240v-80H140v80Zm480 220h160v-160H620v160Zm-440 0h160v-160H180v160Zm-80 300h760v-240H100v240Zm40-520v-80 80Zm440 0v-80 80ZM100-180v-240 240Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssLabPanel;
