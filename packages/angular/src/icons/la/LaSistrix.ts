import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-sistrix",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaSistrix {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 12.5 3 C 7.26 3 3 7.26 3 12.5 C 3 17.74 7.26 22 12.5 22 C 14.76 22 16.83 21.2 18.47 19.88 L 27.63 29.04 L 29.04 27.63 L 19.88 18.47 C 21.2 16.83 22 14.76 22 12.5 C 22 7.26 17.74 3 12.5 3 z M 12.5 5 C 16.64 5 20 8.36 20 12.5 C 20 16.64 16.64 20 12.5 20 C 8.36 20 5 16.64 5 12.5 C 5 8.36 8.36 5 12.5 5 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaSistrix;
