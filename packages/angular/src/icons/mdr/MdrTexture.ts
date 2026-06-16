import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-texture",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrTexture {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.58 3.08 3.15 19.51c0.090.340.270.650.510.90.250.240.560.420.90.51L21 4.49c-0.19-0.69-0.73-1.23-1.42-1.41zM11.95 3l-8.88 8.88v2.83L14.78 3h-2.83zM5.07 3c-1.1 0-2 0.9-2 2v2l4-4h-2zm14 18c0.55 0 1.05-0.22 1.41-0.590.37-0.360.59-0.860.59-1.41v-2l-4 4h2zm-9.71 0h2.83l8.88-8.88V9.29L9.36 21z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrTexture;
