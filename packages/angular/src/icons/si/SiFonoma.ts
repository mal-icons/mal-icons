import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-fonoma",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiFonoma {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.71 21.92a4.3 4.3 0 0 0 4.29-4.3 4.3 4.3 0 1 0-4.29 4.3zM4.3 10.67a4.3 4.3 0 0 0 4.29-4.29 4.3 4.3 0 1 0-4.29 4.3zm10.41 0h4.97a4.28 4.28 0 0 0 4.29-4.29 4.28 4.28 0 0 0-4.29-4.3h-4.97a4.28 4.28 0 0 0-4.29 4.3 4.28 4.28 0 0 0 4.29 4.3zM4.3 21.92h4.98a4.28 4.28 0 0 0 4.29-4.3 4.28 4.28 0 0 0-4.29-4.29H4.3a4.28 4.28 0 0 0-4.29 4.3c0.07 2.32 1.98 4.3 4.29 4.3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiFonoma;
