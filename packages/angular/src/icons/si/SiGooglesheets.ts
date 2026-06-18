import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-googlesheets",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiGooglesheets {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.32 12.55H7.91v-1.91h3.41v1.91zM14.73 0v6h6l-6-6zm1.36 10.64h-3.41v1.91h3.41v-1.91zm0 3.27h-3.41v1.91h3.41v-1.91zM20.73 6.5v15.86c0 0.9-0.73 1.64-1.64 1.64H4.91a1.64 1.64 0 0 1-1.64-1.64V1.64C3.270.73 4.01 0 4.91 0h9.32v6.5h6.5zm-3.27 2.77H6.55v7.91h10.91v-7.91zm-6.14 4.64H7.91v1.91h3.41v-1.91z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiGooglesheets;
