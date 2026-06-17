import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-check2-all",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsCheck2All {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.35 4.35a0.50.5 0 0 0-0.71-0.71L5 10.29 1.85 7.15a0.50.5 0 1 0-0.710.71l3.5 3.5a0.50.5 0 0 0 0.71 0zm-4.21 7-0.9-0.90.71-0.710.540.54 6.65-6.65a0.50.5 0 0 1 0.710.71l-7 7a0.50.5 0 0 1-0.71 0"}],["path",{"d":"m5.35 7.150.90.9-0.710.71-0.9-0.9a0.50.5 0 1 1 0.71-0.71"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsCheck2All;
