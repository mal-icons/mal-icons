import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-magnet",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxMagnet {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 3h-3c-1.1 0-2 0.9-2 2v8c0 1.1-0.9 2-2 2s-2-0.9-2-2V5c0-1.1-0.9-2-2-2H5c-1.1 0-2 0.9-2 2v8c0 4.96 4.04 9 9 9s9-4.04 9-9V5c0-1.1-0.9-2-2-2zm-3 2h3v3h-3V5zM5 5h3v3H5V5zm7 15c-3.86 0-7-3.14-7-7v-3h3v3c0 2.21 1.79 4 4 4s4-1.79 4-4v-3h3v3c0 3.86-3.14 7-7 7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxMagnet;
