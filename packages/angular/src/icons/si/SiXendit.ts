import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-xendit",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiXendit {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.78 2.74H7.97l-5.34 9.26 5.34 9.26-1.31 2.27L0 12.01 6.650.46h6.45l-1.33 2.28Zm-5.13 2.28 1.31-2.28L9.87 6.03 8.56 8.3 6.65 5.02Zm9.38-2.28 1.31 2.28L7.97 21.27l-1.31-2.28 9.38-16.25Zm-5.13 20.79 1.3-2.28h3.83L14.1 17.93l1.31-2.27 1.93 3.34 4.04-6.99-5.34-9.26L17.350.46 24 12.01l-6.65 11.53h-6.44Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiXendit;
