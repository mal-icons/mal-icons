import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-bold-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcBold24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 4.75c0-0.690.56-1.25 1.25-1.25h5a4.75 4.75 0 0 1 3.89 7.48A5 5 0 0 1 14 20.5H7.25c-0.69 0-1.25-0.56-1.25-1.25ZM8.5 13v5H14a2.5 2.5 0 1 0 0-5Zm0-2.5h3.75A2.25 2.25 0 0 0 12.25 6H8.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcBold24;
