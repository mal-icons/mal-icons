import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fa-n",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FaN {
  readonly viewBox = "0 0 384 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.1 33.9c12.7-4.6 26.9-0.7 35.5 9.6L320 359.6 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 13.5-8.4 25.5-21.1 30.1s-26.9 0.7-35.5-9.6L64 152.4 64 448c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 64C0 50.5 8.4 38.5 21.1 33.9z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FaN;
