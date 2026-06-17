import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-stakes-fence",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiStakesFence {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M334.7 21.05L300.2 154.7l30.5 12.5L363 155zM220.2 72.41L180.1 179.1l34.3 33.3 33.5-31zM55.57 101.6L47.9 224.4l36.52 23.7 25.38-38.7zm413.63 10.5l-41.8 65.8 19.8 34.5 27.3-7zm-171.4 61l-6.3 145 66.3-1.5 6.4-142.8-33.7 12.8zM177 201.2l-5 119.6 73.8-1.7 3.3-114.3-35.1 32.4zm244.3 2.2l-19.9 112.2 53.8-1.3 17.8-89.9-34.6 8.8zm-305.8 30.1l-25.87 39.4-41.04-26.7 10.08 77.2 71.93-1.6zm362.9 98.3L33.8 342l-3.78 44.2L482 384.1l-1.1-15.9-32.5-10.4s18.7-3.4 31.4-5.6zm-40.7 70.6l-51.70.2-3.2 18.1 51.6-1.6zm-83.70.3l-66.10.3-0.9 20.9 66.2-2.2zm-110.50.5l-75 0.3-1 24.3 75.4-2.5zm-98.90.4l-75.430.3 3.51 27 76.12-2.5zm345.3 31.6L22.07 450.5l0.24 25.9 29 14.6 432.49-1.4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiStakesFence;
