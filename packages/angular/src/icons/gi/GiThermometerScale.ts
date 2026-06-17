import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-thermometer-scale",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiThermometerScale {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M132.88 19.59v57.03H369.72v-57.03H132.87zm29.03 75.72v266.4h18.69V95.31h-18.69zm160.1 0v266.4h18.69V95.31H322zm-56.75 17.75v18.69h35.81v-18.69H265.25zm-47.53 42.87v18.69h85v-18.69h-85zm47.53 40.69v18.69h35.81v-18.69H265.25zm0 42.16v18.69h35.81v-18.69H265.25zm-47.53 42.88v18.69h85v-18.69h-85zm47.53 40.69v18.69h35.81v-18.69H265.25zm-132.37 58.09v57H369.72v-57H132.87zm45.66 75.72v34.78l145.530v-34.78h-145.53z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiThermometerScale;
