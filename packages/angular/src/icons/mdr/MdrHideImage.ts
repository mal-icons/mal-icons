import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-hide-image",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrHideImage {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 3H5.83L21 18.17V5c0-1.1-0.9-2-2-2zm-15.490.51A11 0 1 0 2.1 4.92l0.90.91V19c0 1.10.9 2 2 2h13.17l0.90.9a11 0 1 0 1.41-1.41L3.51 3.51zM7 17a0.50.5 0 0 1-0.4-0.8l2-2.67c0.2-0.270.6-0.270.8 0L11.25 16l0.82-1.1 2.1 2.1H7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrHideImage;
