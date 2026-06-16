import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-calendar-add-on",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrCalendarAddOn {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M700-200h-90q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T610-260h90v-90q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T760-350v90h90q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T850-200h-90v90q0 12.75-8.68 21.38Q742.65-80 729.83-80 717-80 708.5-88.62T700-110v-90Zm-520 40q-24 0-42-18t-18-42v-540q0-24 18-42t42-18h65v-28q0-13.6 9.2-22.8 9.2-9.2 22.8-9.2 14.03 0 23.51 9.2Q310-861.6 310-848v28h260v-28q0-13.6 9.2-22.8 9.2-9.2 22.8-9.2 14.03 0 23.51 9.2Q635-861.6 635-848v28h65q24 0 42 18t18 42v302q-15-2-30-2t-30 2v-112H180v350h320q0 15 3 30t8 30H180Zm0-470h520v-130H180v130Zm0 0v-130 130Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrCalendarAddOn;
