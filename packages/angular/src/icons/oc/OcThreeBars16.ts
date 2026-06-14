import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-three-bars-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcThreeBars16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1 2.75A0.750.75 0 0 1 1.75 2h12.5a0.750.75 0 0 1 0 1.5H1.75A0.750.75 0 0 1 1 2.75Zm0 5A0.750.75 0 0 1 1.75 7h12.5a0.750.75 0 0 1 0 1.5H1.75A0.750.75 0 0 1 1 7.75ZM1.75 12h12.5a0.750.75 0 0 1 0 1.5H1.75a0.750.75 0 0 1 0-1.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcThreeBars16;
