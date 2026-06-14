import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-code",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiCode {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.17 18c-0.51 0-1.02-0.19-1.41-0.59l-4.41-4.41 4.41-4.41c0.78-0.78 2.05-0.78 2.83 0 0.780.780.78 2.05 0 2.83l-1.58 1.59 1.59 1.59c0.780.780.78 2.05 0 2.83-0.390.39-0.90.59-1.410.59zM15.83 18c-0.51 0-1.02-0.19-1.41-0.59-0.78-0.78-0.78-2.05 0-2.83l1.59-1.59-1.58-1.59c-0.78-0.78-0.78-2.05 0-2.830.78-0.78 2.05-0.78 2.83 0l4.41 4.41-4.41 4.41c-0.390.39-0.90.59-1.410.59z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiCode;
