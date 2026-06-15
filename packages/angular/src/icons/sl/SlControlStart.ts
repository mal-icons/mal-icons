import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-control-start",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlControlStart {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M974.94 65.39c0-23.23-12.59-44.65-32.91-55.93a63.77 63.77 0 0 0-31.09-8.06 63.96 63.96 0 0 0-33.77 9.65L141.44 457.63c-15.95 9.9-26.51 26.21-29.38 44.4V32c0-17.66-14.34-32-32-32s-32 14.34-32 32v960c0 17.66 14.34 32 32 32s32-14.34 32-32V521.94c2.88 18.21 13.44 34.51 29.38 44.38l736.72 446.64a63.88 63.88 0 0 0 33.78 9.66 63.94 63.94 0 0 0 31.09-8.06 63.96 63.96 0 0 0 32.91-55.94zM175.2 511.99L910.94 65.39l1.01 893.22z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlControlStart;
