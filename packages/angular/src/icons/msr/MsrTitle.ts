import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-title",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrTitle {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M479.88-160Q459-160 444.5-174.58 430-189.17 430-210v-490H250q-20.83 0-35.42-14.62Q200-729.23 200-750.12 200-771 214.58-785.5 229.17-800 250-800h460q20.83 0 35.42 14.62Q760-770.76 760-749.88 760-729 745.42-714.5 730.83-700 710-700H530v490q0 20.83-14.62 35.42Q500.77-160 479.88-160Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrTitle;
