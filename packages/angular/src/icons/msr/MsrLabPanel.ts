import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-lab-panel",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrLabPanel {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M100-120q-24.75 0-42.37-17.62T40-180v-240q0-24.75 17.63-42.37T100-480h20v-163q-17-6-28.5-21.39Q80-679.78 80-700v-80q0-24.75 17.63-42.37T140-840h240q24.75 0 42.38 17.63T440-780v80q0 20.22-11.5 35.61Q417-649 400-643v163h160v-163q-17-6-28.5-21.39Q520-679.78 520-700v-80q0-24.75 17.63-42.37T580-840h240q24.75 0 42.38 17.63T880-780v80q0 20.22-11.5 35.61Q857-649 840-643v163h20q24.75 0 42.38 17.63T920-420v240q0 24.75-17.62 42.38T860-120H100Zm480-580h240v-80H580v80Zm-440 0h240v-80H140v80Zm480 220h160v-160H620v160Zm-440 0h160v-160H180v160Zm-80 300h760v-240H100v240Zm40-520v-80 80Zm440 0v-80 80ZM100-180v-240 240Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrLabPanel;
