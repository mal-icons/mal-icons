import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-edit-calendar",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfEditCalendar {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 22H5a2 2 0 0 1-2-2l0.01-14c0-1.10.88-2 1.99-2h1V2h2v2h8V2h2v2h1c1.1 0 2 0.9 2 2v6h-2v-2H5v10h7v2zm10.13-5.010.71-0.71a11 0 0 0 0-1.41l-0.71-0.71a11 0 0 0-1.41 0l-0.710.71 2.12 2.12zm-0.710.71-5.3 5.3H14v-2.12l5.3-5.3 2.12 2.12z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfEditCalendar;
