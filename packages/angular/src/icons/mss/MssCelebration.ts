import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-celebration",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssCelebration {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m80-80 186-520 337 333L80-80Zm101-101 314-112-203-204-111 316Zm376-264-34-34 322-322 97 98-34 34-63-64-288 288ZM398-600l-34-34 81-81-79-79 34-34 113 113-115 115Zm81 77-34-34 200-200-110-110 34-34 144 144-234 234Zm158 159-34-34 132-132 134 134-34 34-100-100-98 98ZM181-181Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssCelebration;
