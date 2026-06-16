import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-system-security-update-good",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrSystemSecurityUpdateGood {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 1.01 7 1c-1.1 0-2 0.9-2 2v18c0 1.10.9 2 2 2h10c1.1 0 2-0.9 2-2V3c0-1.1-0.9-1.99-2-1.99zM17 18H7V6h10v12zm-6.66-3.71c0.390.39 1.020.39 1.41 0l3.54-3.54a11 0 1 0-1.41-1.41l-2.83 2.83-0.71-0.71a11 0 1 0-1.41 1.41l1.41 1.42z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrSystemSecurityUpdateGood;
