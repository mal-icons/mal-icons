import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-insert-page-break",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdInsertPageBreak {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 20H6v-3H4v3c0 1.10.9 2 2 2h12c1.1 0 2-0.9 2-2v-3h-2v3zM6 4h7v5h5v2h2V8l-6-6H6c-1.1 0-2 0.9-2 2v7h2V4zm3 9h6v2H9zm8 0h6v2h-6zM1 13h6v2H1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdInsertPageBreak;
