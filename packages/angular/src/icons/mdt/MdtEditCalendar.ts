import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-edit-calendar",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtEditCalendar {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 6h14v2H5z","opacity":".3"}],["path",{"d":"M5 10h14v2h2V6c0-1.1-0.9-2-2-2h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.990.9-1.99 2L3 20a2 2 0 0 0 2 2h7v-2H5V10zm0-4h14v2H5V6zm17.84 10.28-0.710.71-2.12-2.120.71-0.71a11 0 0 1 1.41 0l0.710.71c0.390.390.39 1.02 0 1.41zm-3.54-0.7 2.12 2.12-5.3 5.3H14v-2.12l5.3-5.3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtEditCalendar;
