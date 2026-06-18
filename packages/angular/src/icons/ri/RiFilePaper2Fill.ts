import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-file-paper-2-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiFilePaper2Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 2C21.66 2 23 3.34 23 5V7H21V19C21 20.66 19.66 22 18 22H4C2.34 22 1 20.66 1 19V17H17V19C17 19.51 17.39 19.94 17.88 19.99L18 20C18.51 20 18.94 19.61 18.99 19.12L19 19V15H3V5C3 3.34 4.34 2 6 2H20Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiFilePaper2Fill;
