import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-update-disabled",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtUpdateDisabled {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.67 5.84 7.22 4.39A8.86 8.86 0 0 1 12 3c2.74 0 5.19 1.23 6.84 3.16L21 4v6h-6l2.41-2.41C16.12 6.02 14.18 5 12 5c-1.2 0-2.340.31-3.330.84zM13 7h-2v1.17l2 2V7zm6.78 15.61-3-3A8.97 8.97 0 0 1 12 21a9 9 0 0 1-9-9c0-1.760.51-3.4 1.39-4.78l-3-3L2.8 2.81l18.38 18.38-1.4 1.42zm-4.46-4.46L5.84 8.67A7.06 7.06 0 0 0 5 12c0 3.86 3.14 7 7 7 1.2 0 2.34-0.31 3.32-0.85zM20.94 13h-2.02c-0.120.83-0.39 1.61-0.77 2.32l1.47 1.47c0.7-1.12 1.17-2.41 1.32-3.79z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtUpdateDisabled;
