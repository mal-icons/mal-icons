import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-quora",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiQuora {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.380.95A11.96 11.96 0 0 1 21.25 19.54l2.41 2.42c0.730.740.21 1.99-0.83 1.99l-10.710.01a12.52 12.52 0 0 1-0.3 0h-0.02A11.96 11.96 0 0 1 7.380.95Zm7.32 4.43a7.17 7.17 0 1 0-5.49 13.25 7.17 7.17 0 0 0 5.49-13.25Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiQuora;
