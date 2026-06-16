import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-format-color-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrFormatColorFill {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M414-298q-14 0-28.15-6-14.15-6-25.85-17L182-499q-11-11.89-17-26.27-6-14.37-6-30.23t6-30.73q6-14.87 17-25.77l189-189-95-95q-8-8.5-8-21.25t9-22.14Q286-948 298.5-948t21.5 9l326 327q12 10.9 17.5 25.77Q669-571.36 669-555.5q0 15.86-5.5 30.23Q658-510.89 646-499L468-321q-10.73 11-25.37 17T414-298Zm0-460L215-559h398L414-758Zm337.79 477Q722-281 701-302.15 680-323.3 680-353q0-17.35 8-37.17T710-431q8-13 19.5-28t22.5-28q11 13 22.5 28t19.5 28q14 21 22 40.83T824-353q0 29.7-21.21 50.85-21.21 21.15-51 21.15ZM141 1q-25.16 0-43.08-17.89Q80-34.77 80-59.88T97.92-102.5Q115.84-120 141-120h679q24.75 0 42.38 17.68T880-59.82Q880-35 862.38-17T820 1H141Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrFormatColorFill;
