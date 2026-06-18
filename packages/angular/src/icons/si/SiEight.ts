import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-eight",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiEight {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.91 6.09a5.91 5.91 0 1 0 0 11.82 5.91 5.91 0 0 0 0-11.82zm9.23 0v2.96h5.91V6.09h-5.91zm5.91 2.96v5.91H24V9.05h-2.95zm0 5.91h-5.91v2.96h5.91v-2.95zm-5.91 0V9.05h-2.95v5.91h2.95zm-9.23-5.91A2.96 2.96 0 0 1 8.86 12a2.96 2.96 0 0 1-2.95 2.95A2.96 2.96 0 0 1 2.95 12a2.96 2.96 0 0 1 2.96-2.95z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiEight;
