import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-bottom-panel-open",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoBottomPanelOpen {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M344-527h272L480-663 344-527ZM180-120q-24.75 0-42.37-17.62T120-180v-600q0-24.75 17.63-42.37T180-840h600q24.75 0 42.38 17.63T840-780v600q0 24.75-17.62 42.38T780-120H180Zm0-207v147h600v-147H180Zm0-60h600v-393H180v393Zm0 60v147-147Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoBottomPanelOpen;
