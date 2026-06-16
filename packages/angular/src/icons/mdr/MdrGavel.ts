import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-gavel",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrGavel {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 21h10c0.55 0 1 0.45 1 1s-0.45 1-1 1H2c-0.55 0-1-0.45-1-1s0.45-1 1-1zM5.24 8.07l2.83-2.83L20.8 17.97c0.780.780.78 2.05 0 2.83-0.780.78-2.050.78-2.83 0L5.24 8.07zm8.49-5.66 2.83 2.83c0.780.780.78 2.05 0 2.83l-1.42 1.42-5.65-5.66 1.41-1.41c0.78-0.79 2.05-0.79 2.83-0.01zm-9.9 7.07 5.66 5.66-1.41 1.41c-0.780.78-2.050.78-2.83 0l-2.83-2.83c-0.78-0.78-0.78-2.05 0-2.83l1.41-1.41z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrGavel;
