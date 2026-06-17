import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-measuring-cup-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsMeasuringCupFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 0a2 2 0 0 1 2 2v5.96a1.04 1.04 0 0 1-2.050.26l-0.02-0.09-0.85-5.1a0.040.04 0 0 0-0.080.01V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3.74a2.5 2.5 0 0 0-0.73-1.77L0.150.85A0.50.5 0 0 1 0.5 0zM4 13v1h1.5a0.50.5 0 0 0 0-1zm0-2v1h3.5a0.50.5 0 0 0 0-1zm0-2v1h1.5a0.50.5 0 0 0 0-1zm0-2v1h3.5a0.50.5 0 0 0 0-1zm0-2v1h1.5a0.50.5 0 0 0 0-1zm0-2v1h3.5a0.50.5 0 0 0 0-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsMeasuringCupFill;
