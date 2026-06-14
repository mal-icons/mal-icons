import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-sparkle-fill-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcSparkleFill16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.53 1.28a0.50.5 0 0 1 0.94 0l0.48 1.31a7.49 7.49 0 0 0 4.46 4.46l1.310.48a0.50.5 0 0 1 0 0.94l-1.30.48a7.49 7.49 0 0 0-4.46 4.46l-0.48 1.31a0.50.5 0 0 1-0.94 0l-0.48-1.3a7.49 7.49 0 0 0-4.46-4.46L1.28 8.47a0.50.5 0 0 1 0-0.94l1.31-0.48a7.49 7.49 0 0 0 4.46-4.46Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcSparkleFill16;
