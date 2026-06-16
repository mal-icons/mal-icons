import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-aod",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrAod {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 1.01 7 1c-1.1 0-2 0.9-2 2v18c0 1.10.9 2 2 2h10c1.1 0 2-0.9 2-2V3c0-1.1-0.9-1.99-2-1.99zM17 18H7V6h10v12zm-8.25-8h6.5c0.41 0 0.750.340.750.75s-0.340.75-0.750.75h-6.5c-0.41 0-0.75-0.34-0.75-0.75s0.34-0.750.75-0.75zm1 3h4.5c0.41 0 0.750.340.750.75s-0.340.75-0.750.75h-4.5c-0.41 0-0.75-0.34-0.75-0.75s0.34-0.750.75-0.75z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrAod;
