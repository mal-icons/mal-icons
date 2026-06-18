import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-edit",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxEdit {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m7 17.01 4.41-0.01 9.63-9.54c0.38-0.380.59-0.880.59-1.41s-0.21-1.04-0.59-1.41l-1.59-1.59c-0.76-0.76-2.08-0.75-2.820L7 12.58v4.43zM18.05 4.46l1.59 1.58-1.6 1.58-1.59-1.58 1.59-1.58zM9 13.42l6.03-5.97 1.59 1.59-6.03 5.97L9 15.01v-1.59z"}],["path",{"d":"M5 21h14c1.1 0 2-0.9 2-2v-8.67l-2 2V19H8.16c-0.03 0-0.050.01-0.080.01-0.03 0-0.07-0.01-0.1-0.01H5V5h6.85l2-2H5c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxEdit;
