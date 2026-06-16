import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-medication",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoMedication {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M440-269h79v-111h114v-80H519v-111h-79v111H327v80h113v111ZM260-120q-24.75 0-42.37-17.62T200-180v-479q0-24.75 17.63-42.37T260-719h440q24.75 0 42.38 17.63T760-659v479q0 24.75-17.62 42.38T700-120H260Zm0-60h440v-479H260v479Zm-20-600v-60h481v60H240Zm20 121v479-479Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoMedication;
