import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-input",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrInput {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M438-325q-9-9-9-21.5t9-21.5l81-81H110q-12.75 0-21.37-8.68Q80-466.35 80-479.17 80-492 88.63-500.5T110-509h409l-82-82q-8-8.07-8-20.53Q429-624 438.05-633q9.05-9 21.5-9Q472-642 481-633l133 133q5 5 7 10.13 2 5.13 2 11Q623-473 621-468q-2 5-7 10L480-324q-8.25 8-20.62 8T438-325ZM140-160q-24 0-42-18t-18-42v-139q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T140-359v139h680v-520H140v141q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63Q97-569 88.5-577.62T80-599v-141q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrInput;
