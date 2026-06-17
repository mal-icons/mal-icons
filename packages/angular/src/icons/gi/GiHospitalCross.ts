import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-hospital-cross",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiHospitalCross {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M174.69 28.06v71.63h-80.75v81.37H22.31v160.09h71.63v80.72h80.75v71.66H334.75v-71.65h81.38v-80.72h71.66V181.06h-71.65V99.69H334.75V28.06H174.69zm18.69 18.69h122.69v153H469.09v122.72H316.06V474.84H193.38V322.47H41V199.75h152.38v-153z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiHospitalCross;
