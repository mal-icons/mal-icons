import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-funnel",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsFunnel {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.5 1.5A0.50.5 0 0 1 2 1h12a0.50.5 0 0 1 0.50.5v2a0.50.5 0 0 1-0.130.33L10 8.69V13.5a0.50.5 0 0 1-0.340.47l-3 1A0.50.5 0 0 1 6 14.5V8.69L1.63 3.83A0.50.5 0 0 1 1.5 3.5zm1 0.5v1.31l4.37 4.86A0.50.5 0 0 1 7 8.5v5.31l2-0.67V8.5a0.50.5 0 0 1 0.13-0.33L13.5 3.31V2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsFunnel;
