import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-repeat-one-on",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtRepeatOneOn {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 1H3c-1.1 0-2 0.9-2 2v18c0 1.10.9 2 2 2h18c1.1 0 2-0.9 2-2V3c0-1.1-0.9-2-2-2zm-2 18H7v3l-4-4 4-4v3h10v-4h2v6zm-9-8.5V9h3v6h-1.5v-4.5H10zm7-0.5V7H7v4H5V5h12V2l4 4-4 4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtRepeatOneOn;
