import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-lightning-charge-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsLightningChargeFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.250.07a0.50.5 0 0 1 0.230.58L9.68 6.5H13a0.50.5 0 0 1 0.360.84l-8 8.5a0.50.5 0 0 1-0.84-0.49L6.32 9.5H3a0.50.5 0 0 1-0.36-0.84l8-8.5a0.50.5 0 0 1 0.62-0.09z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsLightningChargeFill;
