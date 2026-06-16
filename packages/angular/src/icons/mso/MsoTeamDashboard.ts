import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-team-dashboard",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoTeamDashboard {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M180-120q-24.75 0-42.37-17.62T120-180v-600q0-24.75 17.63-42.37T180-840h600q24.75 0 42.38 17.63T840-780v600q0 24.75-17.62 42.38T780-120H180Zm230-60v-270H180v270h230Zm60 0h310v-270H470v270ZM180-510h600v-270H180v270Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoTeamDashboard;
