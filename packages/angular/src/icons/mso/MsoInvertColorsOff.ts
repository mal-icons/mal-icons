import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-invert-colors-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoInvertColorsOff {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M757-276 480-553v-243L358-675l-43-43 165-162 226 222q46 45 70 106.5T800-434q0 42-12 85.5T757-276Zm49 220L676-186q-45 34-94.5 50T480-120q-132 0-226-91.5T160-435q0-51 16-100t54-97L57-805l43-43L849-99l-43 43ZM480-180v-203L273-590q-30 37-41.5 77T220-435q0 107 76.5 181T480-180Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoInvertColorsOff;
