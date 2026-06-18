import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-wish",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiWish {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.86 19.83h-4.11l-3.23-9.39-2.28 9.39H5.14L0 4.65h4.22l4.35 13.13c1.56-4.4 2.53-8.5 1.02-13.13H13.7ZM20.57 4.17a15.71 15.71 0 0 1-3.42 4.17 17.1 17.1 0 0 1 3.43 5.56A17.12 17.12 0 0 1 24 8.35a15.73 15.73 0 0 1-3.43-4.17Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiWish;
