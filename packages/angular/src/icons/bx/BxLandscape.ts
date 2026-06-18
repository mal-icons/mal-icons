import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-landscape",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxLandscape {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 20h18a1 1 0 0 0 0.86-1.5l-7-12c-0.36-0.61-1.37-0.61-1.73 0L9.87 12.1l-1.02-1.63A11 0 0 0 8 10h0a1 1 0 0 0-0.850.47l-5 8A1 1 0 0 0 3 20zM14 8.99 19.26 18h-5.7l-2.49-3.99L14 8.99zm-6 3.9L11.2 18H4.81l3.2-5.11zM6 8c1.65 0 3-1.35 3-3S7.65 2 6 2 3 3.35 3 5s1.35 3 3 3zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxLandscape;
